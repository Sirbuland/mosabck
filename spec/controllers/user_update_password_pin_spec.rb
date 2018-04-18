require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  before do
    FactoryBot.create(:app_setting, name: 'PinCodeLength', value: 4, active: true)
    FactoryBot.create(:app_setting, name: 'PinCodeNumeric', value: true, active: true)

    @user = create :user, :with_classic_identity
    @user_device = create :user_device, user: @user
    @password = Faker::Internet.password
    classic_identity = @user.auth_identities.classic.first
    classic_identity.payload['password'] = BCrypt::Password.create(@password)
    classic_identity.save
    create(:auth_identity, :phone_identity, user: @user)
    @phone_number = @user.auth_identities.phone.first.payload['phoneNumber']
    @email =  @user.auth_identities.classic.first.payload['email']

    request.headers['authorization'] = "Bearer #{valid_jwt_token(@user.id, @user_device.id)}"
  end

  describe 'updating password' do
    it 'should update password using user pin number, void pin, and login with new pass' do
      post :execute, params: { query: user_reset_password_phone_mutation(@phone_number) }
      generated_pin_code = @user.pin_codes.active.where(action: 'reset_password_phone').first

      expect(generated_pin_code.value).to eq response_body_data('userResetPassword')['messageBody']
      expect(generated_pin_code.status).to eq 'active'

      post :execute, params: { query: update_password_mutation_pin(generated_pin_code.value, @phone_number, @password, 'n3wp455w0rd') }
      updated_password = @user.auth_identities.classic.first.payload['password']

      expect(generated_pin_code.reload.status).to eq 'used'
      expect(BCrypt::Password.new(updated_password) == 'n3wp455w0rd').to be_truthy

      post :execute, params: { query: sign_in_mutation_classic(@email, 'n3wp455w0rd', @user_device.device_id) }

      expect(response_body_data('signInClassic')['user']['id']).to eq @user.id.to_s
    end
  end

  describe 'pin validation' do
    before do
      post :execute, params: { query: user_reset_password_phone_mutation(@phone_number) }
      @pin_code = @user.pin_codes.active.where(action: 'reset_password_phone').first.value
    end

    context 'with phone' do
      it 'should return true if the pin is equal to the one in the db' do
        post :execute, params: { query: validate_pin(@phone_number, @pin_code) }
        expect(response_body_data('validatePin')).to be_truthy
      end

      it 'should return false if pin not correct' do
        post :execute, params: { query: validate_pin(@phone_number, Faker::Number.number(38)) }
        expect(response_body_data('validatePin')).to be_falsey
      end

      it 'should return false if a non existant phone' do
        post :execute, params: { query: validate_pin(Faker::Number.number(60), @pin_code) }
        expect(response_body_data('validatePin')).to be_falsey
      end
    end
  end
end
