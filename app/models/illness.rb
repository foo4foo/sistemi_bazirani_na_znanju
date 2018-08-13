class Illness < ApplicationRecord
  has_many :symptoms
  belongs_to :illness_group

  scope :match, -> (symptoms) { joins(:symptoms).where('symptoms.id': symptoms) }
end
