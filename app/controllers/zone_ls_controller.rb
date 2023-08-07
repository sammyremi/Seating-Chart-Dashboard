class ZoneLsController < ApplicationController
  before_action :set_zone_l, only: %i[ show edit update destroy ]

  # GET /zone_ls or /zone_ls.json
  def index
    @zone_ls = ZoneL.all
    render json: @zone_ls
  end

  # GET /zone_ls/1 or /zone_ls/1.json
  def show
    if @zone_l
      render json: @zone_l
    else
      render json: @zone_l.errors
    end
  end

  # GET /zone_ls/new
  def new
    @zone_l = ZoneL.new
  end

  # GET /zone_ls/1/edit
  def edit
  end

  # POST /zone_ls or /zone_ls.json
  def create
    @zone_l = ZoneL.new(zone_l_params)

    respond_to do |format|
      if @zone_l.save
        render json: @zone_l 
      else
        render json: @zone_l.errors
      end
    end
  end

  # PATCH/PUT /zone_ls/1 or /zone_ls/1.json
  def update
    respond_to do |format|
      if @zone_l.update(zone_l_params)
        render json: @zone_l 
      else
        render json: @zone_l.errors
      end
    end
  end

  # DELETE /zone_ls/1 or /zone_ls/1.json
  def destroy
    @zone_l.destroy
    render json: { notice: 'Zone L was successfully removed.' }
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_l
      @zone_l = ZoneL.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def zone_l_params
      params.require(:zone_l).permit(:desk_id, :status, :campaign)
    end
end
