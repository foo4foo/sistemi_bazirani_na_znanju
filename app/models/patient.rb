class Patient < ApplicationRecord
  has_and_belongs_to_many :illnesses
  has_one :patient_file
end
