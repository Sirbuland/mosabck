# lib/tasks/graphql.rake
task dump_schema: :environment do
  schema_defn = GraphqlSchema.to_definition
  schema_path = 'app/graphql/schema.graphql'
  File.write(Rails.root.join(schema_path), schema_defn)
  puts "Updated #{schema_path}"
end
