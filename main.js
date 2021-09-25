"use strict";

// Profile menu

$("#profile-btn").click(function () {
  $(".nav-menu-js").toggleClass("dis-bl");
  $(".location-js").hasClass("dis-bl")
    ? $(".location-js").removeClass("dis-bl")
    : null;
  $(".flexible-main").hasClass("flexible-menu-on")
    ? $(".flexible-main").removeClass("flexible-menu-on")
    : null;
});

// Location

$(".btn-before").click(function () {
  $(".location-js").toggleClass("dis-bl");
  $(".btn-before").toggleClass("btn-active");
  $(".nav-search-main").toggleClass("btn-main-active");
  $(".nav-menu-js").hasClass("dis-bl")
    ? $(".nav-menu-js").removeClass("dis-bl")
    : null;
  $(".flexible-main").hasClass("flexible-menu-on")
    ? $(".flexible-main").removeClass("flexible-menu-on")
    : null;
  if ($(".location-js").hasClass("dis-bl")) {
    $(".btn-before").addClass("btn-active");
    $(".nav-search-main").addClass("btn-main-active");
  } else {
    $(".btn-before").removeClass("btn-active");
    $(".nav-search-main").removeClass("btn-main-active");
  }
});

// Price list

$("button[name='pricelist']").click(function () {
  $(".price-list").toggleClass("price-list-on");
  $(".price-list").hasClass("price-list-on")
    ? $("body").css("overflow-y", "hidden")
    : null;
});

$("svg[name='closebtn-p']").click(function () {
  $(".price-list").toggleClass("price-list-on");
  $("body").css("overflow-y", "auto");
});

// Lang list

$("button[name='langlist']").click(function () {
  $(".lang-list").toggleClass("lang-list-on");
  $(".lang-list").hasClass("lang-list-on")
    ? $("body").css("overflow-y", "hidden")
    : null;
});

$("svg[name='closebtn-l']").click(function () {
  $(".lang-list").toggleClass("lang-list-on");
  $("body").css("overflow-y", "auto");
});

// Flexible menu

$(".btn-before2, .btn-before3").click(function () {
  $(".flexible-main").toggleClass("flexible-menu-on");
  $("div[name='calendar-btn']").addClass("flexible-active");
  $("div[name='imflexible-btn']").removeClass("flexible-active");
  $(".nav-menu-js").hasClass("dis-bl")
    ? $(".nav-menu-js").removeClass("dis-bl")
    : null;
  $(".location-js").hasClass("dis-bl")
    ? $(".location-js").removeClass("dis-bl")
    : null;
  !$(".guests-popup").hasClass("none")
    ? $(".guests-popup").addClass("none")
    : null;
});
$(".flexible-active").click(function () {
  $(".flexible-open").removeClass("none");
});

$('div[name="imflexible-btn"]').click(function () {
  $('div[name="imflexible-btn"]').addClass("flexible-active");
  $('div[name="calendar-btn"]').removeClass("flexible-active");
});
$('div[name="calendar-btn"]').click(function () {
  $('div[name="imflexible-btn"]').removeClass("flexible-active");
  $('div[name="calendar-btn"]').addClass("flexible-active");
});

// I'm flexible

