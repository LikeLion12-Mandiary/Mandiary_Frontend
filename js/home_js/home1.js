// goal-input에서 입력한 목표 띄우기

// 큰 서브 1
subArr[0][0].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 1_1);
});

subArr[0][1].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 1_2);
});

subArr[0][2].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 1_3);
});

subArr[0][3].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 1_4);
});

subArr[0][4].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 1_5);
});

subArr[0][5].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 1_6);
});

subArr[0][6].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 1_7);
});

subArr[0][7].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 1_8);
});

var sub1_1 = window.localStorage.getItem("sub1-1"); // 백에 보내기
if (sub1_1) {
  subArr[0][0].innerHTML = `<span>${sub1_1}</span>`; // 백에서 받아온걸로 넣기
}

var sub1_2 = window.localStorage.getItem("sub1-2"); // 백에 보내기
if (sub1_2) {
  subArr[0][1].innerHTML = `<span>${sub1_2}</span>`; // 백에서 받아온걸로 넣기
}

var sub1_3 = window.localStorage.getItem("sub1-3"); // 백에 보내기
if (sub1_3) {
  subArr[0][2].innerHTML = `<span>${sub1_3}</span>`; // 백에서 받아온걸로 넣기
}

var sub1_4 = window.localStorage.getItem("sub1-4"); // 백에 보내기
if (sub1_4) {
  subArr[0][3].innerHTML = `<span>${sub1_4}</span>`; // 백에서 받아온걸로 넣기
}

var sub1_5 = window.localStorage.getItem("sub1-5"); // 백에 보내기
if (sub1_5) {
  subArr[0][4].innerHTML = `<span>${sub1_5}</span>`; // 백에서 받아온걸로 넣기
}

var sub1_6 = window.localStorage.getItem("sub1-6"); // 백에 보내기
if (sub1_6) {
  subArr[0][5].innerHTML = `<span>${sub1_6}</span>`; // 백에서 받아온걸로 넣기
}

var sub1_7 = window.localStorage.getItem("sub1-7"); // 백에 보내기
if (sub1_7) {
  subArr[0][6].innerHTML = `<span>${sub1_7}</span>`; // 백에서 받아온걸로 넣기
}

var sub1_8 = window.localStorage.getItem("sub1-8"); // 백에 보내기
if (sub1_8) {
  subArr[0][7].innerHTML = `<span>${sub1_8}</span>`; // 백에서 받아온걸로 넣기
}

// 달성 여부
var sub1_1_success = window.localStorage.getItem("sub1-1-success");
if (sub1_1_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[0][0].appendChild(alarmDiv);
}

var sub1_2_success = window.localStorage.getItem("sub1-2-success");
if (sub1_2_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[0][1].appendChild(alarmDiv);
}

var sub1_3_success = window.localStorage.getItem("sub1-3-success");
if (sub1_3_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[0][2].appendChild(alarmDiv);
}

var sub1_4_success = window.localStorage.getItem("sub1-4-success");
if (sub1_4_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[0][3].appendChild(alarmDiv);
}

var sub1_5_success = window.localStorage.getItem("sub1-5-success");
if (sub1_5_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[0][4].appendChild(alarmDiv);
}

var sub1_6_success = window.localStorage.getItem("sub1-6-success");
if (sub1_6_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[0][5].appendChild(alarmDiv);
}

var sub1_7_success = window.localStorage.getItem("sub1-7-success");
if (sub1_7_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[0][6].appendChild(alarmDiv);
}

var sub1_8_success = window.localStorage.getItem("sub1-8-success");
if (sub1_8_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[0][7].appendChild(alarmDiv);
}

// 이미지
var sub1_1_image = window.localStorage.getItem("sub1-1-image");
if (sub1_1_image) {
  subArr[0][0].style.setProperty("--after-bg-image", `url(${sub1_1_image})`);
  subArr[0][0].style.backgroundColor = "transparent";
}

var sub1_2_image = window.localStorage.getItem("sub1-2-image");
if (sub1_2_image) {
  subArr[0][1].style.setProperty("--after-bg-image", `url(${sub1_2_image})`);
  subArr[0][1].style.backgroundColor = "transparent";
}

var sub1_3_image = window.localStorage.getItem("sub1-3-image");
if (sub1_3_image) {
  subArr[0][2].style.setProperty("--after-bg-image", `url(${sub1_3_image})`);
  subArr[0][2].style.backgroundColor = "transparent";
}

var sub1_4_image = window.localStorage.getItem("sub1-4-image");
if (sub1_4_image) {
  subArr[0][3].style.setProperty("--after-bg-image", `url(${sub1_4_image})`);
  subArr[0][3].style.backgroundColor = "transparent";
}

var sub1_5_image = window.localStorage.getItem("sub1-5-image");
if (sub1_5_image) {
  subArr[0][4].style.setProperty("--after-bg-image", `url(${sub1_5_image})`);
  subArr[0][4].style.backgroundColor = "transparent";
}

var sub1_6_image = window.localStorage.getItem("sub1-6-image");
if (sub1_6_image) {
  subArr[0][5].style.setProperty("--after-bg-image", `url(${sub1_6_image})`);
  subArr[0][5].style.backgroundColor = "transparent";
}

var sub1_7_image = window.localStorage.getItem("sub1-7-image");
if (sub1_7_image) {
  subArr[0][6].style.setProperty("--after-bg-image", `url(${sub1_7_image})`);
  subArr[0][6].style.backgroundColor = "transparent";
}

var sub1_8_image = window.localStorage.getItem("sub1-8-image");
if (sub1_8_image) {
  subArr[0][7].style.setProperty("--after-bg-image", `url(${sub1_8_image})`);
  subArr[0][7].style.backgroundColor = "transparent";
}
