class RemoveDeskIdFromZoneD < ActiveRecord::Migration[7.0]
  def change
    remove_column :zone_ds, :desk_id, :integer
  end
end
