require 'dry/transaction'
require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module Pin
      class ActivateEmail
        include Dry::Transaction::Operation
        def call(input)
          code = input[:pinCode]
          identity = input[:identity]
          if code.action == 'activate_email'
            identity.confirm
            activate_contact_method input
            input[:status] = 'activated'
          end
          Right(input)
        end

        # TODO: in the future we will decide which email we are going to use
        # contact method main will be the same as auth identity email.
        def activate_contact_method(input)
          identity = input[:identity]
          email = identity.payload['email']
          main_contact_method =
            identity.user.contact_methods.main.first
          return unless main_contact_method.present?
          return unless main_contact_method.value == email
          main_contact_method.update_attributes(verified: true,
                                                confirmed: true)
        end
      end
    end
  end
end
