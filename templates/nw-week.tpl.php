<table class="table table-condensed table-bordered schedule-table">
  <tr>
    <?php foreach($data as $day => $values): ?>
      <td><span class="nw-week-header-table"><?php print date('D', strtotime($day)); ?></span>  <?php print '(' . $day . ')' ?>
      <hr>
      <?php if(empty($values)): ?>
        <?php continue; ?>
        </td>
      <?php endif; ?>

      <table class="table table-condensed table-bordered schedule-table">
        <?php foreach($values as $value): ?>
          <tr>
            <td><?php print $value->name; ?></td>
          </tr>
        <?php endforeach; ?>
      </table>
      </td>
    <?php endforeach; ?>
  </tr>
</table>