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

function showButton (element, button) {
    if (element === 'about') {
        if ($('#about').hasClass('open')) {
            $('#about').removeClass('open');
            $(button).text('Show More');
        } else {
            $('#about').addClass('open');
            $(button).text('Show Less');
        }
    } else {
        if (element === 'team') {
            if ($('.veux-team').hasClass('show')) {
                $('.veux-team').removeClass('show');
                $(button).text('Show More');
            } else {
                $('.veux-team').addClass('show');
                $(button).text('Show Less');
            }
        } else {
            if (element === 'approach') {
                if ($('.more-approach').hasClass('show')) {
                    $('.more-approach').removeClass('show');
                    $(button).text('Show More');
                } else {
                    $('.more-approach').addClass('show');
                    $(button).text('Show Less');
                }
            }
        } 
    }
}

function showMore(element, current) {
   $(current).hide();
   $(element).addClass('open');
}