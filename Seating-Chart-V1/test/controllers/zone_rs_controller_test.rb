require "test_helper"

class ZoneRsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @zone_r = zone_rs(:one)
  end

  test "should get index" do
    get zone_rs_url
    assert_response :success
  end

  test "should get new" do
    get new_zone_r_url
    assert_response :success
  end

  test "should create zone_r" do
    assert_difference("ZoneR.count") do
      post zone_rs_url, params: { zone_r: { campaign: @zone_r.campaign, desk_id: @zone_r.desk_id, status: @zone_r.status } }
    end

    assert_redirected_to zone_r_url(ZoneR.last)
  end

  test "should show zone_r" do
    get zone_r_url(@zone_r)
    assert_response :success
  end

  test "should get edit" do
    get edit_zone_r_url(@zone_r)
    assert_response :success
  end

  test "should update zone_r" do
    patch zone_r_url(@zone_r), params: { zone_r: { campaign: @zone_r.campaign, desk_id: @zone_r.desk_id, status: @zone_r.status } }
    assert_redirected_to zone_r_url(@zone_r)
  end

  test "should destroy zone_r" do
    assert_difference("ZoneR.count", -1) do
      delete zone_r_url(@zone_r)
    end

    assert_redirected_to zone_rs_url
  end
end
