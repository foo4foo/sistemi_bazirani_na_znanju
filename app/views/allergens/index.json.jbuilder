json.allergens @allergens.each do |allergen|
  json.id allergen.id
  json.name allergen.name
end
