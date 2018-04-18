require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'retrieving app settings' do
    before do
      @app_setting_1 = create :app_setting
      @app_setting_2 = create :app_setting, name: 'EmailVerificationEnabled'
    end

    before :each do
      request.headers.merge!('authorization' => "Bearer #{signed_in_user_token}")
    end

    it 'should return all settings' do
      post :execute, params: { query: app_settings_query }

      app_settings = response_body['data']['appSettings']['edges']
      app_settings_names = app_settings.map { |setting| setting['node']['name'] }
      app_settings_values = app_settings.map { |setting| setting['node']['value'] }

      expect(app_settings.count).to eq 2
      expect(app_settings_names.include?(@app_setting_1.name)).to be_truthy
      expect(app_settings_names.include?(@app_setting_2.name)).to be_truthy
      expect(app_settings_values.include?(@app_setting_1.value)).to be_truthy
      expect(app_settings_values.include?(@app_setting_2.value)).to be_truthy
    end

    it 'should return by name' do
      post :execute, params: { query: app_settings_by_name_query('EmailVerificationEnabled') }

      app_settings = response_body['data']['appSettings']['edges']
      app_settings_names = app_settings.map { |setting| setting['node']['name'] }
      app_settings_values = app_settings.map { |setting| setting['node']['value'] }

      expect(app_settings.count).to eq 1

      expect(app_settings_names.include?(@app_setting_1.name)).to be_falsey
      expect(app_settings_names.include?(@app_setting_2.name)).to be_truthy
    end
  end
end
