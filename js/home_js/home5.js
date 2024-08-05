// 큰 서브 5
subArr[4][0].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 5_1);
});

subArr[4][1].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 5_2);
});

subArr[4][2].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 5_3);
});

subArr[4][3].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 5_4);
});

subArr[4][4].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 5_5);
});

subArr[4][5].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 5_6);
});

subArr[4][6].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 5_7);
});

subArr[4][7].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 5_8);
});

var sub5_1 = window.localStorage.getItem("sub5-1"); // 백에 보내기
if (sub5_1) {
  subArr[4][0].innerHTML = `<span>${sub5_1}</span>`; // 백에서 받아온걸로 넣기
}

var sub5_2 = window.localStorage.getItem("sub5-2"); // 백에 보내기
if (sub5_2) {
  subArr[4][1].innerHTML = `<span>${sub5_2}</span>`; // 백에서 받아온걸로 넣기
}

var sub5_3 = window.localStorage.getItem("sub5-3"); // 백에 보내기
if (sub5_3) {
  subArr[4][2].innerHTML = `<span>${sub5_3}</span>`; // 백에서 받아온걸로 넣기
}

var sub5_4 = window.localStorage.getItem("sub5-4"); // 백에 보내기
if (sub5_4) {
  subArr[4][3].innerHTML = `<span>${sub5_4}</span>`; // 백에서 받아온걸로 넣기
}

var sub5_5 = window.localStorage.getItem("sub5-5"); // 백에 보내기
if (sub5_5) {
  subArr[4][4].innerHTML = `<span>${sub5_5}</span>`; // 백에서 받아온걸로 넣기
}

var sub5_6 = window.localStorage.getItem("sub5-6"); // 백에 보내기
if (sub5_6) {
  subArr[4][5].innerHTML = `<span>${sub5_6}</span>`; // 백에서 받아온걸로 넣기
}

var sub5_7 = window.localStorage.getItem("sub5-7"); // 백에 보내기
if (sub5_7) {
  subArr[4][6].innerHTML = `<span>${sub5_7}</span>`; // 백에서 받아온걸로 넣기
}

var sub5_8 = window.localStorage.getItem("sub5-8"); // 백에 보내기
if (sub5_8) {
  subArr[4][7].innerHTML = `<span>${sub5_8}</span>`; // 백에서 받아온걸로 넣기
}

// 달성 여부
var sub5_1_success = window.localStorage.getItem("sub5-1-success");
if (sub5_1_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[4][0].appendChild(alarmDiv);
}

var sub5_2_success = window.localStorage.getItem("sub5-2-success");
if (sub5_2_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[4][1].appendChild(alarmDiv);
}

var sub5_3_success = window.localStorage.getItem("sub5-3-success");
if (sub5_3_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[4][2].appendChild(alarmDiv);
}

var sub5_4_success = window.localStorage.getItem("sub5-4-success");
if (sub5_4_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[4][3].appendChild(alarmDiv);
}

var sub5_5_success = window.localStorage.getItem("sub5-5-success");
if (sub5_5_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[4][4].appendChild(alarmDiv);
}

var sub5_6_success = window.localStorage.getItem("sub5-6-success");
if (sub5_6_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[4][5].appendChild(alarmDiv);
}

var sub5_7_success = window.localStorage.getItem("sub5-7-success");
if (sub5_7_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[4][6].appendChild(alarmDiv);
}

var sub5_8_success = window.localStorage.getItem("sub5-8-success");
if (sub5_8_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[4][7].appendChild(alarmDiv);
}

// 이미지
var sub5_1_image = window.localStorage.getItem("sub5-1-image");
if (sub5_1_image) {
  subArr[4][0].style.setProperty("--after-bg-image", `url(${sub5_1_image})`);
  subArr[4][0].style.backgroundColor = "transparent";
}

var sub5_2_image = window.localStorage.getItem("sub5-2-image");
if (sub5_2_image) {
  subArr[4][1].style.setProperty("--after-bg-image", `url(${sub5_2_image})`);
  subArr[4][1].style.backgroundColor = "transparent";
}

var sub5_3_image = window.localStorage.getItem("sub5-3-image");
if (sub5_3_image) {
  subArr[4][2].style.setProperty("--after-bg-image", `url(${sub5_3_image})`);
  subArr[4][2].style.backgroundColor = "transparent";
}

var sub5_4_image = window.localStorage.getItem("sub5-4-image");
if (sub5_4_image) {
  subArr[4][3].style.setProperty("--after-bg-image", `url(${sub5_4_image})`);
  subArr[4][3].style.backgroundColor = "transparent";
}

var sub5_5_image = window.localStorage.getItem("sub5-5-image");
if (sub5_5_image) {
  subArr[4][4].style.setProperty("--after-bg-image", `url(${sub5_5_image})`);
  subArr[4][4].style.backgroundColor = "transparent";
}

var sub5_6_image = window.localStorage.getItem("sub5-6-image");
if (sub5_6_image) {
  subArr[4][5].style.setProperty("--after-bg-image", `url(${sub5_6_image})`);
  subArr[4][5].style.backgroundColor = "transparent";
}

var sub5_7_image = window.localStorage.getItem("sub5-7-image");
if (sub5_7_image) {
  subArr[4][6].style.setProperty("--after-bg-image", `url(${sub5_7_image})`);
  subArr[4][6].style.backgroundColor = "transparent";
}

var sub5_8_image = window.localStorage.getItem("sub5-8-image");
if (sub5_8_image) {
  subArr[4][7].style.setProperty("--after-bg-image", `url(${sub5_8_image})`);
  subArr[4][7].style.backgroundColor = "transparent";
}
