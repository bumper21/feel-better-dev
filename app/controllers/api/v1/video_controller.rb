class Api::V1::VideoController < ApplicationController
  def index
    render json Video.all
  end
end
