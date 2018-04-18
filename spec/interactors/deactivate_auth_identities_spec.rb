require 'rails_helper'

RSpec.describe IdentitiesComponent::Interactors::DeactivateAuthIdentities, type: :interactor do
  describe '.call' do
    describe 'without checking for empty profile' do
      before do
        @user = create(:user)
        @auth_identities = create(
          :auth_identity,
          :facebook_identity,
          user: @user
        )
        @provider = 'facebook'
      end

      subject do
        IdentitiesComponent::Interactors::DeactivateAuthIdentities.call(args: { provider: @provider }, user: @user)
      end

      it 'should disable auth identities' do
        expect { subject }.to change { AuthIdentity.active.count }
      end

      it 'should raise error' do
        @provider = 'oauth'
        result = subject
        expect(result.failure?).to be_truthy
        expect(result.message).to eq('provider: Wrong identity type')
      end
    end

    describe 'with check for empty auth identities' do
      before do
        @user = create(:user)
        @auth_identities = create(
          :auth_identity,
          :facebook_identity,
          user: @user
        )
        @provider = 'facebook'
      end

      subject do
        IdentitiesComponent::Interactors::DeactivateAuthIdentities.call(
          args: { provider: 'facebook' },
          user: @user,
          check_for_empty_profile: true
        )
      end

      it 'should check for number of auth identities if asked' do
        # chat identity will always be active
        expect { subject }.to(change { AuthIdentity.active.count })
      end

      it 'should remove auth identity if it`s not last identity' do
        create(
          :auth_identity,
          :classic_identity,
          user: @user,
          status: 'active'
        )
        expect { subject }.to(change { AuthIdentity.active.count }.by(-1))
      end
    end
  end
end
