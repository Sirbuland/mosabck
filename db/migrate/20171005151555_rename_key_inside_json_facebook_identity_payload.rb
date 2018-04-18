class RenameKeyInsideJsonFacebookIdentityPayload < ActiveRecord::Migration[5.1]
  def data
    if column_exists? :auth_identities, :type
      AuthIdentity.facebook.each do |current|
        new_payload = current.payload
        new_payload['fbUserId'] = new_payload['socialUserId']
        new_payload.delete('socialUserId')
        current.payload = new_payload
        current.save
      end
    end
  end

  def rollback
    AuthIdentity.facebook.each do |current|
      new_payload = current.payload
      new_payload['socialUserId'] = new_payload['fbUserId']
      new_payload.delete('fbUserId')
      current.payload = new_payload
      current.save
    end
  end
end
