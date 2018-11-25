


$(document).ready(function () {

    $('.work-menu-active').on('click', function (e) {
        e.preventDefault();
        $('.work-menu li').animate({width: 'toggle'});
    })

});