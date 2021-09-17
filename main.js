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
  $(".nav-menu-js").hasClass("dis-bl")
    ? $(".nav-menu-js").removeClass("dis-bl")
    : null;
  $(".flexible-main").hasClass("flexible-menu-on")
    ? $(".flexible-main").removeClass("flexible-menu-on")
    : null;
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
  $(".nav-menu-js").hasClass("dis-bl")
    ? $(".nav-menu-js").removeClass("dis-bl")
    : null;
  $(".location-js").hasClass("dis-bl")
    ? $(".location-js").removeClass("dis-bl")
    : null;
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
});
$("div[name='month']").click(function () {
  $("div[name='month']").addClass("flexible-btn-active");
  $("div[name='weekend']").removeClass("flexible-btn-active");
  $("div[name='weekend']").addClass("weekends-deactive");
  $("div[name='week']").removeClass("flexible-btn-active");
  $("div[name='week']").addClass("weekends-deactive");
});
$("div[name='weekend']").click(function () {
  $("div[name='weekend']").addClass("flexible-btn-active");
  $("div[name='week']").removeClass("flexible-btn-active");
  $("div[name='week']").addClass("weekends-deactive");
  $("div[name='month']").removeClass("flexible-btn-active");
  $("div[name='month']").addClass("weekends-deactive");
});

// Closing clicks
$(document).click(function (e) {
  if (
    !$(e.target).closest("#profile-btn").length &&
    !$(e.target).closest(".btn-before").length &&
    !$(e.target).closest(".btn-before2").length &&
    !$(e.target).closest(".btn-before3").length &&
    !$(e.target).closest(".flexible-main").length &&
    !$(e.target).closest(".location-js").length &&
    !$(e.target).closest(".price-list").length &&
    !$(e.target).closest("button[name='pricelist']").length &&
    !$(e.target).closest("button[name='langlist']").length
  ) {
    $(".nav-menu-js").removeClass("dis-bl");
    $(".location-js").removeClass("dis-bl");
    $(".price-list").removeClass("price-list-on");
    $(".lang-list").removeClass("lang-list-on");
    $("body").css("overflow-y", "auto");
    $(".flexible-main").removeClass("flexible-menu-on");
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
  } else {
    $(".nav-main-scroll").addClass("none").removeClass("fixed");
    $(".nav-main").removeClass("none");
    $(".nav-search-main").removeClass("none");
  }
});

// ADDING EVENT LISTENER FOR THE INPUT
// $(".search-box-scroll").click(function () {
//   // $(".nav-main-scroll").addClass("none").removeClass("fixed");
//   $(".nav-main").removeClass("none");
//   $(".nav-search-main").removeClass("none");
// });
