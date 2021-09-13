'use strict'

// Profile menu

$('#profile-btn').click(function () {
    $('.nav-menu-js').toggleClass('dis-bl');
    $('.location-js').hasClass('dis-bl') ?
        $('.location-js').removeClass('dis-bl')
        : null;

})

// Location

$('.btn-before').click(function () {
    $('.location-js').toggleClass('dis-bl');
    $('.nav-menu-js').hasClass('dis-bl') ?
        $('.nav-menu-js').removeClass('dis-bl')
        : null;
})

// Price list

$("button[name='pricelist']").click(function () {
    $('.price-list').toggleClass('price-list-on');
})
$("svg[name='closebtn-p']").click(function () {
    $('.price-list').toggleClass('price-list-on');
})

// Closing clicks

$(document).click(function (e) {
    if
        (
        !$(e.target).closest('#profile-btn').length
        && !$(e.target).closest('.btn-before').length
        && !$(e.target).closest('.location-js').length
        && !$(e.target).closest('.price-list').length
        && !$(e.target).closest("button[name='pricelist']").length
    ) {
        $('.nav-menu-js').removeClass('dis-bl');
        $('.location-js').removeClass('dis-bl');
        $('.price-list').removeClass('price-list-on');
    }
})
