json.symptoms @symptoms.each do |symptom|
  json.name symptom.name
  json.illnesses symptom.illnesses.each do |illness|
    json.name illness.name
  end
end
json.page params[:page]
