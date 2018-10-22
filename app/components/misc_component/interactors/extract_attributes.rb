module MiscComponent
  module Interactors
    class ExtractAttributes
      include Interactor

      def call
        scheme = context.scheme
        args = context.args
        context.attributes = extract_attributes(scheme, args)
      end

      protected

      def extract_attributes(scheme, args)
        scheme
          .map { |old_key, new_key| [new_key, args[old_key]] }
          .to_h
          .compact
      end
    end
  end
end
