ResearchComponent::Types::Inputs::AuthorInputType =
  GraphQL::InputObjectType.define do
    name 'AuthorInput'

    argument :name,          types.String
    argument :description,   types.String

  end
