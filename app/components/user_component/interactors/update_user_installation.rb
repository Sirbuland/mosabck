module UserComponent
  module Interactors
    class UpdateUserInstallation
      include Interactor

      def call
        args = context.args[:updateUserInstallation]
        user = User.find_by(id: args['userId'])
        if user.present?
          current_installation = installation_for_user(user, args)
          if current_installation.present?
            update_installation(current_installation, args)
          else
            new_installation(user, args)
          end
        else
          error_msg = I18n.t('errors.messages.not_found', entity: 'User')
          context.fail!(message: error_msg)
        end
        context.user = user
      end

      private

      def installation_for_user(user, args)
        user
          .installations
          .joins(:token)
          .where(tokens: { token: args[:token],
                           token_type: args[:tokenType] })
          .first
      end

      def update_installation(current_installation, args)
        current_installation.app_version = args[:appVersion]
        current_installation.save
        errors = current_installation.errors
        context.fail!(message: errors) if errors.present?
      end

      def new_installation(user, args)
        installation = Installation.create(device_type: args[:deviceType],
                                           app_version: args[:appVersion],
                                           user: user)
        installation.token = hydrate_token args
        context.fail!(message: installation.errors) unless installation.save
      end

      def hydrate_token(args)
        Token.new(token: args[:token], token_type: args[:tokenType])
      end
    end
  end
end
