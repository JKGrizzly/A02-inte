$(document).ready(function(){

    //Open the menu
    $('#hamburger').click(function() {
        console.log('lolo');

        $('div#container').bind('touchmove', function(e){e.preventDefault()});

        $('nav#mobile-main-menu').css('opacity', 1);

        //set margin for the whole container with a jquery UI animation
		$("div#container").animate({ 
			marginLeft: '40%',
			easing : 'easeOutExpo'
		}, {
		    duration: 700
		});
    });
 
    //close the menu
    $('#close-mobile-menu').click(function() {
        //enable all scrolling on mobile devices when menu is closed
	    $('div#container').unbind('touchmove');
	 
	    //set margin for the whole container back to original state with a jquery UI animation
	    $('div#container').animate({ 
			marginLeft: '0',
			easing : 'easeOutExpo'
		}, {
		    duration: 700,
	        complete: function() {
	        	$('nav#mobile-main-menu').css('opacity', 0);
	            $('div#container').css('width', 'auto');
	        }
	    });
    });
});