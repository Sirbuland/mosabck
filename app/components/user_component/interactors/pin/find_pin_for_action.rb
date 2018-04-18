require 'dry/transaction'
require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module Pin
      class FindPinForAction
        include Dry::Transaction::Operation
        def call(input)
          code = PinCode.where(value: input[:pinCode],
                               action: input[:action],
                               status: :active)
                        .where('expiration_date > ?', Time.zone.now)
                        .take
          msg = I18n.t('errors.messages.not_found', entity: 'Pincode')
          if code.present?
            input[:pinCode] = code
            Right(input)
          else
            Left(msg)
          end
        end
      end
    end
  end
end
