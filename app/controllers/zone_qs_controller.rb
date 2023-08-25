class ZoneQsController < ApplicationController
  before_action :set_zone_q, only: %i[ show edit update destroy ]
  before_action :set_zone, only: %i[ show edit update destroy ]

  # GET /zone_qs or /zone_qs.json
  def index
    @zone_qs = ZoneQ.order(:desk_id)
    render json: @zone_qs
  end

  # GET /zone_qs/1 or /zone_qs/1.json
  def show
  end

  # GET /zone_qs/new
  def new
    @zone_q = ZoneQ.new
  end

  # GET /zone_qs/1/edit
  def edit
  end

  # POST /zone_qs or /zone_qs.json
  def create
    @zone_q = ZoneQ.new(zone_q_params.except(:id, :desk_id))

    respond_to do |format|
      if @zone_q.save
        format.html { redirect_to zone_q_url(@zone_q), notice: "Zone q was successfully created." }
        format.json { render :show, status: :created, location: @zone_q }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @zone_q.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /zone_qs/1 or /zone_qs/1.json
  def update
    respond_to do |format|
      if @zone_q.update(zone_q_params)
        format.html { redirect_to zone_q_url(@zone_q), notice: "Zone q was successfully updated." }
        format.json { render :show, status: :ok, location: @zone_q }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @zone_q.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /zone_qs/1 or /zone_qs/1.json
  def destroy
    @zone_q.destroy

    respond_to do |format|
      format.html { redirect_to zone_qs_url, notice: "Zone q was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_zone_q
      @zone_q = ZoneQ.find(params[:id])
    end

    def set_zone
      @zone = Zone.find(params[:id])
    end
    # Only allow a list of trusted parameters through.
    def zone_q_params
      params.require(:zone_q).permit(:desk_id, :status, :campaign)
    end
end
