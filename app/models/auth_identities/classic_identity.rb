module AuthIdentities
  class ClassicIdentity < AuthIdentity
    scope :by_email, (lambda do |email|
      where("payload->>'email' = ?", email)
    end)

    validates_email_format_of :email

    def self.exists_similar?(args = {})
      payload = args[:payload]
      identities = AuthIdentity.classic.active
      identities.where(
        "payload->>'email' = ?",
        payload[:email]
      ).exists?
    end

    def email
      payload['email']
    end

    def confirm
      data = payload
      data['email_confirmed'] = true
      update(payload: data)
    end

    def reset_password(password)
      update_attribute_inside_payload(
        'password', BCrypt::Password.create(password)
      )
    end
  end
end
