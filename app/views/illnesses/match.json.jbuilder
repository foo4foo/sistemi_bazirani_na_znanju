json.illnesses @possible_illnesses_data.each do |illness|
  json.id illness.id
  json.name illness.name
  json.match rand(0...25)
end
