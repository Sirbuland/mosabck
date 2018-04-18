require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  before do
    @usernames = %w[Robert Jimmy Phil John Tony Michael Paul]
    @usernames.each do |username|
      create :user, username: username
    end

    # User.searchkick_index.refresh
  end

  describe 'ordered results' do
    context 'alphabetical' do
      it 'should return all users order by their names alphabetically' do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
        post :execute, params: { query: all_users_alphabetically }

        retrieved_usernames = response_body['data']['allUsers']['edges'].map { |node| node['node']['displayName'] }
        expect(retrieved_usernames).to eq User.all.order(:username).map(&:username)
        expect(retrieved_usernames.index('Robert')).to be > retrieved_usernames.index('Phil')
        expect(retrieved_usernames.index('Jimmy')).to be < retrieved_usernames.index('Michael')
        expect(retrieved_usernames.index('John')).to be < retrieved_usernames.index('Michael')
        expect(retrieved_usernames.index('Jimmy')).to be < retrieved_usernames.index('John')
      end
    end
  end
end
