class Feedback < ApplicationRecord
  store_accessor :additional_info, :page, :user_first_name, :user_last_name,
                 :user_email

  belongs_to :user
end
