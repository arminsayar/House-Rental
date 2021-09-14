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
    $('.price-list').hasClass('price-list-on') ?
        $('body').css('overflow-y', 'hidden')
        : null;

})

$("svg[name='closebtn-p']").click(function () {
    $('.price-list').toggleClass('price-list-on');
    $('body').css('overflow-y', 'auto');
})

// Lang list

$("button[name='langlist']").click(function () {
    $('.lang-list').toggleClass('lang-list-on');
    $('.lang-list').hasClass('lang-list-on') ?
        $('body').css('overflow-y', 'hidden')
        : null;

})

$("svg[name='closebtn-l']").click(function () {
    $('.lang-list').toggleClass('lang-list-on');
    $('body').css('overflow-y', 'auto');
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
        && !$(e.target).closest("button[name='langlist']").length
    ) {
        $('.nav-menu-js').removeClass('dis-bl');
        $('.location-js').removeClass('dis-bl');
        $('.price-list').removeClass('price-list-on');
        $('.lang-list').removeClass('lang-list-on');
        $('body').css('overflow-y', 'auto');
    }
})

// Body overflow-x && DOM fully loaded events

$(document).ready(function () {
    $('body').css('overflow-x', 'hidden')
})