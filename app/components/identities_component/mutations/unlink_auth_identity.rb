IdentitiesComponent::Mutations::UnlinkAuthIdentity =
  GraphQL::Relay::Mutation.define do
    name 'UnlinkAuthIdentity'
    return_field :user, UserComponent::Types::UserType

    input_field :userId, !types.ID
    input_field :provider, !types.String

    resolve UserComponent::Resolvers::DetachSocialNetworkResolver.new
  end