$(".month-1").click(function () {
  if (
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='September']").removeClass("months-deactive");
    $(".month-1").addClass("months-list-main-active");
  } else {
    $("span[name='September']").toggleClass("months-deactive");
    $(".month-1").toggleClass("months-list-main-active");
  }
  if ($(".month-1").hasClass("months-list-main-active")) {
    $(".months-img1").attr(
      "src",
      "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
    );
  } else {
    $(".months-img1").attr(
      "src",
      "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg"
    );
  }
  if (
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
    $("span[name='v4']").addClass("months-deactive");
    $("span[name='v3']").addClass("months-deactive");
    $("span[name='v2']").addClass("months-deactive");
    $("span[name='v1']").addClass("months-deactive");
  }
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive")
  ) {
    $("span[name='v3']").addClass("months-deactive");
  }
  if (
    !$("span[name='September]").hasClass("months-deactive") &&
    !$("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").removeClass("months-deactive");
  }
  if (
    !$("span[name='September']").hasClass("months-deactive") &&
    !$("span[name='January']").hasClass("months-deactive")
  ) {
    $("span[name='v4']").removeClass("months-deactive");
  }
  if (
    !$("span[name='September']").hasClass("months-deactive") &&
    !$("span[name='December']").hasClass("months-deactive")
  ) {
    $("span[name='v3']").removeClass("months-deactive");
  }
  if (
    !$("span[name='September']").hasClass("months-deactive") &&
    !$("span[name='November']").hasClass("months-deactive")
  ) {
    $("span[name='v2']").removeClass("months-deactive");
  }
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    !$("span[name='November']").hasClass("months-deactive")
  ) {
    $("span[name='v2']").addClass("months-deactive");
  }
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    !$("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive")
  ) {
    $("span[name='v4']").addClass("months-deactive");
  }
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    !$("span[name='February']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
  }
  if (
    !$("span[name='September']").hasClass("months-deactive") &&
    !$("span[name='October']").hasClass("months-deactive")
  ) {
    $("span[name='v1']").removeClass("months-deactive");
  }
  if ($("span[name='September']").hasClass("months-deactive")) {
    $("span[name='v1']").addClass("months-deactive");
  }
});
$(".month-2").click(function () {
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='October']").removeClass("months-deactive");
    $(".month-2").addClass("months-list-main-active");
    $("span[name='v2']").addClass("months-deactive");
  } else {
    $("span[name='October']").toggleClass("months-deactive");
    $(".month-2").toggleClass("months-list-main-active");
  }
  if ($(".month-2").hasClass("months-list-main-active")) {
    $(".months-img2").attr(
      "src",
      "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
    );
  } else {
    $(".months-img2").attr(
      "src",
      "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg"
    );
  }
  if (!$("span[name='September']").hasClass("months-deactive")) {
    $("span[name='v1']").removeClass("months-deactive");
  }
  if ($("span[name='October']").hasClass("months-deactive")) {
    $("span[name='v1']").addClass("months-deactive");
  }
  if (
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
    $("span[name='v4']").addClass("months-deactive");
    $("span[name='v3']").addClass("months-deactive");
    $("span[name='v2']").addClass("months-deactive");
  }
  if (
    !$("span[name='October]").hasClass("months-deactive") &&
    !$("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").removeClass("months-deactive");
  }
  if (
    !$("span[name='October']").hasClass("months-deactive") &&
    !$("span[name='January']").hasClass("months-deactive")
  ) {
    $("span[name='v4']").removeClass("months-deactive");
  }
  if (
    !$("span[name='October']").hasClass("months-deactive") &&
    !$("span[name='December']").hasClass("months-deactive")
  ) {
    $("span[name='v3']").removeClass("months-deactive");
  }
  if (
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    !$("span[name='December']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v3']").addClass("months-deactive");
  }
  if (
    $("span[name='October']").hasClass("months-deactive") &&
    !$("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v4']").addClass("months-deactive");
  }
  if (
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    !$("span[name='February']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
  }
  if (
    !$("span[name='October']").hasClass("months-deactive") &&
    !$("span[name='November']").hasClass("months-deactive")
  ) {
    $("span[name='v2']").removeClass("months-deactive");
  }
  if (
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v2']").addClass("months-deactive");
  }
});
$(".month-3").click(function () {
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='November']").removeClass("months-deactive");
    $(".month-3").addClass("months-list-main-active");
    $("span[name='v2']").addClass("months-deactive");
  } else {
    $("span[name='November']").toggleClass("months-deactive");
    $(".month-3").toggleClass("months-list-main-active");
  }
  if ($(".month-3").hasClass("months-list-main-active")) {
    $(".months-img3").attr(
      "src",
      "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
    );
  } else {
    $(".months-img3").attr(
      "src",
      "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg"
    );
  }
  if (
    !$("span[name='September']").hasClass("months-deactive") ||
    !$("span[name='October']").hasClass("months-deactive")
  ) {
    $("span[name='v2']").removeClass("months-deactive");
  }
  if (
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    !$("span[name='October']").hasClass("months-deactive") &&
    $("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v2']").addClass("months-deactive");
  }
  if (
    $("span[name='November']").hasClass("months-deactive") &&
    !$("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v4']").addClass("months-deactive");
  }
  if (
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    !$("span[name='February']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
  }
  if (
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    !$("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v2']").addClass("months-deactive");
  }
  if (
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
    $("span[name='v4']").addClass("months-deactive");
    $("span[name='v3']").addClass("months-deactive");
  }
  if (
    !$("span[name='November']").hasClass("months-deactive") &&
    !$("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").removeClass("months-deactive");
  }
  if (
    !$("span[name='November']").hasClass("months-deactive") &&
    !$("span[name='January']").hasClass("months-deactive")
  ) {
    $("span[name='v4']").removeClass("months-deactive");
  }
  if (
    $("span[name='November']").hasClass("months-deactive") &&
    !$("span[name='December']").hasClass("months-deactive")
  ) {
    $("span[name='v3']").addClass("months-deactive");
  }
  if (
    !$("span[name='November']").hasClass("months-deactive") &&
    !$("span[name='December']").hasClass("months-deactive")
  ) {
    $("span[name='v3']").removeClass("months-deactive");
  }
});
$(".month-4").click(function () {
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='December']").removeClass("months-deactive");
    $(".month-4").addClass("months-list-main-active");
    $("span[name='v3']").addClass("months-deactive");
  } else {
    $("span[name='December']").toggleClass("months-deactive");
    $(".month-4").toggleClass("months-list-main-active");
  }
  if ($(".month-4").hasClass("months-list-main-active")) {
    $(".months-img4").attr(
      "src",
      "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
    );
  } else {
    $(".months-img4").attr(
      "src",
      "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg"
    );
  }
  if (
    !$("span[name='September']").hasClass("months-deactive") ||
    !$("span[name='November']").hasClass("months-deactive") ||
    !$("span[name='October']").hasClass("months-deactive")
  ) {
    $("span[name='v3']").removeClass("months-deactive");
  }
  if ($("span[name='December']").hasClass("months-deactive")) {
    $("span[name='v3']").addClass("months-deactive");
  }
  if (
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
    $("span[name='v4']").addClass("months-deactive");
  }
  if (
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive") &&
    !$("span[name='February']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
  }
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive")
  ) {
    $("span[name='v4']").addClass("months-deactive");
  }
  if (
    !$("span[name='December']").hasClass("months-deactive") &&
    !$("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").removeClass("months-deactive");
  }
  if (
    !$("span[name='December']").hasClass("months-deactive") &&
    !$("span[name='January']").hasClass("months-deactive")
  ) {
    $("span[name='v4']").removeClass("months-deactive");
  }
});
$(".month-5").click(function () {
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='February']").hasClass("months-deactive")
  ) {
    $("span[name='January']").removeClass("months-deactive");
    $(".month-5").addClass("months-list-main-active");
    $("span[name='v4']").addClass("months-deactive");
  } else {
    $("span[name='January']").toggleClass("months-deactive");
    $(".month-5").toggleClass("months-list-main-active");
  }
  if ($(".month-5").hasClass("months-list-main-active")) {
    $(".months-img5").attr(
      "src",
      "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
    );
  } else {
    $(".months-img5").attr(
      "src",
      "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg"
    );
  }
  if (
    !$("span[name='September']").hasClass("months-deactive") ||
    !$("span[name='December']").hasClass("months-deactive") ||
    !$("span[name='November']").hasClass("months-deactive") ||
    !$("span[name='October']").hasClass("months-deactive")
  ) {
    $("span[name='v4']").removeClass("months-deactive");
  }
  if ($("span[name='January']").hasClass("months-deactive")) {
    $("span[name='v4']").addClass("months-deactive");
  }
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
  }
  if (!$("span[name='February']").hasClass("months-deactive")) {
    $("span[name='v5']").removeClass("months-deactive");
  }
  if (
    $("span[name='January']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    !$("span[name='February']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='September']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").addClass("months-deactive");
  }
});
$(".month-6").click(function () {
  if (
    $("span[name='September']").hasClass("months-deactive") &&
    $("span[name='December']").hasClass("months-deactive") &&
    $("span[name='November']").hasClass("months-deactive") &&
    $("span[name='October']").hasClass("months-deactive") &&
    $("span[name='January']").hasClass("months-deactive")
  ) {
    $("span[name='February']").removeClass("months-deactive");
    $(".month-6").addClass("months-list-main-active");
    $("span[name='v5']").addClass("months-deactive");
  } else {
    $("span[name='February']").toggleClass("months-deactive");
    $(".month-6").toggleClass("months-list-main-active");
  }
  if ($(".month-6").hasClass("months-list-main-active")) {
    $(".months-img6").attr(
      "src",
      "https://a0.muscache.com/pictures/33e22c88-92bf-47be-847a-98a7e374d78b.jpg"
    );
  } else {
    $(".months-img6").attr(
      "src",
      "https://a0.muscache.com/pictures/cf82c9bc-520a-4486-9be4-1f0927972381.jpg"
    );
  }
  if (
    !$("span[name='September']").hasClass("months-deactive") ||
    !$("span[name='December']").hasClass("months-deactive") ||
    !$("span[name='November']").hasClass("months-deactive") ||
    !$("span[name='October']").hasClass("months-deactive") ||
    !$("span[name='January']").hasClass("months-deactive")
  ) {
    $("span[name='v5']").removeClass("months-deactive");
  }
  if ($("span[name='February']").hasClass("months-deactive")) {
    $("span[name='v5']").addClass("months-deactive");
  }
});

