class RemoveDeskIdFromZoneJs < ActiveRecord::Migration[7.0]
  def change
    remove_column :zone_js, :desk_id, :integer
  end
end
