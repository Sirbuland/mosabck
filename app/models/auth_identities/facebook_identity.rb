module AuthIdentities
  class FacebookIdentity < AuthIdentity
    def self.exists_similar?(args = {})
      payload = args[:payload]
      identities = FacebookIdentity.active
      identities.where(
        "payload->>'facebookUserId' = ?",
        payload[:facebookUserId]
      ).exists?
    end

    def oauth_user_id
      payload['facebookUserId']
    end

    def oauth_user_token
      payload['facebookAccessToken']
    end
  end
end
