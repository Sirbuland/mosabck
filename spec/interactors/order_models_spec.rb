require 'rails_helper'

RSpec.describe MiscComponent::Interactors::OrderModels, type: :interactor do
  describe '.call' do
    before do
      create_list(:user, 5)
      @models = [User.all]
      @order = ['created_at DESC']
    end

    it 'should raise error' do
      @models = []
      result = MiscComponent::Interactors::OrderModels.call(models: @models, order_by: @order)
      expect(result.failure?).to be_truthy
      expect(result.message).to eq(I18n.t('errors.messages.no_types_are_present'))
    end

    it 'should order models' do
      result = MiscComponent::Interactors::OrderModels.call(models: @models, order_by: @order)
      expect(result.models.first.to_sql).to include('ORDER BY created_at DESC')
    end
  end
end
