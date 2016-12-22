$(document).ready( function(){
	$(this).scrollTop(0);
	$(window).on('scroll',function(){

		if($('body').scrollTop()>10)
		{
			console.log("hi");
			$('.navbar-inverse').addClass('addBg');
			$('#collapse-nav').find('a').attr('id','listCol');
		}
		else
		{console.log("bye");
			$('.navbar-inverse').removeClass('addBg');
			$('#collapse-nav').find('a').attr('id','');
		}
	});
	//Smooth Scroll
	$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });

});