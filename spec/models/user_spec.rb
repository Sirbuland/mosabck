require 'rails_helper'

RSpec.describe User, type: :model do
  describe 'validation' do
    let(:user) { create :user }
    subject { user }

    it { should_not allow_value('fakeavataruel').for(:avatar_url) }
    it { should allow_value('').for(:avatar_url) }
    it { should allow_value(Faker::Internet.url).for(:avatar_url) }
    it { should validate_uniqueness_of(:username) }

    # Enable it if using ElasticSearch
    # it 'should be indexed' do
    #   User.create(username: 'Curious Jorge')
    #   User.__elasticsearch__.refresh_index!
    #   expect(User.__elasticsearch__.search('*rious Jorge').records.length).to eq(1)
    # end
  end
end
