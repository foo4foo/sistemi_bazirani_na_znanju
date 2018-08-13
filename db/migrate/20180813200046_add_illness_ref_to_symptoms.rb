class AddIllnessRefToSymptoms < ActiveRecord::Migration[5.2]
  def change
    add_reference :symptoms, :illness, foreign_key: true
  end
end
