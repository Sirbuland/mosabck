# frozen_string_literal: true

require 'json_web_token'

class GraphqlController < ApplicationController
  include ActionView::Helpers::UrlHelper
  before_action :authenticate_from_jwt

  def execute
    query_string = params[:query]
    query_variables = ensure_hash params[:variables]
    context = { optics_agent: :no_rack }
    if @user_and_device.present?
      context[:current_user_id] = @user_and_device.current_user
      context[:current_device_id] = @user_and_device.current_device
    end
    result = GraphqlSchema.execute(query_string,
      variables: query_variables, context: context)
    errors = result.to_h['errors']
    context_failed = errors.present?
    status = context_failed ? errors[0]['status'] : :ok
    render json: result, status: status
  end

  def authenticate_from_jwt
    interactors_context = { query: params[:query], headers: request.headers,
                            referrer: request.referrer || '' }
    check_jwt = CheckJwtRequired.call(interactors_context)
    return unless check_jwt.jwt_required
    valid_jwt =
      MiscComponent::Interactors::ValidateJWT.call(interactors_context)
    error = valid_jwt.success? ? nil : valid_jwt.message
    unless error.present?
      interactors_context[:jwt_payload] = valid_jwt.jwt_payload
      @user_and_device = AuthenticationComponent::Interactors::
        AuthenticateUserFromJwt.call(interactors_context)
      err_msg = @user_and_device.message
      error = err_msg unless @user_and_device.success?
    end
    error_status = :unprocessable_entity
    render json: { errors: error }, status: error_status if error.present?
  end

  private

  def ensure_hash(ambiguous_param)
    case ambiguous_param
    when String
      ambiguous_param.present? ? ensure_hash(JSON.parse(ambiguous_param)) : {}
    when Hash, ActionController::Parameters
      ambiguous_param
    when nil
      {}
    else
      error_msg = "Unexpected parameter: #{ambiguous_param}"
      render json: { errors: error_msg }, status: :unprocessable_entity
    end
  end

  def create_mutation?(query)
    create_mutations = Regexp.union(CheckJwtRequired::CREATE_USER_MUTATIONS)
    query.include?('mutation') && query.match?(create_mutations)
  end

  def special_referrer?(referrer)
    referrer.include?('graphiql') || referrer.include?('voyager')
  end
end
