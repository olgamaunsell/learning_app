class CreateLearnedLessons < ActiveRecord::Migration[5.1]
  def change
    create_table :learned_lessons do |t|
      t.string :description
      t.text :blocker
      t.text :resolution

      t.timestamps
    end
  end
end
