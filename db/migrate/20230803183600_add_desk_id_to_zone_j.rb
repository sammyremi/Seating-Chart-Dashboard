class AddDeskIdToZoneJ < ActiveRecord::Migration[7.0]
  def change
    add_column :zone_js, :desk_id, :string
  end
end
