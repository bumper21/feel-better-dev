class Api::ApplicationController < ApplicationController
  protect_from_forgery with: :null_session

  private
  def authenticate_user!
    unless user_signed_in?
      render(json: { error: ["Unauthorized"] }, status: 401)
    end
  end
end
