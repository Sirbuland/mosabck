require 'rails_helper'
require 'migration_data/testing'
require_migration 'create_users'

describe MigratePasswordsToHashes do
  describe '#data' do
    before do
      @user = create :user
      @auth_identity = create(:auth_identity, :classic_identity, user: @user)
      @password = @auth_identity.payload['password']
    end

    it 'works' do
      expect { described_class.new.data }.to_not raise_exception
      @auth_identity.reload
      expect(BCrypt::Password.new(@auth_identity.payload['password'])).to eq(BCrypt::Password.create(@password))
    end
  end
end