$("div[name='week']").click(function () {
  $("div[name='week']").addClass("flexible-btn-active");
  $("div[name='weekend']").removeClass("flexible-btn-active");
  $("div[name='weekend']").addClass("weekends-deactive");
  $("div[name='month']").removeClass("flexible-btn-active");
  $("div[name='month']").addClass("weekends-deactive");
  $("span[name='btn-names']").text("week");
});
$("div[name='month']").click(function () {
  $("div[name='month']").addClass("flexible-btn-active");
  $("div[name='weekend']").removeClass("flexible-btn-active");
  $("div[name='weekend']").addClass("weekends-deactive");
  $("div[name='week']").removeClass("flexible-btn-active");
  $("div[name='week']").addClass("weekends-deactive");
  $("span[name='btn-names']").text("month");
});
$("div[name='weekend']").click(function () {
  $("div[name='weekend']").addClass("flexible-btn-active");
  $("div[name='week']").removeClass("flexible-btn-active");
  $("div[name='week']").addClass("weekends-deactive");
  $("div[name='month']").removeClass("flexible-btn-active");
  $("div[name='month']").addClass("weekends-deactive");
  $("span[name='btn-names']").text("weekend");
});

// Expriences

$("div[name='expriences']").click(function () {
  $(".btn-before2").css("display", "none");
  $(".btn-before3").css("display", "none");
  $(".nav-li1").addClass("nav-link-hover1");
  $(".nav-li1").removeClass("nav-li1");
  $("div[name='btn4-title']").addClass("exp-active");
  $("div[name='expriences']").addClass("nav-li2");
  $("div[name='expriences']").removeClass("nav-link-hover");
  $("div[name='btn4-title']").html(
    'Date<br><span class="nss-s sp1">Add when you want to go</span>'
  );
  $(".btn-before").addClass("btn-before-active");
  $(".btn-before").addClass("exp-1-active");
  $(".btn-before4").addClass("exp-main-active");
});
$("div[name='places-to-stay']").click(function () {
  $(".btn-before2").css("display", "block");
  $(".btn-before3").css("display", "block");
  $("div[name='places-to-stay']").removeClass("nav-link-hover1");
  $("div[name='places-to-stay']").addClass("nav-li1");
  $("div[name='btn4-title']").removeClass("exp-active");
  $("div[name='expriences']").removeClass("nav-li2");
  $("div[name='expriences']").addClass("nav-link-hover");
  $("div[name='btn4-title']").html(
    'Guests<br><span class="nss-s sp1">Add guests</span>'
  );
  $(".btn-before").removeClass("btn-before-active");
  $(".btn-before").removeClass("exp-1-active");
  $(".btn-before4").removeClass("exp-main-active");
});

