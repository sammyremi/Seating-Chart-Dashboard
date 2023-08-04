class AddDeskIdToZoneR < ActiveRecord::Migration[7.0]
  def change
    add_column :zone_rs, :desk_id, :string
  end
end
