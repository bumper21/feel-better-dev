class Api::V1::FavoriteExercisesController < Api::ApplicationController


  def index

  end

  def create
    exercise = Exercise.find(params[:exercise_id])
    favorite_exercise = FavoriteExercise.new(user: current_user, exercise: exercise)

    if favorite_exercise.save
      render json: { status: :success }
      render json: favorite_exercise
    else 
      render json: { status: :error }
    end
  end
  
end
