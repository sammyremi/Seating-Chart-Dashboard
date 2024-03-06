require "test_helper"

class ZoneHsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @zone_h = zone_hs(:one)
  end

  test "should get index" do
    get zone_hs_url
    assert_response :success
  end

  test "should get new" do
    get new_zone_h_url
    assert_response :success
  end

  test "should create zone_h" do
    assert_difference("ZoneH.count") do
      post zone_hs_url, params: { zone_h: { campaign: @zone_h.campaign, desk_id: @zone_h.desk_id, status: @zone_h.status } }
    end

    assert_redirected_to zone_h_url(ZoneH.last)
  end

  test "should show zone_h" do
    get zone_h_url(@zone_h)
    assert_response :success
  end

  test "should get edit" do
    get edit_zone_h_url(@zone_h)
    assert_response :success
  end

  test "should update zone_h" do
    patch zone_h_url(@zone_h), params: { zone_h: { campaign: @zone_h.campaign, desk_id: @zone_h.desk_id, status: @zone_h.status } }
    assert_redirected_to zone_h_url(@zone_h)
  end

  test "should destroy zone_h" do
    assert_difference("ZoneH.count", -1) do
      delete zone_h_url(@zone_h)
    end

    assert_redirected_to zone_hs_url
  end
end