// Closing clicks
$(document).click(function (e) {
  if (
    !$(e.target).closest("#profile-btn").length &&
    !$(e.target).closest(".btn-before").length &&
    !$(e.target).closest(".btn-before2").length &&
    !$(e.target).closest(".btn-before3").length &&
    !$(e.target).closest(".btn-before4").length &&
    !$(e.target).closest(".flexible-main").length &&
    !$(e.target).closest(".guests-popup").length &&
    !$(e.target).closest(".prev").length &&
    !$(e.target).closest(".next").length &&
    !$(e.target).closest(".location-js").length &&
    !$(e.target).closest(".price-list").length &&
    !$(e.target).closest("button[name='pricelist']").length &&
    !$(e.target).closest("button[name='langlist']").length
  ) {
    $(".guests-popup").addClass("none");
    $(".nav-menu-js").removeClass("dis-bl");
    $(".location-js").removeClass("dis-bl");
    $(".price-list").removeClass("price-list-on");
    $(".lang-list").removeClass("lang-list-on");
    $("body").css("overflow-y", "auto");
    $(".flexible-main").removeClass("flexible-menu-on");
  }
  if ($(".location-js").hasClass("dis-bl")) {
    $(".btn-before").addClass("btn-active");
    $(".nav-search-main").addClass("btn-main-active");
  } else {
    $(".btn-before").removeClass("btn-active");
    $(".nav-search-main").removeClass("btn-main-active");
  }
});
// Body overflow-x && DOM fully loaded events
$(document).ready(function () {
  $("body").css("overflow-x", "hidden");
});

