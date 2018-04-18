module UserComponent
  module Resolvers
    class UsernameResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), _ctx)
        desired_username = args[:username]
        available = !User.find_by(username: desired_username).present?
        { available: available,
          suggestions: available ? [] : suggestions(desired_username) }
      end

      def suggestions(desired_username)
        suggestions = []
        20.times do
          hipster_word = Faker::Hipster.word.parameterize
          suggestion = [desired_username, hipster_word].shuffle.join
          suggestions.push(suggestion)
        end

        used_suggestions = User.find_by(username: suggestions)
        if used_suggestions.present?
          suggestions -= used_suggestions.pluck(:username)
        end

        suggestions
      end
    end
  end
end
