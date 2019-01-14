NewsFilterComponent::Mutations::DeleteNewsFilter =
  GraphQL::Relay::Mutation.define do
    name 'deleteNewsFilter'

    return_field :newsFilter, NewsFilterComponent::Types::NewsFilterType

    input_field :id, !types.ID

    resolve NewsFilterComponent::Resolvers::DeleteNewsFilterResolver.new
  end
