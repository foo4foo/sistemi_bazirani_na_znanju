json.medicines @medicines.each do |medicine|
  json.partial! 'medicine', medicine: medicine
end
