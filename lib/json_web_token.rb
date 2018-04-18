require 'jwt'

class JsonWebToken
  def self.encode(payload)
    payload.reverse_merge!(meta)
    JWT.encode(payload, Rails.application.secrets.secret_key_base)
  end

  def self.decode(token)
    JWT.decode(token, Rails.application.secrets.secret_key_base, false)
  end

  def self.valid_payload(payload)
    return false if expired(payload) || payload['iss'] != meta[:iss] ||
                    payload['aud'] != meta[:aud]
    true
  end

  def self.meta
    {
      exp: 1.days.from_now.to_i,
      iss: 'mosaic',
      aud: 'client'
    }
  end

  def self.expired(payload)
    expiration = payload['exp']
    return false unless expiration.present?
    Time.at(expiration) < Time.now
  end
end
