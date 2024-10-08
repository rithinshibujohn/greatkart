// jQuery ready start
$(document).ready(function() {
    // jQuery code

    //////////////////////// Prevent closing from click inside dropdown
    $(document).on('click', '.dropdown-menu', function (e) {
        e.stopPropagation();
    });

    // Handling radio button changes
    $('.js-check :radio').change(function () {
        var check_attr_name = $(this).attr('name');
        var item = $(this).closest('.js-check'); // Define item
        if ($(this).is(':checked')) {
            $('input[name=' + check_attr_name + ']').closest('.js-check').removeClass('active');
            item.addClass('active');
        } else {
            item.removeClass('active');
        }
    });

    // Handling checkbox changes
    $('.js-check :checkbox').change(function () {
        var check_attr_name = $(this).attr('name');
        var item = $(this).closest('.js-check'); // Define item
        if ($(this).is(':checked')) {
            item.addClass('active');
        } else {
            item.removeClass('active');
        }
    });

    //////////////////////// Bootstrap tooltip
    if($('[data-toggle="tooltip"]').length > 0) {
        $('[data-toggle="tooltip"]').tooltip();
    }

    // Fade out messages after 1 second
    setTimeout(function() {
        $('#messages').fadeOut('slow', function() {
            $(this).remove();
        });
    }, 5000);

});
// jQuery end
