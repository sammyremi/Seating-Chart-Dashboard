class CsvFileController < ApplicationController


    def new
        # @zone_d = ZoneD.new(desk_id: "D0077", status: "oop", campaign: "sammyrmi")
        # # @zone_d.save
        @zoned = ZoneD.order(:desk_id)

        
        
    end

    def create

        puts "I sip"
        # @zone_d = ZoneD.new(desk_id: "D0077", status: "oop", campaign: "sammyrmi")
        # @zone_d.save
        
        file = params[:file]
        #checking if file is a csv file 
        if file.present? && file.content_type == "text/csv"

            CSV.foreach(file.path, headers: true) do |row|

                @value = true

                csv_head = row.headers
        # checking if all field are correctly passed from csv    
                db_table = ["desk_id", "status", "campaign"]
        
                db_table.each do |col|
                    if !csv_head.include? col
                        @value = false
                        break
                    end
                end
                if @value == false
                    puts "value not complete"
                    break
                end
            end
        else
            redirect_to new_csv_file_path
            
        end


        puts "file uplaod success", @value, "well sortted"

        # picking required field for db data
        if @value == true

            data_col = ["desk_id", "status", "campaign"]
            zone_code = ["D", "E", "H", "I", "J", "K", "L", "M", "N", "Q", "R"]

            CSV.foreach(file.path, headers: true) do |row|
                data = row.to_hash
                db_hash = data.slice(*data_col)

                data_id = db_hash["desk_id"]

                case_check = data_id[0]

                if !zone_code.include?(data_id[0]) || data_id.length != 5
                    next
                else
                    case case_check
                    when "D"
                        puts db_hash
                        @zone_d = ZoneD.find_by(desk_id: data_id)
                        if @zone_d.present?
                            if @zone_d.update(db_hash)
                                puts "I was present and updated"
                            else
                                puts "data did not update"
                            end
                        else
                            @zone_d = ZoneD.new(db_hash)
                            if @zone_d.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "E"
                      # Code for case E
                    when "H"
                      # Code for case H
                    when "I"
                      # Code for case I
                    when "J"
                      # Code for case J
                    when "K"
                      # Code for case K
                    when "L"
                      # Code for case L
                    when "M"
                      # Code for case M
                    when "N"
                      # Code for case N
                    when "Q"
                      # Code for case Q
                    when "R"
                      # Code for case R
                    end
                end
            end

            
        else
            redirect_to new_csv_file_path, notice: "check your csv file"
        end
        



    end

end
