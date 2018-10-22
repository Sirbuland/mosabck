ScreenerComponent::Mutations::UpdateScreener =
  GraphQL::Relay::Mutation.define do
    name 'updateScreener'

    return_field :screener, ScreenerComponent::Types::ScreenerType

    input_field :id, !types.ID
    input_field :name, !types.String
    input_field :text, types.String
    input_field :filters,
      types[!ScreenerComponent::Types::Inputs::ScreenerFilterInputType]

    resolve ScreenerComponent::Resolvers::UpdateScreenerResolver.new
  end
