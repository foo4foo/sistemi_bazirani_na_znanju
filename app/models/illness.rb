class Illness < ApplicationRecord
  has_and_belongs_to_many :symptoms
  has_and_belongs_to_many :patients

  scope :match, -> (symptoms) { joins(:symptoms).where('symptoms.id': symptoms) }
end
