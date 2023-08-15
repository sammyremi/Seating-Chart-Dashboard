class Zone < ApplicationRecord
    require 'csv'

    def self.import(file)
        CSV.foreach(file.path, headers: true) do |row|
            Zone.create!(
                desk_id: row['desk_id'],
                status: row['status'],
                campaign: row['campaign']
            )
        end
    end
end
