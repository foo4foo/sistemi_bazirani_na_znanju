class MedicinesController < ApiController
  before_action :set_illness, only: [:index]

  def index
    @medicines = @illness.medicines
  end

  private

  def set_illness
    @illness = Illness.find(params[:id])
  end
end
