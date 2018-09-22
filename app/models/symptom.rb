class Symptom < ApplicationRecord
  has_and_belongs_to_many :illnesses
  has_and_belongs_to_many :diagnoses

  scope :by_name, -> (pattern) { where('lower(name) LIKE ?', "%#{pattern.downcase}%") }
end
