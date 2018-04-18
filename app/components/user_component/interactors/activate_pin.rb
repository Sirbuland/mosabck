require 'dry/transaction'

module UserComponent
  module Interactors
    class ActivatePin
      include Dry::Transaction(
        container: UserComponent::Containers::ActivatePinContainer
      )
      step :validate_input, with: 'activate_pin_ops.validate_input'
      step :find_pin, with: 'activate_pin_ops.find_pin'
      step :find_identity, with: 'activate_pin_ops.find_identity'
      step :activate_email, with: 'activate_pin_ops.activate_email'
      step :activate_phone, with: 'activate_pin_ops.activate_phone'
      step :reset_password, with: 'activate_pin_ops.reset_password'
    end
  end
end
