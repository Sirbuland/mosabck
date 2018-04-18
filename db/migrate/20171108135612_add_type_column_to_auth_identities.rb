class AddTypeColumnToAuthIdentities < ActiveRecord::Migration[5.1]
  def up
    add_column :auth_identities, :type, :string

    AuthIdentity::IDENTITY_TYPES.each do |key, value|
      identity_name = "AuthIdentities::#{value.camelize}"
      AuthIdentity.public_send(key).update_all(type: identity_name)
    end

    remove_column :auth_identities, :identity_type
  end

  def down
    add_column :auth_identities, :identity_type, :string
    AuthIdentity::IDENTITY_TYPES.each do |_key, value|
      identity_name = "AuthIdentities::#{value.camelize}"
      identity_name.constantize.update_all(identity_type: value)
    end
    remove_column :auth_identities, :type
  end
end
