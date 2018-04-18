module UserComponent
  module Operations
    class VerifyEmail
      include Dry::Transaction(
        container: UserComponent::Containers::ActivatePinContainer
      )
      step :find_pin_for_action, with: 'activate_pin_ops.find_pin_for_action'
      step :find_identity, with: 'activate_pin_ops.find_identity'
      step :activate_email, with: 'activate_pin_ops.activate_email'
      step :void_pin, with: 'activate_pin_ops.void_pin'
    end
  end
end
