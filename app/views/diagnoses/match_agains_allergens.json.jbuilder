json.medicines @allergen_medicines.each do |medicine|
  json.partial! 'medicine', medicine: medicine
end
