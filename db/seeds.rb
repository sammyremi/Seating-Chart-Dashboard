# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

require "csv"

CSV.foreach(Rails.root.join('zones', 'zoneD.csv'), headers: true) do |row|
    ZoneD.create!(
        desk_id: row['desk_id'],
        status: row['status'],
        campaign: row['campaign']
    )
end

CSV.foreach(Rails.root.join('zones', 'zoneH.csv'), headers: true) do |row|
    ZoneH.create!(
        desk_id: row['desk_id'],
        status: row['status'],
        campaign: row['campaign']
    )
end

CSV.foreach(Rails.root.join('zones', 'zoneJ.csv'), headers: true) do |row|
    ZoneJ.create!(
        desk_id: row['desk_id'],
        status: row['status'],
        campaign: row['campaign']
    )
end

CSV.foreach(Rails.root.join('zones', 'zoneL.csv'), headers: true) do |row|
    ZoneL.create!(
        desk_id: row['desk_id'],
        status: row['status'],
        campaign: row['campaign']
    )
end

CSV.foreach(Rails.root.join('zones', 'zoneN.csv'), headers: true) do |row|
    ZoneN.create!(
        desk_id: row['desk_id'],
        status: row['status'],
        campaign: row['campaign']
    )
end

CSV.foreach(Rails.root.join('zones', 'zoneR.csv'), headers: true) do |row|
    ZoneR.create!(
        desk_id: row['desk_id'],
        status: row['status'],
        campaign: row['campaign']
    )
end