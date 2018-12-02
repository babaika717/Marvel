//= partials/app.js/


$(document).ready(function () {

    $(".work-gallary").lightGallery();

    $('.locate-title h1').on('click', function () {
        $(this).parent().parent().parent().children('iframe').slideToggle(250);
    });


    // var selectedClass = jQuery(this).attr("data-rel");
    // jQuery("#portfolio .inner a").fadeTo(100, 0.1);
    // jQuery("#portfolio .inner a").not("." + selectedClass).fadeOut().removeClass('scale-anm');
    // setTimeout(function () {
    //     jQuery("." + selectedClass).fadeIn().addClass('scale-anm');
    //     jQuery("#portfolio .inner a").fadeTo(300, 1);
    // }, 300);
    //
});