class RemoveDeskIdFromZoneLs < ActiveRecord::Migration[7.0]
  def change
    remove_column :zone_ls, :desk_id, :integer
  end
end
