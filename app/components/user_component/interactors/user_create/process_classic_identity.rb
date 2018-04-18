require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module UserCreate
      class ProcessClassicIdentity
        include Dry::Transaction::Operation

        def call(input)
          if input[:email].present? && input[:password].present?
            payload = UserService.payload_for_classic_identity(input)
            data = { payload: payload }
            condition = AuthIdentities::ClassicIdentity.exists_similar?(data)
            return Left('Email already taken') if condition
            identity = AuthIdentities::ClassicIdentity.new(payload: payload)
            user = input[:user]
            user.auth_identities << identity
            PinCode.create(
              user: user,
              action: 'activate_email',
              auth_identity: identity,
              value: PinCode.unused_pin_code,
              expiration_date: Time.zone.now + 1.day
            )
          end
          Right(input)
        end
      end
    end
  end
end
