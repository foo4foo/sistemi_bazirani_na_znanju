class CreateIllnesses < ActiveRecord::Migration[5.2]
  def change
    create_table :illnesses do |t|
      t.string :name
      t.string :description
      t.integer :group

      t.timestamps
    end
  end
end
