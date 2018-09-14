json.id @patient_file.id
json.patient do
  json.partial! 'patients/patient', patient: @patient_file.patient
end
