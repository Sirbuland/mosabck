module AssetMappingLinkage
  extend ActiveSupport::Concern

  included do
  	has_many :asset_mappings

  	before_destroy :unlink_asset_mapping

  	def unlink_asset_mapping
  		foreign_key_name = "#{self.class.to_s.underscore}_id"
  		asset_mappings.update( :"#{foreign_key_name}" => nil )
  	end
  end
end
