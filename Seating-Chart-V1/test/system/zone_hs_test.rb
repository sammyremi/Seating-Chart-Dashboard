require "application_system_test_case"

class ZoneHsTest < ApplicationSystemTestCase
  setup do
    @zone_h = zone_hs(:one)
  end

  test "visiting the index" do
    visit zone_hs_url
    assert_selector "h1", text: "Zone hs"
  end

  test "should create zone h" do
    visit zone_hs_url
    click_on "New zone h"

    fill_in "Campaign", with: @zone_h.campaign
    fill_in "Desk", with: @zone_h.desk_id
    fill_in "Status", with: @zone_h.status
    click_on "Create Zone h"

    assert_text "Zone h was successfully created"
    click_on "Back"
  end

  test "should update Zone h" do
    visit zone_h_url(@zone_h)
    click_on "Edit this zone h", match: :first

    fill_in "Campaign", with: @zone_h.campaign
    fill_in "Desk", with: @zone_h.desk_id
    fill_in "Status", with: @zone_h.status
    click_on "Update Zone h"

    assert_text "Zone h was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone h" do
    visit zone_h_url(@zone_h)
    click_on "Destroy this zone h", match: :first

    assert_text "Zone h was successfully destroyed"
  end
end
