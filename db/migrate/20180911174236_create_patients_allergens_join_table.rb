class CreatePatientsAllergensJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :patients, :allergens do |t|
      # t.index [:patient_id, :allergen_id]
      # t.index [:allergen_id, :patient_id]
    end
  end
end
