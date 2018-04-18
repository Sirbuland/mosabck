require 'spec_helper'

RSpec.describe UserComponent::Interactors::GetUserFromQuery, type: :interactor do
  describe '.call' do
    before do
      @user = create(:user)
    end

    it 'should take follower from args and return follower' do
      result = UserComponent::Interactors::GetUserFromQuery.call(
        args: { userId: @user.id })
      expect(result.success?).to be_truthy
      expect(result.user).to eq(@user)
    end

    it 'should raise error' do
      result = UserComponent::Interactors::GetUserFromQuery.call(
        args: { userId: @user.id + 1 })
      expect(result.failure?).to be_truthy
      expect(result.message).to eq('User not found')
    end
  end
end
