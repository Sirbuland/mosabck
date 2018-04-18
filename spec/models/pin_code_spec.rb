require 'rails_helper'

RSpec.describe PinCode, type: :model do
  before do
    @user = create :user
    @user_device = create :user_device, user: @user
    @identity = create(:auth_identity, :classic_identity, user: @user)
    @email = @user.classicIdentity['email']
    @password = @user.classicIdentity['password']
    @price = build :price, sellable_id: @plan.id, sellable_type: 'Plan'
    @tier = create :tier_of_content
    @subscription = create :subscription, user: @user, plan: @plan, tier_of_content: @tier, status: :completed
    FactoryBot.create(:app_setting, name: 'PinCodeLength', value: 6, active: true)
    FactoryBot.create(:app_setting, name: 'PinCodeNumeric', value: true, active: true)
  end

  it 'should generate unique hex' do
    arr = 100.times.map { PinCode.random_hex }
    expect(arr.uniq.length).to eq 100
  end

  it 'should generate unique dec' do
    arr = 100.times.map { PinCode.random_dec }
    expect(arr.uniq.length).to eq 100
  end

  it 'should generate unique 64' do
    arr = 100.times.map { PinCode.random }
    expect(arr.uniq.length).to eq 100
  end
end
