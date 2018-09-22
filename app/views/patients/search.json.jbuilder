json.patients @patients.each do |patient|
  json.partial! 'patient', patient: patient
end
