'use strict'

// Profile menu

$('#profile-btn').click(function () {
    $('.nav-menu-js').toggleClass('dis-bl');
    $('.location-js').hasClass('dis-bl') ?
        $('.location-js').removeClass('dis-bl')
        : null;
    $('.flexible-main').hasClass('flexible-menu-on') ?
        $('.flexible-main').removeClass('flexible-menu-on')
        : null;

})

// Location

$('.btn-before').click(function () {
    $('.location-js').toggleClass('dis-bl');
    $('.nav-menu-js').hasClass('dis-bl') ?
        $('.nav-menu-js').removeClass('dis-bl')
        : null;
    $('.flexible-main').hasClass('flexible-menu-on') ?
        $('.flexible-main').removeClass('flexible-menu-on')
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

// Flexible menu

$('.btn-before2, .btn-before3').click(function () {
    $('.flexible-main').toggleClass('flexible-menu-on');
    $('.nav-menu-js').hasClass('dis-bl') ?
        $('.nav-menu-js').removeClass('dis-bl')
        : null;
    $('.location-js').hasClass('dis-bl') ?
        $('.location-js').removeClass('dis-bl')
        : null;

})

// I'm flexible

$('.month-1').click(function () {
    $("span[name='September']").toggleClass('months-deactive');
    $('.month-1').toggleClass('months-list-main-active');
})
$('.month-2').click(function () {
    $("span[name='October']").toggleClass('months-deactive');
    if (!$("span[name='September']").hasClass('months-deactive')) {
        $("span[name='v1']").toggleClass('months-deactive')
    }
    $('.month-2').toggleClass('months-list-main-active');
})
$('.month-3').click(function () {
    $("span[name='November']").toggleClass('months-deactive');
    $('.month-3').toggleClass('months-list-main-active');
    if (!$("span[name='October']").hasClass('months-deactive')
        || !$("span[name='September']").hasClass('months-deactive')) {
        $("span[name='v2']").toggleClass('months-deactive')
    }
})
$('.month-4').click(function () {
    $("span[name='December']").toggleClass('months-deactive');
    $('.month-4').toggleClass('months-list-main-active');
    if (!$("span[name='November']").hasClass('months-deactive')
        || !$("span[name='October']").hasClass('months-deactive')
        || !$("span[name='September']").hasClass('months-deactive')) {
        $("span[name='v3']").toggleClass('months-deactive')
    }
})
$('.month-5').click(function () {
    $("span[name='January']").toggleClass('months-deactive');
    $('.month-5').toggleClass('months-list-main-active');
    if (!$("span[name='December']").hasClass('months-deactive')
        || !$("span[name='November']").hasClass('months-deactive')
        || !$("span[name='October']").hasClass('months-deactive')
        || !$("span[name='September']").hasClass('months-deactive')) {
        $("span[name='v4']").toggleClass('months-deactive')
    }
})
$('.month-6').click(function () {
    $("span[name='February']").toggleClass('months-deactive');
    $('.month-6').toggleClass('months-list-main-active');
    if (!$("span[name='January']").hasClass('months-deactive')
        || !$("span[name='December']").hasClass('months-deactive')
        || !$("span[name='November']").hasClass('months-deactive')
        || !$("span[name='October']").hasClass('months-deactive')
        || !$("span[name='September']").hasClass('months-deactive')) {
        $("span[name='v5']").toggleClass('months-deactive')
    }
})



// Closing clicks

$(document).click(function (e) {
    if
        (
        !$(e.target).closest('#profile-btn').length
        && !$(e.target).closest('.btn-before').length
        && !$(e.target).closest('.btn-before2').length
        && !$(e.target).closest('.btn-before3').length
        && !$(e.target).closest('.flexible-main').length
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
        $('.flexible-main').removeClass('flexible-menu-on');
    }
})

// Body overflow-x && DOM fully loaded events

$(document).ready(function () {
    $('body').css('overflow-x', 'hidden')
})