require 'dry/transaction'
require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module Pin
      class VoidPin
        include Dry::Transaction::Operation
        def call(input)
          pin_code = input[:pinCode]
          msg = I18n.t('errors.messages.problems_voiding_pin')
          pin_code.update_attributes(status: 'used') ? Right(input) : Left(msg)
        end
      end
    end
  end
end
