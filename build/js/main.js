


$(document).ready(function () {

    $(".work-gallary").lightGallery();

    $('.locate-title h1').on('click', function () {
        $(this).parent().parent().parent().children('iframe').slideToggle(250);
    });


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


});