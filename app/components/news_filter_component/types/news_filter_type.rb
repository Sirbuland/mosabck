NewsFilterComponent::Types::NewsFilterType = GraphQL::ObjectType.define do
  name 'newsFilter'

  field :id, !types.ID
  field :name, types.String
  field :description, types.String
  field :searchTerm, types.String, property: :search_term
  field :selected, types.Boolean
  field :filterType, types.String, property: :filter_type
  field :priority, types.Int


	field :updatedAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(news_filter, _args, _ctx) { news_filter.updated_at }
  end

  field :createdAt do
    type MiscComponent::Types::DateTimeType
    resolve ->(news_filter, _args, _ctx) { news_filter.created_at }
  end

end
