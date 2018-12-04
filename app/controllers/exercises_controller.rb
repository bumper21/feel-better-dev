class ExercisesController < ApplicationController
  before_action :authenticate_user!, only: [:index, :new, :create, :edit, :update, :destroy]
  before_action :find_exercise, only: [:show, :edit, :update, :destroy]
  
  
  def index
    @exercises = Exercise.all.order(created_at: :desc)
  end

  def new
    @exercise = Exercise.new
  end

  def create
    @exercise = Exercise.new exercise_params
    @exercise.user = current_user

    if current_user.admin?
      @exercise.save
      redirect_to exercise_path(@exercise)
      flash[:success] = "You have created an exercise!"
    else
      render :new
      flash[:danger] = "You are not an admin!"
    end 
  end

  def edit

  end

  def update
    if @exercise.update exercise_params
      redirect_to exercise_path(@exercise)
    else
      render :edit
      flash[:danger] = "Exercise update failed"
    end
  end

  def show

  end

  private
  def find_exercise
    @exercise = Exercise.find params[:id]
  end

  def find_admin
    User.where({admin: :true})
  end

  def exercise_params
    params.require(:exercise).permit(:title, :body)
  end
end
