require "application_system_test_case"

class ZoneQsTest < ApplicationSystemTestCase
  setup do
    @zone_q = zone_qs(:one)
  end

  test "visiting the index" do
    visit zone_qs_url
    assert_selector "h1", text: "Zone qs"
  end

  test "should create zone q" do
    visit zone_qs_url
    click_on "New zone q"

    fill_in "Campaign", with: @zone_q.campaign
    fill_in "Desk", with: @zone_q.desk_id
    fill_in "Status", with: @zone_q.status
    click_on "Create Zone q"

    assert_text "Zone q was successfully created"
    click_on "Back"
  end

  test "should update Zone q" do
    visit zone_q_url(@zone_q)
    click_on "Edit this zone q", match: :first

    fill_in "Campaign", with: @zone_q.campaign
    fill_in "Desk", with: @zone_q.desk_id
    fill_in "Status", with: @zone_q.status
    click_on "Update Zone q"

    assert_text "Zone q was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone q" do
    visit zone_q_url(@zone_q)
    click_on "Destroy this zone q", match: :first

    assert_text "Zone q was successfully destroyed"
  end
end
