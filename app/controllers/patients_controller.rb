class PatientsController < ApplicationController
  def search
    # @patients = Patient.search(patient_search_params[:patient_group])
  end

  private

  def patient_search_params
    params.permit(:patient_group)
  end
end
