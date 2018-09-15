# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

admin = Role.create(name: 'admin')
doctor = Role.create(name: 'doctor')

user_doctor = User.new(email: 'riggy.ruter@gmail.com', first_name: 'Riggy', last_name: 'Ruter', password: '123')
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

trembling = Symptom.create(name: 'Trembling')
temperature_above_38 = Symptom.create(name: 'Temperature > 38')

fever.symptoms << trembling
fever.symptoms << temperature_above_38
fever.symptoms << leaky_nose
fever.symptoms << sore_throat
fever.symptoms << headache
fever.symptoms << sneezing
fever.symptoms << cough

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

eyes_swelling = Symptom.create(name: 'Eyes Swelling')

sinus_infection.symptoms << eyes_swelling
sinus_infection.symptoms << headache
sinus_infection.symptoms << yellow_nose_secret
sinus_infection.symptoms << sore_throat
sinus_infection.symptoms << temperature_above_38
sinus_infection.symptoms << cough

high_blood_pressure = Symptom.create(name: "At least 10 times registered high blood pressure for the last 6 months")

hypertension.symptoms << high_blood_pressure

frequent_urination = Symptom.create(name: "Frequent urination")
weight_loss = Symptom.create(name: "Weight loss")
nausea = Symptom.create(name: "Nausea")
vomiting = Symptom.create(name: "Vomiting")

diabetes.symptoms << tiredness
diabetes.symptoms << weight_loss
diabetes.symptoms << frequent_urination
diabetes.symptoms << nausea
diabetes.symptoms << vomiting

# Patients
patient = Patient.create(first_name: 'Pera', last_name: 'Peric', email: 'pera@peric.com', birth_date: '05.09.1989.', height: 175.7, weight: 84)

patient_file = PatientFile.create(patient: patient)

diagnosis_cold = Diagnosis.new(patient: patient, patient_file: patient_file)

diagnosis_cold.symptoms << cough
diagnosis_cold.symptoms << leaky_nose

diagnosis_cold.illnesses << cold

diagnosis_cold.save!

# add medicines

advil = Medicine.new(name: 'Advil')
acetaminophen = Medicine.new(name: 'Acetaminophen')
cefaclor = Medicine.new(name: 'Cefaclor')
azithromycin = Medicine.new(name: 'Azithromycin')
loracarbef = Medicine.new(name: 'Loracarbef')
bumetanide = Medicine.new(name: 'Bumetanide')
chlorthalidone = Medicine.new(name: 'Chlorthalidone')
ethacrynate = Medicine.new(name: 'Ethacrynate')
sulfonylureas = Medicine.new(name: 'Sulfonylureas')
metformin = Medicine.new(name: 'Metformin')
meglitinides = Medicine.new(name: 'Meglitinides')

# add ingredients

ibuprofen = Ingredient.create(name: 'Ibuprofen')
tylenol = Ingredient.create(name: 'Tylenol')
erythrosine = Ingredient.create(name: 'Erythrosine')
sucrose = Ingredient.create(name: 'Sucrose')
methylcellulose = Ingredient.create(name: 'Methylcellulose')
cornstarch = Ingredient.create(name: 'Cornstarch')
dimethicone = Ingredient.create(name: 'Dimethicone')
azithromycin_dihydrate = Ingredient.create(name: 'Azithromycin dihydrate')
lactose = Ingredient.create(name: 'Lactose')
magnesium_stearate = Ingredient.create(name: 'Magnesium stearate')
microcrystalline_cellulose = Ingredient.create(name: 'Microcrystalline cellulose')
povidone = Ingredient.create(name: 'Povidone')
edecrin_sodium = Ingredient.create(name: 'Edecrin sodium')
sodium_ethacrynate = Ingredient.create(name: 'Sodium ethacrynate')
acetohexamide = Ingredient.create(name: 'Acetohexamide')
carbutamide = Ingredient.create(name: 'Carbutamide')
gliquidone = Ingredient.create(name: 'Gliquidone')
hypromellose = Ingredient.create(name: 'Hypromellose')
cellulose_acetate = Ingredient.create(name: 'Cellulose acetate')

