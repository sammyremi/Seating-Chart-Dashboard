class CsvFilesController < ApplicationController


    def new
        @zoned = ZoneD.order(:desk_id)
    end

    def show

    end

    def create

        # reading file from params
        
        file = params[:file]
        #checking if file is a csv file 
        if file.present? && file.content_type == "text/csv"

            CSV.foreach(file.path, headers: true) do |row|

                @value = true

                csv_head = row.headers
        # checking if all field are correctly passed in csv  // else break and notify user error
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
            redirect_to admin_csv_files_path
            
        end


        puts "file uplaod success"

        # run only if file has success upload
        if @value == true

            data_col = ["desk_id", "status", "campaign"]
            zone_code = ["D", "E", "H", "I", "J", "K", "L", "M", "N", "Q", "R"]
            status_type = ["damaged", "occupied", "vacant", "reserved (it)", "reserved (ops)", "reserved (dev)"]

            CSV.foreach(file.path, headers: true) do |row|

                # converting data to hash for db input
                data = row.to_hash
                db_hash = data.slice(*data_col)
                data_id = db_hash["desk_id"]
                case_check = data_id[0]
                # checking for correct format for ID
                status_confirm = db_hash["status"].downcase

                if !zone_code.include?(data_id[0]) || data_id.length != 5
                    next
                elsif !status_type.include?(status_confirm)
                    next
                else
                    # checking if desk id exist if exist update with the existing
                    case case_check
                    when "D"
                        puts db_hash
                        @zone_d = ZoneD.find_by(desk_id: data_id)
                        if @zone_d.present?
                            if @zone_d.update(db_hash)
                                puts "data present"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_d = ZoneD.new(db_hash)
                            if @zone_d.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "E"
                        @zone_e = ZoneE.find_by(desk_id: data_id)
                        if @zone_e.present?
                            if @zone_e.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_e = ZoneE.new(db_hash)
                            if @zone_e.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "H"
                        @zone_h = ZoneH.find_by(desk_id: data_id)
                        if @zone_h.present?
                            if @zone_h.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_h = ZoneH.new(db_hash)
                            if @zone_h.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "I"
                        @zone_i = ZoneI.find_by(desk_id: data_id)
                        if @zone_i.present?
                            if @zone_i.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_i = ZoneI.new(db_hash)
                            if @zone_i.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "J"
                        @zone_j = ZoneJ.find_by(desk_id: data_id)
                        if @zone_j.present?
                            if @zone_j.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_j = ZoneJ.new(db_hash)
                            if @zone_j.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "K"
                        @zone_k = ZoneK.find_by(desk_id: data_id)
                        if @zone_k.present?
                            if @zone_k.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_k = ZoneK.new(db_hash)
                            if @zone_k.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "L"
                        @zone_l = ZoneL.find_by(desk_id: data_id)
                        if @zone_l.present?
                            if @zone_l.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_l = ZoneL.new(db_hash)
                            if @zone_l.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "M"
                        @zone_m = ZoneM.find_by(desk_id: data_id)
                        if @zone_m.present?
                            if @zone_m.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_m = ZoneM.new(db_hash)
                            if @zone_m.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "N"
                        @zone_n = ZoneN.find_by(desk_id: data_id)
                        if @zone_n.present?
                            if @zone_n.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_n = ZoneN.new(db_hash)
                            if @zone_n.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "Q"
                        @zone_q = ZoneQ.find_by(desk_id: data_id)
                        if @zone_q.present?
                            if @zone_q.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_q = ZoneQ.new(db_hash)
                            if @zone_q.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    when "R"
                        @zone_r = ZoneR.find_by(desk_id: data_id)
                        if @zone_r.present?
                            if @zone_r.update(db_hash)
                                puts "updated successfuly"
                            else
                                puts "data did not update"
                            end
                        else
                    # if desk id cant be found then create new data and save to db
                            @zone_r = ZoneR.new(db_hash)
                            if @zone_r.save
                                puts "success to db"
                            else
                                puts "something went wrong"
                            end
                        end
                    end
                end
            end
            redirect_to admin_csv_files_path, notice: "File updated to Database"
            
        else

            flash[:notice] = "check your file format"
        end
        
    end

end
