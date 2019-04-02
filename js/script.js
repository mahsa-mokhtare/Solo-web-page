/* ======================================
              Preloader
  ========================================
 */
$(window).on('load',function () {
    $('#status').fadeOut();
    $('#Preloader').delay(350).fadeOut();
});

/* ======================================
              Team
  ========================================
 */
$(function () {
    $("#team-members").owlCarousel({
        items:2,
        autoplay:true,
        smartSpeed: 700,
        loop:true,
        autoplayHoverPause:true, /* for pause when you click on it*/
        nav:true,
        dots:false,
        navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
    });

});
/* ======================================
              Responsive Tabs
  ========================================
 */
$(function () {
    $("#services-tabs").responsiveTabs({
        animation:'slide'

    });
});
/* ======================================
              Portfolio
  ========================================
 */
$(window).on('load',function () {
    //Initialize isotope
    $("#isotope-container").isotope({
    });
    //filter items  by buttons
    $("#isotope-filters").on('click','button',function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');
        //filter portfolio
        $("#isotope-container").isotope({
            filter:filterValue
        });
        // section button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');

    });
});
/* ======================================
              Magnifier
  ========================================
 */
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate:'a',
        type:'image',
        gallery: {
            enabled:true
        }
    });

});
/* ======================================
              Testimonial
  ========================================
 */
$(function () {
    $("#testimonial-slider").owlCarousel({
        items:1,
        autoplay:false,
        loop:true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

    });
});

/* ======================================
              Client
  ========================================
 */
$(function () {
    $("#client-list").owlCarousel({
        items:5,
        autoplay:false,
        loop:true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']

    });
});
/* ======================================
              Navigation
  ========================================
 */
$(function () {
    showHideNav();
    $(window).scroll(function () {
        showHideNav();
    });
    function showHideNav() {
        if($(window).scroll()>50){
            $(".nav").addClass("white-nav-bar");
            $(".navbar-brand image").attr("src","images/solo-images/logo/logo-dark.png");
        }
        else
        {
            $(".nav").removeClass("white-nav-bar");
            $(".navbar-brand image").attr("src","images/solo-images/logo/logo.png");
        }
    }
});