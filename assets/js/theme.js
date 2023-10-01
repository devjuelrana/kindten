(function($){
	'use strict';

    /*---------------------
    Slider slide
    --------------------- */
	$('.kten_slider').slick({
	  infinite: true,
	  autoplay: true,
	  dots: false,
	  arrows: true,
	  speed: 1500,
	  slidesToShow: 1,
	  pauseOnHover: false,
	  responsive: [
	    {
	      breakpoint: 480,
	      settings: {
	      	arrows: false,
	      }
	    }
	  ]

	 });
    /*---------------------
    Testimonial slide
    --------------------- */
	$('.kten_testimonial').slick({
		infinite: true,
		autoplay: true,
		dots: false,
		arrows: false,
		speed: 500,
		slidesToShow: 3,
		pauseOnHover: false,
		responsive: [
		    {
		      breakpoint: 1024,
		      settings: {
		        slidesToShow: 3,
		        slidesToScroll: 3,
		      }
		    },
		    {
		      breakpoint: 600,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 2
		      }
		    },
		    {
		      breakpoint: 480,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1
		      }
		    }
  		]

	 });
    /*---------------------
    service slide
    --------------------- */
	$('.kten_service').slick({
	  infinite: true,
	  autoplay: true,
	  dots: false,
	  arrows: false,
	  speed: 500,
	  slidesToShow: 3,
	  pauseOnHover: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,	        
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,

	      }
	    }
	  ]
	}); 
    /*---------------------
    Academics slide
    --------------------- */
	$('.kten_Academic').slick({
	  infinite: true,
	  autoplay: true,
	  dots: false,
	  arrows: false,
	  speed: 500,
	  slidesToShow: 4,
	  pauseOnHover: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,	        
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,

	      }
	    }
	  ]
	});
	/*---------------------
    Blog slide
    --------------------- */
	$('.kten_blog').slick({
	  infinite: true,
	  autoplay: true,
	  dots: false,
	  arrows: false,
	  speed: 500,
	  slidesToShow: 3,
	  pauseOnHover: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,	        
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        arrows: false,

	      }
	    }
	  ]
	});
    /*---------------------
    Client slide
    --------------------- */
	$('.kten_client').slick({
	  infinite: true,
	  autoplay: true,
	  dots: false,
	  arrows: false,
	  speed: 1500,
	  slidesToShow: 5,
	  pauseOnHover: false,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 5,
	        slidesToScroll: 5,
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 4,
	        slidesToScroll: 4,	        
	        arrows: false
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        arrows: false,

	      }
	    }
	  ]
	});
    /*---------------------
    CounterUp
    --------------------- */
    $('.counter_up').counterUp({
        delay: 10,
        time: 3000
    });  

    /*---------------------
    meanmenu
    --------------------- */
	$('.mobile_menu nav').meanmenu({
		meanMenuContainer: ".mobile_menu",
		meanScreenWidth: "991"
	});
	/*---------------------
    direction
    --------------------- */
    $('.dh-container').directionalHover();	
    /*---------------------
    VenoBox
    --------------------- */
	new VenoBox({
	    selector: '.my-image',
	    infinigall: true,
	    share: true,
	    spinner: 'grid'
	});
    /*---------------------
    Wow
    --------------------- */
	new WOW().init();

 	/*---------------------
    ScrollTo Top
    --------------------- */
	 $(function() {
        $("#toTop").scrollToTop(1000);
    });
 	/*---------------------
    Jquery Sticky
    --------------------- */
	$("#sticker").sticky({
		topSpacing:0,
		zIndex: 9999
	});	
	// add class
	$(".top_search_btn a").click(function(){
	  $(".header_query_inner").addClass("query_show");
	});

	$(".header_query_close").click(function(){
	  $(".header_query_inner").removeClass("query_show");
	});
	//coupone form
	$('.chackout_coupon_title p a').click(function(){
		$('#c_form_wrap').slideToggle();
	});
	/*==== Portfolio ====*/
	if ($.fn.isotope) {
		var $portfolio = $('.portfolio_active');
		$portfolio.isotope({
			itemSelector: '.grid-item',
			filter: '*',
			resizesContainer: true,
			layoutMode: 'masonry',
			transitionDuration: '0.8s'
		});
		$('.portfolio_filter li').on('click', function() {

			$('.portfolio_filter li').removeClass('current_menu_item');
			$(this).addClass('current_menu_item');

			var selector = $(this).attr('data-filter');

			$portfolio.isotope({
				filter: selector,
			});
		});
	};
	/*==== End Portfolio ====*/
	/*---------------------
    Circle item One
    --------------------- */
	var myCircle = Circles.create({
	  id:                  'circles-1',
	  radius:              60,
	  value:               40,
	  maxValue:            100,
	  width:               10,
	  text:                function(value){return value + '%';},
	  colors:              ['#DDDDDD', '#ff8b00'],
	  duration:            500,
	  wrpClass:            'circles-wrp',
	  textClass:           'circles-text',
	  valueStrokeClass:    'circles-valueStroke',
	  maxValueStrokeClass: 'circles-maxValueStroke',
	  styleWrapper:        true,
	  styleText:           true
	});
	/*---------------------
    Circle item Two
    --------------------- */
	var myCircle = Circles.create({
	  id:                  'circles-2',
	  radius:              60,
	  value:               70,
	  maxValue:            100,
	  width:               10,
	  text:                function(value){return value + '%';},
	  colors:              ['#DDDDDD', '#ff8b00'],
	  duration:            600,
	  wrpClass:            'circles-wrp',
	  textClass:           'circles-text',
	  valueStrokeClass:    'circles-valueStroke',
	  maxValueStrokeClass: 'circles-maxValueStroke',
	  styleWrapper:        true,
	  styleText:           true
	});
	/*---------------------
    Circle item Three
    --------------------- */
	var myCircle = Circles.create({
	  id:                  'circles-3',
	  radius:              60,
	  value:               80,
	  maxValue:            100,
	  width:               10,
	  text:                function(value){return value + '%';},
	  colors:              ['#DDDDDD', '#ff8b00'],
	  duration:            800,
	  wrpClass:            'circles-wrp',
	  textClass:           'circles-text',
	  valueStrokeClass:    'circles-valueStroke',
	  maxValueStrokeClass: 'circles-maxValueStroke',
	  styleWrapper:        true,
	  styleText:           true
	});
	/*---------------------
    Circle item Forth
    --------------------- */
	var myCircle = Circles.create({
	  id:                  'circles-4',
	  radius:              60,
	  value:               90,
	  maxValue:            100,
	  width:               10,
	  text:                function(value){return value + '%';},
	  colors:              ['#DDDDDD', '#ff8b00'],
	  duration:            1000,
	  wrpClass:            'circles-wrp',
	  textClass:           'circles-text',
	  valueStrokeClass:    'circles-valueStroke',
	  maxValueStrokeClass: 'circles-maxValueStroke',
	  styleWrapper:        true,
	  styleText:           true
	});	

})(jQuery);