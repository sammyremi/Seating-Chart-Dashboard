class ZoneDsController < ApplicationController
  before_action :set_zone_d, only: %i[ show edit update destroy ]

  # GET /zone_ds or /zone_ds.json
  def index
    @zone_ds = ZoneD.all
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
        format.html { redirect_to zone_d_url(@zone_d), notice: "Zone d was successfully created." }
        format.json { render :show, status: :created, location: @zone_d }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_d.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_ds/1 or /zone_ds/1.json
  def update
    respond_to do |format|
      if @zone_d.update(zone_d_params)
        format.html { redirect_to zone_d_url(@zone_d), notice: "Zone d was successfully updated." }
        format.json { render :show, status: :ok, location: @zone_d }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone_d.errors, status: :unprocessable_entity }
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
      @zone_d = ZoneD.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def zone_d_params
      params.require(:zone_d).permit(:desk_id, :status, :campaign)
    end
end
