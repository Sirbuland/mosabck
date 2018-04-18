module UserComponent
  module Resolvers
    class ValidatePinResolver
      def call(_obj, args = ApplicationHelper.h_and_sym(args), _ctx)
        phone_number = args[:phoneNumber]
        email = args[:email]
        pin = args[:pinNumber]

        if phone_number.present?
          pin_by_phone(phone_number, pin)
        elsif email.present?
          pin_by_email(email, pin)
        else
          false
        end
      end

      def pin_by_phone(phone_number, pin)
        phone_identity =
          AuthIdentity.phone.where("payload->>'phoneNumber' = ?",
            phone_number).first
        compare_pin phone_identity, pin, 'phone'
      end

      def pin_by_email(email, pin)
        classic_identity =
          AuthIdentity.classic.where("payload->>'email' = ?",
            email).first
        compare_pin classic_identity, pin, 'email'
      end

      def compare_pin(identity, pin, channel)
        return false unless identity.present?
        user = User.find_by_id(identity.user_id)
        return false unless user.present?
        action = "reset_password_#{channel}"
        pin_code = user.pin_codes.active.where(action: action).first
        return false unless pin_code.present?
        pin_code.value == pin
      end
    end
  end
end
