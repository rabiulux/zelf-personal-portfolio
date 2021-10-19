// On Scroll sticky key
  $(document).ready(function(){
    $(window).scroll(function(){
      var scroll = $(window).scrollTop();
        if (scroll > 100) {
          $(".navbar").addClass("nav-bg shadow");
          // $("#TopBtn").display = "block";
        }

        else{
            $(".navbar").removeClass("nav-bg shadow");
            // $("#TopBtn").display = "none";
        }
    });
  });

// For progressbar
  $(function () {

  "use strict";

  var wind = $(window);


  /* progress bar
  -------------------------------------------------------*/
  wind.on('scroll', function () {
      $(".bar span").each(function () {
          var bottom_of_object =
          $(this).offset().top + $(this).outerHeight();
          var bottom_of_window =
          $(window).scrollTop() + $(window).height();
          var myVal = $(this).attr('data-width');
          if(bottom_of_window > bottom_of_object) {
            $(this).css({
              width : myVal
            });
          }
      });
  });

});
