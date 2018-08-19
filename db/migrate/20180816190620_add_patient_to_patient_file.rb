class AddPatientToPatientFile < ActiveRecord::Migration[5.2]
  def change
    add_reference :patient_files, :patient, foreign_key: true
  end
end
