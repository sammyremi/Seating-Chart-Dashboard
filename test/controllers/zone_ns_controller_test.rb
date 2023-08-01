require "test_helper"

class ZoneNsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @zone_n = zone_ns(:one)
  end

  test "should get index" do
    get zone_ns_url
    assert_response :success
  end

  test "should get new" do
    get new_zone_n_url
    assert_response :success
  end

  test "should create zone_n" do
    assert_difference("ZoneN.count") do
      post zone_ns_url, params: { zone_n: { campaign: @zone_n.campaign, desk_id: @zone_n.desk_id, status: @zone_n.status } }
    end

    assert_redirected_to zone_n_url(ZoneN.last)
  end

  test "should show zone_n" do
    get zone_n_url(@zone_n)
    assert_response :success
  end

  test "should get edit" do
    get edit_zone_n_url(@zone_n)
    assert_response :success
  end

  test "should update zone_n" do
    patch zone_n_url(@zone_n), params: { zone_n: { campaign: @zone_n.campaign, desk_id: @zone_n.desk_id, status: @zone_n.status } }
    assert_redirected_to zone_n_url(@zone_n)
  end

  test "should destroy zone_n" do
    assert_difference("ZoneN.count", -1) do
      delete zone_n_url(@zone_n)
    end

    assert_redirected_to zone_ns_url
  end
end
