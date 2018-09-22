json.id patient.id
json.birthDate patient.birth_date
json.name patient.first_name
json.surname patient.last_name
json.email patient.email
json.weight patient.weight
json.height patient.height
json.illnesses patient.illnesses.map(&:name)
