require 'rails_helper'

RSpec.describe MiscComponent::Interactors::MergeModels, type: :interactor do
  describe '.call' do
    describe 'with valid input' do
      it 'should call .to_a on sent models' do
        result = MiscComponent::Interactors::MergeModels.call(models: [Post.all])
        expect(result.models).to eq(Post.all.to_a)
      end

      it 'should merge models' do
        models = [
          Post.where(post_type: Post::POST_TYPES[:image]),
          Post.where(post_type: Post::POST_TYPES[:offer_service])
        ]

        result = MiscComponent::Interactors::MergeModels.call(models: models)
        expect(result.models).to eq(models.flatten)
      end
    end
  end
end
