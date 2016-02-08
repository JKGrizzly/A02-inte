$(document).ready(function(){

	var cross = $('div.cross');

	var cross_top_initial = cross.offset().top;
	var section = $('section').length;
	var cross_height_max = 20 * (section - 1);
	var height = $('body').height();


	//openBurger();
	closeBurger();
	scrollEtape();
	if (window.matchMedia("(max-width: 650px)").matches) {
		openBurger('75%');
	}
	else{
		openBurger('40%');
	}

	if(window.matchMedia("(min-width: 965px)").matches){
		scrollCross(cross_top_initial, section, cross_height_max, height)
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



	function scrollCross(cross_top_initial, section, cross_height_max, height){

		$(document).on('scroll', function(){
			var scroll_top = $(window).scrollTop();
			var scroll = $(window).height();
			var pos_scroll = (scroll_top / (height - scroll));
			var pos_cross = cross_top_initial + pos_scroll * cross_height_max;

			var etape = cross_height_max / section;

			if(pos_cross < 138){
				$('aside h2').html('');
				$('aside h2').html('Etape 1');
			}
			else if(pos_cross < 156) {
				$('aside h2').html('');
				$('aside h2').html('Etape 2');
			}
			else if(pos_cross < 174) {
				$('aside h2').html('');
				$('aside h2').html('Etape 3');
			}
			else if(pos_cross < 192) {
				$('aside h2').html('');
				$('aside h2').html('Etape 4');
			}
			else if(pos_cross < 210) {
				$('aside h2').html('');
				$('aside h2').html('Etape 5');
			}
			else if(pos_cross < 228) {
				$('aside h2').html('');
				$('aside h2').html('Etape 6');
			}
			else if(pos_cross < 246) {
				$('aside h2').html('');
				$('aside h2').html('Etape 7');
			}
			else if(pos_cross < 264) {
				$('aside h2').html('');
				$('aside h2').html('Etape 8');
			}
			else if(pos_cross < 282) {
				$('aside h2').html('');
				$('aside h2').html('Etape 9');
			}
			else if(pos_cross > 282) {
				$('aside h2').html('');
				$('aside h2').html('Etape 10');
			}

			console.log(pos_cross);

			cross.animate({
				top: pos_cross
			}, {
				duration : 10
			});

		});
	}


});