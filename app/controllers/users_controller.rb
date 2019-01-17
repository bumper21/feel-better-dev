class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new user_params

    if @user.save
      session[:user_id] = @user.id
      flash[:success] = 'Thank you for signing up!'
      redirect_to root_path
    else
      #When user fails to sign up, the flash alert renders. But even when exited, if a user
      #goes to another page the flash alert will re-render. Low priority but needs fix
      flash[:danger] = "Failed to Sign Up"
      render :new
    end
  end

  def show
    @user = User.find params[:id]
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation, :username)
  end
end
