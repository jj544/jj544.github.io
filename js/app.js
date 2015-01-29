		$(document).ready(function(){
		  $('#nav a, #fixedbar a').on('click', function(e) {
		    e.preventDefault();
		  });
		   
		  $(window).on('scroll',function() 
		 	{
		    var scrolltop = $(this).scrollTop();
		 
		    if(scrolltop >= 215) {
		      $('#fixedbar').fadeIn(250);
		    }
		     
		    else if(scrolltop <= 210) {
		      $('#fixedbar').fadeOut(250);
		    }
		  });
		});

		$(function() {
  			$('a[href*=#]:not([href=#])').click(function() {
		    	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		      		var target = $(this.hash);
		      		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			      	if (target.length) {
			        	$('html,body').animate({
			          	scrollTop: target.offset().top
			        	}, 1000);
			        	return false;
			      	}
		    	}
			});
		});

		function hover(phone) {
		    element.setAttribute('src', 'img/phonewhite.png');
		}
		function unhover(phone) {
		    element.setAttribute('src', 'img/phonedark.png');
		}




		