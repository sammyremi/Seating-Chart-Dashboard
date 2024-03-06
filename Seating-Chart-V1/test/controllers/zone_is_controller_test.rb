require "test_helper"

class ZoneIsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @zone_i = zone_is(:one)
  end

  test "should get index" do
    get zone_is_url
    assert_response :success
  end

  test "should get new" do
    get new_zone_i_url
    assert_response :success
  end

  test "should create zone_i" do
    assert_difference("ZoneI.count") do
      post zone_is_url, params: { zone_i: { campaign: @zone_i.campaign, desk_id: @zone_i.desk_id, status: @zone_i.status } }
    end

    assert_redirected_to zone_i_url(ZoneI.last)
  end

  test "should show zone_i" do
    get zone_i_url(@zone_i)
    assert_response :success
  end

  test "should get edit" do
    get edit_zone_i_url(@zone_i)
    assert_response :success
  end

  test "should update zone_i" do
    patch zone_i_url(@zone_i), params: { zone_i: { campaign: @zone_i.campaign, desk_id: @zone_i.desk_id, status: @zone_i.status } }
    assert_redirected_to zone_i_url(@zone_i)
  end

  test "should destroy zone_i" do
    assert_difference("ZoneI.count", -1) do
      delete zone_i_url(@zone_i)
    end

    assert_redirected_to zone_is_url
  end
end
