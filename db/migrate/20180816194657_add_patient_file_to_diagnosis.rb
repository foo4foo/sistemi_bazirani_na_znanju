class AddPatientFileToDiagnosis < ActiveRecord::Migration[5.2]
  def change
    add_reference :diagnoses, :patient_file, foreign_key: true
  end
end
