json.id medicine.id
json.name medicine.name
json.ingredients medicine.ingredients.each do |ingredient|
  json.id ingredient.id
  json.name ingredient.name
end
