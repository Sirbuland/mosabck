class EmailConfirmAccountEnabled < ActiveRecord::Migration[5.1]
  def data
    AppSetting.create!(name: 'EmailConfirmationEnabled',
                       value: 'true',
                       active: true)
  end
end
