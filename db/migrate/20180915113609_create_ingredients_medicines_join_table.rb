class CreateIngredientsMedicinesJoinTable < ActiveRecord::Migration[5.2]
  def change
    create_join_table :ingredients, :medicines do |t|
      # t.index [:ingredient_id, :medicine_id]
      # t.index [:medicine_id, :ingredient_id]
    end
  end
end
