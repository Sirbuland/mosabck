require 'dry/transaction'

module UserComponent
  module Containers
    class CreateUserContainer
      extend Dry::Container::Mixin

      namespace 'create_user_ops' do |ops|
        ops.register 'validate_input' do
          ::UserComponent::Interactors::UserCreate::ValidateInput.new
        end

        ops.register 'process_user' do
          ::UserComponent::Interactors::UserCreate::ProcessUser.new
        end

        ops.register 'process_classic_identity' do
          ::UserComponent::Interactors::UserCreate::ProcessClassicIdentity.new
        end

        ops.register 'process_phone_identity' do
          ::UserComponent::Interactors::UserCreate::ProcessPhoneIdentity.new
        end

        ops.register 'process_facebook_identity' do
          ::UserComponent::Interactors::UserCreate::ProcessFacebookIdentity.new
        end
      end
    end
  end
end
