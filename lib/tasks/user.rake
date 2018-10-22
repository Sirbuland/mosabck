namespace :user do
  task :create_admin, [:email, :pass] => [:environment] do |_, args|
    email = args[:email]
    pass = args[:pass]

    if AuthIdentities::ClassicIdentity.by_email(email).present?
      puts 'Email already exists!'
    else
      payload = UserService.payload_for_classic_identity(
        email: email, password: pass
      )
      identity = AuthIdentities::ClassicIdentity.create(payload: payload)
      user = User.create(username: email)
      user.auth_identities << identity
      user.roles << Role.find_by(name: 'admin')
      puts 'Admin Created!'
    end
  end
end
