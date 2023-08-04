class RemoveDeskIdFromZoneRs < ActiveRecord::Migration[7.0]
  def change
    remove_column :zone_rs, :desk_id, :integer
  end
end
