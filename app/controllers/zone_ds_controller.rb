class ZoneDsController < ApplicationController
  before_action :set_zone_d, only: %i[ show edit update destroy ]

  # GET /zone_ds or /zone_ds.json
  def index
    @zone_ds = ZoneD.all
    render json: @zone_ds
  end

  # GET /zone_ds/1 or /zone_ds/1.json
  def show
    if @zone_d
      render json: @zone_d
    else
      render json: @zone_d.errors
    end
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
        render json: @zone_d {notice: 'Zone D was successfully created' }
      else
        render json: @zone_d.errors
      end
    end
  end

  # PATCH/PUT /zone_ds/1 or /zone_ds/1.json
  def update
    respond_to do |format|
      if @zone_d.update(zone_d_params)
        render json: @zone_d {notice: 'Zone D was successfully updated' }
      else
        render json: @zone_d.errors
      end
    end
  end

  # DELETE /zone_ds/1 or /zone_ds/1.json
  def destroy
    @zone_d.destroy

    render json: { notice: 'Zone D was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_d
      @zone_d = ZoneD.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def zone_d_params
      params.require(:zone_d).permit(:desk_id, :status, :campaign)
    end
end
