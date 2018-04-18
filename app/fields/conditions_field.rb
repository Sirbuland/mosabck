require 'administrate/field/base'

class ConditionsField < Administrate::Field::Base
  def to_s
    data
  end
end
