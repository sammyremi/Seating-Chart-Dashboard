class RemoveDeskIdFromZoneNs < ActiveRecord::Migration[7.0]
  def change
    remove_column :zone_ns, :desk_id, :integer
  end
end
