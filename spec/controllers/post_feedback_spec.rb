require 'rails_helper'

RSpec.describe GraphqlController, type: :controller do
  describe 'postFeedback mutation' do
    before do
      jwt = valid_jwt_token user.id, user_device.device_id
      request.headers['authorization'] = "Bearer #{jwt}"
    end

    let(:user) { create :user, :with_classic_identity, first_name: 'Kirill', last_name: 'Zvonov' }
    let(:user_device) { create :user_device, user: user, logged_in: true }

    it 'should post feedback' do
      post :execute, params: { query: post_feedback('Hey threre!') }
      expect(response.code.to_i).to eq 200
      expect(response_body.dig('data', 'postFeedback', 'result')).to be true
    end

    it 'should create feedback model' do
      expect {
        post :execute, params: { query: post_feedback('Hey threre!') }
      }.to change { Feedback.all.size }.by(1)
    end

    it 'should create feedback with page' do
      post :execute, params: { query: post_feedback('Hey threre!', '/cool/page') }
      expect(Feedback.last.additional_info['page']).to eq '/cool/page'
    end

    it 'should store user info' do
      post :execute, params: { query: post_feedback('Hey threre!') }

      feedback = Feedback.last
      expect(feedback.additional_info['user_first_name']).to be_present
      expect(feedback.additional_info['user_first_name']).to eq user.first_name

      expect(feedback.additional_info['user_last_name']).to be_present
      expect(feedback.additional_info['user_last_name']).to eq user.last_name

      expect(feedback.additional_info['user_email']).to be_present
      expect(feedback.additional_info['user_email']).to eq user.email
    end
  end
end
