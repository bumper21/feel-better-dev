class Api::V1::VideoController < Api::ApplicationController
  def index
    render json Video.all
  end
end
