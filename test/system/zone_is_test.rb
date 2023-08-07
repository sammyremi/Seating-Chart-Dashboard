require "application_system_test_case"

class ZoneIsTest < ApplicationSystemTestCase
  setup do
    @zone_i = zone_is(:one)
  end

  test "visiting the index" do
    visit zone_is_url
    assert_selector "h1", text: "Zone is"
  end

  test "should create zone i" do
    visit zone_is_url
    click_on "New zone i"

    fill_in "Campaign", with: @zone_i.campaign
    fill_in "Desk", with: @zone_i.desk_id
    fill_in "Status", with: @zone_i.status
    click_on "Create Zone i"

    assert_text "Zone i was successfully created"
    click_on "Back"
  end

  test "should update Zone i" do
    visit zone_i_url(@zone_i)
    click_on "Edit this zone i", match: :first

    fill_in "Campaign", with: @zone_i.campaign
    fill_in "Desk", with: @zone_i.desk_id
    fill_in "Status", with: @zone_i.status
    click_on "Update Zone i"

    assert_text "Zone i was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone i" do
    visit zone_i_url(@zone_i)
    click_on "Destroy this zone i", match: :first

    assert_text "Zone i was successfully destroyed"
  end
end
