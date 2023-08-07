require "application_system_test_case"

class ZoneEsTest < ApplicationSystemTestCase
  setup do
    @zone_e = zone_es(:one)
  end

  test "visiting the index" do
    visit zone_es_url
    assert_selector "h1", text: "Zone es"
  end

  test "should create zone e" do
    visit zone_es_url
    click_on "New zone e"

    fill_in "Campaign", with: @zone_e.campaign
    fill_in "Desk", with: @zone_e.desk_id
    fill_in "Status", with: @zone_e.status
    click_on "Create Zone e"

    assert_text "Zone e was successfully created"
    click_on "Back"
  end

  test "should update Zone e" do
    visit zone_e_url(@zone_e)
    click_on "Edit this zone e", match: :first

    fill_in "Campaign", with: @zone_e.campaign
    fill_in "Desk", with: @zone_e.desk_id
    fill_in "Status", with: @zone_e.status
    click_on "Update Zone e"

    assert_text "Zone e was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone e" do
    visit zone_e_url(@zone_e)
    click_on "Destroy this zone e", match: :first

    assert_text "Zone e was successfully destroyed"
  end
end
