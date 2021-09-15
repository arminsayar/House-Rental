"use strict";

// Profile menu

$("#profile-btn").click(function () {
  $(".nav-menu-js").toggleClass("dis-bl");
  $(".location-js").hasClass("dis-bl")
    ? $(".location-js").removeClass("dis-bl")
    : null;
});

// Location

$(".btn-before").click(function () {
  $(".location-js").toggleClass("dis-bl");
  $(".nav-menu-js").hasClass("dis-bl")
    ? $(".nav-menu-js").removeClass("dis-bl")
    : null;
});

// Price list

$("button[name='pricelist']").click(function () {
  $(".price-list").toggleClass("price-list-on");
});
$("svg[name='closebtn-p']").click(function () {
  $(".price-list").toggleClass("price-list-on");
});

// Closing clicks

$(document).click(function (e) {
  if (
    !$(e.target).closest("#profile-btn").length &&
    !$(e.target).closest(".btn-before").length &&
    !$(e.target).closest(".location-js").length &&
    !$(e.target).closest(".price-list").length &&
    !$(e.target).closest("button[name='pricelist']").length
  ) {
    $(".nav-menu-js").removeClass("dis-bl");
    $(".location-js").removeClass("dis-bl");
    $(".price-list").removeClass("price-list-on");
  }
});

// section 3
// STYLES FOR ACTIVE BUTTONS SHOULD BE ADDED
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
// const buttonStyle = document.querySelector(".button-style");
// const buttons = document.querySelectorAll(".button-style");

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
  console.log(title);

  function addNoneClass() {
    for (var i = 0; i < linkList.length; i++) {
      if (titleList[i] === title) {
        continue;
      }
      linkList[i].classList.add("none");
    }
  }

  if (title == titleList[0]) {
    linkList[0].classList.remove("none");
    addNoneClass();
  } else if (title == titleList[1]) {
    linkList[1].classList.remove("none");
    addNoneClass();
    // buttons.style = "color: rgb(34, 34, 34)";
  } else if (title == titleList[2]) {
    linkList[2].classList.remove("none");
    addNoneClass();
  } else if (title == titleList[3]) {
    linkList[3].classList.remove("none");
    addNoneClass();
  } else if (title == titleList[4]) {
    linkList[4].classList.remove("none");
    addNoneClass();
  } else if (title == titleList[5]) {
    linkList[5].classList.remove("none");
    addNoneClass();
  }
}
// Loop to add event listener to all buttons
for (var i = 0; i < titleList.length; i++) {
  titleList[i].addEventListener("click", toggleClass.bind(null, titleList[i]));
}
