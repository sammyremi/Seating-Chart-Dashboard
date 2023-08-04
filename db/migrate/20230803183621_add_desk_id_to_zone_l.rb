class AddDeskIdToZoneL < ActiveRecord::Migration[7.0]
  def change
    add_column :zone_ls, :desk_id, :string
  end
end
