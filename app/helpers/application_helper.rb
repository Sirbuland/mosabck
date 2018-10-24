# frozen_string_literal: true

module ApplicationHelper
  def self.formatted_errors(obj)
    messages = []
    obj.errors.messages.map do |key, value|
      raw_msg = value.first
      msg = raw_msg.is_a?(Array) ? raw_msg.to_sentence : raw_msg
      messages.push("#{key} #{msg}")
    end
    messages.join(',')
  end

  def self.h_and_sym(params)
    params = params.to_h if params.is_a?(GraphQL::Query::Arguments)
    params.deep_symbolize_keys!
  end

  def self.image_or_default(url)
    default_img = ''
    uri = URI.parse(url)
    %w[http https].include?(uri.scheme) ? url : default_img
  rescue URI::BadURIError
    default_img
  rescue URI::InvalidURIError
    default_img
  end
end
