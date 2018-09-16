class DiagnosesController < ApiController
  before_action :set_illnesses, only: [:create]
  before_action :set_symptoms, only: [:create]

  def create
    medicines = Medicine.where(id: medicines_params[:medicines])
    # @allergen_medicines = DroolsService.match_allergens(current_user.allergens, medicines)
    # render :allergen_medicines unless @allergen_medicines.blank?
    @diagnosis = Diagnosis.new(diagnosis_params)
    @diagnosis.medicines << medicines
    @diagnosis.illnesses << @illnesses
    @diagnosis.symptoms << @symptoms

    render json: {
      status: :bad_request,
      message: @diagnosis.errors.full_messages.join(', ')
    } unless @diagnosis.save
  end

  private

  def set_illnesses
    @illnesses = Illness.where(id: params[:illnesses])
  end

  def set_symptoms
    @symptoms = Symptom.where(id: symptoms_params[:symptoms])
  end

  def diagnosis_params
    params.require(:diagnosis).permit(:patient_id, :patient_file_id)
  end

  def symptoms_params
    params.permit(symptoms: [])
  end

  def illnesses_params
    params.permit(illnesses: [])
  end

  def medicines_params
    params.permit(medicines: [])
  end
end
