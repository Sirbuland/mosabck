require 'dry/transaction'
require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module Pin
      class ValidateInput
        include Dry::Transaction::Operation
        def call(input)
          data = {
            code: input[:pinCode],
            password: input[:newPassword]
          }
          Right(data)
        end
      end
    end
  end
end
