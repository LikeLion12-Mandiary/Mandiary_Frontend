// 만다라트 컬러 좌우 슬라이드
let curIndex = 0;
let position = 0;
const DISTANCE = 890; // 한 번 움직일 때 이동할 거리

// 요소 선택
const colorPrevBtn = document.querySelector(".color-prev-btn");
const colorNextBtn = document.querySelector(".color-next-btn");
const colorBoxes = document.querySelectorAll(".slide");

// 앞으로 가기는 처음부터 못누르게
colorPrevBtn.setAttribute("disabled", "true");

colorPrevBtn.addEventListener("click", () => {
  if (curIndex > 0) {
    colorNextBtn.removeAttribute("disabled");
    position += DISTANCE;

    for (var i = 0; i < colorBoxes.length; i++) {
      colorBoxes[i].style.transform = `translateX(${position}px)`;
    }

    curIndex -= 1;
  } else {
    colorPrevBtn.setAttribute("disabled", "true");
  }
});

colorNextBtn.addEventListener("click", () => {
  if (curIndex < 2) {
    colorPrevBtn.removeAttribute("disabled");
    position -= DISTANCE;

    for (var i = 0; i < colorBoxes.length; i++) {
      colorBoxes[i].style.transform = `translateX(${position}px)`;
    }

    curIndex += 1;
  } else {
    colorNextBtn.setAttribute("disabled", "true");
  }
});

// 배지 좌우 슬라이드
let curIndex2 = 0;
let position2 = 0;

// 요소 선택
const badgePrevBtn = document.querySelector(".badge-prev-btn");
const badgeNextBtn = document.querySelector(".badge-next-btn");
const badgeBoxes = document.querySelectorAll(".slide2");

// 앞으로 가기는 처음부터 못누르게
badgePrevBtn.setAttribute("disabled", "true");

badgePrevBtn.addEventListener("click", () => {
  if (curIndex2 > 0) {
    badgeNextBtn.removeAttribute("disabled");
    position2 += DISTANCE;

    for (var i = 0; i < badgeBoxes.length; i++) {
      badgeBoxes[i].style.transform = `translateX(${position2}px)`;
    }

    curIndex2 -= 1;
  } else {
    badgePrevBtn.setAttribute("disabled", "true");
  }
});

badgeNextBtn.addEventListener("click", () => {
  if (curIndex2 < 2) {
    badgePrevBtn.removeAttribute("disabled");
    position2 -= DISTANCE;

    for (var i = 0; i < badgeBoxes.length; i++) {
      badgeBoxes[i].style.transform = `translateX(${position2}px)`;
    }

    curIndex2 += 1;
  } else {
    badgeNextBtn.setAttribute("disabled", "true");
  }
});

var API_SERVER_DOMAIN = "https://mandiary.duckdns.org";
const accessToken = getCookie("accessToken");

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  // accessToken 없으면 login 화면으로
  if (!accessToken) {
    window.location.href = "./login.html";
    return;
  }
});
