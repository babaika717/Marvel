//map toggle


    $('.locate-title h1').on('click', function () {
        $(this).parent().parent().parent().children('iframe').slideToggle(250);
        $(this).find('i').toggleClass('map-opened');
    });


//gallary-filtering


    $('#gallary-filtering a').on('click', function (e) {
        e.preventDefault();
        $('#gallary-filtering a').parent().removeClass('work-active');
        $(this).parent().toggleClass('work-active');
        var selectedClass = $(this).attr("data-rel");
        $(".work-gallary .gallary-block").fadeTo(100, 0);
        $(".work-gallary .gallary-block").not("." + selectedClass).fadeOut().removeClass('scale-anm');
        setTimeout(function () {
            $("." + selectedClass).fadeIn().addClass('scale-anm');
            $(".work-gallary .gallary-block").fadeTo(300, 1);
        }, 300);
    });


//menu-hamburger


    $('.header-hamburger-menu').on('click', function () {
       $(this).parent().parent().parent('.main-menu').toggleClass('fixed-main-menu');
       $(this).toggleClass('menu-opened');
       $(this).parent().children('.mobile-menu__wrapper').toggleClass('opened-menu-wrapper');
    });