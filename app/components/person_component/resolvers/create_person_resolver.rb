module PersonComponent
  module Resolvers
    class CreatePersonResolver < MiscComponent::Resolvers::StandardResolver
      def interactor
        PersonComponent::Organizers::CreatePerson
      end

      def on_success_return(result)
        { person: result.person }
      end
    end
  end
end
