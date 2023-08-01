require "application_system_test_case"

class ZoneLsTest < ApplicationSystemTestCase
  setup do
    @zone_l = zone_ls(:one)
  end

  test "visiting the index" do
    visit zone_ls_url
    assert_selector "h1", text: "Zone ls"
  end

  test "should create zone l" do
    visit zone_ls_url
    click_on "New zone l"

    fill_in "Campaign", with: @zone_l.campaign
    fill_in "Desk", with: @zone_l.desk_id
    fill_in "Status", with: @zone_l.status
    click_on "Create Zone l"

    assert_text "Zone l was successfully created"
    click_on "Back"
  end

  test "should update Zone l" do
    visit zone_l_url(@zone_l)
    click_on "Edit this zone l", match: :first

    fill_in "Campaign", with: @zone_l.campaign
    fill_in "Desk", with: @zone_l.desk_id
    fill_in "Status", with: @zone_l.status
    click_on "Update Zone l"

    assert_text "Zone l was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone l" do
    visit zone_l_url(@zone_l)
    click_on "Destroy this zone l", match: :first

    assert_text "Zone l was successfully destroyed"
  end
end
