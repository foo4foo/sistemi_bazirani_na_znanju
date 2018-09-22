class PatientsController < ApiController
  def search
    if patient_search_params[:pattern].blank?
      @patients = Patient.none
    else
      @patients = Patient.search_by_pattern(patient_search_params[:pattern])
    end
  end

  private

  def patient_search_params
    params.permit(:pattern)
  end
end
