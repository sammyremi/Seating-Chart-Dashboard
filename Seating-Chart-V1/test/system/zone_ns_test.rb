require "application_system_test_case"

class ZoneNsTest < ApplicationSystemTestCase
  setup do
    @zone_n = zone_ns(:one)
  end

  test "visiting the index" do
    visit zone_ns_url
    assert_selector "h1", text: "Zone ns"
  end

  test "should create zone n" do
    visit zone_ns_url
    click_on "New zone n"

    fill_in "Campaign", with: @zone_n.campaign
    fill_in "Desk", with: @zone_n.desk_id
    fill_in "Status", with: @zone_n.status
    click_on "Create Zone n"

    assert_text "Zone n was successfully created"
    click_on "Back"
  end

  test "should update Zone n" do
    visit zone_n_url(@zone_n)
    click_on "Edit this zone n", match: :first

    fill_in "Campaign", with: @zone_n.campaign
    fill_in "Desk", with: @zone_n.desk_id
    fill_in "Status", with: @zone_n.status
    click_on "Update Zone n"

    assert_text "Zone n was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone n" do
    visit zone_n_url(@zone_n)
    click_on "Destroy this zone n", match: :first

    assert_text "Zone n was successfully destroyed"
  end
end
