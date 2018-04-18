require 'rails_helper'

RSpec.describe DetachSocialNetwork, type: :interactor do
  describe '.call' do
    before do
      @user = create(:user)
      @classic_identity = create :auth_identity, :classic_identity, user: @user
      @facebook_identity = create :auth_identity, :facebook_identity, user: @user
    end

    subject do
      DetachSocialNetwork.call(
        args: {
          userId: @user.id,
          provider: 'facebook'
        }
      )
    end
    it 'should remove auth identity' do
      expect { subject }.to change { AuthIdentity.active.count }.by(-1)
    end
  end
end
