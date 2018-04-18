require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module UserCreate
      class ProcessFacebookIdentity
        include Dry::Transaction::Operation

        def call(input)
          data = input[:facebook]
          if data.present?
            user_id = data[:oauthUserId]
            token = data[:oauthAccessToken]
            if user_id.present? && token.present?
              payload = UserService.payload_for_facebook_identity(
                oauthUserId: user_id,
                oauthAccessToken: token,
                expirationDate: data[:expirationDate]
              )
              identity_class = AuthIdentities::FacebookIdentity
              exists = identity_class.exists_similar?(payload: payload)
              return Left(I18n.t('errors.messages.payload_exists')) if exists
              input[:user].auth_identities << identity_class.new(
                payload: payload
              )
            end
          end
          Right(input)
        end
      end
    end
  end
end
