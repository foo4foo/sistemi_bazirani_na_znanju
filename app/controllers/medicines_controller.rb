class MedicinesController < ApiController
  before_action :set_illness, only: [:index]
  before_action :set_patient, only: [:match_against_allergens]

  def index
    @medicines = @illness.medicines
  end

  def match_against_allergens
    @medicines = Medicine.where(id: match_params[:medicines])
    @medicines = @medicines.map do |medicine|
      {
        name: medicine.name,
        ingredients: medicine.ingredients.map(&:name)
      }
    end

    @allergen_medicines = DroolsConnector.match_allergens(
      @medicines,
      @patient.allergens.map(&:name)
    )
    puts @allergen_medicines
  end

  private

  def set_patient
    @patient = Patient.find(params[:patient_id])
  end

  def match_params
    params.permit(medicines: [])
  end

  def set_illness
    @illness = Illness.find(params[:id])
  end
end
