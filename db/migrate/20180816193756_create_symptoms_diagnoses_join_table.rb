class CreateSymptomsDiagnosesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :symptoms, :diagnoses do |t|
      # t.index [:symptom_id, :diagnosis_id]
      # t.index [:diagnosis_id, :symptom_id]
    end
  end
end
