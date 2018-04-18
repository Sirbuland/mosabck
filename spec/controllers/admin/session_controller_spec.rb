require 'rails_helper'

RSpec.describe Admin::SessionController, type: :controller do
  describe 'GET #login' do
    it 'returns http success' do
      get :login
      expect(response).to have_http_status(:success)
    end
  end

  describe 'POST #login' do
    before do
      @user = create(:user)
      @auth_identity = create :auth_identity, :classic_identity, user: @user
      rules = @user.rules
      rules['admin_panel'] = true
      @user.update(rules: rules)
      @password = Faker::Internet.password
      @user.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password))
    end

    it 'should try to authorize user' do
      post :login, params: { email: @user.classicIdentity['email'], password: @password }
      expect(response).to have_http_status(302)
    end
  end

  describe 'GET #logout' do
    before do
      @user = create(:user)
      @auth_identity = create :auth_identity, :classic_identity, user: @user
      rules = @user.rules
      rules['admin_panel'] = true
      @user.update(rules: rules)
      @password = Faker::Internet.password
      @user.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password))
      post :login, params: { email: @user.classicIdentity['email'], password: @password }
    end

    it 'returns redirection' do
      get :logout
      expect(response).to have_http_status(302)
    end
  end
end
