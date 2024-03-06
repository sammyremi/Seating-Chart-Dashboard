class CreateZoneNs < ActiveRecord::Migration[7.0]
  def change
    create_table :zone_ns do |t|
      t.integer :desk_id
      t.string :status
      t.string :campaign

      t.timestamps
    end
  end
end