// -------------------------section 3-------------------------

const title1 = document.querySelector(".title-1");
const title2 = document.querySelector(".title-2");
const title3 = document.querySelector(".title-3");
const title4 = document.querySelector(".title-4");
const title5 = document.querySelector(".title-5");
const title6 = document.querySelector(".title-6");
const artCultureLinks = document.querySelector(".art-culture-links");
const outdoorLinks = document.querySelector(".outdoor-links");
const mountainCabinsLinks = document.querySelector(".mountain-cabins-links");
const beachLinks = document.querySelector(".beach-links");
const popularLinks = document.querySelector(".popular-links");
const uniqueLinks = document.querySelector(".unique-links");

const titleList = [title1, title2, title3, title4, title5, title6];
const linkList = [
  artCultureLinks,
  outdoorLinks,
  mountainCabinsLinks,
  beachLinks,
  popularLinks,
  uniqueLinks,
];

function toggleClass(title) {
  function addNoneClass() {
    for (var i = 0; i < linkList.length; i++) {
      if (titleList[i] === title) {
        continue;
      }
      linkList[i].classList.add("none");
    }
  }
  function removeNavigationButtonClass() {
    for (var i = 0; i < titleList.length; i++) {
      if (titleList[i] === title) {
        continue;
      }
      titleList[i].classList.remove("selected-navigation-button");
    }
  }

  if (title == titleList[0]) {
    linkList[0].classList.remove("none");
    titleList[0].classList.add("selected-navigation-button");
    removeNavigationButtonClass();
    addNoneClass();
  } else if (title == titleList[1]) {
    linkList[1].classList.remove("none");
    titleList[1].classList.add("selected-navigation-button");
    removeNavigationButtonClass();
    addNoneClass();
  } else if (title == titleList[2]) {
    linkList[2].classList.remove("none");
    titleList[2].classList.add("selected-navigation-button");
    removeNavigationButtonClass();
    addNoneClass();
  } else if (title == titleList[3]) {
    linkList[3].classList.remove("none");
    titleList[3].classList.add("selected-navigation-button");
    removeNavigationButtonClass();
    addNoneClass();
  } else if (title == titleList[4]) {
    linkList[4].classList.remove("none");
    titleList[4].classList.add("selected-navigation-button");
    removeNavigationButtonClass();
    addNoneClass();
  } else if (title == titleList[5]) {
    linkList[5].classList.remove("none");
    titleList[5].classList.add("selected-navigation-button");
    removeNavigationButtonClass();
    addNoneClass();
  }
}
// Loop to add event listener to all buttons
for (var i = 0; i < titleList.length; i++) {
  titleList[i].addEventListener("click", toggleClass.bind(null, titleList[i]));
}

