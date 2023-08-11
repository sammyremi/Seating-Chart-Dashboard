class ZoneEsController < ApplicationController
  before_action :set_zone_e, only: %i[ show edit update destroy ]

  # GET /zone_es or /zone_es.json
  def index
    @zone_es = ZoneE.order(:desk_id)
    render json: @zone_es
  end

  # GET /zone_es/1 or /zone_es/1.json
  def show
  end

  # GET /zone_es/new
  def new
    @zone_e = ZoneE.new
  end

  # GET /zone_es/1/edit
  def edit
  end

  # POST /zone_es or /zone_es.json
  def create
    @zone_e = ZoneE.new(zone_e_params)

    respond_to do |format|
      if @zone_e.save
        format.html { redirect_to zone_e_url(@zone_e), notice: "Zone e was successfully created." }
        format.json { render :show, status: :created, location: @zone_e }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_e.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_es/1 or /zone_es/1.json
  def update
    respond_to do |format|
      if @zone_e.update(zone_e_params)
        format.html { redirect_to zone_e_url(@zone_e), notice: "Zone e was successfully updated." }
        format.json { render :show, status: :ok, location: @zone_e }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone_e.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /zone_es/1 or /zone_es/1.json
  def destroy
    @zone_e.destroy

    respond_to do |format|
      format.html { redirect_to zone_es_url, notice: "Zone e was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_e
      @zone_e = ZoneE.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def zone_e_params
      params.require(:zone_e).permit(:desk_id, :status, :campaign)
    end
end
