class PatientFile < ApplicationRecord
  belongs_to :patient
  has_many :diagnoses
end
