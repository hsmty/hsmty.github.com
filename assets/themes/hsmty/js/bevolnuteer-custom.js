;(function($, window, undefined) {

	"use strict";

	jQuery(document).ready(function ($) {



		// Submenu Show/Hide
        $('nav ul.main-menu > li, nav ul.main-menu > li > ul > li').hover(function () {
            $(this).children('ul').stop(true, true).slideDown(250);
        }, function () {
            $(this).children('ul').stop(true, true).slideUp(250);
        });


	    // Responsive Menu
	    if( $().meanmenu ){
		    $('nav.main-navigation').meanmenu({
		        meanMenuClose: '<i class="fa fa-times"></i>', // single character you want to represent the close menu button
		        meanExpand: "+", // single character you want to represent the expand for ULs
		        meanContract: "-", // single character you want to represent the contract for ULs
		        meanMenuContainer: '#responsive-menu', // Choose where meanmenu will be placed within the HTML
		        meanScreenWidth: "767", // set the screen width you want meanmenu to kick in at
		        meanRemoveAttrs: true // true to remove classes and IDs, false to keep them
		    });
		}


		// donate pricing buttons
		$('.btn-group *').click(function(){
			$('.btn-group button.active').removeClass('active');
			$(this).addClass('active')
			
		});



	    // Testimonial carousel
		$(".owl-testimonial").owlCarousel({
			autoPlay: 4000, //Set AutoPlay to 3 seconds
	      	items : 1,
	      	itemsDesktop: [1199,1],
	      	itemsDesktopSmall: [979,1],
	      	itemsTablet: [768,1],
	      	itemsMobile: [479,1],
			pagination : true,
			navigation : false
	  	});


	  	// bxslider init
	  	$('.bxslider').bxSlider({
	  		pager : false
	  	});


	  	



		// revolution slider comes here
	    $(".banner").revolution({
	        dottedOverlay:"none",
	        delay:16000,
	        startwidth:1170,
	        startheight:500,
	        hideThumbs:200,
	        
	        thumbWidth:100,
	        thumbHeight:50,
	        thumbAmount:5,
	        
	        navigationType:"none",
	        navigationArrows:"solo",
	        navigationStyle:"preview4",
	        
	        touchenabled:"on",
	        onHoverStop:"off",
	        
	        swipe_velocity: 0.7,
	        swipe_min_touches: 1,
	        swipe_max_touches: 1,
	        drag_block_vertical: false,
	                                
	        parallax:"mouse",
	        parallaxBgFreeze:"on",
	        parallaxLevels:[7,4,3,2,5,4,3,2,1,0],
	                                
	        keyboardNavigation:"off",
	        
	        navigationHAlign:"center",
	        navigationVAlign:"bottom",
	        navigationHOffset:0,
	        navigationVOffset:20,

	        soloArrowLeftHalign:"left",
	        soloArrowLeftValign:"center",
	        soloArrowLeftHOffset:20,
	        soloArrowLeftVOffset:0,

	        soloArrowRightHalign:"right",
	        soloArrowRightValign:"center",
	        soloArrowRightHOffset:20,
	        soloArrowRightVOffset:0,
	                
	        shadow:0,
	        fullWidth:"on",
	        fullScreen:"off",

	        spinner:"spinner1",
	        
	        stopLoop:"off",
	        stopAfterLoops:-1,
	        stopAtSlide:-1,

	        shuffle:"off",
	        autoHeight:"off",                       
	        forceFullWidth:"off",                       
	                                               
	        hideThumbsOnMobile:"on",
	        hideNavDelayOnMobile:1500,                      
	        hideBulletsOnMobile:"off",
	        hideArrowsOnMobile:"on",
	        hideThumbsUnderResolution:0,
	        
	        hideSliderAtLimit:0,
	        hideCaptionAtLimit:0,
	        hideAllCaptionAtLilmit:0,
	        startWithSlide:0,
	        videoJsPath:"../rs-plugin/videojs/",
	        fullScreenOffsetContainer: ""   
	    });

		// Parallax Section
		if ($(window).outerWidth() > 1024) {
			$(window).stellar({
				horizontalScrolling: false,
			});
		}


		// Gallery Filters
		$('#Grid').mixitup({
	        effects: ['fade','grayscale'],
	        easing: 'snap',
	        transitionSpeed: 400
	    });


		// slide toggle
		$(".gallery-controls").click(function(){
           $(this).find(".gallery-categories").slideToggle('fast');
           return false;
        });


		// go top
		//hide or show the "back to top" link
		$(window).scroll(function(){
			( $(this).scrollTop() > 300 ) ? $('.go-top').addClass('visible') : $('.go-top').removeClass('visible fadeout');
			if( $(this).scrollTop() > 1200 ) { 
				$('.go-top').addClass('fadeout');
			}
		});

		//smooth scroll to top
		$('.go-top').on('click', function(event){
			event.preventDefault();
			$('body,html').animate({
				scrollTop: 0 ,
			 	}, 700
			);
		});
	



	});

})(jQuery, window);
