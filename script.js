$(document).ready(function(){

	var cross = $('div.cross');
		
		// var cross_top_initial = cross.offset().top;
		var section = $('section').length;
		var cross_height_max = 20 * (section - 1);
		var height = $('body').height();


	//openBurger();
	closeBurger();

	if (window.matchMedia("(max-width: 650px)").matches) {
		openBurger('75%');
	}
	else{
		openBurger('40%');
	}



    //Open the menu
    function openBurger(margin){
    	$('#hamburger').click(function() {

	        $('main').bind('touchmove', function(e){e.preventDefault()});

	        //set the width of primary content container -> content should not scale while animating
			var contentWidth = $('main').width();
			 
			//set the content with the width that it has originally
			$('main').css('width', contentWidth);



	        $('nav#mobile-main-menu').css('opacity', 1);

	        //set margin for the whole container with a jquery UI animation
			$("div#container").animate({ 
				marginLeft: margin,
				easing : 'easeOutExpo'
			}, {
			    duration: 700
			});
	    });
    }

    function closeBurger(){
    	//close the menu
	    $('#close-mobile-menu').click(function() {
	        //enable all scrolling on mobile devices when menu is closed
		    $('main').unbind('touchmove');
		 
		    //set margin for the whole container back to original state with a jquery UI animation
		    $('div#container').animate({ 
				marginLeft: '0',
				easing : 'easeOutExpo'
			}, {
			    duration: 700,
		        complete: function() {
		        	$('nav#mobile-main-menu').css('opacity', 0);
		            $('div#container').css('width', '100%');
		        }
		    });
	    });
    }


});