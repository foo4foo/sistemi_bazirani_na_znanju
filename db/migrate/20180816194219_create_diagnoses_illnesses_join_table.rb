class CreateDiagnosesIllnessesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :diagnoses, :illnesses do |t|
      # t.index [:diagnosis_id, :illness_id]
      # t.index [:illness_id, :diagnosis_id]
    end
  end
end
