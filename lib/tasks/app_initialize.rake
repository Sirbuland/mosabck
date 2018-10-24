task app_initialize: :environment do
  p 'Initialize basic roles'
  if Role.where(name: 'admin').exists?
    p 'Role admin is alredy exists!'
  else
    Role.create(name: 'admin', description: 'admin', priority: 100)
    p 'Role admin is created!'
  end

  if Role.where(name: 'feedback_receiver').exists?
    p 'Role feedback_receiver is alredy exists!'
  else
    Role.create(
      name: 'feedback_receiver',
      description: 'receive feedback emails',
      priority: 1000
    )
    p 'Role feedback_receiver is created!'
  end
  p 'done'
end
