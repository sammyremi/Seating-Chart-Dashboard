class ZoneLsController < ApplicationController
  before_action :set_zone_l, only: %i[ show edit update destroy ]

  # GET /zone_ls or /zone_ls.json
  def index
    @zone_ls = ZoneL.all
    render json: @zone_ls
  end

  # GET /zone_ls/1 or /zone_ls/1.json
  def show
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
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_l.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_ls/1 or /zone_ls/1.json
  def update
    respond_to do |format|
      if @zone_l.update(zone_l_params)
        render json: @zone_l 
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone_l.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /zone_ls/1 or /zone_ls/1.json
  def destroy
    @zone_l.destroy

    respond_to do |format|
      format.html { redirect_to zone_ls_url, notice: "Zone l was successfully destroyed." }
      format.json { head :no_content }
    end
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
