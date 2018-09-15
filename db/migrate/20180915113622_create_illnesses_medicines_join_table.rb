class CreateIllnessesMedicinesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :illnesses, :medicines do |t|
      # t.index [:illness_id, :medicine_id]
      # t.index [:medicine_id, :illness_id]
    end
  end
end
