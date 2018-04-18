class ApplicationRecord < ActiveRecord::Base
  self.abstract_class = true

  def resolvable_type
    class_name = self.class.to_s
    "#{class_name}Component::Types::#{class_name.classify}Type".constantize
  end
end
