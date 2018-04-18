require 'rails_helper'

RSpec.describe UserComponent::Interactors::UpdateUserAccounts, type: :interactor do
  describe '.call' do
    before do
      @user = create(:user)
      @identity = create(
        :auth_identity,
        :facebook_identity,
        user: @user
      )
    end

    it 'should raise error' do
      result = UserComponent::Interactors::UpdateUserAccounts.call(
        args: {
          provider: 'facebook',
          facebookUserId: @identity.payload['facebookUserId'],
          facebookAccessToken: @identity.payload['facebookAccessToken'],
          expirationDate: @identity.payload['expirationDate']
        },
        user: @user,
        identities: @user.auth_identities
      )
      expect(result.failure?).to be_truthy
      expect(result.message).to eq("provider: #{I18n.t('errors.messages.taken_profile')}")
    end
  end
end
