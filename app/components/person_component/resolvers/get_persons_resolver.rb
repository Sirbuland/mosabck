module PersonComponent
  module Resolvers
    class GetPersonsResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        PersonComponent::Interactors::LoadPersons
      end

      def on_success_return(result)
        result.persons
      end
    end
  end
end
