class ZoneKsController < ApplicationController
  before_action :set_zone_k, only: %i[ show edit update destroy ]
  before_action :set_zone, only: %i[ show edit update destroy ]

  # GET /zone_ks or /zone_ks.json
  def index
    @zone_ks = ZoneK.order(:desk_id)
    render json: @zone_ks
  end

  # GET /zone_ks/1 or /zone_ks/1.json
  def show
  end

  # GET /zone_ks/new
  def new
    @zone_k = ZoneK.new
  end

  # GET /zone_ks/1/edit
  def edit
  end

  # POST /zone_ks or /zone_ks.json
  def create
    @zone_k = ZoneK.new(zone_k_params)

    respond_to do |format|
      if @zone_k.save
        format.html { redirect_to zone_k_url(@zone_k), notice: "Zone k was successfully created." }
        format.json { render :show, status: :created, location: @zone_k }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_k.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_ks/1 or /zone_ks/1.json
  def update
    respond_to do |format|
      if @zone_k.update(zone_k_params.except(:id, :desk_id))
        format.html { redirect_to zone_k_url(@zone_k), notice: "Zone k was successfully updated." }
        format.json { render :show, status: :ok, location: @zone_k }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone_k.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /zone_ks/1 or /zone_ks/1.json
  def destroy
    @zone_k.destroy

    respond_to do |format|
      format.html { redirect_to zone_ks_url, notice: "Zone k was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_k
      @zone_k = ZoneK.find(params[:id])
    end

    def set_zone
      @zone = Zone.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def zone_k_params
      params.require(:zone_k).permit(:desk_id, :status, :campaign)
    end
end
