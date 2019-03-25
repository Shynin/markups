document.addEventListener('DOMContentLoaded', function() {

    window.onscroll = function() { myFunction() };
    var navbar = document.getElementById('navbar');
    var sticky = navbar.offsetTop;

    function myFunction() {
        if (window.pageYOffset > sticky) {
            navbar.classList.add('sticky')
        } else {
            navbar.classList.remove('sticky');
        }
    };
});

$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        } else {
            $("html, body").animate({
                scrollTop: 0
            }, 800)
        }
    });

    if ($(window).width() < 987) {
        startCarousel();
    } else {
        $('.owl-carousel').addClass('off');
    }
});

$(window).resize(function() {
    if ($(window).width() < 987) {
        startCarousel();
    } else {
        stopCarousel();
    }
});

function startCarousel() {
    $(".services-carousel").owlCarousel({
        responsive: {
            0: {
                items: 1
            },
            670: {
                items: 2
            },
        }
    });
    $(".clients-carousel").owlCarousel({
        responsive: {
            0: {
                items: 3
            },
            670: {
                items: 4
            },
            990: {
                items: 6
            },
        }
    });
    $(".team-carousel").owlCarousel({
        responsive: {
            0: {
                items: 3
            },
        }
    });
}

function stopCarousel() {
    var owl = $('.owl-carousel');
    owl.trigger('destroy.owl.carousel');
    owl.addClass('off');
}