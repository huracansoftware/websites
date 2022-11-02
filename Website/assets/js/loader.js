

$(document).ready(function() {
    $('.black').css("animation", "loading " + 1000 + "ms linear");

    setTimeout(function() {
        $('header, main, footer').css('display','block');
        $('.black').hide();
        $('#page').removeClass('hidden');
    }, 8000);
});