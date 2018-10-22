require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  before do
    @classic_user = create :user
    @user = create :user
    create(:auth_identity, :classic_identity, user: @classic_user)

    fb_identity = create :auth_identity, :facebook_identity, user: @user

    @user_device = create :user_device, user: @user
    @classic_user_device = create :user_device, user: @classic_user

    @email = @classic_user.classicIdentity['email']
    @password = Faker::Internet.password
    @classic_user.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password))
  end

  describe 'sign in with facebook' do
    context 'with valid user' do
      it 'should return user info and create a userdevice record' do
        post :execute, params: { query: sign_in_mutation_facebook(
          @user.oauth_user_id('FacebookIdentity'),
          @user.oauth_user_token('FacebookIdentity'),
          @user_device.device_id
        ) }

        response_data = response_body['data']

        user_id = response_data['signInOauth']['user']['id']

        expect(response.status).to eq 200
        expect(user_id).to eq @user.id.to_s
        expect(@user.owned_device(@user_device.device_id).logged_in).to be_truthy
      end
    end
  end

  describe 'sign in classic' do
    context 'with valid user' do
      it 'should return user info and create a userdevice record' do
        post :execute, params: { query: sign_in_mutation_classic(
          @email, @password, @classic_user_device.device_id
        ) }
        response_data = response_body['data']

        user_id = response_data['signInClassic']['user']['id']

        expect(response.status).to eq 200
        expect(user_id).to eq @classic_user.id.to_s
        expect(@classic_user.owned_device(@classic_user_device.device_id).logged_in).to be_truthy
      end

      it 'should return error if wronng password' do
        post :execute, params: { query: sign_in_mutation_classic(
          @email, 'thisisnotthepasswordforsure1234', @classic_user_device.device_id
        ) }

        error = response_body_errors[0]
        expect(error['status']).to eq 'INVALID_CREDENTIALS'
        expect(error['message']).to eq I18n.t('signin.errors.invalid_credentials')
      end
    end
  end
end
