require 'administrate/field/base'

class AvatarField < Administrate::Field::Base
  def url
    data.to_s
  end
end
