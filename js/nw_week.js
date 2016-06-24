var NWweek = {
    request_nextpage : function(request_url, current_page_box, content, total_page_box, loading_image) {
        var action = jQuery('.nw-week-next-action');
        action.click(function() {
            var current_page = current_page_box.attr('data');
            var next_page = parseInt(current_page) + 1;
            var arg_request_url = request_url + next_page;
            loading_image.show();

            jQuery.ajax({
                method: "GET",
                url: arg_request_url
            }).done(function(data) {
                NWweek.update_data(data, current_page_box, content, next_page, total_page_box);
                loading_image.hide();
            });
        });
    },

    request_previouspage : function(request_url, current_page_box, content, total_page_box, loading_image) {
        var action = jQuery('.nw-week-previous-action');
        action.click(function() {
            var current_page = current_page_box.attr('data');
            var previous_page = parseInt(current_page) - 1;
            var arg_request_url = request_url + previous_page;
            loading_image.show();

            jQuery.ajax({
                method: "GET",
                url: arg_request_url
            }).done(function(data) {
                NWweek.update_data(data, current_page_box, content, previous_page, total_page_box);
                loading_image.hide();
            });
        });
    },

    update_data : function(result, current_page_box, content, next_page, total_page_box) {
        if(result.status == 200 && result.data !== null) {
            content.html(result.data);
            current_page_box.attr('data', next_page);

            NWweek.check_display(total_page_box, current_page_box);
        } else {
            alert('Server error!');
        }
    },

    request_paging : function() {
        var request_url = 'nw-week/page/';
        var current_page_box = jQuery('.nw-week-current-page');
        var content = jQuery('.nw-week-content');
        var total_page_box = jQuery('.nw-week-total-page');
        var loading_image = jQuery('.nw-week-loading');

        NWweek.check_display(total_page_box, current_page_box);
        NWweek.request_nextpage(request_url, current_page_box, content, total_page_box, loading_image);
        NWweek.request_previouspage(request_url, current_page_box, content, total_page_box, loading_image);
    },

    check_display : function(total_page_box, current_page_box) {
        var total_page = total_page_box.attr('data');
        total_page = parseInt(total_page);

        var current_page = current_page_box.attr('data');
        current_page = parseInt(current_page);

        var previous_box = jQuery('.nw-week-previous');
        var next_box = jQuery('.nw-week-next');

        previous_box.show();
        next_box.show();

        if(current_page == 0) {
            previous_box.hide();
        } else if(current_page == (total_page - 1)) {
            next_box.hide();
        }
    }
};

jQuery(function() {
    NWweek.request_paging();
});