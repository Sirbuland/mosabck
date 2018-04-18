module MiscComponent
  module Interactors
    class MergeModels
      include Interactor
      def call
        models = context.models.inject([]) do |arr, model|
          arr.flatten << model.to_a
        end
        context.models = models.flatten
      end
    end
  end
end
