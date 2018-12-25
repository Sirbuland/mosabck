module UserComponent
  module Interactors
    class Update
      ALLOWED_PARAMS = {
        bio: :bio,
        displayName: :username,
        firstName: :first_name,
        lastName: :last_name,
        avatar: :avatar,
        phoneNumber: :phone_number,
        backgroundImageUrl: :backgound_img_url,
        birthdate: :birthdate,
        sex: :sex
      }.freeze

      include Interactor

      def call
        user = context.user
        args = context.args
        ALLOWED_PARAMS.each do |key, value|
          new_val = args[key]
          user.public_send("#{value}=", new_val) if new_val.present?
        end
        location = context.location
        user.save

        if location.present?
          user_location = user.location
          if user_location.present?
            data = location_attrs(user, location)
            location = Location.update(user_location.id, data)
          end
          user.location = location
        end
        context.location = location
      end

      def location_attrs(user, location)
        allowed = %i[country countryCode city
                     street streetNumber zip timeZone lonlat]
        data = allowed.map { |key| [key, location.public_send(key)] }.to_h
        data[:locateable_id] = user.id
        data[:locateable_type] = 'User'
        data
      end
    end
  end
end
