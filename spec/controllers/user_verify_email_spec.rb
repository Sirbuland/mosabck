require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  before do
    FactoryBot.create(:app_setting, name: 'PinCodeLength', value: 4, active: true)
    FactoryBot.create(:app_setting, name: 'PinCodeNumeric', value: true, active: true)
  end

  describe 'verify email' do
    context 'valid data' do
      let(:classic_user_params) do
        attributes_for(:user).merge(user_name: 'Emilio Validator',
                                    email: approve_email('i_will_validate@mail.com'),
                                    password: '1234567890',
                                    device_id: 'deviceId')
      end

      before do
        post :execute, params: { query: create_user_mutation(classic_user_params) }
        @user_id = User.find_by_username('Emilio Validator')
        @pin_code = PinCode.where(user_id: @user_id,
          action: 'activate_email', status: 'active').take
        post :execute, params: { query: sign_in_mutation_classic('i_will_validate@mail.com',
                                                                 '1234567890',
                                                                 'deviceId') }
        @jwt_token = response_body['data']['signInClassic']['jwt']
        request.headers['authorization'] = "Bearer #{@jwt_token}"
      end

      it 'should return an error if the pincode is expired' do
        Timecop.freeze(Date.today + 30) do
          post :execute, params: { query: verify_email(@pin_code.value, 'i_will_validate@mail.com') }
          expect(response_body_errors[0]['message']).to eq 'Pincode not found'
        end
      end

      it 'should validate email in the auth identity, and the main contact method' do
        post :execute, params: { query: verify_email(@pin_code.value, 'i_will_validate@mail.com') }

        user = User.find_by_id(@user_id)
        main_contact_method = user.contact_methods.main.first

        expect(user.classicIdentity['email_confirmed']).to be_truthy
        expect(main_contact_method.verified?).to be_truthy
        expect(main_contact_method.confirmed?).to be_truthy
      end

    end
  end
end
