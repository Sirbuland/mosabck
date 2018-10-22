ScreenerComponent::Mutations::CreateScreener =
  GraphQL::Relay::Mutation.define do
    name 'createScreener'

    return_field :screener, ScreenerComponent::Types::ScreenerType

    input_field :name, !types.String
    input_field :text, !types.String
    input_field :filters,
      types[!ScreenerComponent::Types::Inputs::ScreenerFilterInputType]

    resolve ScreenerComponent::Resolvers::CreateScreenerResolver.new
  end
