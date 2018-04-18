require 'dry/transaction'
require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module Pin
      class ResetPassword
        include Dry::Transaction::Operation
        RESET_PASSWORDS = %w[reset_password_email reset_password_phone].freeze
        def call(input)
          code = input[:pinCode]
          password = input[:password]
          identity = input[:identity]
          if RESET_PASSWORDS.include?(code.action)
            identity.reset_password(password)
            input[:status] = 'reset'
          end
          Right(input)
        end
      end
    end
  end
end
