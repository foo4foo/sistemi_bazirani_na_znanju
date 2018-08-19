class Symptom < ApplicationRecord
  has_and_belongs_to_many :illnesses
  has_and_belongs_to_many :diagnoses
end
