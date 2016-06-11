class HomeController {
    constructor() {
        $(window).scroll(function() {
            $("#opening-statement", ).css("opacity", 1 - $(window).scrollTop() / 250);
        });

        $(window).scroll(function() {
            $(".nav", ).css("opacity", 1 - $(window).scrollTop() / 250);
        });

    }
}



export default HomeController;
