// 큰 서브 7
subArr[6][0].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 7_1);
});

subArr[6][1].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 7_2);
});

subArr[6][2].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 7_3);
});

subArr[6][3].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 7_4);
});

subArr[6][4].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 7_5);
});

subArr[6][5].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 7_6);
});

subArr[6][6].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 7_7);
});

subArr[6][7].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 7_8);
});

var sub7_1 = window.localStorage.getItem("sub7-1"); // 백에 보내기
if (sub7_1) {
  subArr[6][0].innerHTML = `<span>${sub7_1}</span>`; // 백에서 받아온걸로 넣기
}

var sub7_2 = window.localStorage.getItem("sub7-2"); // 백에 보내기
if (sub7_2) {
  subArr[6][1].innerHTML = `<span>${sub7_2}</span>`; // 백에서 받아온걸로 넣기
}

var sub7_3 = window.localStorage.getItem("sub7-3"); // 백에 보내기
if (sub7_3) {
  subArr[6][2].innerHTML = `<span>${sub7_3}</span>`; // 백에서 받아온걸로 넣기
}

var sub7_4 = window.localStorage.getItem("sub7-4"); // 백에 보내기
if (sub7_4) {
  subArr[6][3].innerHTML = `<span>${sub7_4}</span>`; // 백에서 받아온걸로 넣기
}

var sub7_5 = window.localStorage.getItem("sub7-5"); // 백에 보내기
if (sub7_5) {
  subArr[6][4].innerHTML = `<span>${sub7_5}</span>`; // 백에서 받아온걸로 넣기
}

var sub7_6 = window.localStorage.getItem("sub7-6"); // 백에 보내기
if (sub7_6) {
  subArr[6][5].innerHTML = `<span>${sub7_6}</span>`; // 백에서 받아온걸로 넣기
}

var sub7_7 = window.localStorage.getItem("sub7-7"); // 백에 보내기
if (sub7_7) {
  subArr[6][6].innerHTML = `<span>${sub7_7}</span>`; // 백에서 받아온걸로 넣기
}

var sub7_8 = window.localStorage.getItem("sub7-8"); // 백에 보내기
if (sub7_8) {
  subArr[6][7].innerHTML = `<span>${sub7_8}</span>`; // 백에서 받아온걸로 넣기
}

// 달성 여부
var sub7_1_success = window.localStorage.getItem("sub7-1-success");
if (sub7_1_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[6][0].appendChild(alarmDiv);
}

var sub7_2_success = window.localStorage.getItem("sub7-2-success");
if (sub7_2_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[6][1].appendChild(alarmDiv);
}

var sub7_3_success = window.localStorage.getItem("sub7-3-success");
if (sub7_3_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[6][2].appendChild(alarmDiv);
}

var sub7_4_success = window.localStorage.getItem("sub7-4-success");
if (sub7_4_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[6][3].appendChild(alarmDiv);
}

var sub7_5_success = window.localStorage.getItem("sub7-5-success");
if (sub7_5_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[6][4].appendChild(alarmDiv);
}

var sub7_6_success = window.localStorage.getItem("sub7-6-success");
if (sub7_6_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[6][5].appendChild(alarmDiv);
}

var sub7_7_success = window.localStorage.getItem("sub7-7-success");
if (sub7_7_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[6][6].appendChild(alarmDiv);
}

var sub7_8_success = window.localStorage.getItem("sub7-8-success");
if (sub7_8_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[6][7].appendChild(alarmDiv);
}

// 이미지
var sub7_1_image = window.localStorage.getItem("sub7-1-image");
if (sub7_1_image) {
  subArr[6][0].style.setProperty("--after-bg-image", `url(${sub7_1_image})`);
  subArr[6][0].style.backgroundColor = "transparent";
}

var sub7_2_image = window.localStorage.getItem("sub7-2-image");
if (sub7_2_image) {
  subArr[6][1].style.setProperty("--after-bg-image", `url(${sub7_2_image})`);
  subArr[6][1].style.backgroundColor = "transparent";
}

var sub7_3_image = window.localStorage.getItem("sub7-3-image");
if (sub7_3_image) {
  subArr[6][2].style.setProperty("--after-bg-image", `url(${sub7_3_image})`);
  subArr[6][2].style.backgroundColor = "transparent";
}

var sub7_4_image = window.localStorage.getItem("sub7-4-image");
if (sub7_4_image) {
  subArr[6][3].style.setProperty("--after-bg-image", `url(${sub7_4_image})`);
  subArr[6][3].style.backgroundColor = "transparent";
}

var sub7_5_image = window.localStorage.getItem("sub7-5-image");
if (sub7_5_image) {
  subArr[6][4].style.setProperty("--after-bg-image", `url(${sub7_5_image})`);
  subArr[6][4].style.backgroundColor = "transparent";
}

var sub7_6_image = window.localStorage.getItem("sub7-6-image");
if (sub7_6_image) {
  subArr[6][5].style.setProperty("--after-bg-image", `url(${sub7_6_image})`);
  subArr[6][5].style.backgroundColor = "transparent";
}

var sub7_7_image = window.localStorage.getItem("sub7-7-image");
if (sub7_7_image) {
  subArr[6][6].style.setProperty("--after-bg-image", `url(${sub7_7_image})`);
  subArr[6][6].style.backgroundColor = "transparent";
}

var sub7_8_image = window.localStorage.getItem("sub7-8-image");
if (sub7_8_image) {
  subArr[6][7].style.setProperty("--after-bg-image", `url(${sub7_8_image})`);
  subArr[6][7].style.backgroundColor = "transparent";
}
