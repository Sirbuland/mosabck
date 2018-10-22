require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'updateScreener mutation' do
    let(:screener) { create :screener, :with_filters }
    let(:screener_args) { { name: Faker::Hobbit.character, text: Faker::Hobbit.quote } }
    let(:screener_filters) do
      Random.rand(1..5).times.map do
        {
          name: ScreenerComponent::Types::FilterNameEnumType.values.keys.sample,
          operator: ScreenerComponent::Types::FilterOperatorEnumType.values.keys.sample,
          category: %Q{"#{Faker::LordOfTheRings.character}"},
          value: %Q{"#{Faker::LordOfTheRings.character}"}
        }
      end
    end

    context 'from User' do
      before do
        request.headers['authorization'] = "Bearer #{signed_in_user_token}"
      end

      it 'should update screener' do
        post :execute, params: { query: update_screener(screener.id, 'new name') }
        expect(response.code.to_i).to eq 200

        screener_response = response_body.dig('data', 'updateScreener', 'screener')
        expect(screener_response).to be_present
        expect(screener_response['id'].to_i).to eq screener.id
        expect(screener_response['name']).to eq 'new name'
      end

      it 'should not find screener' do
        ivalid_id = 8932823
        post :execute, params: { query: update_screener(ivalid_id, 'new name') }
        expect(response.code.to_i).to eq 200

        expect(response_body['errors']).to be_present
        expect(response_body['errors'].dig(0, 'message')).to include('not found')
      end

      it 'should update screener filters' do
        post :execute, params: { query: update_screener(screener.id, 'new name', nil, screener_filters) }
        expect(response.code.to_i).to eq 200

        screener_response = response_body.dig('data', 'updateScreener', 'screener')
        expect(screener_response).to be_present
        expect(screener_response['id'].to_i).to eq screener.id

        expect(screener_response['filters']).to be_present
        expect(screener_response['filters']).not_to eq screener.filters
      end

      it 'should not update screener filters' do
        post :execute, params: { query: update_screener(screener.id, 'new name') }
        expect(response.code.to_i).to eq 200

        screener_response = response_body.dig('data', 'updateScreener', 'screener')
        expect(screener_response['filters']).to be_present
        expect(screener_response['filters']).to eq screener.filters
      end

      it 'should remove screener filters' do
        post :execute, params: { query: update_screener(screener.id, 'new name', nil, []) }
        expect(response.code.to_i).to eq 200

        screener_response = response_body.dig('data', 'updateScreener', 'screener')
        expect(screener_response['filters']).not_to be_present
      end
    end
  end
end
