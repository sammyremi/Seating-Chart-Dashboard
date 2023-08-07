require "application_system_test_case"

class ZoneKsTest < ApplicationSystemTestCase
  setup do
    @zone_k = zone_ks(:one)
  end

  test "visiting the index" do
    visit zone_ks_url
    assert_selector "h1", text: "Zone ks"
  end

  test "should create zone k" do
    visit zone_ks_url
    click_on "New zone k"

    fill_in "Campaign", with: @zone_k.campaign
    fill_in "Desk", with: @zone_k.desk_id
    fill_in "Status", with: @zone_k.status
    click_on "Create Zone k"

    assert_text "Zone k was successfully created"
    click_on "Back"
  end

  test "should update Zone k" do
    visit zone_k_url(@zone_k)
    click_on "Edit this zone k", match: :first

    fill_in "Campaign", with: @zone_k.campaign
    fill_in "Desk", with: @zone_k.desk_id
    fill_in "Status", with: @zone_k.status
    click_on "Update Zone k"

    assert_text "Zone k was successfully updated"
    click_on "Back"
  end

  test "should destroy Zone k" do
    visit zone_k_url(@zone_k)
    click_on "Destroy this zone k", match: :first

    assert_text "Zone k was successfully destroyed"
  end
end
