require "application_system_test_case"

class ZoneDsTest < ApplicationSystemTestCase
  setup do
    @zone_d = zone_ds(:one)
  end

  test "visiting the index" do
    visit zone_ds_url
    assert_selector "h1", text: "Zone ds"
  end

  test "should create zone d" do
    visit zone_ds_url
    click_on "New zone d"

    fill_in "Campaign", with: @zone_d.campaign
    fill_in "Desk", with: @zone_d.desk_id
    fill_in "Status", with: @zone_d.status
    click_on "Create Zone d"

    assert_text "Zone d was successfully created"
    click_on "Back"
  end

  test "should update Zone d" do
    visit zone_d_url(@zone_d)
    click_on "Edit this zone d", match: :first

    fill_in "Campaign", with: @zone_d.campaign
    fill_in "Desk", with: @zone_d.desk_id
    fill_in "Status", with: @zone_d.status
    click_on "Update Zone d"

    assert_text "Zone d was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone d" do
    visit zone_d_url(@zone_d)
    click_on "Destroy this zone d", match: :first

    assert_text "Zone d was successfully destroyed"
  end
end
