	$(document).ready(function(){

	/*---sticky-nav-through-Waypoint----*/
	$('.js--sticky-nav').waypoint(function(direction){
		if (direction == 'down')
			$('nav').addClass('sticky');
		else 
			$('nav').removeClass('sticky');
	},
	{
		offset:'80px;'
	});

	/*---button-effect---*/
	$('.js-go-to-plan').click(function(){
		$('html,body').animate({scrollTop : $('.js--section-plans').offset().top},1000);
	});
	$('.js-go-to-beginning').click(function(){
		$('html,body').animate({scrollTop : $('.js--sticky-nav').offset().top},1000);
	});


	// Select all links with hashes
	$('a[href*="#"]')
	// Remove links that don't actually link to anything
	.not('[href="#"]')
	.not('[href="#0"]')
	.click(function(event) {
	// On-page links
	if (
	  location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	  && 
	  location.hostname == this.hostname
	) {
	  // Figure out element to scroll to
	  var target = $(this.hash);
	  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	  // Does a scroll target exist?
	  if (target.length) {
		// Only prevent default if animation is actually gonna happen
		event.preventDefault();
		$('html, body').animate({
		  scrollTop: target.offset().top
		}, 1000, function() {
		  // Callback after animation
		  // Must change focus!
		  var $target = $(target);
		  $target.focus();
		  if ($target.is(":focus")) { // Checking if the target was focused
			return false;
		  } else {
			$target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
			$target.focus(); // Set focus again
		  };
		});
	  }
	}
	});

		/*---animated class---*/
	$('.js--wp-1').waypoint(function(direction){
		$('.js--wp-1').addClass('animated fadeIn');
	},{
		offset:'50%;'					
							})	

	$('.js--wp-2').waypoint(function(direction){
		$('.js--wp-2').addClass('animated bounceInUp');
	},{
		offset:'45%;'					
							})	

	$('.js--wp-3').waypoint(function(direction){
		$('.js--wp-3').addClass('animated fadeIn');
	},{
		offset:'65%;'					
							})	

	$('.js--wp-4').waypoint(function(direction){
		$('.js--wp-4').addClass('animated pulse');
	},{
		offset:'50%;'					
	})

	/*---mobile-navi and position icon in navigation---*/
	$('.js--mobile-nav').click(function(){
		var nav = $('.js--main-nav');
		var icon =$('.close-sharp');
		nav.slideToggle('.js--main.nav');
		/*  icon position  */
		if(icon.hasClass('open')) {
			$('.close-sharp').removeClass('open');
			$('.close-sharp').addClass('close');
			$('.menu-outline').removeClass('close');
			$('.menu-outline').addClass('open');
		}
		else {
			$('.close-sharp').removeClass('close');
			$('.close-sharp').addClass('open');
			$('.menu-outline').removeClass('open');
			$('.menu-outline').addClass('close');
		}
	});



	});