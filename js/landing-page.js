
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
        adaptiveHeight: true,
        touchEnabled: false
    }); 
}); 

 $('#back-to-top, #back-to-top2').on('click', function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: 0
    }, 700);
});

function validate() {
    var empty = false;
    var emptyArea = false;
    var emptyCheckboxes = false;
    var inputs = document.getElementById('contactForm').getElementsByTagName('input');
    var textArea = document.getElementById('howcanwehelp').value;

    // Validate if text area is null.
    if (textArea === '' || textArea === undefined) {
        emptyArea = true;
    }

   // Validate if all input text are null.
    for (var i = 0; i < inputs.length; i += 1) {
        if (inputs[i].value === '') {
            empty = true;
        } 
    }

    // validate that there is at least on checkbox selected.
    if ($("#contactForm input:checkbox:checked").length > 0) {
        emptyCheckboxes = false;
    }
    else {
        emptyCheckboxes = true;
    }

    if (empty || emptyArea || emptyCheckboxes) {
        $('#contactButton').attr('disabled', 'true');
    } else {
        $('#contactButton').removeAttr('disabled');
    }
}


