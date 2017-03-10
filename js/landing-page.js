// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('div.modal').on('show.bs.modal', function() {
	var modal = this;
	var hash = modal.id;
	window.location.hash = hash;
	window.onhashchange = function() {
		if (!location.hash){
			$(modal).modal('hide');
		}
	}
});


// To update the text on the show more button when clicked.

function showButton (element, button) {
    if ($('.veux-team').find('span').hasClass('show')) {
        $('.veux-team').find('span').removeClass('show');
        $(button).text('Show More');
    } else {
        $('.veux-team').find('span').addClass('show');
        $(button).text('Show Less');
    }    
}

//Animation for the read more button on about page.

function showMore(element, current) {
   $(current).hide();
   $('.about p').find('a').hide();
   $('.read-more-target-1').addClass('open');
   $('.read-more-target-2').addClass('open');
}

// To show the logo when scroll down in homepage.

$(window).scroll(function() {
    if ($(this).scrollTop() > 530) { 
        $('.navbar-header .logo-home').css({
            'display': 'block'
        });
    } else {
        $('.navbar-header .logo-home').css({
            'display': 'none'
        });
    }
});

$(document).ready(function(){ 
    var j = jQuery.noConflict(); 
    $('.bxslider').bxSlider({
        pager: false,
        adaptiveHeight: true
    }); 
}); 

 $('#back-to-top').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});


