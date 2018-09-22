class CreatePatientsIllnessesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :patients, :illnesses do |t|
      # t.index [:patient_id, :illness_id]
      # t.index [:illness_id, :patient_id]
    end
  end
end
