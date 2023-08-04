class AddDeskIdToZoneH < ActiveRecord::Migration[7.0]
  def change
    add_column :zone_hs, :desk_id, :string
  end
end
