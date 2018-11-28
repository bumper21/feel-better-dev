class Api::V1::ExercisesController < ApplicationController

  def index
    exercises = Exercise.order created_at: :desc
    render json: exercises
  end

  def create
    exercise = Exercise.new exercise_params
    render json:
  end

  private

  def exercise_params
    params.require(:exercise).permit(:title, :body)
  end
end
