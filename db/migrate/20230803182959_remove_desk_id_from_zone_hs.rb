class RemoveDeskIdFromZoneHs < ActiveRecord::Migration[7.0]
  def change
    remove_column :zone_hs, :desk_id, :integer
  end
end
