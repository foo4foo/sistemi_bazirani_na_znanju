json.illnesses @possible_illnesses_data.each do |data|
  json.id data['illness']['id']
  json.name data['illness']['name']
  json.match data['match']
end
