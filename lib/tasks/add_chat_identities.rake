task add_chat_identities: :environment do
  data = User.all
  bar = ProgressBar.new(data.count, :bar, :rate, :counter, :eta)
  data.each do |current_user|
    current_user.save
    bar.increment!
  end
end
