class UpdateFbPayload < ActiveRecord::Migration[5.1]
  def change
    AuthIdentity.facebook.find_each do |identity|
      payload = identity.payload
      if payload['fbUserId'].present?
        payload['facebookUserId'] = payload['fbUserId']
      end
      if payload['fbAccessToken'].present?
        payload['facebookAccessToken'] = payload['fbAccessToken']
      end
      identity.update(payload: payload)
    end
  end
end
