module PersonComponent
  module Interactors
    class LoadPersons
      include Interactor

      def call
        args = context.args
        persons_query = Person.all

        current_user = context.ctx[:current_user]
        if current_user.present?
          persons_query = persons_query.where(user_id: current_user.id)
        end

        ids = args[:ids]
        persons_query = persons_query.where(id: ids) if ids.present?

        context.persons = persons_query
      end
    end
  end
end
