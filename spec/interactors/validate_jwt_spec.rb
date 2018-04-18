require 'rails_helper'
require 'json_web_token'

RSpec.describe MiscComponent::Interactors::ValidateJWT, type: :interactor do
  describe '.call' do
    context 'when given valid jwt token' do
      before do
        @user = create :user
        @user_device = create :user_device, user: @user
        @jwt_token = valid_jwt_token @user.id, @user_device.device_id
        @context = MiscComponent::Interactors::ValidateJWT.call(
          query: all_users_query, headers: { 'Authorization' => "Bearer #{@jwt_token}" })
      end

      it 'succeeds' do
        expect(@context).to be_a_success
      end

      it 'saves the decoded payload inside jwt_payload in the context' do
        expect(@context.jwt_payload).to eq JsonWebToken.decode(@jwt_token).first
      end
    end

    context 'when given an invalid jwt token' do
      before do
        @context = MiscComponent::Interactors::ValidateJWT.call(
          query: all_users_query, headers: { 'Authorization' => 'Bearer AAA.VBBB.CCSS' })
      end

      it 'fails' do
        expect(@context).to be_a_failure
      end

      it 'return Invalid JWT as the error message' do
        expect(@context.message).to eq 'Invalid JWT'
      end
    end
  end
end
