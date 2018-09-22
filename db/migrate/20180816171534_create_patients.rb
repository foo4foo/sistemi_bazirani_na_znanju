class CreatePatients < ActiveRecord::Migration[5.2]
  def change
    create_table :patients do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.datetime :birth_date
      t.float :height
      t.float :weight

      t.timestamps
    end
    add_index :patients, :email, unique: true
  end
end
