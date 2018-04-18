require 'dry/transaction'
require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module Pin
      class ActivatePhone
        include Dry::Transaction::Operation
        def call(input)
          code = input[:pinCode]
          identity = input[:identity]
          if code.action == 'activate_phone'
            identity.confirm
            input[:status] = 'activated'
          end
          Right(input)
        end
      end
    end
  end
end
