class Api::V1::ExercisesController < Api::ApplicationController

  def index
    exercises = Exercise.order created_at: :desc
    render json: exercises
  end

  def create
    exercise = Exercise.new exercise_params
    render json: exercise
  end

  def show
    exercise = find_exercise exercise_params
  end

  def show_random
    exercise = Exercise.all.sample
    render json: exercise
  end

  private

  def find_exercise
    exercise = Exercise.find params[:id]
  end

  def exercise_params
    params.require(:exercise).permit(:title, :body)
  end
end
