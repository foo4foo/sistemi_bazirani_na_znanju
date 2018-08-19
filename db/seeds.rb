# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

admin = Role.create(name: 'admin')
doctor = Role.create(name: 'doctor')

user_doctor = User.new(email: 'riggy.ruter@gmail', first_name: 'Riggy', last_name: 'Ruter', password: '123')
user_doctor.roles << doctor
user_doctor.save!

# Illnesses group I

cold = Illness.new(name: 'Cold', group: 1)
fever = Illness.new(name: 'Fever', group: 1)
tonsillitis = Illness.new(name: 'Tonsillitis', group: 1)
sinus_infection = Illness.new(name: 'Sinus infection', group: 1)

# Illnesses group II

hypertension = Illness.new(name: 'Hypertension', group: 2)
diabetes = Illness.new(name: 'Diabetes', group: 2)

# Illnesses group III

chronic_kidney_disease = Illness.new(name: 'Chronic Kidney Disease', group: 3)
acute_kidney_injury = Illness.new(name: 'Acute Kidney Injury', group: 3)

# Symptoms

leaky_nose = Symptom.create(name: 'Leaky Nose')
sore_throat = Symptom.create(name: 'Sore Throat')
headache = Symptom.create(name: 'Headache')
sneezing = Symptom.create(name: 'Sneezing')
cough = Symptom.create(name: 'Cough')

cold.symptoms << leaky_nose
cold.symptoms << sore_throat
cold.symptoms << headache
cold.symptoms << sneezing
cold.symptoms << cough

cold.save!

trembling = Symptom.create(name: 'Trembling')
temperature_above_38 = Symptom.create(name: 'Temperature > 38')

fever.symptoms << trembling
fever.symptoms << temperature_above_38
fever.symptoms << leaky_nose
fever.symptoms << sore_throat
fever.symptoms << headache
fever.symptoms << sneezing
fever.symptoms << cough

fever.save!

tiredness = Symptom.create(name: 'Tiredness')
temperature_above_40 = Symptom.create(name: 'Temperature > 40 && Temperature < 41')
yellow_nose_secret = Symptom.create(name: 'Yellow Nose Secret')
pain_up_to_the_ears = Symptom.create(name: 'Pain Up To The Ears')
loss_of_appetite = Symptom.create(name: 'Loss of Appetite')

tonsillitis.symptoms << tiredness
tonsillitis.symptoms << trembling
tonsillitis.symptoms << temperature_above_40
tonsillitis.symptoms << yellow_nose_secret
tonsillitis.symptoms << pain_up_to_the_ears
tonsillitis.symptoms << sore_throat
tonsillitis.symptoms << headache
tonsillitis.symptoms << loss_of_appetite

tonsillitis.save!

eyes_swelling = Symptom.create(name: 'Eyes Swelling')

sinus_infection.symptoms << eyes_swelling
sinus_infection.symptoms << headache
sinus_infection.symptoms << yellow_nose_secret
sinus_infection.symptoms << sore_throat
sinus_infection.symptoms << temperature_above_38
sinus_infection.symptoms << cough

sinus_infection.save!

# Patients
patient = Patient.create(first_name: 'Pera', last_name: 'Peric', email: 'pera@peric.com', birth_date: '05.09.1989.', height: 175.7, weight: 84)

patient_file = PatientFile.create(patient: patient)

diagnosis_cold = Diagnosis.new(patient: patient, patient_file: patient_file)

diagnosis_cold.symptoms << cough
diagnosis_cold.symptoms << leaky_nose

diagnosis_cold.illnesses << cold

diagnosis_cold.save!

# add medicines