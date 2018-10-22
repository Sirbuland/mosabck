require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'deleteScreener mutation' do
    context 'from User' do
      before do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
      end

      let(:screener) { create :screener, :with_filters }

      it 'should delete screener' do
        post :execute, params: { query: delete_screener(screener.id) }
        expect(response.code.to_i).to eq 200

        screener_response = response_body.dig('data', 'deleteScreener', 'screener')
        expect(screener_response).to be_present

        expect(Screener.find_by_id(screener.id)).to be_nil
      end

      it 'should not find screener' do
        ivalid_id = 8932823
        post :execute, params: { query: update_screener(ivalid_id, 'new name') }
        expect(response.code.to_i).to eq 200

        expect(response_body['errors']).to be_present
        expect(response_body['errors'].dig(0, 'message')).to include('not found')
      end
    end
  end
end
