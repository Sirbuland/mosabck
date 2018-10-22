require 'rails_helper'

RSpec.describe MiscComponent::Interactors::MergeModels, type: :interactor do
  describe '.call' do
    describe 'with valid input' do
      it 'should call .to_a on sent models' do
        result = MiscComponent::Interactors::MergeModels.call(models: [create_list(:user, 3)])
        expect(result.models).to eq(User.all.to_a)
      end

      it 'should merge models' do
        models = [build_list(:user, 5), build_list(:user, 3)]
        result = MiscComponent::Interactors::MergeModels.call(models: models)
        expect(result.models).to eq(models.flatten)
      end
    end
  end
end
