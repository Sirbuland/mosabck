MiscComponent::Types::ErrorStatusEnumType = GraphQL::EnumType.define do
  name 'ErrorStatusEnum'
  GraphqlHelper::ERROR_STATUSES.values.each { |item| value item }
end
