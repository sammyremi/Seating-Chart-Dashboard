class ZoneJsController < ApplicationController
  before_action :set_zone_j, only: %i[ show edit update destroy ]

  # GET /zone_js or /zone_js.json
  def index
    @zone_js = ZoneJ.all
    render json: @zone_js
  end

  # GET /zone_js/1 or /zone_js/1.json
  def show
    if @zone_j
      render json: @zone_j
    else
      render json: @zone_j.errors
    end
  end

  # GET /zone_js/new
  def new
    @zone_j = ZoneJ.new
  end

  # GET /zone_js/1/edit
  def edit
  end

  # POST /zone_js or /zone_js.json
  def create
    @zone_j = ZoneJ.new(zone_j_params)

    respond_to do |format|
      if @zone_j.save
        render json: @zone_j
      else
        render json: @zone_j.errors
      end
    end
  end

  # PATCH/PUT /zone_js/1 or /zone_js/1.json
  def update
    respond_to do |format|
      if @zone_j.update(zone_j_params)
        render json: @zone_j 
      else
        render json: @zone_j.errors
      end
    end
  end

  # DELETE /zone_js/1 or /zone_js/1.json
  def destroy
    @zone_j.destroy

    render json: { notice: 'Zone J was successfully removed.' }

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_j
      @zone_j = ZoneJ.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def zone_j_params
      params.require(:zone_j).permit(:desk_id, :status, :campaign)
    end
end
