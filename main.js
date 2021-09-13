'use strict'

// Profile menu

$('#profile-btn').click(function () {
    $('.nav-menu-js').toggleClass('dis-bl');
    $('.location-js').hasClass('dis-bl') ?
        $('.location-js').removeClass('dis-bl')
        : pass;

})

// Location

$('.btn-before').click(function () {
    $('.location-js').toggleClass('dis-bl');
    $('.nav-menu-js').hasClass('dis-bl') ?
        $('.nav-menu-js').removeClass('dis-bl')
        : pass;
})

// Closing clicks

$(document).click(function (e) {
    if
        (
        !$(e.target).closest('#profile-btn').length
        && !$(e.target).closest('.btn-before').length
        && !$(e.target).closest('.location-js').length
    ) {
        $('.nav-menu-js').removeClass('dis-bl');
        $('.location-js').removeClass('dis-bl');
    }
})
