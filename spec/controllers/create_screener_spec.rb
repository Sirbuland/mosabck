require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'createScreener mutation' do
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

      it 'should create screener' do
        post :execute, params: { query: create_screener(screener_args[:name], screener_args[:text]) }
        expect(response.code.to_i).to eq 200

        screener_response = response_body.dig('data', 'createScreener', 'screener')
        expect(screener_response).to be_present
        expect(screener_response['id']).to be_present
        expect(screener_response['name']).to eq screener_args[:name]
        expect(screener_response['text']).to eq screener_args[:text]
        expect(screener_response['filters']).to eq []
      end

      it 'should create screener with filters' do
        post :execute, params: { query: create_screener(screener_args[:name], screener_args[:text], screener_filters) }
        expect(response.code.to_i).to eq 200

        screener_response = response_body.dig('data', 'createScreener', 'screener')
        expect(screener_response).to be_present
        expect(screener_response['filters']).to be_present
      end

      it 'should not create screener with invalud filters' do
        post :execute, params: { query: create_screener(screener_args[:name], screener_args[:text], [{}]) }
        expect(response.code.to_i).to eq 200

        expect(response_body['errors']).to be_present
      end
    end
  end
end
