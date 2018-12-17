ResearchComponent::Types::Inputs::AuthorInputType =
  GraphQL::InputObjectType.define do
    name 'AuthorInput'

    argument :id, 					!types.ID
    argument :username,     types.String
    argument :description,  types.String
    argument :profession,   types.String
  end
