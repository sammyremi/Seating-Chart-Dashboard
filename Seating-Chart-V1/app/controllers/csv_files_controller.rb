class CsvFilesController < ApplicationController


    def new

    end

    def create

        # reading file from params

        @wrong_file = 1
        
        file = params[:file]
        #checking if file is a csv file 
        if file.present? && file.content_type == "text/csv"

            CSV.foreach(file.path, headers: true) do |row|

                @value = true

                csv_head = row.headers
        # checking if all field are correctly passed in csv  // else break and notify user error
                db_table = ["desk_id", "status", "campaign", "desk id"]
        
                db_table.each do |col|
                    if !csv_head.include? col
                        if col == "desk id" || col == "desk_id"
                            next
                        end
                        @value = false
                        @wrong_file = 0
                        break
                    end
                end
                if @value == false
                    puts "value not complete"
                    break
                end
            end
        else
            redirect_to admin_csv_files_path, notice: "Please upload a CSV file"
            
        end

        # run only if file has success upload
        if @value == true

            data_col = ["desk_id", "status", "campaign", "desk id"]
            zone_code = ["D", "E", "H", "I", "J", "K", "L", "M", "N", "Q", "R"]
            status_type = ["damaged", "occupied", "vacant", "reserved (it)", "reserved (ops)", "reserved (dev)", "reserved it", "reserved dev", "reserved ops"]

            CSV.foreach(file.path, headers: true) do |row|

                # converting data to hash for db input
                data = row.to_hash
                db_hash = data.slice(*data_col)

                # checking for both desk_id and desk id in csv 
                @new_id_1 = db_hash.slice("desk_id")
                @new_id_2 = db_hash.slice("desk id")
        
                if @new_id_1.length > 0
                    data_id = db_hash["desk_id"]
                elsif @new_id_2.length > 0

                    # replacing old id if desk id to desk_id
                    new_id = "desk_id"
                    old_id = db_hash["desk id"]
                    db_hash.delete("desk id")
                    db_hash[new_id] = old_id
                    data_id = db_hash["desk_id"]

                end
                case_check = data_id[0]
                # checking for correct format for ID
                status_confirm = db_hash["status"].downcase

                if !zone_code.include?(data_id[0]) || data_id.length != 5
                    next
                elsif !status_type.include?(status_confirm)
                    next
                else

                    def zone_id_check(db_hash, data_id)

                        @desk_id = data_id
                        @db_zone_list = [ZoneD, ZoneE, ZoneH, ZoneI, ZoneJ, ZoneK, ZoneL, ZoneM, ZoneN, ZoneQ, ZoneR]

                        # converting class to string to look for last index
                        @db_zone_list.each do |zone|
                            con_string = zone.to_s

                            #cross checking both desk ID letter and Class list last letter
                            if con_string[-1] == @desk_id[0]
                                index_num = @db_zone_list.index(zone)
                                @db_zone = @db_zone_list[index_num]
                            end

                            @db_zone_result = @db_zone.find_by(desk_id: @desk_id)
                            
                            if @db_zone_result.present?
                                if @db_zone_result.update(db_hash)
                                    puts "data present"
                                else
                                    puts "data did not update"
                                end
                            else
                        # if desk id cant be found then create new data and save to db
                                @db_zone_result = @db_zone.new(db_hash)
                                if @db_zone_result.save
                                    puts "success to db"
                                else
                                    puts "something went wrong"
                                end
                            end

                        end

                        
                    end
                    #calling function to perform task
                    zone_id_check(db_hash, data_id)

                end
                    
            end
            redirect_to admin_csv_files_path, notice: "File Successfully Updated to Database"
        end

        if @wrong_file == 0
            redirect_to admin_csv_files_path, notice: "Check CSV Column"
        end
        
    end

end