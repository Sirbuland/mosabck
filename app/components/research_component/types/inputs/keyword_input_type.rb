ResearchComponent::Types::Inputs::KeywordInputType =
  GraphQL::InputObjectType.define do
    name 'KeywordInput'

    argument :name,          types.String
    argument :description,   types.String

  end
