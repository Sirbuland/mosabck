
class FileUploader < CarrierWave::Uploader::Base
  # Include RMagick or MiniMagick support:
  include CarrierWave::RMagick
  # include CarrierWave::MiniMagick
  # if Rails.env.development?
  #   storage :file
  # else
    storage :fog
  # end

  # Override the directory where uploaded files will be stored.
  # This is a sensible default for uploaders that are meant to be mounted:
  def store_dir
    "uploads/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  version :cover do
    process :resize_to_fit => [220, 284], :if => :image?
    process :pdf_preview => [220, 284], :if => :pdf?
    process :get_geometry
    # handles cases where fog misses the content type
    process :set_content_type

    def geometry
      @geometry
    end

    # We need to change the extension for PDF thumbnails to '.jpg'
    def full_filename(filename)
      filename = File.basename(filename, '.pdf') + '.jpg' if File.extname(filename)=='.pdf'
      "thumb_#{filename}"
    end
  end 

  def pdf_preview(width, height)
    # Read in first page of PDF and resize ([0] -> read the first page only)
    image = ::Magick::Image.read("#{current_path}[0]").first
    image.resize_to_fill!(width, height, ::Magick::NorthGravity)
    # Most PDFs have a transparent background, which becomes black when converted to jpg.
    # To override this, we must create a white canvas and composite the PDF onto the convas.
    # First check the image backgrounf color.
    # #FFFFFFFFFFFF0000 is how ImageMagick defines transparent
    if image.background_color != "#FFFFFFFFFFFF0000"
      # Create a blank canvas
      canvas = ::Magick::Image.new(image.columns, image.rows) { self.background_color = "#FFF" }
      # Merge PDF thumbnail onto canvas
      canvas.composite!(image, ::Magick::CenterGravity, ::Magick::OverCompositeOp)
      # Save as .jpg. We need to change the file extension here so that the fog gem picks it up and
      # sets the correct mime type. Otherwise the mime type will be set to PDF, which confuses browsers.
      canvas.write("jpg:#{current_path}")
    else
      # If the imag ebackground color is transparent we don't need to worry about the canvas.
      image.write("jpg:#{current_path}")
    end
    file.move_to File.basename(filename, '.pdf') + '.jpg'
    # Free memory allocated by RMagick which isn't managed by Ruby
    image.destroy!
    canvas.destroy! unless canvas.nil?
  rescue ::Magick::ImageMagickError => e
    Rails.logger.error "Failed to create PDF thumbnail: #{e.message}"
    raise CarrierWave::ProcessingError, "is not a valid PDF file"
  end

  def set_content_type(*args)
    self.file.instance_variable_set(:@content_type, "image/jpeg")
  end


  def convert_cover(format)
    manipulate! do |img| # this is ::MiniMagick::Image instance
      img.format(format.to_s.downcase, 0)
      img
    end
  end

  # Add a white list of extensions which are allowed to be uploaded.
  # For images you might use something like this:
  def extension_whitelist
    %w(jpg jpeg gif png pdf)
  end
  
  private

  def thumbable?(file)
    image?(file) || pdf?(file)
  end

  def image?(file)
    file.content_type.include? 'image'
  end

  def pdf?(file)
    file.content_type == 'application/pdf'
  end

  def get_geometry
    if (@file)
      img = ::Magick::Image::read(@file.file).first
      @geometry = { :width => img.columns, :height => img.rows }
    end
  end

end
