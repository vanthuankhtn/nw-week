<div class="nw-week-wraper">
  <div class="nw-week-loading" style="display: none;"><img src="<?php print url(drupal_get_path('module', 'nw_week') . '/images/loading-icon.gif'); ?>"></div>
  <div class="nw-week-content"><?php print $data; ?></div>
  <div class="nw-week-paging">
    <?php if($page < $total_page): ?>
      <div class="nw-week-previous" ><a class="nw-week-previous-action" href="javascript:void(0)"><?php print t('Previous week'); ?></a></div>
      <div class="nw-week-next" data="1"><a class="nw-week-next-action" href="javascript:void(0)"><?php print t('Next week'); ?></a></div>
    <?php endif; ?>
  </div>
  <span class="nw-week-current-page" data="<?php print $page; ?>"></span>
  <span class="nw-week-total-page" data="<?php print $total_page; ?>"></span>
</div>
