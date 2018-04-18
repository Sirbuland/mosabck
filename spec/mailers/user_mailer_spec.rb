require 'rails_helper'

RSpec.describe UserMailer, type: :mailer do
  describe 'registration confirmation' do
    let(:user) { create :user }
    let(:mail) { UserMailer.registration_confirmation(user) }

    it 'renders the headers' do
      expect(mail.subject).to eq('Account confirmation')
      expect(mail.to).to eq([user.email])
    end

    it 'renders the body' do
      confirmation_link = 'To confirm your registration please click <a href='
      expect(mail.body.encoded.include?("Hi #{user.username},")).to be_truthy
      expect(mail.body.encoded.include?('Thanks for registering!')).to be_truthy
      expect(mail.body.encoded.include?(confirmation_link)).to be_truthy
    end
  end
end
