class UserService
  def initialize(params)
    @user = params[:user]
  end

  # a copy of the Devise secure compare method
  def self.secure_compare(subject_a, subject_b)
    a_bytesize = subject_a.bytesize
    return false if subject_a.empty? || subject_b.empty? ||
                    a_bytesize != subject_b.bytesize
    aux = subject_a.unpack "C#{a_bytesize}"

    res = 0
    subject_b.each_byte { |byte| res |= byte ^ aux.shift }
    res.zero?
  end

  def login_user_on_device(device_id)
    device = @user.user_devices.find_by(device_id: device_id)
    if device.present?
      device.update_attribute(:logged_in, true)
    else
      UserDevice.create(user: @user, device_id: device_id, logged_in: true)
    end
  end

  def logout_user_on_device(device)
    device.update_attribute(:logged_in, false)
  end

  def log_in_on_device(params)
    UserDevice.create(user: @user,
                      device_id: params[:deviceId],
                      logged_in: true)
  end

  def update_user(params)
    params.delete(:id)
    params = translate_params_to_properties(params)

    params.each_key do |current_key|
      begin
        @user.update_attribute(current_key, params[current_key])
      rescue
        p "Couldn't update #{current_key}, it might be attribute from identity"
      end
    end
    update_identities_attributes(params)
    @user
  end

  def create_post(post_type, params, location = nil)
    post = Post.create(post_type: post_type,
                       payload: send("payload_for_#{post_type}", params),
                       user: @user)
    if location.present?
      post.location = location
      post.location.save
    end
    post
  end

  def mark_email_as_main
    main_email = @user.contact_methods.email.where(value: @user.email)
    main_email.update(main: true)
  end

  def self.payload_for_classic_identity(params)
    {
      email: params[:email],
      password: ::BCrypt::Password.create(params[:password]),
      email_confirmed: params[:emailConfirmed],
      version: 2
    }
  end

  def self.payload_for_facebook_identity(params)
    user_id = params[:facebookUserId] || params[:oauthUserId] ||
              params[:fbUserId]
    access_token = params[:facebookAccessToken] || params[:oauthAccessToken] ||
                   params[:fbAccessToken]
    { facebookUserId: user_id,
      facebookAccessToken: access_token,
      expirationDate: params[:expirationDate] }
  end

  def self.payload_for_google_identity(params)
    { googleUserId: params[:oauthUserId],
      googleAccessToken: params[:oauthAccessToken],
      expirationDate: params[:expirationDate] }
  end

  def self.payload_for_twitter_identity(params)
    { twitterUserId: params[:oauthUserId],
      twitterAccessToken: params[:oauthAccessToken],
      expirationDate: params[:expirationDate] }
  end

  def self.payload_for_github_identity(params)
    { githubUserId: params[:oauthUserId],
      githubAccessToken: params[:oauthAccessToken],
      expirationDate: params[:expirationDate] }
  end

  def self.payload_for_phone_identity(params)
    { phoneNumber: params[:phoneNumber], phone_confirmed: false }
  end

  private

  def translate_params_to_properties(params)
    params[:username] = params.delete :displayName
    params[:first_name] = params.delete :firstName
    params[:last_name] = params.delete :lastName
    params[:avatar_url] = params.delete :avatarUrl
    params[:backgound_img_url] = params.delete :backgroundImageUrl
    params
  end

  def update_identities_attributes(params)
    @user.auth_identities.each do |current_identity|
      params.each_key do |current_key|
        current_identity.update_attribute_inside_payload(current_key,
            params[current_key])
      end
    end
  end

  def payload_for_text_post(params)
    { title: params[:title], body: params[:body] }
  end

  def payload_for_image_post(params)
    { image_url: params[:imageUrl] }
  end
end
