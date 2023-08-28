class DropZones < ActiveRecord::Migration[7.0]
  def up
    drop_table :zones
  end
end
