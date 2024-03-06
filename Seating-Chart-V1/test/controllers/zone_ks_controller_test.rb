require "test_helper"

class ZoneKsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @zone_k = zone_ks(:one)
  end

  test "should get index" do
    get zone_ks_url
    assert_response :success
  end

  test "should get new" do
    get new_zone_k_url
    assert_response :success
  end

  test "should create zone_k" do
    assert_difference("ZoneK.count") do
      post zone_ks_url, params: { zone_k: { campaign: @zone_k.campaign, desk_id: @zone_k.desk_id, status: @zone_k.status } }
    end

    assert_redirected_to zone_k_url(ZoneK.last)
  end

  test "should show zone_k" do
    get zone_k_url(@zone_k)
    assert_response :success
  end

  test "should get edit" do
    get edit_zone_k_url(@zone_k)
    assert_response :success
  end

  test "should update zone_k" do
    patch zone_k_url(@zone_k), params: { zone_k: { campaign: @zone_k.campaign, desk_id: @zone_k.desk_id, status: @zone_k.status } }
    assert_redirected_to zone_k_url(@zone_k)
  end

  test "should destroy zone_k" do
    assert_difference("ZoneK.count", -1) do
      delete zone_k_url(@zone_k)
    end

    assert_redirected_to zone_ks_url
  end
end
