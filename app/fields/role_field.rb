require 'administrate/field/base'

class RoleField < Administrate::Field::Base
  def to_s
    data
  end
end
