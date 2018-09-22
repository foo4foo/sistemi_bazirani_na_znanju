class CreatePatientFiles < ActiveRecord::Migration[5.2]
  def change
    create_table :patient_files do |t|

      t.timestamps
    end
  end
end
