json.illnesses @illnesses.each do |illness|
  json.name illness.name
  json.symptoms illness.symptoms.each do |symptom|
    json.name symptom.name
  end
end
json.page params[:page]
