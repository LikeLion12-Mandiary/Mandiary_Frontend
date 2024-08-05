// 배지 좌우 슬라이드
let curIndex = 0;
let position = 0;
const DISTANCE = 554; // 한 번 움직일 때 이동할 거리

// 요소 선택
const badgeSelectPrevBtn = document.querySelector(".badge-select-prev-btn");
const badgeSelectNextBtn = document.querySelector(".badge-select-next-btn");
const badgeSelectBoxes = document.querySelectorAll(".badge-img-line");

// 앞으로 가기는 처음부터 못누르게
badgeSelectPrevBtn.setAttribute("disabled", "true");

badgeSelectPrevBtn.addEventListener("click", () => {
  if (curIndex > 0) {
    badgeSelectNextBtn.removeAttribute("disabled");
    position += DISTANCE;

    for (var i = 0; i < badgeSelectBoxes.length; i++) {
      badgeSelectBoxes[i].style.transform = `translateX(${position}px)`;
    }

    curIndex -= 1;
  } else {
    badgeSelectPrevBtn.setAttribute("disabled", "true");
  }
});

badgeSelectNextBtn.addEventListener("click", () => {
  if (curIndex < 2) {
    badgeSelectPrevBtn.removeAttribute("disabled");
    position -= DISTANCE;

    for (var i = 0; i < badgeSelectBoxes.length; i++) {
      badgeSelectBoxes[i].style.transform = `translateX(${position}px)`;
    }

    curIndex += 1;
  } else {
    badgeSelectNextBtn.setAttribute("disabled", "true");
  }
});

// 홈화면 목표 가져오기
var goal1 = document.querySelector(".goal1");
var goal2 = document.querySelector(".goal2");
var goal3 = document.querySelector(".goal3");
var goal4 = document.querySelector(".goal4");
var goal5 = document.querySelector(".goal5");
var goal6 = document.querySelector(".goal6");
var goal7 = document.querySelector(".goal7");
var goal8 = document.querySelector(".goal8");

var sub1 = window.localStorage.getItem("sub1");
if (sub1) {
  const span = document.createElement("span");
  span.innerText = sub1;
  goal1.appendChild(span);
}

var sub2 = window.localStorage.getItem("sub2");
if (sub2) {
  const span = document.createElement("span");
  span.innerText = sub2;
  goal2.appendChild(span);
}

var sub3 = window.localStorage.getItem("sub3");
if (sub3) {
  const span = document.createElement("span");
  span.innerText = sub3;
  goal3.appendChild(span);
}

var sub4 = window.localStorage.getItem("sub4");
if (sub4) {
  const span = document.createElement("span");
  span.innerText = sub4;
  goal4.appendChild(span);
}

var sub5 = window.localStorage.getItem("sub5");
if (sub5) {
  const span = document.createElement("span");
  span.innerText = sub5;
  goal5.appendChild(span);
}

var sub6 = window.localStorage.getItem("sub6");
if (sub6) {
  const span = document.createElement("span");
  span.innerText = sub6;
  goal6.appendChild(span);
}

var sub7 = window.localStorage.getItem("sub7");
if (sub7) {
  const span = document.createElement("span");
  span.innerText = sub7;
  goal7.appendChild(span);
}

var sub8 = window.localStorage.getItem("sub8");
if (sub8) {
  const span = document.createElement("span");
  span.innerText = sub8;
  goal8.appendChild(span);
}

// 홈화면 이미지 가져오기
var sub1image = window.localStorage.getItem("sub1image");
if (sub1image !== "null") {
  goal1.style.setProperty("--after-bg-image", `url(${sub1image})`);
  goal1.style.backgroundColor = "transparent";
  if (sub1image == "") {
    goal1.style.backgroundColor = "#dcdcdc";
  }
}

var sub2image = window.localStorage.getItem("sub2image");
if (sub2image !== "null") {
  goal2.style.setProperty("--after-bg-image", `url(${sub2image})`);
  goal2.style.backgroundColor = "transparent";
  if (sub2image == "") {
    goal2.style.backgroundColor = "#dcdcdc";
  }
}

var sub3image = window.localStorage.getItem("sub3image");
if (sub3image !== "null") {
  goal3.style.setProperty("--after-bg-image", `url(${sub3image})`);
  goal3.style.backgroundColor = "transparent";
  if (sub3image == "") {
    goal3.style.backgroundColor = "#dcdcdc";
  }
}

var sub4image = window.localStorage.getItem("sub4image");
if (sub4image !== "null") {
  goal4.style.setProperty("--after-bg-image", `url(${sub4image})`);
  goal4.style.backgroundColor = "transparent";
  if (sub4image == "") {
    goal4.style.backgroundColor = "#dcdcdc";
  }
}

var sub5image = window.localStorage.getItem("sub5image");
if (sub5image !== "null") {
  goal5.style.setProperty("--after-bg-image", `url(${sub5image})`);
  goal5.style.backgroundColor = "transparent";
  if (sub5image == "") {
    goal5.style.backgroundColor = "#dcdcdc";
  }
}

var sub6image = window.localStorage.getItem("sub6image");
if (sub6image !== "null") {
  goal6.style.setProperty("--after-bg-image", `url(${sub6image})`);
  goal6.style.backgroundColor = "transparent";
  if (sub6image == "") {
    goal6.style.backgroundColor = "#dcdcdc";
  }
}

var sub7image = window.localStorage.getItem("sub7image");
if (sub7image !== "null") {
  goal7.style.setProperty("--after-bg-image", `url(${sub7image})`);
  goal7.style.backgroundColor = "transparent";
  if (sub7image == "") {
    goal7.style.backgroundColor = "#dcdcdc";
  }
}

var sub8image = window.localStorage.getItem("sub8image");
if (sub8image !== "null") {
  goal8.style.setProperty("--after-bg-image", `url(${sub8image})`);
  goal8.style.backgroundColor = "transparent";
  if (sub8image == "") {
    goal8.style.backgroundColor = "#dcdcdc";
  }
}
