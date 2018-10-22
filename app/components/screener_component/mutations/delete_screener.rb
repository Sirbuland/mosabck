ScreenerComponent::Mutations::DeleteScreener =
  GraphQL::Relay::Mutation.define do
    name 'deleteScreener'

    return_field :screener, ScreenerComponent::Types::ScreenerType

    input_field :id, !types.ID

    resolve ScreenerComponent::Resolvers::DeleteScreenerResolver.new
  end
