require 'rails_helper'

RSpec.describe UserComponent::Organizers::SendFeedback, type: :organizer do
  let(:receivers) { create_list :user, 3, :feedback_receiver, :with_classic_identity }
  let(:feedbacks) { create_list :feedback, 5, created_at: DateTime.yesterday }

  context 'with admins & feedbacks' do
    before do
      receivers
      feedbacks
    end

    it 'should be success' do
      result = described_class.call
      expect(result.success?).to eq true
    end

    it 'should create a new feedback file' do
      expect {
        described_class.call
      }.to change { Dir['/tmp/feedback*.csv'].size }.by(1)
    end

    it 'should send an email' do
      expect {
        described_class.call
      }.to change { AdminMailer.deliveries.length }.by(1)
    end
  end

  context 'without admins' do
    before do
      feedbacks
    end

    it 'should be failure' do
      result = described_class.call
      expect(result.failure?).to eq true
      expect(result.message).to eq 'Receivers not found'
    end
  end

  context 'without feedbacks' do
    before do
      receivers
    end

    it 'should be failure' do
      result = described_class.call
      expect(result.failure?).to eq true
      expect(result.message).to eq 'No feedbacks'
    end
  end
end
