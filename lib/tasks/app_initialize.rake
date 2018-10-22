task app_initialize: :environment do
  p 'Initialize basic roles'
  if Role.where(name: 'admin').exists?
    p 'Role admin is alredy exists!'
  else
    Role.create(name: 'admin', description: 'Simple Admin', priority: 100)
    p 'Role admin is created!'
  end

  if Role.where(name: 'super_admin').exists?
    p 'Role super_admin is alredy exists!'
  else
    Role.create(
      name: 'super_admin', description: 'Super Admin', priority: 1000
    )
    p 'Role super_admin is created!'
  end

  if Role.where(name: 'feedback_receiver').exists?
    p 'Role feedback_receiver is alredy exists!'
  else
    Role.create(
      name: 'feedback_receiver',
      description: 'User who receive a feedback',
      priority: 1000
    )
    p 'Role feedback_receiver is created!'
  end
  p 'done'
end
