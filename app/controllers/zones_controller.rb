class ZonesController < ApplicationController
  before_action :set_zone, only: %i[ show edit update destroy ]

  # GET /zones or /zones.json
  def index
    @zones = Zone.all
    @zone_ds = @zones.select { |zone| zone.desk_id.start_with?('D') }
    @zone_es = @zones.select { |zone| zone.desk_id.start_with?('E') }
    @zone_hs = @zones.select { |zone| zone.desk_id.start_with?('H') }
    @zone_is = @zones.select { |zone| zone.desk_id.start_with?('I') }
    @zone_js = @zones.select { |zone| zone.desk_id.start_with?('J') }
    @zone_ks = @zones.select { |zone| zone.desk_id.start_with?('K') }
    @zone_ls = @zones.select { |zone| zone.desk_id.start_with?('L') }
    @zone_ms = @zones.select { |zone| zone.desk_id.start_with?('M') }
    @zone_ns = @zones.select { |zone| zone.desk_id.start_with?('N') }
    @zone_qs = @zones.select { |zone| zone.desk_id.start_with?('Q') }
    @zone_rs = @zones.select { |zone| zone.desk_id.start_with?('R') }
    # render json: @zones
  end

  # GET /zones/1 or /zones/1.json
  def show
  end

  # GET /zones/new
  def new
    @zone = Zone.new
  end

  # GET /zones/1/edit
  def edit
  end

  # POST /zones or /zones.json
  def create
    @zone = Zone.new(zone_params)

    respond_to do |format|
      if @zone.save
        format.html { redirect_to zone_url(@zone), notice: "Zone was successfully created." }
        format.json { render :show, status: :created, location: @zone }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zones/1 or /zones/1.json
  def update
    respond_to do |format|
      if @zone.update(zone_params.except(:id, :desk_id))
        format.html { redirect_to zone_url(@zone), notice: "Zone was successfully updated." }
        format.json { render :show, status: :ok, location: @zone }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /zones/1 or /zones/1.json
  def destroy
    @zone.destroy

    respond_to do |format|
      format.html { redirect_to zones_url, notice: "Zone was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  def import
    Zone.import(params[:file])
    redirect_to zones_path, notice: "Zones added successfully"
  end
  
  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone
      @zone = Zone.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def zone_params
      params.require(:zone).permit(:desk_id, :status, :campaign)
    end
end
