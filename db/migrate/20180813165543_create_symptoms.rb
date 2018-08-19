class CreateSymptoms < ActiveRecord::Migration[5.2]
  def change
    create_table :symptoms do |t|
      t.string :name
      t.integer :symptom_type, default: 0

      t.timestamps
    end
  end
end
