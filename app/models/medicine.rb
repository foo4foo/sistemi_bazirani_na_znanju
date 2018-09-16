class Medicine < ApplicationRecord
  has_and_belongs_to_many :ingredients
  has_and_belongs_to_many :illnesses
  has_and_belongs_to_many :diagnosis
end
