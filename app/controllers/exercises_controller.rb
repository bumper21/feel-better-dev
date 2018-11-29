class ExercisesController < ApplicationController
  def index
    @exercises = Exercise.all
  end

  def new
    @exercise = Exercise.new
  end

  def create
    @exercise = Exercise.new exercise_params
    @exercise.user = find_admin

    if @exercise.save
      redirect_to exercise_path(@exercise)
    else
      render :new
    end 
  end

  private

  def find_admin
    User.where({admin: :true})
  end

  def exercise_params
    params.require(:exercise).permit(:title, :body)
  end
end
