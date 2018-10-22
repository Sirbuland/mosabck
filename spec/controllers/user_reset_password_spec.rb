require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'userResetPassword mutation' do
    let!(:user) { create :user, :with_classic_identity }
    let(:identity) { user.auth_identities.classic.first }

    context 'using email' do
      let(:email) { identity.payload['email'] }
      let(:call_mutation) { post :execute, params: { query: user_reset_password_email_mutation(email) } }

      it 'should return success' do
        # TODO: there is a differnce between the user email and the AuthIdentity email.
        # user.email is taking the value from the contact method, for this test we need the email
        # used as the AuthIdentity email, not the contact one; because is the email used for account creation.
        call_mutation
        message_body = response_body['data']['userResetPassword']['messageBody']
        expect(message_body).to eq 'Success'
      end

      it 'should create the PinCode' do
        call_mutation
        expect(PinCode.last.auth_identity).to eq identity
      end

      it 'should send email with pin code' do
        expect {
          call_mutation
        }.to change { UserMailer.deliveries.count }.by(1)
      end

      it 'should send email with pin code' do
        call_mutation
        mail = UserMailer.deliveries.last
        expect(mail).to be_present
        expect(mail.to).to include(email)
        expect(mail.body.raw_source).to include(PinCode.last.value)
      end

      # it 'should activate pin' do
      #   email = @user.auth_identities.classic.first.payload['email']
      #   post :execute, params: { query: sms_password_reset_mutation_by_email(email, 'EMAIL') }
      #   sms_body = response_body['data']['userResetPassword']['messageBody']
      #
      #   expect(sms_body).to eq PinCode.last.value
      #   # msg = I18n.t('sms.pin_message', pin: sms_body)
      #   # expect(msg).to eq Notification.last.message
      #   new_password = Faker::Internet.password
      #   post :execute, params: { query: activate_pin(sms_body, new_password) }
      #   expect(response_body['data']['activatePin']['result']).to eq 'reset'
      #   post :execute, params: { query: sign_out_mutation }
      #   email = AuthIdentities::ClassicIdentity.last.payload_value_for('email')
      #
      #   post :execute, params: { query: sign_in_mutation_classic(email,
      #                                                            new_password, @user.user_devices.last.device_id) }
      #   expect(response_body['data']['signInClassic']['user']['id']).to eq @user.id.to_s
      # end
      #
      # it 'should return error when using contact email (user.email), because it differs from the authidentity one' do
      #   post :execute, params: { query: sms_password_reset_mutation_by_email(@user.email) }
      #   expect(response_body_errors[0]['message']).to eq 'User not found'
      # end
    end
  end
end
