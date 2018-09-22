class Patient < ApplicationRecord
  has_and_belongs_to_many :illnesses
  has_and_belongs_to_many :allergens
  has_one :patient_file, dependent: :destroy

  validates :first_name, presence: true
  validates :email, uniqueness: true, presence: true

  scope :search_by_pattern, -> (pattern) {
    where('lower(first_name) LIKE ? OR lower(last_name) LIKE ?', "%#{pattern.downcase}%", "%#{pattern.downcase}%")
  }
end
