class SymptomsController < ApplicationController
  def index
    @symptoms = Symptom.all
  end

  def search
    @symptoms = Symptom.includes(:illnesses)
                       .by_name(search_symptoms_params[:name])
                       .page(search_symptoms_params[:page])
  end

  def create
    @symptom = Symptom.new(symptom_params)

    if @illness.save
      render
    else
      render json: { status: 'error', message: @illness.error.full_messages.join(', ') }
    end
  end

  def destroy
    @symptom.destroy
  end

  private

  def set_symptom
    @symptom = Symptom.find(params[:symptom_id])
  end

  def symptom_params
    params.require(:symptom).permit(:name)
  end

  def search_symptoms_params
    params.permit(:name, :page)
  end
end
