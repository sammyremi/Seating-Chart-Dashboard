class CreateZoneRs < ActiveRecord::Migration[7.0]
  def change
    create_table :zone_rs do |t|
      t.string :desk_id
      t.string :status
      t.string :campaign

      t.timestamps
    end
  end
end
