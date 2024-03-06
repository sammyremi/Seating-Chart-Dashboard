class CreateCsvFiles < ActiveRecord::Migration[7.0]
  def change
    create_table :csv_files do |t|
      t.string :file

      t.timestamps
    end
  end
end
