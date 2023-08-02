class ZoneNsController < ApplicationController
  before_action :set_zone_n, only: %i[ show edit update destroy ]

  # GET /zone_ns or /zone_ns.json
  def index
    @zone_ns = ZoneN.all
  end

  # GET /zone_ns/1 or /zone_ns/1.json
  def show
  end

  # GET /zone_ns/new
  def new
    @zone_n = ZoneN.new
  end

  # GET /zone_ns/1/edit
  def edit
  end

  # POST /zone_ns or /zone_ns.json
  def create
    @zone_n = ZoneN.new(zone_n_params)

    respond_to do |format|
      if @zone_n.save
        format.html { redirect_to zone_n_url(@zone_n), notice: "Zone n was successfully created." }
        format.json { render :show, status: :created, location: @zone_n }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_n.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_ns/1 or /zone_ns/1.json
  def update
    respond_to do |format|
      if @zone_n.update(zone_n_params)
        format.html { redirect_to zone_n_url(@zone_n), notice: "Zone n was successfully updated." }
        format.json { render :show, status: :ok, location: @zone_n }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone_n.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /zone_ns/1 or /zone_ns/1.json
  def destroy
    @zone_n.destroy

    respond_to do |format|
      format.html { redirect_to zone_ns_url, notice: "Zone n was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_n
      @zone_n = ZoneN.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def zone_n_params
      params.require(:zone_n).permit(:desk_id, :status, :campaign)
    end
end