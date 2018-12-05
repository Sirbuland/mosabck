module PersonComponent
  module Interactors
    class SavePerson
      include Interactor

      def call
        person = context.person || Person.new
        person.update!(context.attributes)
        context.person = person
      end
    end
  end
end
