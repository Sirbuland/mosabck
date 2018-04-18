require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'geo taggable queries' do
    before do
      @post = create :post, :text
      @user = @post.user
      @comment = Comment.build_from(@post, @user.id, 'Initial comment!')
      @comment.save
      @post.liked_by @user
    end

    context 'querying for all geo meta' do
      it 'should return all data' do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
        post :execute, params: { query: all_geo_taggable_query(['TextPosts'], x_min: -180, x_max: 180, y_min: -180, y_max: 180) }

        expect(response.status).to eq 200
        nodes = response_body['data']['allGeoMeta']['edges'].map { |edge| edge['node'] }
        expect(nodes.count).to eq(1)
        expect(nodes.first['geoMeta']['city']).to eq(@post.location.city)
      end
    end
  end
end
