require 'administrate/field/base'

class NotificationRulesField < Administrate::Field::Base
  def to_s
    data
  end

  def self.permitted_attribute(attr, _options = nil)
    { attr.to_sym => %i[phone email] }
  end
end
