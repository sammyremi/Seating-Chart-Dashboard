require "test_helper"

class ZoneLsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @zone_l = zone_ls(:one)
  end

  test "should get index" do
    get zone_ls_url
    assert_response :success
  end

  test "should get new" do
    get new_zone_l_url
    assert_response :success
  end

  test "should create zone_l" do
    assert_difference("ZoneL.count") do
      post zone_ls_url, params: { zone_l: { campaign: @zone_l.campaign, desk_id: @zone_l.desk_id, status: @zone_l.status } }
    end

    assert_redirected_to zone_l_url(ZoneL.last)
  end

  test "should show zone_l" do
    get zone_l_url(@zone_l)
    assert_response :success
  end

  test "should get edit" do
    get edit_zone_l_url(@zone_l)
    assert_response :success
  end

  test "should update zone_l" do
    patch zone_l_url(@zone_l), params: { zone_l: { campaign: @zone_l.campaign, desk_id: @zone_l.desk_id, status: @zone_l.status } }
    assert_redirected_to zone_l_url(@zone_l)
  end

  test "should destroy zone_l" do
    assert_difference("ZoneL.count", -1) do
      delete zone_l_url(@zone_l)
    end

    assert_redirected_to zone_ls_url
  end
end
