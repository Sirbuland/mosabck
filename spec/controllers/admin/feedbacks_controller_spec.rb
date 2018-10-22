require 'rails_helper'

RSpec.describe Admin::FeedbacksController, type: :controller do
  describe 'GET download' do
    before do
      @user = create(:user, :admin)
      token = valid_jwt_token(@user.id, nil)
      session[:token] = token
    end

    context 'without any feedback' do
      it 'should return http 302' do
        get :download
        expect(response.status).to eq 302
        expect(response.headers['Location']).to include(admin_feedbacks_path)
      end
    end

    context 'with feedback' do
      before do
        feedbacks
        get :download
      end

      let(:feedbacks) { create_list :feedback, 20 }

      it 'should return http 200' do
        expect(response.status).to eq 200
      end

      it 'should return file' do
        expect(response.headers['Content-Type']).to eq 'text/csv'
      end

      it 'should include feedback data' do
        feedbacks.each do |feedback|
          expect(response.body).to include(feedback.message)
        end
      end
    end
  end
end
