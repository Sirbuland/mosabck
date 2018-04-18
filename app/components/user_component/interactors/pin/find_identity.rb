require 'dry/transaction'
require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module Pin
      class FindIdentity
        include Dry::Transaction::Operation
        def call(input)
          code = input[:pinCode]
          identity = code.auth_identity
          msg = I18n.t('errors.messages.not_found', entity: 'Auth Identity')
          input[:identity] = identity
          identity.present? ? Right(input) : Left(msg)
        end
      end
    end
  end
end
