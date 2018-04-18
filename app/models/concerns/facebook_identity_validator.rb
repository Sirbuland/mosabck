class FacebookIdentityValidator < ActiveModel::Validator
  def validate(record)
    fb_user_id = record.payload['facebookUserId']
    existent = AuthIdentities::FacebookIdentity
               .by_facebook_user_id(fb_user_id).present?
    record.errors.add(:payload, 'User already registered') if existent
  end
end
