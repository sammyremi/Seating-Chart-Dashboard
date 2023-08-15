class ZoneHsController < ApplicationController
  before_action :set_zone_h, only: %i[ show edit update destroy ]
  before_action :set_zone, only: %i[ show edit update destroy ]

  # GET /zone_hs or /zone_hs.json
  def index
    @zone_hs = ZoneH.order(:desk_id)
    render json: @zone_hs
  end

  # GET /zone_hs/1 or /zone_hs/1.json
  def show
  end

  # GET /zone_hs/new
  def new
    @zone_h = ZoneH.new
  end

  # GET /zone_hs/1/edit
  def edit
  end

  # POST /zone_hs or /zone_hs.json
  def create
    @zone_h = ZoneH.new(zone_h_params)

    respond_to do |format|
      if @zone_h.save
        render json: @zone_h
      else
        render json: @zone_h.errors
      end
    end
  end

  # PATCH/PUT /zone_hs/1 or /zone_hs/1.json
  def update
    respond_to do |format|
      if @zone_h.update(zone_h_params)
        render json: @zone_h
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone_h.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /zone_hs/1 or /zone_hs/1.json
  def destroy
    @zone_h.destroy

    respond_to do |format|
      format.html { redirect_to zone_hs_url, notice: "Zone h was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_h
      @zone_h = ZoneH.find(params[:id])
    end

    def set_zone
      @zone = Zone.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def zone_h_params
      params.require(:zone_h).permit(:desk_id, :status, :campaign)
    end
end
