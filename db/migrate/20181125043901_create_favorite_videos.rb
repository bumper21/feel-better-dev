class CreateFavoriteVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_videos do |t|
      t.references :user, foreign_key: true
      t.references :video, foreign_key: true

      t.timestamps
    end
  end
end
