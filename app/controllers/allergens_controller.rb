class AllergensController < ApiController
  def index
    @allergens = Allergen.all
  end
end