# add allergens

ibuprofen_allergen = Allergen.create(name: 'Ibuprofen')
tylenol_allergen = Allergen.create(name: 'Tylenol')
erythrosine_allergen = Allergen.create(name: 'Erythrosine')
sucrose_allergen = Allergen.create(name: 'Sucrose')
methylcellulose_allergen = Allergen.create(name: 'Methylcellulose')
cornstarch_allergen = Allergen.create(name: 'Cornstarch')
dimethicone_allergen = Allergen.create(name: 'Dimethicone')
azithromycin_dihydrate_allergen = Allergen.create(name: 'Azithromycin dihydrate')
lactose_allergen = Allergen.create(name: 'Lactose')
magnesium_stearate_allergen = Allergen.create(name: 'Magnesium stearate')
microcrystalline_cellulose_allergen = Allergen.create(name: 'Microcrystalline cellulose')
povidone_allergen = Allergen.create(name: 'Povidone')
edecrin_sodium_allergen= Allergen.create(name: 'Edecrin sodium')
sodium_ethacrynate_allergen = Allergen.create(name: 'Sodium ethacrynate')
acetohexamide_allergen = Allergen.create(name: 'Acetohexamide')
carbutamide_allergen = Allergen.create(name: 'Carbutamide')
gliquidone_allergen = Allergen.create(name: 'Gliquidone')
hypromellose_allergen = Allergen.create(name: 'Hypromellose')
cellulose_acetate_allergen = Allergen.create(name: 'Cellulose acetate')

# connect medicines with its ingredients

advil.ingredients << ibuprofen

advil.save!

acetaminophen.ingredients << ibuprofen
acetaminophen.ingredients << tylenol

acetaminophen.save!

cefaclor.ingredients << erythrosine
cefaclor.ingredients << sucrose
cefaclor.ingredients << methylcellulose

cefaclor.save!

azithromycin.ingredients << azithromycin_dihydrate

azithromycin.save!

loracarbef.ingredients << cornstarch
loracarbef.ingredients << dimethicone

loracarbef.save!

bumetanide.ingredients << lactose
bumetanide.ingredients << magnesium_stearate
bumetanide.ingredients << microcrystalline_cellulose

bumetanide.save!

chlorthalidone.ingredients << lactose
chlorthalidone.ingredients << magnesium_stearate
chlorthalidone.ingredients << povidone

chlorthalidone.save!

ethacrynate.ingredients << edecrin_sodium
ethacrynate.ingredients << sodium_ethacrynate

ethacrynate.save!

sulfonylureas.ingredients << gliquidone
sulfonylureas.ingredients << acetohexamide
sulfonylureas.ingredients << carbutamide

sulfonylureas.save!

metformin.ingredients << magnesium_stearate
metformin.ingredients << hypromellose
metformin.ingredients << cellulose_acetate

metformin.save!

meglitinides.ingredients << magnesium_stearate
meglitinides.ingredients << microcrystalline_cellulose

meglitinides.save!

# connect medicines with illnesses

cold.medicines << advil

cold.save!

fever.medicines << advil
fever.medicines << acetaminophen

fever.save!

tonsillitis.medicines << advil
tonsillitis.medicines << acetaminophen

tonsillitis.save!

sinus_infection.medicines << cefaclor
sinus_infection.medicines << azithromycin
sinus_infection.medicines << loracarbef

sinus_infection.save!

hypertension.medicines << bumetanide
hypertension.medicines << chlorthalidone
hypertension.medicines << ethacrynate

hypertension.save!

diabetes.medicines << meglitinides
diabetes.medicines << sulfonylureas
diabetes.medicines << metformin

diabetes.save!
