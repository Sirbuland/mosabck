module AuthIdentities
  class PhoneIdentity < AuthIdentity
    validate :required_payload_attrs_present

    scope :by_phone_number, (lambda do |phone_number|
      where("payload->>'phoneNumber' = ?", phone_number)
    end)

    def self.exists_similar?(args = {})
      payload = args[:payload]
      identities = AuthIdentity.phone.active
      identities.where(
        "payload->>'phoneNumber' = ? ", payload[:phoneNumber]
      ).exists?
    end

    def required_payload_attrs_present
      return if payload['phoneNumber'].present?
      errors.add(:payload, 'phoneNumber must be present')
    end

    def confirm
      data = payload
      data['phone_confirmed'] = true
      update(payload: data)
    end
  end
end
