require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'updateUserPassword mutation' do
    before do
      user_device = create :user_device, user: user, logged_in: true
      jwt = valid_jwt_token user.id, user_device.device_id
      request.headers['authorization'] = "Bearer #{jwt}"
    end

    let(:user) { create :user, :with_classic_identity }
    let(:pin_code) do
      PinCode.create(
        user: user,
        action: "reset_password_test",
        auth_identity: user.auth_identities.classic.first,
        value: PinCode.unused_pin_code,
        expiration_date: Time.zone.now + 1.day
      )
    end

    it 'should not update password with invalid pin' do
      new_password = 'new-strong-password'
      post :execute, params: { query: update_password_mutation(user.email, 'ivalid-pin', new_password) }

      expect(response_body['errors']).to be_present
      expect(response_body.dig('errors', 0, 'message')).to eq 'User not found'
      expect(response_body.dig('errors', 0, 'status')).to eq 'NOT_FOUND'
    end

    it 'should update password' do
      new_password = 'new-strong-password'
      post :execute, params: { query: update_password_mutation(user.email, pin_code.value, new_password) }

      expect(response_body['errors']).to be_nil
      expect(response_body.dig('data', 'updateUserPassword', 'user', 'id').to_i).to eq user.id
    end

    it 'should login with new password' do
      new_password = 'new-strong-password'
      post :execute, params: { query: update_password_mutation(user.email, pin_code.value, new_password) }
      post :execute, params: { query: sign_in_mutation_classic(user.email, new_password, 'device-id') }
      expect(response_body['errors']).to be_nil
      expect(response_body.dig('data', 'signInClassic', 'user', 'id').to_i).to eq user.id
    end
  end
end
