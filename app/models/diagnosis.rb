class Diagnosis < ApplicationRecord
  belongs_to :patient
  belongs_to :patient_file

  has_and_belongs_to_many :illnesses, inverse_of: nil
  has_and_belongs_to_many :symptoms
  has_and_belongs_to_many :medicines
end
