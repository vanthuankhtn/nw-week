<?php

/**
 * Callback when paging week calendar
 * @param $page
 * @throws Exception
 */
function nw_week_next_get($page) {
  $result = array('status' => 200, 'data' => NULL);

  if(!is_numeric($page) || $page < 0) {
    drupal_json_output($result);
    exit;
  }

  $data = cache_get(NW_WEEK_DATA_CACHE);

  if(empty($data)) {
    drupal_json_output($result);
    exit;
  }


  $data = $data->data;

  if($page >= count($data)) {
    drupal_json_output($result);
    exit;
  }

  $output = theme('nw_week', array('data' => $data[$page]));
  $result['data'] = $output;

  drupal_json_output($result);
  exit;
}