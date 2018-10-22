require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  before do
    @user = create :user
    @auth_identity = create(:auth_identity, :classic_identity, user: @user)
    @user_device = create :user_device, user: @user
    @email = @user.classicIdentity['email']
    @password = Faker::Internet.password
    @user.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password))
    FactoryBot.create(:app_setting, name: 'PinCodeLength', value: 6, active: true)
    FactoryBot.create(:app_setting, name: 'PinCodeNumeric', value: true, active: true)
  end

  let (:enable_emails) { AppSetting.create(name: 'EmailConfirmationEnabled', value: 'true', active: true) }

  describe 'sign up' do
    context 'with valid params' do
      before do
        approve_email(classic_user_params[:email])
        approve_email(classic_and_fb_user_params[:email])
      end

      let(:classic_user_params) do
        attributes_for(:user).merge(user_name: Faker::Internet.user_name,
                                    email: Faker::Internet.email,
                                    device_id: 'deviceId')
      end

      let(:classic_and_fb_user_params) do
        attributes_for(:user).merge(facebook: {
                                      oauthUserId: Faker::Internet.user_name,
                                      oauthAccessToken: 'AccessToken',
                                      expirationDate: ''
                                    }, user_name: Faker::Internet.user_name,
                                    email: Faker::Internet.email,
                                    device_id: 'deviceId')
      end

      let(:phone_user_params) do
        {
          phoneNumber: 'phoneNumber',
          user_name: Faker::Internet.user_name,
          device_id: 'deviceId'
        }
      end

      it 'should create classic user' do
        post :execute, params: { query: create_user_mutation(classic_user_params) }
        result = response_body['data']['createUser']
        expect(result['jwt']).not_to be_nil
        expect(result['user']['id']).to eq(User.last.id.to_s)
        expect(User.last.auth_identities.count).to eq(1)
        expect(User.last.auth_identities.pluck(:type)).to match_array(
          %w[AuthIdentities::ClassicIdentity]
        )
      end

      it 'should send confirmation email' do
        enable_emails
        expect {
          post :execute, params: { query: create_user_mutation(classic_user_params) }
        }.to change { UserMailer.deliveries.length }.by(1)
      end

      it 'should create user with male sex' do
        params = classic_user_params.merge(sex: 'Male')
        post :execute, params: { query: create_user_mutation(params) }
        result = response_body['data']['createUser']

        expect(result['jwt']).not_to be_nil
        expect(result['user']['id']).to eq(User.last.id.to_s)
        expect(result['user']['sex']).to eq('Male')
      end

      it 'should create user with first_name and last_name' do
        params = classic_user_params.merge(first_name: 'Kvothe', last_name: 'One of Seven')
        post :execute, params: { query: create_user_mutation(params) }
        result = response_body['data']['createUser']

        expect(result.dig('user', 'id')).to eq(User.last.id.to_s)
        expect(result.dig('user', 'firstName')).to eq 'Kvothe'
        expect(result.dig('user', 'lastName')).to eq 'One of Seven'
      end

      it 'should create classic and fb user' do
        post :execute, params: { query: create_user_mutation(classic_and_fb_user_params) }
        result = response_body['data']['createUser']
        expect(result['jwt']).not_to be_nil
        expect(result['user']['id']).to eq(User.last.id.to_s)
        expect(User.last.auth_identities.pluck(:type)).to match_array(
          %w[AuthIdentities::ClassicIdentity AuthIdentities::FacebookIdentity]
        )
        expect(PinCode.count).to eq 1
        expect(PinCode.last.user).to eq(User.last)
        expect(PinCode.last.action).to eq 'activate_email'
        # expect(Notification.count).to eq 1
        # expect(Notification.last.message).to eq(I18n.t('sms.pin_message', pin: PinCode.last.value))
      end

      xit 'should create classic and fb user and approve email' do
        post :execute, params: { query: create_user_mutation(classic_and_fb_user_params) }
        result = response_body['data']['createUser']
        expect(result['jwt']).not_to be_nil
        expect(result['user']['id']).to eq(User.last.id.to_s)
        expect(User.last.auth_identities.pluck(:type)).to match_array(
          %w[AuthIdentities::ClassicIdentity AuthIdentities::FacebookIdentity]
        )
        expect(PinCode.count).to eq 1
        expect(PinCode.last.user).to eq(User.last)
        expect(PinCode.last.action).to eq 'activate_email'
        expect(Notification.count).to eq 1
        expect(Notification.last.message).to eq(I18n.t('sms.pin_message', pin: PinCode.last.value))

        jwt = result['jwt']
        request.headers['authorization'] = "Bearer #{jwt}"
        expect(AuthIdentities::ClassicIdentity.last.payload['email_confirmed']).to eq nil
        post :execute, params: { query: activate_pin(PinCode.last.value) }
        expect(response_body['data']['activatePin']['result']).to eq 'activated'
        expect(AuthIdentities::ClassicIdentity.last.payload['email_confirmed']).to eq true
      end

      it 'should create phone user' do
        post :execute, params: { query: create_user_mutation(phone_user_params) }
        result = response_body['data']['createUser']
        expect(result['jwt']).not_to be_nil
        expect(result['user']['id']).to eq(User.last.id.to_s)
        expect(User.last.auth_identities.count).to eq(1)
        expect(User.last.auth_identities.pluck(:type)).to match_array(
          %w[AuthIdentities::PhoneIdentity]
        )
        expect(PinCode.count).to eq 1
        expect(PinCode.last.user).to eq(User.last)
        expect(PinCode.last.action).to eq 'activate_phone'
        # expect(Notification.count).to eq 1
        # expect(Notification.last.message).to eq(I18n.t('sms.pin_message', pin: PinCode.last.value))
      end

      it 'should not create one more user' do
        user_params = classic_user_params
        post :execute, params: { query: create_user_mutation(user_params) }
        user_params[:user_name] = Faker::Internet.user_name
        post :execute, params: { query: create_user_mutation(user_params) }
        expect(response_body['errors']).not_to be_nil
      end

      it 'should not create user with unapproved email' do
        user_params = classic_user_params
        user_params[:email] = 'unapproved@email.com'
        post :execute, params: { query: create_user_mutation(user_params) }

        expect(response.code.to_i).to eq 200
        expect(response_body['errors']).not_to be_nil
        expect(response_body.dig('errors', 0, 'message')).to include('is not approved')
        expect(response_body.dig('errors', 0, 'status')).to eq 'UNAUTHORIZED'
        expect(response_body.dig('errors', 0, 'attr')).to eq 'email'
      end
    end
  end

  describe 'sign in' do
    context 'with valid user' do
      it 'should return user info and create a userdevice record' do
        post :execute, params: { query: sign_in_mutation_classic(@email,
          @password, @user_device.device_id) }

        response_data = response_body['data']

        user_id = response_data['signInClassic']['user']['id']
        jwt = response_data['signInClassic']['jwt']

        expect(response.status).to eq 200
        expect(user_id).to eq @user.id.to_s
        expect(@user.owned_device(@user_device.device_id).logged_in).to be_truthy
        expect(jwt).not_to be_nil
      end

      subject do
        post :execute, params: { query: sign_in_mutation_classic(@email,
                                                                         @password, @user_device.device_id) }
      end

      it 'should return a user when provided with data from variables' do
        variables = { email: @user.classicIdentity['email'].to_s, password: @password, deviceId: @user_device.device_id }

        options = { query: sign_in_mutation_with_vars,
                    variables: variables,
                    operationName: 'SignInUserMutation' }

        post :execute, params: options

        response_data = response_body['data']
        id = response_data['signInClassic']['user']['id']

        expect(response.status).to eq 200
        expect(id).to eq @user.id.to_s
      end

      it 'should return an error if no deviceId present' do
        post :execute, params: { query: sign_in_mutation_no_device_id(
          @email, @password
        ) }
        expect(response_body['errors'][0]['message']).to eq "Argument 'input' on Field 'signInClassic' has an invalid value. Expected type 'signInClassicInput!'."
      end
    end

    context 'with unexistant fb user' do
      it 'should return message user not found' do
        fb_user_name = Faker::Name.first_name
        post :execute, params: { query: sign_in_mutation_facebook(
          Faker::Internet.password, fb_user_name, Faker::Internet.password
        ) }
        expect(response.status).to eq 200
        expect(response_body['errors'].first['message']).to eq 'User not found'
      end
    end
  end

  describe 'sign out' do
    context 'with signed in user' do
      it 'should return user info and mark device as logged out' do
        post :execute, params: { query: sign_in_mutation_classic(@user.classicIdentity['email'],
                                                                 @password, @user_device.device_id) }
        response_data = response_body['data']
        @jwt = response_data['signInClassic']['jwt']
        request.headers['authorization'] = "Bearer #{@jwt}"
        post :execute, params: { query: sign_out_mutation }
        response_data = response_body['data']
        user_id = response_data['signOut']['user']['id']

        expect(response.status).to eq 200
        expect(user_id).to eq @user.id.to_s
        expect(@user.user_devices.find_by(device_id: @user_device.device_id).logged_in).to be_falsey
      end
    end
  end

  describe 'border cases' do
    context 'two different users in the same mobile device (signIn, signout, create)' do
      it 'should log one user first, log him out and then do the same for the second' do
        # DB Wise UserDevices will be different items, but they share the device_id value
        @user_1 = create :user
        @user_2 = create :user
        create(:auth_identity, :classic_identity, user: @user_1)
        create(:auth_identity, :classic_identity, user: @user_2)
        @device_1 = create :user_device, user: @user_1, device_id: 'AAA-BBB-33442-2344-6666'
        @device_2 = create :user_device, user: @user_2, device_id: 'AAA-BBB-33442-2344-6666'
        @password_1 = Faker::Internet.password
        @user_1.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password_1))

        @password_2 = Faker::Internet.password
        @user_2.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password_2))

        post :execute, params: { query: sign_in_mutation_classic(@user_1.classicIdentity['email'],
          @password_1, 'AAA-BBB-33442-2344-6666') }

        response_data = response_body['data']
        jwt = response_data['signInClassic']['jwt']

        expect(@user_1.user_devices.find_by(device_id: 'AAA-BBB-33442-2344-6666').logged_in).to be_truthy

        request.headers['authorization'] = "Bearer #{jwt}"
        post :execute, params: { query: sign_out_mutation }
        expect(@user_1.user_devices.find_by(device_id: 'AAA-BBB-33442-2344-6666').logged_in).to be_falsey

        post :execute, params: { query: sign_in_mutation_classic(@user_2.classicIdentity['email'],
          @password_2, 'AAA-BBB-33442-2344-6666') }

        expect(@user_2.user_devices.find_by(device_id: 'AAA-BBB-33442-2344-6666').logged_in).to be_truthy
      end
    end

    context 'same user using two different devices (signIn, signout, create) signOut from everywhere' do
      it 'should log the user in both devices independently, and signout independently as well' do
        @user_1 = create :user
        @device_1 = create :user_device, user: @user_1
        @device_2 = create :user_device, user: @user_1
        create(:auth_identity, :classic_identity, user: @user_1)
        @password_1 = Faker::Internet.password
        @user_1.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password_1))

        post :execute, params: { query: sign_in_mutation_classic(@user_1.classicIdentity['email'],
          @password_1, @device_1.device_id) }
        jwt = response_body['data']['signInClassic']['jwt']

        post :execute, params: { query: sign_in_mutation_classic(@user_1.classicIdentity['email'],
          @password_1, @device_2.device_id) }

        expect(@user_1.user_devices.find_by(device_id: @device_1.device_id).logged_in).to be_truthy
        expect(@user_1.user_devices.find_by(device_id: @device_2.device_id).logged_in).to be_truthy

        request.headers['authorization'] = "Bearer #{jwt}"
        post :execute, params: { query: sign_out_mutation }

        expect(@user_1.user_devices.find_by(device_id: @device_1.device_id).logged_in).to be_falsey
        expect(@user_1.user_devices.find_by(device_id: @device_2.device_id).logged_in).to be_truthy
      end
    end
  end

  describe 'user queries' do
    context 'with valid access token on headers' do
      before do
        create_list :user, 23
        post :execute, params: { query: sign_in_mutation_classic(@email,@password, @user_device.device_id) }
        @jwt_token = response_body['data']['signInClassic']['jwt']
      end

      it 'should return status 200 and query data' do
        request.headers['authorization'] = "Bearer #{@jwt_token}"
        post :execute, params: { query: all_users_query }

        response_data = response_body['data']
        all_users_info = response_data['allUsers']['edges'].map { |a| a['node']['id'] }
        expect(response.status).to eq 200
        expect(all_users_info.count).to eq User.count
        all_users_info.each do |current_id|
          expect(User.find_by(id: current_id).present?).to be_truthy
        end
      end
    end

    context 'with invalid access_token on headers' do
      it 'should raise Authentication error' do
        request.headers['authorization'] = 'ABC.123.XYZ'
        post :execute, params: { query: all_users_query }
        expect(response.status).to eq 422
        expect(response_body['errors']).to eq 'Invalid JWT'
      end
    end

    context 'without authentication header' do
      it 'should raise Authentication error' do
        post :execute, params: { query: all_users_query }
        expect(response.status).to eq 422
        expect(response_body['errors']).to eq 'Invalid JWT'
      end

      it 'should return true if email is already registered' do
        post :execute, params: { query: existing_emails_query(@user.classicIdentity['email']) }

        expect(response.status).to eq 200
        expect(response_body['data']['userEmailExist']).to be_truthy
      end

      it 'should return false if email is not registered' do
        email = 'i_am_really_sure_this_email_is_not_registered@because_it_is_too_mainstream.com.uy'
        post :execute, params: { query: existing_emails_query(email) }

        expect(response.status).to eq 200
        expect(response_body['data']['userEmailExist']).to be_falsey
      end
    end
  end

  describe 'update users mutations' do
    context 'with valid access token on headers' do
      before do
        post :execute, params: { query: sign_in_mutation_classic(@email, @password, @user_device.device_id) }
        @jwt_token = response_body['data']['signInClassic']['jwt']
      end

      let (:user_email) { approve_email('updatedjessy2017@mail.com') }

      # BUG: EMAIL WAS UPDATED IN CLASSIIDENTITY BUT NOT IN CONTACTMETHODS
      # fails randomly on travis
      xit 'should update user attributes and identity ones' do
        post :execute, params: { query: create_phone_identity_mutation('PhoneMan',
          'phone_user_man@mail.com', '123123', 'updating test', '555-222-4435', @user_device.device_id) }

        phone_user = User.find_by_email('phone_user_man@mail.com')

        request.headers['authorization'] = "Bearer #{@jwt_token}"
        post :execute, params: { query: update_user_mutation_phone_identity_example(phone_user.id, 'JSON phone Cambiado',
          'locambieporupdate@mail.com', '555-1234') }

        phone_user = User.find_by_email('locambieporupdate@mail.com')
        response_data = response_body['data']
        updated_user_info = response_data['updateUser']['user']
        phone_identity = phone_user.auth_identities.phone

        expect(response.status).to eq 200
        expect(phone_user.username).to eq 'JSON phone Cambiado'
        expect(phone_user.email).to eq 'locambieporupdate@mail.com'
        expect(updated_user_info['identities'][0]['phoneNumber']).to eq '555-1234'
        type = 'AuthIdentities::PhoneIdentity'
        expect(phone_user.auth_identities.where(type: type).first.payload['phoneNumber']).to eq '555-1234'
      end

      it 'should update user location' do
        location = build(:location)
        geo = location.nil? ? '' : ", geoMeta: {
          latitude: #{location.lonlat.y},
          longitude: #{location.lonlat.x},
          country: \"#{location.country}\",
          countryCode: \"#{location.countryCode}\",
          city: \"#{location.city}\",
          zip: \"#{location.zip}\",
          street: \"#{location.street}\",
          streetNumber: \"#{location.streetNumber}\",
          timeZone: \"#{location.timeZone}\"}"
        q = create_phone_identity_mutation('UpdatedJessy', user_email, '555-123 1234', 'updating test', '555-222-4435', @user_device.device_id, geo)
        post :execute, params: { query: q }

        @jwt_token = response_body['data']['createUser']['jwt']
        response_data = response_body['data']
        phone_user = AuthIdentity.where("payload->>'email' = ? ", 'updatedjessy2017@mail.com').take.user

        request.headers['authorization'] = "Bearer #{@jwt_token}"
        location = build(:location)

        q = update_user_mutation_phone_identity_example(phone_user.id, 'JSON phone Cambiado', 'locambieporupdate@mail.com', '555-1234', location)
        post :execute, params: { query: q }

        phone_user.reload
        response_data = response_body['data']
        updated_user_info = response_data['updateUser']['user']

        expect(response.status).to eq 200
        expect(updated_user_info['geoMeta']['latitude']).to eq(location.lonlat.y)
        expect(updated_user_info['geoMeta']['longitude']).to eq(location.lonlat.x)
      end

      it 'should update user avatar and birthdate' do
        email = approve_email('updatedjessy2017@mail.com')
        post :execute, params: { query: create_phone_identity_mutation('UpdatedJessy',
          user_email, '555-123 1234', 'updating test', '555-222-4435', @user_device.device_id) }

        @jwt_token = response_body['data']['createUser']['jwt']
        phone_user = AuthIdentity.where("payload->>'email' = ? ", 'updatedjessy2017@mail.com').take.user

        request.headers['authorization'] = "Bearer #{@jwt_token}"
        birthday = Faker::Date.birthday
        post :execute, params: { query: update_user_avatar_and_birthdate_mutation(phone_user.id, 'http://avatarimage.com', birthday) }

        phone_user.reload
        response_data = response_body['data']
        updated_user_info = response_data['updateUser']['user']

        expect(response.status).to eq 200
        expect(phone_user.avatar_url).to eq 'http://avatarimage.com'
        expect(phone_user.birthdate).to eq(birthday)
      end

      it 'should update user sex' do
        post :execute, params: { query: create_phone_identity_mutation('UpdatedJessy',
          user_email, '555-123 1234', 'updating test', '555-222-4435', @user_device.device_id) }

        @jwt_token = response_body['data']['createUser']['jwt']
        phone_user = AuthIdentity.where("payload->>'email' = ? ", 'updatedjessy2017@mail.com').take.user

        request.headers['authorization'] = "Bearer #{@jwt_token}"
        post :execute, params: { query: update_user_sex(phone_user.id, 'Male') }

        phone_user.reload
        response_data = response_body['data']
        updated_user_info = response_data['updateUser']['user']

        expect(response.status).to eq 200
        expect(phone_user.sex).to eq 'Male'
        expect(updated_user_info['sex']).to eq 'Male'
      end
    end
  end

  describe 'username uniqueness and suggestions' do
    before do
      @user = create :user, username: 'jimmyhendrix'
      create(:auth_identity, :classic_identity, user: @user)
    end

    context 'username is not available' do
      it 'should return availabilty and show suggestions' do
        post :execute, params: { query: username_query(@user.username) }

        response_data = response_body['data']['userNameExistenceAndSuggestions']

        expect(response.status).to eq 200
        expect(response_data['available']).to be_falsey
        expect(response_data['suggestions'].any?).to be_truthy
        expect(response_data['suggestions'].include?(@user.username)).to be_falsey
      end
    end

    context 'username is available' do
      it 'should return availabilty and empty array of suggestions' do
        post :execute, params: { query: username_query("bobdylan#{User.count}") }

        response_data = response_body['data']['userNameExistenceAndSuggestions']

        expect(response.status).to eq 200
        expect(response_data['available']).to be_truthy
        expect(response_data['suggestions'].empty?).to be_truthy
      end
    end
  end

  describe 'installations' do
    before do
      @user_no_installations = create :user
      @user = create(:user)
      create(:auth_identity, :classic_identity, user: @user)
      @password = Faker::Internet.password
      @user.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password))
      user_device = create :user_device, user: @user, logged_in: true
      post :execute, params: { query: sign_in_mutation_classic(@user.classicIdentity['email'],
                                                               @password, user_device.device_id) }
      @jwt_token = response_body['data']['signInClassic']['jwt']
    end

    before :each do
      request.headers.merge!('authorization' => "Bearer #{@jwt_token}")
    end

    it 'should create a new installation if none' do
      query = update_user_installation_mutation(@user_no_installations.id, Faker::App.name, 'IOS', Faker::App.version)
      post :execute, params: { query: query }

      expect(response.status).to eq 200
      expect(response_body['errors']).not_to be_present
      expect(@user_no_installations.installations.count).to eq 1
    end

    it 'should update version from the existing installation considering token and token type' do
      token = Faker::App.name
      query = update_user_installation_mutation(@user.id, token, 'IOS', '1.0.0')
      post :execute, params: { query: query }

      response_data = response_body['data']
      installations = response_data['updateUserInstallation']['user']['installations']['edges']
      expect(response.status).to eq 200
      expect(installations.count).to eq 1
      expect(installations.first['node']['appVersion']).to eq '1.0.0'

      query = update_user_installation_mutation(@user.id, token, 'IOS', '1.0.1')
      post :execute, params: { query: query }

      response_data = response_body['data']
      installations = response_data['updateUserInstallation']['user']['installations']['edges']
      expect(response.status).to eq 200
      expect(installations.count).to eq 1
      expect(installations.first['node']['appVersion']).to eq '1.0.1'
    end
  end

  describe 'failed calls from client' do
    it 'should set avatar_url' do
      post :execute, params: { query: create_user_with_avatar_url }
      user = response_body['data']['createUser']['user']
      expect(user['avatarUrl']).to eq('http://res.cloudinary.com/mosaic-project/image/upload/v1516294386/i7yaq9gvnd9idwppzzxs.jpg')
    end

    it 'should update user' do
      post :execute, params: { query: create_user_with_avatar_url }
      jwt = response_body['data']['createUser']['jwt']
      user_id = response_body['data']['createUser']['user']['id']
      request.headers['authorization'] = "Bearer #{jwt}"
      post :execute, params: { query: update_user_from_client(id: user_id) }
      user = response_body['data']['updateUser']['user']
      expect(user['displayName']).to eq('jjjjjjj')
      expect(user['avatarUrl']).to eq('http://res.cloudinary.com/mosaic-project/image/upload/v1516294551/uss87gnpwhcasdo6paqj.jpg')
    end

    it 'should allow sign out and sign in' do
      post :execute, params: { query: create_user_with_avatar_url }
      jwt = response_body['data']['createUser']['jwt']
      user_id = response_body['data']['createUser']['user']['id']
      request.headers['authorization'] = "Bearer #{jwt}"
      post :execute, params: { query: sign_out_mutation }
      response_data = response_body['data']
      sign_out_user_id = response_data['signOut']['user']['id']
      expect(user_id).to eq(sign_out_user_id)
      post :execute, params: { query: sign_in_mutation_classic('p@m.co', '12345', '7894243D-453C-4B7A-9C4D-E1165B9F8DEA') }
      user = response_body['data']['signInClassic']['user']
      expect(user['avatarUrl']).to eq('http://res.cloudinary.com/mosaic-project/image/upload/v1516294386/i7yaq9gvnd9idwppzzxs.jpg')
    end

    it 'should allow create user, update, sign out and sign in' do
      post :execute, params: { query: create_user_with_avatar_url }
      jwt = response_body['data']['createUser']['jwt']
      user_id = response_body['data']['createUser']['user']['id']
      request.headers['authorization'] = "Bearer #{jwt}"
      post :execute, params: { query: update_user_from_client(id: user_id) }
      post :execute, params: { query: sign_out_mutation }
      post :execute, params: { query: sign_in_mutation_classic('m2@co.com', '12345', '7894243D-453C-4B7A-9C4D-E1165B9F8DEA') }
      user = response_body['data']['signInClassic']['user']
      expect(user['avatarUrl']).to eq('http://res.cloudinary.com/mosaic-project/image/upload/v1516294551/uss87gnpwhcasdo6paqj.jpg')
    end
  end

  # describe 'sms password reset' do
  #   before do
  #     @user = create :user
  #     create(:auth_identity, :classic_identity, user: @user)
  #     email = @user.classicIdentity['email']
  #     password = Faker::Internet.password
  #     @user.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(password))
  #     user_device = create :user_device, user: @user
  #     @user_with_phone = create :user
  #     phone_identity = create :auth_identity, :phone_identity, user: @user_with_phone
  #     post :execute, params: { query: sign_in_mutation_classic(email,
  #                                                              password, user_device.device_id) }
  #     jwt_token = response_body['data']['signInClassic']['jwt']
  #     request.headers.merge!('authorization' => "Bearer #{jwt_token}")
  #   end
  #
  #   context 'using user id' do
  #     it 'should return same message as sms' do
  #       post :execute, params: { query: sms_password_reset_mutation(@user_with_phone.id, 'PHONE') }
  #       sms_body = response_body['data']['userResetPassword']['messageBody']
  #
  #       expect(sms_body).to eq PinCode.last.value
  #       # msg = I18n.t('sms.pin_message', pin: sms_body)
  #       # expect(msg).to eq Notification.last.message
  #     end
  #
  #     it 'should return same message as email' do
  #       post :execute, params: { query: sms_password_reset_mutation(@user.id, 'EMAIL') }
  #       sms_body = response_body['data']['userResetPassword']['messageBody']
  #
  #       expect(sms_body).to eq PinCode.last.value
  #       # msg = I18n.t('sms.pin_message', pin: sms_body)
  #       # expect(msg).to eq Notification.last.message
  #     end
  #
  #     it 'should activate pin' do
  #       post :execute, params: { query: sms_password_reset_mutation(@user.id, 'EMAIL') }
  #       sms_body = response_body['data']['userResetPassword']['messageBody']
  #
  #       expect(sms_body).to eq PinCode.last.value
  #       # msg = I18n.t('sms.pin_message', pin: sms_body)
  #       # expect(msg).to eq Notification.last.message
  #       new_password = Faker::Internet.password
  #       post :execute, params: { query: activate_pin(sms_body, new_password) }
  #       expect(response_body['data']['activatePin']['result']).to eq 'reset'
  #       post :execute, params: { query: sign_out_mutation }
  #       email = AuthIdentities::ClassicIdentity.last.payload_value_for('email')
  #
  #       post :execute, params: { query: sign_in_mutation_classic(email,
  #                                                                new_password, @user.user_devices.last.device_id) }
  #       expect(response_body['data']['signInClassic']['user']['id']).to eq @user.id.to_s
  #     end
  #
  #     it 'should return error message if phone identity not found' do
  #       post :execute, params: { query: sms_password_reset_mutation(@user.id) }
  #       expect(response_body_errors[0]['message']).to eq 'Identity not found'
  #     end
  #
  #     it 'should return error message if user not found' do
  #       post :execute, params: { query: sms_password_reset_mutation(User.last.id + 1) }
  #       expect(response_body_errors[0]['message']).to eq 'User not found'
  #     end
  #   end
  #
  #   context 'using phone number' do
  #     it 'should return same message as sms' do
  #       post :execute, params: { query: sms_password_reset_mutation_by_phone(@user_with_phone.phoneIdentity['phoneNumber']) }
  #       sms_body = response_body['data']['userResetPassword']['messageBody']
  #
  #       expect(sms_body).to eq PinCode.last.value
  #       # msg = I18n.t('sms.pin_message', pin: sms_body)
  #       # expect(msg).to eq Notification.last.message
  #     end
  #
  #     it 'should return error message if phone identity not found' do
  #       post :execute, params: { query: sms_password_reset_mutation_by_phone('thisPhoneNumberWontExist2') }
  #       expect(response_body_errors[0]['message']).to eq 'User not found'
  #     end
  #   end
  # end
end
