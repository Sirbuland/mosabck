require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  return if ENV['SKIP_SOLR']

  before do
    %w[Lion-O PAntHro Cheetara TigRO].each do |current_username|
      create :user, username: current_username, email: "#{current_username}@thundercats.com"
    end

    create :user, username: 'snarf', email: 'snarf@themascot.com'

    create :user, username: 'munra the immortal', email: 'munra@evil.com'
    create :user, username: 'fake munra', email: 'fakevillain@evil.com'

    create :user, username: 'Dr. Zoidberg', first_name: 'doctor', last_name: 'Zoidberg'
  end

  describe 'search' do
    context 'search by all fields' do
      it 'should return all users starting with a string ignoring cases' do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
        post :execute, params: { query: search_users('pA') }

        response_data = response_body['data']
        edges = response_data['allUsers']['edges']
        puts response_body
        expect(response.status).to eq 200
        expect(edges[0]['node']['displayName']).to eq 'PAntHro'
      end

      it 'should return all users with term in the middle of the name' do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
        post :execute, params: { query: search_users('eETa') }

        response_data = response_body['data']
        edges = response_data['allUsers']['edges']

        expect(response.status).to eq 200
        expect(edges[0]['node']['displayName']).to eq 'Cheetara'
      end

      it 'should return all users with term in the end of the name' do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
        post :execute, params: { query: search_users('aRf') }

        response_data = response_body['data']
        edges = response_data['allUsers']['edges']

        expect(response.status).to eq 200
        expect(edges[0]['node']['displayName']).to eq 'snarf'
      end

      # TODO: PROBLEM WITH EMAILS
      # it 'should return all users with term at the beggining of the email' do
      #   request.headers['authorization'] = "Bearer #{signed_in_user_token}"
      #   post :execute, params: { query: search_users('themas') }
      #
      #   response_data = response_body['data']
      #   edges = response_data['allUsers']['edges']
      #
      #   expect(response.status).to eq 200
      #   expect(edges[0]['node']['displayName']).to eq 'snarf'
      # end
      #
      # it 'should return all users with term at the middle of the email' do
      #   request.headers['authorization'] = "Bearer #{signed_in_user_token}"
      #   post :execute, params: { query: search_users('tHeM') }
      #
      #   response_data = response_body['data']
      #   edges = response_data['allUsers']['edges']
      #
      #   expect(response.status).to eq 200
      #   expect(edges[0]['node']['displayName']).to eq 'snarf'
      # end
      #
      # it 'should return all users with term at the middle of the email' do
      #   request.headers['authorization'] = "Bearer #{signed_in_user_token}"
      #   post :execute, params: { query: search_users('maSCOt') }
      #
      #   response_data = response_body['data']
      #   edges = response_data['allUsers']['edges']
      #
      #   expect(response.status).to eq 200
      #   expect(edges[0]['node']['displayName']).to eq 'snarf'
      # end
    end

    context 'search only by mail' do
      xit 'should return only users with term in the email' do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
        post :execute, params: { query: search_users_with_search_by('munra', 'email') }

        response_data = response_body['data']
        edges = response_data['allUsers']['edges']

        expect(response.status).to eq 200
        expect(edges[0]['node']['displayName']).to eq 'munra the immortal'
      end
    end

    context 'search only by first_name' do
      it 'should return only users with term in the first name' do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
        post :execute, params: { query: search_users_with_search_by('doct', 'firstName') }

        response_data = response_body['data']
        edges = response_data['allUsers']['edges']

        expect(response.status).to eq 200
        expect(edges[0]['node']['displayName']).to eq 'Dr. Zoidberg'
      end
    end

    context 'search only by last_name' do
      it 'should return only users with term in the first name' do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
        post :execute, params: { query: search_users_with_search_by('Zoidb', 'lastName') }

        response_data = response_body['data']
        edges = response_data['allUsers']['edges']

        expect(response.status).to eq 200
        expect(edges[0]['node']['displayName']).to eq 'Dr. Zoidberg'
      end
    end
  end
end
