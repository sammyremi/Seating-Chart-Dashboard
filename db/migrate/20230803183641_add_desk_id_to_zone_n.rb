class AddDeskIdToZoneN < ActiveRecord::Migration[7.0]
  def change
    add_column :zone_ns, :desk_id, :string
  end
end