// ------------------search box -------------------------
$(window).scroll(function () {
  const scroll = window.scrollY;
  if (scroll > 0) {
    $(".nav-main-scroll").removeClass("none").addClass("fixed");
    $(".nav-main").addClass("none");
    $(".nav-search-main").addClass("none");
    $(".nav-texts-scroll").addClass("none");
    $(".search-box-scroll").removeClass("none");
    $(".nav-search-main-scroll").addClass("none");
    $(".nav-main-scroll").removeClass("fixed-height");
    $('#nav-btn-main').css('margin-top', '160px');
  } else {
    $(".nav-main-scroll").addClass("none").removeClass("fixed");
    $(".nav-main").removeClass("none");
    $(".nav-search-main").removeClass("none");
    $(".nav-search-main-scroll").addClass("none");
    $(".nav-main-scroll").removeClass("fixed-height");
    $('#nav-btn-main').css('margin-top', '0');
  }
});

// ADDING EVENT LISTENER FOR THE INPUT
$(".search-box-scroll").click(function () {
  $(".nav-texts-scroll").removeClass("none");
  $(".search-box-scroll").addClass("none");
  $(".nav-search-main-scroll").removeClass("none").addClass("fixed-pannel");
  $(".nav-main-scroll").addClass("fixed-height");
});

// GUESTS
const plus1 = document.querySelector(".plus1");
const plus2 = document.querySelector(".plus2");
const plus3 = document.querySelector(".plus3");
const minus1 = document.querySelector(".minus1");
const minus2 = document.querySelector(".minus2");
const minus3 = document.querySelector(".minus3");
const startNum1 = document.querySelector(".start-num1");
const startNum2 = document.querySelector(".start-num2");
const startNum3 = document.querySelector(".start-num3");
const plus1_1 = document.querySelector(".plus1_1");
const plus2_2 = document.querySelector(".plus2_2");
const plus3_3 = document.querySelector(".plus3_3");
const minus1_1 = document.querySelector(".minus1_1");
const minus2_2 = document.querySelector(".minus2_2");
const minus3_3 = document.querySelector(".minus3_3");
const startNum1_1 = document.querySelector(".start-num1_1");
const startNum2_2 = document.querySelector(".start-num2_2");
const startNum3_3 = document.querySelector(".start-num3_3");

$(".btn-before4").click(function () {
  $(".guests-popup").toggleClass("none");
  if ($(".flexible-main").hasClass("flexible-menu-on")) {
    $(".flexible-main").removeClass("flexible-menu-on");
  }
});

plus1.addEventListener("click", function () {
  if (startNum1.innerHTML < 16) startNum1.innerHTML = +startNum1.innerHTML + 1;
  minus1.classList.remove("disable-num");
  if (startNum1.innerHTML > 15) plus1.classList.add("disable-num");
});
minus1.addEventListener("click", function () {
  if (startNum1.innerHTML > 0) startNum1.innerHTML = +startNum1.innerHTML - 1;
  if (startNum1.innerHTML < 1) minus1.classList.add("disable-num");
  if (startNum1.innerHTML < 16) plus1.classList.remove("disable-num");
});
plus2.addEventListener("click", function () {
  if (startNum2.innerHTML < 5) startNum2.innerHTML = +startNum2.innerHTML + 1;
  minus2.classList.remove("disable-num");
  if (startNum2.innerHTML > 4) plus2.classList.add("disable-num");
  if (startNum1.innerHTML === '0' && startNum2.innerHTML === '1') {
    startNum1.innerHTML = +startNum1.innerHTML + 1;
    minus1.classList.remove("disable-num")
  }
});
minus2.addEventListener("click", function () {
  if (startNum2.innerHTML > 0) startNum2.innerHTML = +startNum2.innerHTML - 1;
  if (startNum2.innerHTML < 1) minus2.classList.add("disable-num");
  if (startNum2.innerHTML < 5) plus2.classList.remove("disable-num");
});
plus3.addEventListener("click", function () {
  if (startNum3.innerHTML < 5) startNum3.innerHTML = +startNum3.innerHTML + 1;
  minus3.classList.remove("disable-num");
  if (startNum3.innerHTML > 4) plus3.classList.add("disable-num");
  if (startNum1.innerHTML === '0' && startNum3.innerHTML === '1') {
    startNum1.innerHTML = +startNum1.innerHTML + 1;
    minus1.classList.remove("disable-num")
  }
});
minus3.addEventListener("click", function () {
  if (startNum3.innerHTML > 0) startNum3.innerHTML = +startNum3.innerHTML - 1;
  if (startNum3.innerHTML < 1) minus3.classList.add("disable-num");
  if (startNum3.innerHTML < 5) plus3.classList.remove("disable-num");
});

