$(function(){
	let popup = function(btn, close, target){
					$(btn).on('click', function(){
						$(target).addClass('open');
						$('body').addClass('scroll-lock');
					});

					$(close).on('click', function(){
						$(target).removeClass('open');
						$('body').removeClass('scroll-lock');
					});
				},

		listSlideDown = function(btn){
			$( btn ).on('click', function() {

			    $( this ).closest('.project-item__text').find('.project-item__hidden-list').slideDown();
			    $( this ).slideUp();

			  }
			);
		};

		
	listSlideDown('.project-item__button .js-more-btn');
	popup('.burger', '.js-close', '.popup-menu');
	popup('.js-popup-btn', '.js-close', '.js-popup-form');
	popup('.js-popup-button', '.js-close', '.js-popup-form-more');
	popup('.popup-confid-btn', '.js-close-more', '.popup-confident');
	popup('.popup-privacy-btn', '.js-close-more', '.popup-privacy-wrap');

	$('.scroll-to-top-btn').on('click', function(){
		$("html, body").animate({ scrollTop: 0 }, 500);
    });

	function addClassOnScroll() {
	  var elements = document.querySelectorAll(".show-elem");
	  var windowHeight = window.innerHeight;
	  for (var i = 0; i < elements.length; i++) {
	    var position = elements[i].getBoundingClientRect().top;
	    if (position < windowHeight) {
	      elements[i].classList.add("visible");
	    }
	  }
	}
	
	window.addEventListener("scroll", addClassOnScroll);

	$('.header__menu-bot-nav a, .popup-in ul.navigation__list li a').on('click', function() {
    let href = $(this).attr('href');
    
    $('html, body').animate({
      scrollTop: $(href).offset().top - 50
    }, 370,
    function(){
      $('.open').removeClass('open');
      $('body').removeClass('scroll-lock');
    });
    return false;
  });

   var h_hght = 146; // высота шапки
   var h_mrg = 0;     // отступ когда шапка уже не видна
   $(function(){
    $(window).scroll(function(){
       var top = $(this).scrollTop();
       var elem = $('.header__menu-bot');
       if (top+h_mrg < h_hght) {
        elem.css('top', (h_hght-top));
       } else {
        elem.css('top', h_mrg);
       }
     });
   });
	
});