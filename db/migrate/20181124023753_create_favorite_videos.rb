class CreateFavoriteVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :favorite_videos do |t|

      t.timestamps
    end
  end
end
