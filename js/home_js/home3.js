// 큰 서브 3
subArr[2][0].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 3_1);
});

subArr[2][1].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 3_2);
});

subArr[2][2].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 3_3);
});

subArr[2][3].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 3_4);
});

subArr[2][4].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 3_5);
});

subArr[2][5].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 3_6);
});

subArr[2][6].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 3_7);
});

subArr[2][7].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 3_8);
});

var sub3_1 = window.localStorage.getItem("sub3-1"); // 백에 보내기
if (sub3_1) {
  subArr[2][0].innerHTML = `<span>${sub3_1}</span>`; // 백에서 받아온걸로 넣기
}

var sub3_2 = window.localStorage.getItem("sub3-2"); // 백에 보내기
if (sub3_2) {
  subArr[2][1].innerHTML = `<span>${sub3_2}</span>`; // 백에서 받아온걸로 넣기
}

var sub3_3 = window.localStorage.getItem("sub3-3"); // 백에 보내기
if (sub3_3) {
  subArr[2][2].innerHTML = `<span>${sub3_3}</span>`; // 백에서 받아온걸로 넣기
}

var sub3_4 = window.localStorage.getItem("sub3-4"); // 백에 보내기
if (sub3_4) {
  subArr[2][3].innerHTML = `<span>${sub3_4}</span>`; // 백에서 받아온걸로 넣기
}

var sub3_5 = window.localStorage.getItem("sub3-5"); // 백에 보내기
if (sub3_5) {
  subArr[2][4].innerHTML = `<span>${sub3_5}</span>`; // 백에서 받아온걸로 넣기
}

var sub3_6 = window.localStorage.getItem("sub3-6"); // 백에 보내기
if (sub3_6) {
  subArr[2][5].innerHTML = `<span>${sub3_6}</span>`; // 백에서 받아온걸로 넣기
}

var sub3_7 = window.localStorage.getItem("sub3-7"); // 백에 보내기
if (sub3_7) {
  subArr[2][6].innerHTML = `<span>${sub3_7}</span>`; // 백에서 받아온걸로 넣기
}

var sub3_8 = window.localStorage.getItem("sub3-8"); // 백에 보내기
if (sub3_8) {
  subArr[2][7].innerHTML = `<span>${sub3_8}</span>`; // 백에서 받아온걸로 넣기
}

// 달성 여부
var sub3_1_success = window.localStorage.getItem("sub3-1-success");
if (sub3_1_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[2][0].appendChild(alarmDiv);
}

var sub3_2_success = window.localStorage.getItem("sub3-2-success");
if (sub3_2_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[2][1].appendChild(alarmDiv);
}

var sub3_3_success = window.localStorage.getItem("sub3-3-success");
if (sub3_3_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[2][2].appendChild(alarmDiv);
}

var sub3_4_success = window.localStorage.getItem("sub3-4-success");
if (sub3_4_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[2][3].appendChild(alarmDiv);
}

var sub3_5_success = window.localStorage.getItem("sub3-5-success");
if (sub3_5_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[2][4].appendChild(alarmDiv);
}

var sub3_6_success = window.localStorage.getItem("sub3-6-success");
if (sub3_6_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[2][5].appendChild(alarmDiv);
}

var sub3_7_success = window.localStorage.getItem("sub3-7-success");
if (sub3_7_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[2][6].appendChild(alarmDiv);
}

var sub3_8_success = window.localStorage.getItem("sub3-8-success");
if (sub3_8_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[2][7].appendChild(alarmDiv);
}

// 이미지
var sub3_1_image = window.localStorage.getItem("sub3-1-image");
if (sub3_1_image) {
  subArr[2][0].style.setProperty("--after-bg-image", `url(${sub3_1_image})`);
  subArr[2][0].style.backgroundColor = "transparent";
}

var sub3_2_image = window.localStorage.getItem("sub3-2-image");
if (sub3_2_image) {
  subArr[2][1].style.setProperty("--after-bg-image", `url(${sub3_2_image})`);
  subArr[2][1].style.backgroundColor = "transparent";
}

var sub3_3_image = window.localStorage.getItem("sub3-3-image");
if (sub3_3_image) {
  subArr[2][2].style.setProperty("--after-bg-image", `url(${sub3_3_image})`);
  subArr[2][2].style.backgroundColor = "transparent";
}

var sub3_4_image = window.localStorage.getItem("sub3-4-image");
if (sub3_4_image) {
  subArr[2][3].style.setProperty("--after-bg-image", `url(${sub3_4_image})`);
  subArr[2][3].style.backgroundColor = "transparent";
}

var sub3_5_image = window.localStorage.getItem("sub3-5-image");
if (sub3_5_image) {
  subArr[2][4].style.setProperty("--after-bg-image", `url(${sub3_5_image})`);
  subArr[2][4].style.backgroundColor = "transparent";
}

var sub3_6_image = window.localStorage.getItem("sub3-6-image");
if (sub3_6_image) {
  subArr[2][5].style.setProperty("--after-bg-image", `url(${sub3_6_image})`);
  subArr[2][5].style.backgroundColor = "transparent";
}

var sub3_7_image = window.localStorage.getItem("sub3-7-image");
if (sub3_7_image) {
  subArr[2][6].style.setProperty("--after-bg-image", `url(${sub3_7_image})`);
  subArr[2][6].style.backgroundColor = "transparent";
}

var sub3_8_image = window.localStorage.getItem("sub3-8-image");
if (sub3_8_image) {
  subArr[2][7].style.setProperty("--after-bg-image", `url(${sub3_8_image})`);
  subArr[2][7].style.backgroundColor = "transparent";
}
