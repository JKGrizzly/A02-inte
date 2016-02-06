$(document).ready(function(){

	//openBurger();
	closeBurger();
	scrollEtape();

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
    

	function scrollEtape(event){
		var top_offset = $('header').height();

		$('.scrollTo').click( function() { // Au clic sur un Ã©lÃ©ment
			var page = $(this).attr('href'); // section cible
			var speed = 750; // DurÃ©e de l'animation (en ms)

			if($(page).length){
				$('html, body').animate( { scrollTop: $(page).offset().top - top_offset }, speed ); // Go
				return false;
			}
			else{
				return false;
			}
		});
	}

});