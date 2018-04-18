class MigratePasswordsToHashes < ActiveRecord::Migration[5.1]
  def data
    AuthIdentities::ClassicIdentity.where(
      "COALESCE((payload->>'version')::integer, 1) <= 2"
    ).find_each do |identity|
      payload = identity.payload
      payload['version'] = 2
      payload['password'] = ::BCrypt::Password.create(payload['password'])
      identity.update(payload: payload)
    end
  end
end
