class CreateSymptomsIllnessesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :symptoms, :illnesses do |t|
      # t.index [:symptom_id, :illness_id]
      # t.index [:illness_id, :symptom_id]
    end
  end
end
