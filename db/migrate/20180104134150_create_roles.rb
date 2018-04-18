class CreateRoles < ActiveRecord::Migration[5.1]
  def up
    create_table :roles do |t|
      t.json :schema, default: {}
      t.string :name
      t.string :description
      t.integer :priority

      t.timestamps
    end
    Role.create(
      name: 'Admin',
      description: 'Simple Admin role',
      priority: 75,
      schema: ApplicationPolicy::DEFAULT_POLICIES[:admin]
    )
    Role.create(
      name: 'Super Admin',
      description: 'Super Admin role',
      priority: 100,
      schema: ApplicationPolicy::DEFAULT_POLICIES[:superadmin]
    )
    Role.create(
      name: 'User',
      description: 'Simple User role',
      priority: 0,
      schema: ApplicationPolicy::DEFAULT_POLICIES[:user]
    )
    Role.create(
      name: 'Moderator',
      description: 'Moderator role',
      priority: 50,
      schema: ApplicationPolicy::DEFAULT_POLICIES[:moderator]
    )
  end

  def down
    drop_table :roles
  end
end
