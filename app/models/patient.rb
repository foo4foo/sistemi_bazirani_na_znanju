class Patient < ApplicationRecord
  has_and_belongs_to_many :illnesses
  has_and_belongs_to_many :allergens
  has_one :patient_file, dependent: :destroy

  validates :first_name, presence: true
  validates :email, uniqueness: true, presence: true
end
