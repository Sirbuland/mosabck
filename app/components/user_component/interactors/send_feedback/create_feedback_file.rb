module UserComponent
  module Interactors
    module SendFeedback
      class CreateFeedbackFile
        include Interactor

        FIELDS_TO_PUT = %i[
          created_at
          user_first_name
          user_last_name
          user_email
          page
          message
        ].freeze

        def call
          from = context.from
          to = context.to
          feedback_query = Feedback.preload(:user)
          if to.present? && from.present?
            feedback_query = feedback_query.where(created_at: from..to)
          end

          context.fail!(message: 'No feedbacks') if feedback_query.count.zero?

          Tempfile.open(['feedback', '.csv']) do |file|
            CSV.open(file, 'w+') do |csv|
              csv << headers
              feedback_query.find_each do |feedback|
                csv << extract_feedback_fields(feedback)
              end
            end

            context.file = file
          end
        end

        private

        def headers
          FIELDS_TO_PUT.map { |field| field.to_s.tr('_', ' ') }
        end

        def extract_feedback_fields(feedback)
          FIELDS_TO_PUT.map { |field| feedback.public_send(field) }
        end
      end
    end
  end
end
