class CreateFavoriteExercises < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_exercises do |t|
      t.references :user, foreign_key: true
      t.references :exercise, foreign_key: true

      t.timestamps
    end
  end
end
