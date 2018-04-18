# lib/tasks/graphql.rake
task enable_postgis_extension_and_migrate: :environment do
  begin
    ActiveRecord::Base.connection.execute('CREATE EXTENSION postgis;')
  rescue
    p 'Already installed'
  end
  sh 'bundle exec rake db:migrate'
  sh 'bundle exec rake elasticsearch_index_and_import_all_models'
end
