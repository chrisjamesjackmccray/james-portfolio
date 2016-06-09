class HomeController {
  constructor() {
    $(window).scroll(function(){
      $("#opening-statement",).css("opacity", 1 - $(window).scrollTop() / 250);
    });

    $(window).scroll(function(){
      $(".nav",).css("opacity", 1 - $(window).scrollTop() / 250);
    });

    // $('.card').hover(
    //   function() { $(this).siblings('.eye').mouseenter(); },
    //   function() { $(this).siblings('.trans').mouseleave(); }
    // );

    // $('.trans').on('mousenter mouseleave', function(e) {
    //   $(this).find('.card').trigger('hover');
    // });

    // $(function() {
    //   $if('.trans')(mousenter).trigger('.card:hover');
    // });
  }
}



export default HomeController;
