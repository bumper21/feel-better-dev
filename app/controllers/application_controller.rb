class ApplicationController < ActionController::Base
  
  protect_from_forgery unless: -> { request.format.json? }

  private

  def current_user
    if session[:user_id].present?
      @current_user ||= User.find(session[:user_id])
    end
  end
  helper_method :current_user
  # by addinng the `helper_method` above 👆, we make this method available in
  # the view files. Normally, it's only available in controllers.

  def user_signed_in?
    current_user.present?
  end
  helper_method :user_signed_in?

  def authenticate_user!
    unless user_signed_in?
      flash[:danger] = 'You must sign in or sign up first!'
      redirect_to new_sessions_path
    end
  end

  rescue_from CanCan::AccessDenied do |exception|
    respond_to do |format|
      format.json { head :forbidden, content_type: 'text/html' }
      format.html { redirect_to main_app.root_url, notice: exception.message }
      format.js   { head :forbidden, content_type: 'text/html' }
    end
  end


end
