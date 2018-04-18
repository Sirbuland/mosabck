require 'rails_helper'

RSpec.describe AppSetting, type: :model do
  describe 'validation' do
    let(:app_setting) { create :app_setting }

    subject { app_setting }

    it { should validate_uniqueness_of(:name).ignoring_case_sensitivity }
  end
end
