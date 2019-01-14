$(function () {
    $('.book').click(function(){
        $('#modall').addClass('show');
    });
    $('.modall__overlay').click(function() {
        $('#modall').removeClass('show');
    });
})