plus1_1.addEventListener("click", function () {
  if (startNum1_1.innerHTML < 16) startNum1_1.innerHTML = +startNum1_1.innerHTML + 1;
  minus1_1.classList.remove("disable-num");
  if (startNum1_1.innerHTML > 15) plus1_1.classList.add("disable-num");
});
minus1_1.addEventListener("click", function (e) {
  if (startNum1_1.innerHTML > 0) startNum1_1.innerHTML = +startNum1_1.innerHTML - 1;
  if (startNum1_1.innerHTML < 1) minus1_1.classList.add("disable-num");
  if (startNum1_1.innerHTML < 16) plus1_1.classList.remove("disable-num");
  if (startNum2_2.innerHTML === '1' || startNum3_3.innerHTML === '1') {
    startNum1_1.innerHTML = 1;
    minus1_1.classList.remove("disable-num")
  }
});
plus2_2.addEventListener("click", function () {
  if (startNum2.innerHTML < 5) startNum2_2.innerHTML = +startNum2_2.innerHTML + 1;
  minus2_2.classList.remove("disable-num");
  if (startNum2_2.innerHTML > 4) plus2_2.classList.add("disable-num");
  if (startNum1_1.innerHTML === '0' && startNum2_2.innerHTML === '1') {
    startNum1_1.innerHTML = +startNum1_1.innerHTML + 1;
    minus1_1.classList.remove("disable-num")
  }
});
minus2_2.addEventListener("click", function () {
  if (startNum2_2.innerHTML > 0) startNum2_2.innerHTML = +startNum2_2.innerHTML - 1;
  if (startNum2_2.innerHTML < 1) minus2_2.classList.add("disable-num");
  if (startNum2_2.innerHTML < 5) plus2_2.classList.remove("disable-num");
});
plus3_3.addEventListener("click", function () {
  if (startNum3_3.innerHTML < 5) startNum3_3.innerHTML = +startNum3_3.innerHTML + 1;
  minus3_3.classList.remove("disable-num");
  if (startNum3_3.innerHTML > 4) plus3_3.classList.add("disable-num");
  if (startNum1_1.innerHTML === '0' && startNum3_3.innerHTML === '1') {
    startNum1_1.innerHTML = +startNum1_1.innerHTML + 1;
    minus1_1.classList.remove("disable-num")
  }
});
minus3_3.addEventListener("click", function () {
  if (startNum3_3.innerHTML > 0) startNum3_3.innerHTML = +startNum3_3.innerHTML - 1;
  if (startNum3_3.innerHTML < 1) minus3_3.classList.add("disable-num");
  if (startNum3_3.innerHTML < 5) plus3_3.classList.remove("disable-num");
});

// Calendar

$('.btn-before2, .btn-before3, div[name="calendar-btn"]').daterangepicker();

// const calendar = $('.btn-before2').data('daterangepicker');

// let startDate = calendar.startDate._d.toString('').substr(4, 6),
//     endDate = calendar.endDate._d.toString('').substr(4, 6);

$('div[name="calendar-btn"]').click(function () {
  $(".flexible-open").addClass("none");
});
