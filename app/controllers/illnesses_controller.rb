class IllnessesController < ApiController
  before_action :set_illness, only: [:destroy, :update]

  def index
    @illnesses = Illness.all
  end

  def search
    @illnesses = Illness.includes(:symptoms)
                        .by_name(search_illnesses_params[:name])
  end

  def match
    # this will be updated. send req to external service
    @possible_illnesses_data = Illness.first(4)
  end

  private

  def set_illness
    @illness = Illness.find(params[:illness_id])
  end

  def search_illnesses_params
    params.permit(:name, :page)
  end

  def match_params
    params.permit(:symptoms)
  end
end
