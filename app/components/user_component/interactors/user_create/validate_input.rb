require 'dry/transaction/operation'

module UserComponent
  module Interactors
    module UserCreate
      class ValidateInput
        include Dry::Transaction::Operation

        def call(input)
          email = input[:email]
          if email.present? && CheckEmailApproval.call(email: email).failure?
            msg = I18n.t('signup.errors.email_not_approved', email: email)
            return Left(msg: msg, status: :unauthorized, attr: :email)
          end

          result = update_input_params(input)
          [:facebook, :google, :github, :twitter].each do |provider|
            oauth_data = input[provider]
            next unless oauth_data.present?
            result[provider] = {
              oauthUserId: oauth_data[:oauthUserId],
              oauthAccessToken: oauth_data[:oauthAccessToken],
              expirationDate: oauth_data[:expirationDate]
            }
          end
          Right(result)
        end

        private

        def update_input_params(input)
          {
            username: input[:displayName],
            first_name: input[:firstName],
            last_name: input[:lastName],
            bio: input[:bio],
            avatar_url: input[:avatarUrl],
            subscribed_to_newsletter: input[:subscribed_to_newsletter],
            birthdate: input[:birthdate],
            phoneNumber: input[:phoneNumber],
            email: input[:email],
            password: input[:password],
            emailConfirmed: input[:emailConfirmed],
            backgroundImageUrl: input[:backgroundImageUrl],
            refCode: input[:refCode],
            sex: input[:sex],
            geoMeta: input[:geoMeta]
          }
        end
      end
    end
  end
end
