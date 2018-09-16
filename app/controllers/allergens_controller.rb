class AllergensController < ApiController
  def index
    @allergens = Allergen.all
  end

  def match_agains_medicines
    # send check to external drools api
    @allergnes = Allergen.first(4)
  end

  private

  def match_agains_medicines_params
    params.permit(:medicines)
  end
end
