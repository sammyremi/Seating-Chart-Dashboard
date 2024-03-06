require "application_system_test_case"

class ZoneMsTest < ApplicationSystemTestCase
  setup do
    @zone_m = zone_ms(:one)
  end

  test "visiting the index" do
    visit zone_ms_url
    assert_selector "h1", text: "Zone ms"
  end

  test "should create zone m" do
    visit zone_ms_url
    click_on "New zone m"

    fill_in "Campaign", with: @zone_m.campaign
    fill_in "Desk", with: @zone_m.desk_id
    fill_in "Status", with: @zone_m.status
    click_on "Create Zone m"

    assert_text "Zone m was successfully created"
    click_on "Back"
  end

  test "should update Zone m" do
    visit zone_m_url(@zone_m)
    click_on "Edit this zone m", match: :first

    fill_in "Campaign", with: @zone_m.campaign
    fill_in "Desk", with: @zone_m.desk_id
    fill_in "Status", with: @zone_m.status
    click_on "Update Zone m"

    assert_text "Zone m was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone m" do
    visit zone_m_url(@zone_m)
    click_on "Destroy this zone m", match: :first

    assert_text "Zone m was successfully destroyed"
  end
end
