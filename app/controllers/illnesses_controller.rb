class IllnessesController < ApiController
  before_action :set_illness, only: [:destroy, :update]
  before_action :set_symptoms, only: [:match]

  def index
    @illnesses = Illness.all
  end

  def search
    @illnesses = Illness.includes(:symptoms)
                        .by_name(search_illnesses_params[:name])
  end

  def match
    matched_illnesses = DroolsConnector.match_illnesses(@symptoms_names)

    matched_illnesses = matched_illnesses.sort_by { |i| i['match'] }.reverse!

    matched_illnesses.each do |matched_illness|
      matched_illness['illness']['id'] = Illness.find_by_name(matched_illness['illness']['name']).id
    end

    @possible_illnesses_data = matched_illnesses.first(4)
  end

  private

  def set_symptoms
    @symptoms_names = Symptom.where(id: match_params[:symptoms]).map(&:name)
  end

  def set_illness
    @illness = Illness.find(params[:illness_id])
  end

  def search_illnesses_params
    params.permit(:name, :page)
  end

  def match_params
    params.permit(symptoms: [])
  end
end
