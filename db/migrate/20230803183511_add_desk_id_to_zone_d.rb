class AddDeskIdToZoneD < ActiveRecord::Migration[7.0]
  def change
    add_column :zone_ds, :desk_id, :string
  end
end
