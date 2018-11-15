require 'jwt'

class JsonWebToken
  JWKS_URL = "https://mosaicio.auth0.com/.well-known/jwks.json"
  # def self.encode(payload)
  #   payload.reverse_merge!(meta)
  #   JWT.encode(payload, Rails.application.secrets.secret_key_base)
  # end

  def self.decode(token)
    JWT.decode(token, nil,
               true, # Verify the signature of this token
               algorithm: 'RS256',
               iss: meta[:iss],
               verify_iss: true,
               # auth0_api_audience is the identifier for the API set up in the Auth0 dashboard
               aud: meta[:aud],
               verify_aud: true) do |header|
      jwks_hash[header['kid']]
    end
  end

  def self.jwks_hash
    jwks_raw = Net::HTTP.get URI(JWKS_URL)
    jwks_keys = Array(JSON.parse(jwks_raw)['keys'])
    Hash[
      jwks_keys
      .map do |k|
        [
          k['kid'],
          OpenSSL::X509::Certificate.new(
            Base64.decode64(k['x5c'].first)
          ).public_key
        ]
      end
    ]
  end

  # def self.decode(token)
  #   JWT.decode(token, Rails.application.secrets.secret_key_base, false)
  # end

  def self.valid_payload(payload)
    return false if expired(payload) || payload['iss'] != meta[:iss] ||
                    payload['aud'] != meta[:aud]
    true
  end

  def self.meta
    {
      exp: 1.days.from_now.to_i,
      #iss: 'mosaic',
      #aud: 'client'
      iss: 'https://mosaicio.auth0.com/',
      aud: 'L87ZBufH0OOTKi87k4VHGoGTQfaIFt4N'
    }
  end

  def self.expired(payload)
    expiration = payload['exp']
    return false unless expiration.present?
    Time.at(expiration) < Time.now
  end
end
