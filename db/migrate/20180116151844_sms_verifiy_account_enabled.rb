class SmsVerifiyAccountEnabled < ActiveRecord::Migration[5.1]
  def data
    AppSetting.create!(name: 'SMSVerificationEnabled',
                       value: 'false',
                       active: false)
  end
end
