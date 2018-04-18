require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'creating classicUser, then signout, then login/logout 2 times then login and ask for feed' do
    it 'should return user feed' do
      password = Faker::Internet.password
      post :execute, params: {
        query: create_classic_identity_mutation(
          Faker::Simpsons.character, 'needthistofindtheuser@mail.com',
          password,
          Faker::Simpsons.quote,
          'AAA-BBB-CCC-DeviceId-Needed-For-Check',
          Faker::Internet.url
        )
      }

      classic_user = User.search { fulltext 'needthistofindtheuser' }.results.first

      expect(classic_user.logged_in('AAA-BBB-CCC-DeviceId-Needed-For-Check')).to be_truthy

      jwt_token = valid_jwt_token classic_user.id, 'AAA-BBB-CCC-DeviceId-Needed-For-Check'

      request.headers['authorization'] = "Bearer #{jwt_token}"
      post :execute, params: { query: sign_out_mutation }
      expect(classic_user.logged_in('AAA-BBB-CCC-DeviceId-Needed-For-Check')).to be_falsey

      2.times do
        post :execute, params: { query: sign_in_mutation_classic(classic_user.email,
          password, 'AAA-BBB-CCC-DeviceId-Needed-For-Check') }
        expect(classic_user.logged_in('AAA-BBB-CCC-DeviceId-Needed-For-Check')).to be_truthy

        request.headers['authorization'] = "Bearer #{jwt_token}"
        post :execute, params: { query: sign_out_mutation }
        expect(classic_user.logged_in('AAA-BBB-CCC-DeviceId-Needed-For-Check')).to be_falsey
      end

      post :execute, params: { query: sign_in_mutation_classic(classic_user.email,
                                                               password, 'AAA-BBB-CCC-DeviceId-Needed-For-Check') }

      expect(classic_user.logged_in('AAA-BBB-CCC-DeviceId-Needed-For-Check')).to be_truthy

      request.headers['authorization'] = "Bearer #{jwt_token}"
      post :execute, params: { query: all_text_posts_query }

      expect(response.status).to be 200
    end
  end
end
