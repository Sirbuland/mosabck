require 'rails_helper'
describe SendNotificationWorker, type: :worker do
  it { is_expected.to be_processed_in :default }
  it { is_expected.to be_retryable true }

  context 'with email' do
    before do
      @user = create :user
      create(:auth_identity, :classic_identity, user: @user)
      @notification = create :notification, user: @user, channel: 'email'
    end

    it 'should deliver notification' do
      subject.perform(@notification.id)

      @notification.reload
      expect(@notification.status).to eq('delivered')
    end
  end

  context 'with sms' do
    before do
      @user = create :user
      create(:auth_identity, :classic_identity, user: @user)
      @notification = create :notification, user: @user, channel: 'phone'
    end

    it 'should deliver notification' do
      subject.perform(@notification.id)

      @notification.reload
      expect(@notification.status).to eq('delivered')
    end
  end
end
