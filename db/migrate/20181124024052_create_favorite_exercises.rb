class CreateFavoriteExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_exercises do |t|

      t.timestamps
    end
  end
end
