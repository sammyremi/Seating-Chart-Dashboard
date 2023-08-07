class CreateZoneEs < ActiveRecord::Migration[7.0]
  def change
    create_table :zone_es do |t|
      t.string :desk_id
      t.string :status
      t.string :campaign

      t.timestamps
    end
  end
end
