require "application_system_test_case"

class ZoneRsTest < ApplicationSystemTestCase
  setup do
    @zone_r = zone_rs(:one)
  end

  test "visiting the index" do
    visit zone_rs_url
    assert_selector "h1", text: "Zone rs"
  end

  test "should create zone r" do
    visit zone_rs_url
    click_on "New zone r"

    fill_in "Campaign", with: @zone_r.campaign
    fill_in "Desk", with: @zone_r.desk_id
    fill_in "Status", with: @zone_r.status
    click_on "Create Zone r"

    assert_text "Zone r was successfully created"
    click_on "Back"
  end

  test "should update Zone r" do
    visit zone_r_url(@zone_r)
    click_on "Edit this zone r", match: :first

    fill_in "Campaign", with: @zone_r.campaign
    fill_in "Desk", with: @zone_r.desk_id
    fill_in "Status", with: @zone_r.status
    click_on "Update Zone r"

    assert_text "Zone r was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone r" do
    visit zone_r_url(@zone_r)
    click_on "Destroy this zone r", match: :first

    assert_text "Zone r was successfully destroyed"
  end
end
