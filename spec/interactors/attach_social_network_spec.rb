require 'rails_helper'

RSpec.describe AttachSocialNetwork, type: :interactor do
  describe '.call' do
    it 'should create valid account' do
      @user = create(:user)
      @identity = create :auth_identity, :classic_identity, user: @user
      payload = (build :auth_identity, :facebook_identity).payload
      subject = -> {
        AttachSocialNetwork.call(
          args: {
            userId: @user.id,
            provider: 'facebook',
            fbUserId: payload['fbUserId'],
            fbAccessToken: payload['fbAccessToken'],
            expirationDate: payload['expirationDate']
          }
        )
      }
      expect(subject).to change { AuthIdentity.count }.by(1)
    end
  end
end
