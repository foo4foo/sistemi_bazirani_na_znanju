class IllnessesController < ApplicationController
  before_action :set_illness, only: [:destroy, :update]

  def index
    @illnesses = Illness.all
  end

  def search
    @illnesses = Illness.includes(:symptoms)
                        .by_name(search_illnesses_params[:name])
                        .page(search_illnesses_params[:page])
  end

  def create
    @illness = Illness.new(illness_params)

    if @illness.save
      render
    end
  end

  def destroy
    @illness.destroy
  end

  private

  def set_illness
    @illness = Illness.find(params[:illness_id])
  end

  def illness_params
    params.require(:illness).permit(:name, :description)
  end

  def search_illnesses_params
    params.permit(:name, :page)
  end
end
