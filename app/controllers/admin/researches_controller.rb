module Admin
  class ResearchesController < Admin::ApplicationController
    # To customize the behavior of this controller,
    # you can overwrite any of the RESTful actions. For example:
    #
    # def index
    #   super
    #   @resources = Research.
    #     page(params[:page]).
    #     per(10)
    # end

    # Define a custom finder by overriding the `find_resource` method:
    # def find_resource(param)
    #   Research.find_by!(slug: param)
    # end


    def find_resource(param)
        Research.friendly.find(param)
    end


    # See https://administrate-prototype.herokuapp.com/customizing_controller_actions
    # for more information
  end
end
