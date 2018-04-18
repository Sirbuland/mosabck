GeoComponent::Types::GeoTaggableFilterType = GraphQL::EnumType.define do
  name 'GeoTaggableFilter'
  {
    text_posts: 'Text Posts',
    image_posts: 'Image Posts',
    offer_service_posts: 'Offer Service Posts',
    all_posts: 'All Posts',
    user: 'User'
  }.each do |key, val|
    value(GraphqlHelper::GEO_TAGGED_TYPES_FILTER.fetch(key), val)
  end
end
