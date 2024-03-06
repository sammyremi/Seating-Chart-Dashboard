require "test_helper"

class ZoneEsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @zone_e = zone_es(:one)
  end

  test "should get index" do
    get zone_es_url
    assert_response :success
  end

  test "should get new" do
    get new_zone_e_url
    assert_response :success
  end

  test "should create zone_e" do
    assert_difference("ZoneE.count") do
      post zone_es_url, params: { zone_e: { campaign: @zone_e.campaign, desk_id: @zone_e.desk_id, status: @zone_e.status } }
    end

    assert_redirected_to zone_e_url(ZoneE.last)
  end

  test "should show zone_e" do
    get zone_e_url(@zone_e)
    assert_response :success
  end

  test "should get edit" do
    get edit_zone_e_url(@zone_e)
    assert_response :success
  end

  test "should update zone_e" do
    patch zone_e_url(@zone_e), params: { zone_e: { campaign: @zone_e.campaign, desk_id: @zone_e.desk_id, status: @zone_e.status } }
    assert_redirected_to zone_e_url(@zone_e)
  end

  test "should destroy zone_e" do
    assert_difference("ZoneE.count", -1) do
      delete zone_e_url(@zone_e)
    end

    assert_redirected_to zone_es_url
  end
end
