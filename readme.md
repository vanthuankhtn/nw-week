1. How to display anything which was scheduled date by date.

This module will help you display anything which you scheduled day by day. 

Example:
nw-week.api.php
<?php
/**
 * hook_week_data
 * @return array
 */
function hook_week_data() {
  $objec_1 = new stdClass();
  $objec_1->date = 1466640000; //23/6/2016 -> week1
  $objec_1->name = 'Mr Bean min';

  $objec_3 = new stdClass();
  $objec_3->date = 1466640000; //23/6/2016 -> week1
  $objec_3->name = 'Mr Bean Bon';

  $objec_2 = new stdClass();
  $objec_2->date = 1467072000; //28/6/2016 -> week2
  $objec_2->name = 'Mr Bean big';

  $data = array(0 => $objec_2, 1 => $objec_1, 2 => $objec_3);

  return $data;
}
