module CreateSlug
  extend ActiveSupport::Concern

  included do

    def create_slug
      title = self.title
      if title != nil and title.length >= 30
        new_title = title.at(0..29)

        new_array = title.from(30).split(' ')
        new_title += new_array[0] if title[30] != ' ' and title[31] != ' '

        array = new_title.split(' ')
        array.reverse.each do |x|
          if x.length <= 3 && x != array.first
            array.delete(x)
          else
            break
          end
        end
        title = array.join(" ")
      end
      title
    end

  end
end
