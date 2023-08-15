class ZoneDsController < ApplicationController
  before_action :set_zone_d, only: %i[ show edit update destroy ]
  before_action :set_zone, only: %i[ show edit update destroy ]

  # GET /zone_ds or /zone_ds.json
  def index
    @zones = Zone.all
    @zone_ds = @zones.select { |zone| zone.desk_id.start_with?('D') }
    render json: @zone_ds
  end

  # GET /zone_ds/1 or /zone_ds/1.json
  def show
  end

  # GET /zone_ds/new
  def new
    @zone_d = ZoneD.new
  end
  
  # GET /zone_ds/1/edit
  def edit
  end

  # POST /zone_ds or /zone_ds.json
  def create
    @zone_d = ZoneD.new(zone_d_params)

    respond_to do |format|
      if @zone_d.save
        render json: @zone_d
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_d.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_ds/1 or /zone_ds/1.json
  def update

    respond_to do |format|
      if @zone_d.update(zone_d_params.except(:id, :desk_id))
        render json: @zone_d 
      else
        render json: @zone_d.errors
      end
    end
  end

  # DELETE /zone_ds/1 or /zone_ds/1.json
  def destroy
    @zone_d.destroy

    respond_to do |format|
      format.html { redirect_to zone_ds_url, notice: "Zone d was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_d
      @zone_d = Zone.find(params[:id])
    end

    def set_zone
      @zone = Zone.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def zone_d_params
      params.require(:zone_d).permit(:desk_id, :status, :campaign)
    end
end
