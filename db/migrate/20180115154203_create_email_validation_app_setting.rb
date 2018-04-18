class CreateEmailValidationAppSetting < ActiveRecord::Migration[5.1]
  def data
    AppSetting.create!(name: 'EmailVerificationOverride',
                       value: 'true',
                       active: true)
  end
end
