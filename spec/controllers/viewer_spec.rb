require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  before do
    @user = create :user
    create(:auth_identity, :classic_identity, user: @user)
    @email = @user.classicIdentity['email']
    @password = Faker::Internet.password
    @user.auth_identities.classic.first.update_attribute_inside_payload('password', BCrypt::Password.create(@password))
    @user_device = create :user_device, user: @user
    @another_user = create :user
    # @user_followed_by_viewer = create :user, username: 'Followerio Lopez'
    # @user_not_followed_by_viewer = create :user, username: 'Novocaino Perez Gomes'
    #
    # @user.follow @user_followed_by_viewer
  end

  describe 'viewer' do
    context 'user signed in' do
      it 'should return viewer info, will take data from jwt' do
        post :execute, params: { query: sign_in_mutation_classic(@email,
          @password, @user_device.device_id) }

        @jwt_token = response_body['data']['signInClassic']['jwt']

        request.headers['authorization'] = "Bearer #{@jwt_token}"
        post :execute, params: { query: viewer_query }

        response_data = response_body['data']

        viewer = response_data['viewer']

        expect(response.status).to eq 200
        expect(viewer['currentUser']['displayName']).to eq @user.username.to_s
      end
    end

    it 'should return the current user and the user with the specified id' do
      post :execute, params: { query: sign_in_mutation_classic(@email,
                                                               @password, @user_device.device_id) }
      @jwt_token = response_body['data']['signInClassic']['jwt']

      request.headers['authorization'] = "Bearer #{@jwt_token}"
      post :execute, params: { query: viewer_query_other_user(@another_user.id) }

      response_data = response_body['data']

      viewer = response_data['viewer']
      current_user = viewer['currentUser']
      another_user = viewer['user']

      expect(response.status).to eq 200
      expect(current_user['displayName']).to eq @user.username.to_s
      expect(current_user['id']).to eq @user.id.to_s
      expect(another_user['displayName']).to eq @another_user.username.to_s
      expect(another_user['id']).to eq @another_user.id.to_s
    end

    it 'should return an error if user with id is not found' do
      post :execute, params: { query: sign_in_mutation_classic(@email,
                                                               @password, @user_device.device_id) }

      @jwt_token = response_body['data']['signInClassic']['jwt']

      request.headers['authorization'] = "Bearer #{@jwt_token}"
      post :execute, params: { query: viewer_query_other_user(User.last.id + 1) }

      expect(response_body['errors'][0]['message']).to eq 'User not found'
    end

    # it 'should return if another user is followed by the viewer' do
    #   post :execute, params: { query: sign_in_mutation_classic(@email,
    #                                                            @password, @user_device.device_id) }
    #   @jwt_token = response_body['data']['signInClassic']['jwt']
    #   request.headers['authorization'] = "Bearer #{@jwt_token}"
    #   post :execute, params: { query: all_users_query }
    #
    #   user_nodes = response_body['data']['allUsers']['edges']
    #   user_follower_by_viewer = user_nodes.map { |user| user['node'] }.select { |user| user['id'] == @user_followed_by_viewer.id.to_s }
    #   user_not_follower_by_viewer = user_nodes.map { |user| user['node'] }.select { |user| user['id'] == @user_not_followed_by_viewer.id.to_s }
    #
    #   expect(user_follower_by_viewer.first['followedByViewer']).to be_truthy
    #   expect(user_not_follower_by_viewer.first['followedByViewer']).to be_falsey
    # end
  end
end
