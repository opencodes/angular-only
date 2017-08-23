$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('#stickyHeader').fadeIn(1000);
        } else {
            $('#stickyHeader').fadeOut();
        }
    });
});