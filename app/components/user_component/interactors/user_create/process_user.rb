require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module UserCreate
      class ProcessUser
        include Dry::Transaction::Operation

        # TODO: FIX USERNAME
        def call(input)
          input[:user] = User.new(
            email: input[:email],
            username: input[:username],
            first_name: input[:first_name],
            last_name: input[:last_name],
            bio: input[:bio],
            avatar_url: input[:avatar_url] || '',
            subscribed_to_newsletter: input[:subscribedToNewsLetter],
            birthdate: input[:birthdate],
            backgound_img_url: input[:backgroundImageUrl] || '',
            sex: input[:sex]
          )
          Right(input)
        end
      end
    end
  end
end
