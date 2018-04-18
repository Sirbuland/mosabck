require 'dry/transaction'

module UserComponent
  module Containers
    class ActivatePinContainer
      extend Dry::Container::Mixin

      namespace 'activate_pin_ops' do |ops|
        ops.register 'validate_input' do
          ::UserComponent::Interactors::Pin::ValidateInput.new
        end

        ops.register 'find_pin' do
          ::UserComponent::Interactors::Pin::FindPin.new
        end

        ops.register 'find_pin_for_action' do
          ::UserComponent::Interactors::Pin::FindPinForAction.new
        end

        ops.register 'find_identity' do
          ::UserComponent::Interactors::Pin::FindIdentity.new
        end

        ops.register 'activate_email' do
          ::UserComponent::Interactors::Pin::ActivateEmail.new
        end

        ops.register 'activate_phone' do
          ::UserComponent::Interactors::Pin::ActivatePhone.new
        end

        ops.register 'reset_password' do
          ::UserComponent::Interactors::Pin::ResetPassword.new
        end

        ops.register 'void_pin' do
          ::UserComponent::Interactors::Pin::VoidPin.new
        end
      end
    end
  end
end
