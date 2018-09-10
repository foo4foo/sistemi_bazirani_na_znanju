class PatientFile < ApplicationRecord
  belongs_to :patient
  has_many :diagnoses

  accepts_nested_attributes_for :patient
end
