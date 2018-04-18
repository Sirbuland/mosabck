require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module UserCreate
      class ProcessPhoneIdentity
        include Dry::Transaction::Operation

        def call(input)
          if input[:phoneNumber].present?
            payload = UserService.payload_for_phone_identity(input)
            unless AuthIdentities::PhoneIdentity.exists_similar?(
              payload: payload
            )
              identity = AuthIdentities::PhoneIdentity.new(payload: payload)
              user = input[:user]
              user.auth_identities << identity
              PinCode.create(
                user: user,
                action: 'activate_phone',
                auth_identity: identity,
                value: PinCode.unused_pin_code,
                expiration_date: Time.zone.now + 1.day
              )
            end
          end
          Right(input)
        end
      end
    end
  end
end
