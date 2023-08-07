class ZoneMsController < ApplicationController
  before_action :set_zone_m, only: %i[ show edit update destroy ]

  # GET /zone_ms or /zone_ms.json
  def index
    @zone_ms = ZoneM.all
    render json: @zone_ms
  end

  # GET /zone_ms/1 or /zone_ms/1.json
  def show
  end

  # GET /zone_ms/new
  def new
    @zone_m = ZoneM.new
  end

  # GET /zone_ms/1/edit
  def edit
  end

  # POST /zone_ms or /zone_ms.json
  def create
    @zone_m = ZoneM.new(zone_m_params)

    respond_to do |format|
      if @zone_m.save
        format.html { redirect_to zone_m_url(@zone_m), notice: "Zone m was successfully created." }
        format.json { render :show, status: :created, location: @zone_m }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_m.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_ms/1 or /zone_ms/1.json
  def update
    respond_to do |format|
      if @zone_m.update(zone_m_params)
        format.html { redirect_to zone_m_url(@zone_m), notice: "Zone m was successfully updated." }
        format.json { render :show, status: :ok, location: @zone_m }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone_m.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /zone_ms/1 or /zone_ms/1.json
  def destroy
    @zone_m.destroy

    respond_to do |format|
      format.html { redirect_to zone_ms_url, notice: "Zone m was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_m
      @zone_m = ZoneM.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def zone_m_params
      params.require(:zone_m).permit(:desk_id, :status, :campaign)
    end
end
