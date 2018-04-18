module Admin
  class UsersController < Admin::ApplicationController
    # To customize the behavior of this controller,
    # you can overwrite any of the RESTful actions. For example:
    #
    # def index
    #   super
    #   @resources = User.
    #     page(params[:page]).
    #     per(10)
    # end

    # Define a custom finder by overriding the `find_resource` method:
    # def find_resource(param)
    #   User.find_by!(slug: param)
    # end

    # See https://administrate-prototype.herokuapp.com/customizing_controller_actions
    # for more information
    #

    def update
      data = resource_params.to_h
      data[:rules] = JSON.parse(data[:rules])
      params_for_update = data.merge(
        notification_rules: normalize_notification_rules
      )
      if requested_resource.update(params_for_update)
        redirect_to(
          [namespace, requested_resource],
          notice: translate_with_resource('update.success')
        )
      else
        render :edit, locals: {
          page: Administrate::Page::Form.new(dashboard, requested_resource)
        }
      end
    end

    def resource_params
      params.require(resource_class.model_name.param_key)
            .permit(dashboard.permitted_attributes)
            .transform_values { |val| read_param_value(val) }
    end

    def normalize_notification_rules
      input_data = params.require(:user).require(:notification_rules).permit(
        phone: phone_fields,
        email: email_fields
      ).to_h
      %i[phone email].inject(input_data) do |data, channel|
        transform_channels_data(channel, data)
      end
    end

    def phone_fields
      phones = { all: base_allowed_fields }
      requested_resource.auth_identities.phone.map(&:id).each do |id|
        phones[id] = base_allowed_fields
      end
      phones
    end

    def email_fields
      emails = { all: base_allowed_fields }
      requested_resource.auth_identities.classic.map(&:id).each do |id|
        emails[id] = base_allowed_fields
      end
      emails
    end

    def base_allowed_fields
      @base_allowed_fields ||=
        ConditionalNotification::VALUES_TYPES.map do |value_type|
          value_type.gsub(/\W+/, '_').downcase
        end
    end

    def transform_channel_data(channel_data)
      result = base_allowed_fields.each_with_object({}) do |name, sum|
        sum[name] = channel_data.fetch(name) { 'off' } == 'on'
        sum
      end
      result = true if result.all? { |_k, value| value }
      result
    end

    def transform_channels_data(channel_name, input_data)
      data = input_data[channel_name]
      data.each do |key, channel_data|
        data[key] = transform_channel_data(channel_data)
      end
      input_data[channel_name] = data
      input_data
    end
  end
end
