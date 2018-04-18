require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  before do
    @user = create :user
    @user_device = create :user_device, user: @user
    create(:auth_identity, :classic_identity, user: @user)
    @email = @user.classicIdentity['email']
    @password = Faker::Internet.password
    @user.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password))
  end

  describe 'user identities mutations' do
    context 'with valid access token on headers' do
      before do
        post :execute, params: { query: sign_in_mutation_classic(@email,
                                                                 @password, @user_device.device_id) }

        @jwt_token = response_body['data']['signInClassic']['jwt']
      end

      it 'should return status 200 and create the corresponding user and Classic '\
        'Identity for it as a GraphQL object and log in the user in that device' do
        post :execute, params: { query: create_classic_identity_mutation('Joselo', 'josesito234@mail.com',
          '1234565678', 'A cool guy too', @user_device.device_id, 'http://www.someavatar.com') }

        response_data = response_body['data']
        create_classic_user = response_data['createClassicUser']['user']

        expect(response.status).to eq 200
        expect(User.find_by(username: 'Joselo').present?).to be_truthy
        expect(create_classic_user['identities'][0]['email']).to eq 'josesito234@mail.com'
        expect(create_classic_user['avatarUrl']).to eq 'http://www.someavatar.com'
        expect(@user.owned_device(@user_device.device_id).logged_in).to be_truthy
      end

      it 'should return status 200 and create the corresponding user subscribed to newsletter' do
        post :execute, params: { query: create_classic_identity_suscribed_mutation('Henry SubScribed', 'henry_susbscribed@mail.com',
          '1234565678', 'Newsletter reader', @user_device.device_id, 'http://www.someavatar.com', true) }

        response_data = response_body['data']
        user_data = response_data['createClassicUser']['user']

        expect(response.status).to eq 200
        expect(User.find_by(username: 'Henry SubScribed').present?).to be_truthy
        expect(user_data['subscribedToNewsLetter']).to be_truthy
      end

      it 'should return status 200 and create the corresponding user with phone number' do
        post :execute, params: { query: create_classic_identity_phone_number_mutation('Henry SubScribed', 'henry_susbscribed@mail.com',
          '1234565678', @user_device.device_id, '555-123-5678') }

        response_data = response_body['data']
        user_data = response_data['createClassicUser']['user']

        user = User.find_by(username: 'Henry SubScribed')
        expect(response.status).to eq 200
      end

      it 'should return status 200 and create the corresponding user with birthdate' do
        post :execute, params: { query: create_classic_identity_birthdate_mutation('Henry SubScribed', 'henry_susbscribed@mail.com',
          '1234565678', @user_device.device_id, '1986-12-23') }

        response_data = response_body['data']
        user_data = response_data['createClassicUser']['user']

        birthdate_string = response_body['data']['createClassicUser']['user']['birthdate']
        expect(response.status).to eq 200
        expect(birthdate_string).to eq '1986-12-23T00:00:00.000Z'
      end

      it 'should return status 200 and create the corresponding user and Facebook '\
        'Identity as a GraphQL object and log in the user in that device' do
        post :execute, params: { query: create_facebook_identity_mutation('Juanete', 'a cool test', 'el_juanete22',
          'AAABBBCCCFACEBOOKTOKEN1234', '27-03-2098', @user_device.device_id) }

        response_data = response_body['data']
        create_facebook_user = response_data['createUser']['user']

        expect(response.status).to eq 200
        expect(User.find_by(username: 'Juanete').present?).to be_truthy
        expect(create_facebook_user['id'].present?).to be_truthy
        expect(create_facebook_user['identities'][0]['facebookUserId']).to eq 'el_juanete22'
        expect(create_facebook_user['identities'][0]['facebookAccessToken']).to eq 'AAABBBCCCFACEBOOKTOKEN1234'
        expect(@user.owned_device(@user_device.device_id).logged_in).to be_truthy
      end

      it 'should fail if creating a duplicated fb user' do
        post :execute, params: { query: create_facebook_identity_mutation(Faker::Name.first_name, 'a cool test', 'repeated_joe_test',
          'AAABBBCCCFACEBOOKTOKEN1234', '27-03-2098', @user_device.device_id) }
        post :execute, params: { query: create_facebook_identity_mutation(Faker::Name.first_name, 'a cool test', 'repeated_joe_test',
          'AAABBBCCCFACEBOOKTOKEN1234', '27-03-2098', @user_device.device_id) }

        expect(response.status).to eq 200
        expect(response_body['errors'][0]['message']).to eq 'auth_identities.payload User already registered'
      end

      it 'should return status 200 and create the corresponding user and Phone '\
        'Identity as a GraphQL object and log in the user in that device' do
        post :execute, params: { query: create_phone_identity_mutation('Juanete',
          'mail323@mail.com', '123123', 'a cool test', '555-222-4435', @user_device.device_id) }

        response_data = response_body['data']
        create_phone_user = response_data['createUser']['user']

        expect(response.status).to eq 200
        expect(User.find_by(username: 'Juanete').present?).to be_truthy
        expect(create_phone_user['id'].present?).to be_truthy
        p create_phone_user['identities']
        expect(create_phone_user['identities'].last['phoneNumber']).to eq '555-222-4435'
        expect(@user.owned_device(@user_device.device_id).logged_in).to be_truthy
      end
    end
  end

  describe 'oauth identities' do
    context 'with different oauth providers' do
      it 'should create an identity for google' do
        post :execute, params: { query: create_oauth_identity_mutation('ABC-DEF-GHI', 'James Googlr Jr',
          'A google dude', 'GoogleIdentity', 'jamesgooglr_google_user', 'G00GL3F4k3T0K3N') }

        user_id = response_body['data']['createOauthUser']['user']['id']
        user = User.find(user_id)
        identity = user.auth_identities.google.first

        expect(identity.class.name).to eq 'AuthIdentities::GoogleIdentity'
        expect(identity.payload_value_for('googleUserId')).to eq 'jamesgooglr_google_user'
        expect(identity.payload_value_for('googleAccessToken')).to eq 'G00GL3F4k3T0K3N'
      end

      it 'should create an identity for twitter' do
        post :execute, params: { query: create_oauth_identity_mutation('JKL-DEF-MNO', 'Edison Twitterio',
          'A twitter dude', 'TwitterIdentity', 'twiterioedison', 'TW1T3rT0k3N') }

        user_id = response_body['data']['createOauthUser']['user']['id']
        user = User.find(user_id)
        identity = user.auth_identities.twitter.first

        expect(identity.class.name).to eq 'AuthIdentities::TwitterIdentity'
        expect(identity.payload_value_for('twitterUserId')).to eq 'twiterioedison'
        expect(identity.payload_value_for('twitterAccessToken')).to eq 'TW1T3rT0k3N'
      end

      it 'should create an identity for facebook' do
        post :execute, params: { query: create_oauth_identity_mutation('OPQ-RST-MNO', 'Jules Facebook',
          'A facebook dude', 'FacebookIdentity', 'julesfacebook', 'FBT0K3n') }

        user_id = response_body['data']['createOauthUser']['user']['id']
        user = User.find(user_id)
        identity = user.auth_identities.facebook.first

        expect(identity.class.name).to eq 'AuthIdentities::FacebookIdentity'
        expect(identity.payload_value_for('facebookUserId')).to eq 'julesfacebook'
        expect(identity.payload_value_for('facebookAccessToken')).to eq 'FBT0K3n'
      end

      it 'should create an identity for github' do
        post :execute, params: { query: create_oauth_identity_mutation('JKL-DDD-MNO', 'Git Hubber',
          'A github dude', 'GithubIdentity', 'githuberedison', 'G1THu()') }

        user_id = response_body['data']['createOauthUser']['user']['id']
        user = User.find(user_id)
        identity = user.auth_identities.github.first

        expect(identity.class.name).to eq 'AuthIdentities::GithubIdentity'
        expect(identity.payload_value_for('githubUserId')).to eq 'githuberedison'
        expect(identity.payload_value_for('githubAccessToken')).to eq 'G1THu()'
      end
    end
  end
end
