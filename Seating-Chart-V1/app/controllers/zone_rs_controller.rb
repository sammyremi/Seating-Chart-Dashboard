class ZoneRsController < ApplicationController
  before_action :set_zone_r, only: %i[ show edit update destroy ]
  before_action :authenticate_user, only: %i[ create edit update destroy ]

  # GET /zone_rs or /zone_rs.json
  def index
    @zone_rs = ZoneR.order(:desk_id)
    render json: @zone_rs
  end

  # GET /zone_rs/1 or /zone_rs/1.json
  def show
  end

  # GET /zone_rs/new
  def new
    @zone_r = ZoneR.new
  end

  # GET /zone_rs/1/edit
  def edit
    
  end

  # POST /zone_rs or /zone_rs.json
  def create
    @zone_r = ZoneR.new(zone_r_params)

    respond_to do |format|
      if @zone_r.save
        render json: @zone_r
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_r.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_rs/1 or /zone_rs/1.json
  def update
    respond_to do |format|
      if @zone_r.update(zone_r_params.except(:id, :desk_id))
        render json: @zone_r
      else
        render json: @zone_r.errors
      end
    end
  end

  # DELETE /zone_rs/1 or /zone_rs/1.json
  def destroy
    @zone_r.destroy

    respond_to do |format|
      format.html { redirect_to zone_rs_url, notice: "Zone r was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_r
      @zone_r = ZoneR.find(params[:id])
    end

    def authenticate_user
      if current_user.nil?
        redirect_to new_user_session_path
      end
    end
    # Only allow a list of trusted parameters through.
    def zone_r_params
      params.require(:zone_r).permit(:desk_id, :status, :campaign)
    end
end
