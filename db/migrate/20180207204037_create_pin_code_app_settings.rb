class CreatePinCodeAppSettings < ActiveRecord::Migration[5.1]
  def data
    AppSetting.create!(
      name: 'PinCodeLength',
      value: 6,
      active: true
    )
    AppSetting.create!(
      name: 'PinCodeNumeric',
      value: true,
      active: true
    )
    AppSetting.create!(
      name: 'PinCodeHex',
      value: false,
      active: true
    )
    AppSetting.create!(
      name: 'PinCodeBase64',
      value: false,
      active: true
    )
    AppSetting.create!(
      name: 'PinCodeExpiration',
      value: '5.minutes',
      active: true
    )
  end
end
