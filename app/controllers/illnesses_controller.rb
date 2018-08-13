class IllnessesController < ApplicationController
  before_action :set_group, only: [:create]
  before_action :set_illness, only: [:destroy, :update]

  def index
    @illnesses = Illness.all
  end

  def create
    @illness = Illness.new(illness_params)
    @illness.group = @group

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

  def set_group
    @group = IllnessGroup.find(params[:group_id])
  end

  def illness_params
    params.require(:illness).permit(:name, :description)
  end
end
