require 'dry/transaction'
require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module Pin
      class FindPin
        include Dry::Transaction::Operation
        def call(input)
          code = PinCode.where(value: input[:code], status: :active)
                        .where('expiration_date > ?', Time.zone.now)
                        .take
          input[:pinCode] = code
          msg = I18n.t('errors.messages.not_found', entity: 'Pincode')
          code.present? ? Right(input) : Left(msg)
        end
      end
    end
  end
end
