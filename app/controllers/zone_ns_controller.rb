class ZoneNsController < ApplicationController
  before_action :set_zone_n, only: %i[ show edit update destroy ]

  # GET /zone_ns or /zone_ns.json
  def index
    @zone_ns = ZoneN.all
    render json: @zone_ns
  end

  # GET /zone_ns/1 or /zone_ns/1.json
  def show
    if @zone_n
      render json: @zone_n
    else
      render json: @zone_n.errors
    end
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
        render json: @zone_n 
      else
        render json: @zone_n.errors
      end
    end
  end

  # PATCH/PUT /zone_ns/1 or /zone_ns/1.json
  def update
    respond_to do |format|
      if @zone_n.update(zone_n_params)
        render json: @zone_n 
      else
        render json: @zone_n.errors
      end
    end
  end

  # DELETE /zone_ns/1 or /zone_ns/1.json
  def destroy
    @zone_n.destroy
    render json: { notice: 'Zone N was successfully removed.' }
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
