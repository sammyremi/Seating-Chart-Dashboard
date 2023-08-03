require "test_helper"

class ZoneDsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @zone_d = zone_ds(:one)
  end

  test "should get index" do
    get zone_ds_url
    assert_response :success
  end

  test "should get new" do
    get new_zone_d_url
    assert_response :success
  end

  test "should create zone_d" do
    assert_difference("ZoneD.count") do
      post zone_ds_url, params: { zone_d: { campaign: @zone_d.campaign, desk_id: @zone_d.desk_id, status: @zone_d.status } }
    end

    assert_redirected_to zone_d_url(ZoneD.last)
  end

  test "should show zone_d" do
    get zone_d_url(@zone_d)
    assert_response :success
  end

  test "should get edit" do
    get edit_zone_d_url(@zone_d)
    assert_response :success
  end

  test "should update zone_d" do
    patch zone_d_url(@zone_d), params: { zone_d: { campaign: @zone_d.campaign, desk_id: @zone_d.desk_id, status: @zone_d.status } }
    assert_redirected_to zone_d_url(@zone_d)
  end

  test "should destroy zone_d" do
    assert_difference("ZoneD.count", -1) do
      delete zone_d_url(@zone_d)
    end

    assert_redirected_to zone_ds_url
  end
end
