require 'dry/transaction'

module UserComponent
  module Interactors
    class CreateUser
      include Dry::Transaction(
        container: UserComponent::Containers::CreateUserContainer
      )

      step :validate_input, with: 'create_user_ops.validate_input'
      step :process_user, with: 'create_user_ops.process_user'
      step :process_classic_identity,
           with: 'create_user_ops.process_classic_identity'
      step :process_phone_identity,
           with: 'create_user_ops.process_phone_identity'

      [:facebook].each do |provider|
        step "process_#{provider}_identity".to_sym,
             with: "create_user_ops.process_#{provider}_identity"
      end

      %i[persist create_referral login_on_device mark_email_as_main create_jwt
         send_email_to_confirm_account].each do |op|
        step op
      end

      def persist(input)
        user = input[:user]
        if user.valid? && user.save
          location = GeoComponent::Interactors::GetLocationFromQuery.call(args:
            input).location
          user.location = location if location.present?
          input[:user] = user
          Right(input)
        else
          Left(ApplicationHelper.formatted_errors(user))
        end
      end

      def create_referral(input)
        ref_code = input[:refCode]
        if ref_code.present?
          Referral.create(status: :active, user: input[:user],
                          owner: User.find_by_ref_code(ref_code))
        end
        Right(input)
      end

      def login_on_device(input)
        input[:user].user_devices.create(device_id: input[:deviceId],
                                         logged_in: true)
        Right(input)
      end

      def mark_email_as_main(input)
        UserService.new(user: input[:user]).mark_email_as_main
        Right(input)
      end

      def create_jwt(input)
        input[:jwt] = JWT.encode(
          {
            user_id: input[:user].id,
            iss: 'mosaic',
            aud: 'client',
            device_id: input[:deviceId]
          },
          Rails.application.secrets.secret_key_base
        )
        Right(input)
      end

      def send_email_to_confirm_account(input)
        # TODO: re-enable when Notifications are added
        # input[:user].send_email_to_confirm_account
        Right(input)
      end
    end
  end
end
