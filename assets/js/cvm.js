$(document).ready( function() {
    $('.item').on('click', function () {
        //  ...
        $('.item.selected').removeClass('selected');
        $(this).addClass('selected');

        //  ...
        $('.item-content.showed').removeClass('showed');
        $($(this).attr('data-for')).addClass('showed');
    });
});