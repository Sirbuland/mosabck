task :code_analysis do
  sh 'rubocop app config lib'
  sh 'reek app config lib -c .reek'
  sh 'rails_best_practices'
end
