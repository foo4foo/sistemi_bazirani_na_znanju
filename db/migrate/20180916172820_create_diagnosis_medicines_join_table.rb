class CreateDiagnosisMedicinesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :diagnoses, :medicines do |t|
      # t.index [:diagnosis_id, :medicine_id]
      # t.index [:medicine_id, :diagnosis_id]
    end
  end
end
