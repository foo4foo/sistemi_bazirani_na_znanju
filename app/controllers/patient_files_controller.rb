class PatientFilesController < ApiController
  def create
    @patient_file = PatientFile.new(patient_file_params)
    @patient_file.patient.allergens = Allergen.where(id: params[:allergens])

    if @patient_file.save
      render
    else
      render json: { status: 'error', message: @patient_file.errors.full_messages.join(', ') }
    end
  end

  def show
    @patient_file = PatientFile.find(params[:id])
  end

  private

  def patient_file_params
    params.require(:patient_file).permit(patient_attributes: %i[first_name last_name email weight height birth_date])
  end
end
