class Medicine < ApplicationRecord
  has_and_belongs_to_many :ingredients
  has_and_belongs_to_many :medicines
end
