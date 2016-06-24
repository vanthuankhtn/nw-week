<?php
/**
 * Build setting form
 */
function nw_week_setting_form() {
  $form['desct'] = array(
    '#markup' => '<div>' . t('Nexway Week will display the best employee information when you scheduled them.') . '</div>',
  );

  $form['nw_week'] = array(
    '#type' => 'fieldset',
    '#title' => t('Configuration'),
    '#collapsible' => TRUE,
    '#collapsed' => FALSE,
  );

  $form['nw_week']['nw_week_module_hook'] = array(
    '#type' => 'textfield',
    '#title' => t('Hook module'),
    '#description' => t('Allow specific module to hook'),
    '#required' => TRUE,
    '#default_value' => variable_get('nw_week_module_hook', 'nw_week_test'),
  );

  return system_settings_form($form);
}