(function($) {
	'use strict';	
	   
		/* Menu Option */
		$("#menu-btn").click(function(){
		  $(".main-menu").show();
		  $("#menu-btn").addClass("display-none");
		  $("#close-btn").addClass("display-block");
		  $("#close-btn").removeClass("display-none");
		});		
		
		$("#close-btn").click(function(){
		  $(".main-menu").hide();
		  $("#close-btn").addClass("display-none");
		   $("#menu-btn").removeClass("display-none");
		});
		
		
		
		/*PRELOADER JS*/
		$(window).on('load', function() { 
			$('.status').fadeOut();
			$('.preloader').delay(350).fadeOut('slow'); 
		}); 
		/*END PRELOADER JS*/
			
		$(document).ready(function() {
			/* Menu Bar */		
			
			// Get current page URL
			var url = window.location.href;

			// remove # from URL
			url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));

			// remove parameters from URL
			url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));

			// select file name
			url = url.substr(url.lastIndexOf("/") + 1);

			// If file name not avilable
			if(url == ''){
			url = 'index.html';
			}

			// Loop all menu items
			$('.main-menu li').each(function(){

			// select href
			var href = $(this).find('a').attr('href');

			// Check filename
			if(url == href){

			// Add active class
			$(this).addClass('active');
			}
			});
		 
		});
		
		
		/* Tooltip */
		jQuery('[data-toggle="tooltip"]').tooltip();
		
		/* Skill Bar */
		jQuery(document).ready(function(){
			jQuery('.skillbar').each(function(){
				jQuery(this).find('.skillbar-bar').animate({
					width:jQuery(this).attr('data-percent')
				},6000);
			});
		});
	
	
		/* Portfolio */
		
		$('#work-section').imagesLoaded(function() {
			var $grid = $('.portfolio-grid').isotope({
			  // set itemSelector so .grid-sizer is not used in layout
			  itemSelector: '.portfolio-item',
			  percentPosition: true,
			});
			
			
		});
		
		/* Portfolio Section */
		 $('.venobox').venobox({
			 
		 });
		 
})(jQuery);