# This file is used by Rack-based servers to start the application.

require_relative 'config/environment'

use Rack::Cors do

  allow do
    origins '*'
    resource '/public/*', :headers => :any, :methods => [:get, :options, :post]
  end
end

run Rails.application
