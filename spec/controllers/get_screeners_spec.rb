require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'getScreeners query' do
    context 'from User' do
      before do
        jwt = valid_jwt_token user.id, user_device.device_id
        request.headers['authorization'] = "Bearer #{jwt}"
      end

      let(:user) { create :user, :with_classic_identity }
      let(:user_device) { create :user_device, user: user, logged_in: true }
      let!(:screeners) { create_list :screener, 5, :with_filters, user: user }

      it 'should return user screeners' do
        another_screener = create :screener, :with_filters
        post :execute, params: { query: get_screeners }
        expect(response.code.to_i).to eq 200

        screeners_response = response_body.dig('data', 'getScreeners', 'edges')
        expect(screeners_response).to be_present

        screeners_response_ids = screeners_response.map do |screener_node|
          screener_node['node']['id'].to_i
        end.sort
        expect(screeners_response_ids).to be_present
        expect(screeners_response_ids).to eq screeners.map(&:id)
      end

      it 'should return user screener' do
        screener = screeners.first
        post :execute, params: { query: get_screeners([screener.id]) }
        expect(response.code.to_i).to eq 200

        screeners_response = response_body.dig('data', 'getScreeners', 'edges')
        expect(screeners_response).to be_present

        expect(screeners_response[0]['node']['id'].to_i).to eq screener.id
      end

      it 'should not return non user screener' do
        another_screener = create :screener, :with_filters
        post :execute, params: { query: get_screeners([another_screener.id]) }
        expect(response.code.to_i).to eq 200

        screeners_response = response_body.dig('data', 'getScreeners', 'edges')
        expect(screeners_response).to be_empty
      end
    end
  end
end
