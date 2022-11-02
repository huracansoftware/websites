$(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll >= 100) {
        $("header").addClass("sticky");
    } else {
        $("header").removeClass("sticky");
    }
});

$(document).ready(function() {
    $('.navbar-nav li a').click(function() {
        $('a').removeClass("active");
        $(this).addClass("active");
    });

    $("body").addClass("bodyloder");

    setTimeout(() => {
        $("body").removeClass("bodyloder");
        $("#loader").hide();
    }, 8000);
});

//Ankit
var sections = $('section'),
    nav = $('.navbar-collapse'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {

    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('ul li a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});

$(document).ready(function() {
    $(this).scrollTop(0);
});

const title3 = document.querySelector('.title3');
const videoContainer = document.querySelector('.video-container');
const close = document.querySelector('.close');
const video = document.querySelector('.hurvid');

title3.addEventListener('click',()=>{
    video.setAttribute("src", "assets/images/video.mov");
    videoContainer.classList.add('show');
})

close.addEventListener('click',()=>{
    videoContainer.classList.remove('show');
    video.setAttribute("src", "");
})

const open = document.getElementById('.open');
const modal_container = document.getElementById('.modal_container');
const closed = document.getElementById('.close');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
})

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
})