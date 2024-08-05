// 큰 서브 2
subArr[1][0].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 2_1);
});

subArr[1][1].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 2_2);
});

subArr[1][2].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 2_3);
});

subArr[1][3].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 2_4);
});

subArr[1][4].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 2_5);
});

subArr[1][5].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 2_6);
});

subArr[1][6].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 2_7);
});

subArr[1][7].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 2_8);
});

var sub2_1 = window.localStorage.getItem("sub2-1"); // 백에 보내기
if (sub2_1) {
  subArr[1][0].innerHTML = `<span>${sub2_1}</span>`; // 백에서 받아온걸로 넣기
}

var sub2_2 = window.localStorage.getItem("sub2-2"); // 백에 보내기
if (sub2_2) {
  subArr[1][1].innerHTML = `<span>${sub2_2}</span>`; // 백에서 받아온걸로 넣기
}

var sub2_3 = window.localStorage.getItem("sub2-3"); // 백에 보내기
if (sub2_3) {
  subArr[1][2].innerHTML = `<span>${sub2_3}</span>`; // 백에서 받아온걸로 넣기
}

var sub2_4 = window.localStorage.getItem("sub2-4"); // 백에 보내기
if (sub2_4) {
  subArr[1][3].innerHTML = `<span>${sub2_4}</span>`; // 백에서 받아온걸로 넣기
}

var sub2_5 = window.localStorage.getItem("sub2-5"); // 백에 보내기
if (sub2_5) {
  subArr[1][4].innerHTML = `<span>${sub2_5}</span>`; // 백에서 받아온걸로 넣기
}

var sub2_6 = window.localStorage.getItem("sub2-6"); // 백에 보내기
if (sub2_6) {
  subArr[1][5].innerHTML = `<span>${sub2_6}</span>`; // 백에서 받아온걸로 넣기
}

var sub2_7 = window.localStorage.getItem("sub2-7"); // 백에 보내기
if (sub2_7) {
  subArr[1][6].innerHTML = `<span>${sub2_7}</span>`; // 백에서 받아온걸로 넣기
}

var sub2_8 = window.localStorage.getItem("sub2-8"); // 백에 보내기
if (sub2_8) {
  subArr[1][7].innerHTML = `<span>${sub2_8}</span>`; // 백에서 받아온걸로 넣기
}

// 달성 여부
var sub2_1_success = window.localStorage.getItem("sub2-1-success");
if (sub2_1_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[1][0].appendChild(alarmDiv);
}

var sub2_2_success = window.localStorage.getItem("sub2-2-success");
if (sub2_2_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[1][1].appendChild(alarmDiv);
}

var sub2_3_success = window.localStorage.getItem("sub2-3-success");
if (sub2_3_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[1][2].appendChild(alarmDiv);
}

var sub2_4_success = window.localStorage.getItem("sub2-4-success");
if (sub2_4_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[1][3].appendChild(alarmDiv);
}

var sub2_5_success = window.localStorage.getItem("sub2-5-success");
if (sub2_5_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[1][4].appendChild(alarmDiv);
}

var sub2_6_success = window.localStorage.getItem("sub2-6-success");
if (sub2_6_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[1][5].appendChild(alarmDiv);
}

var sub2_7_success = window.localStorage.getItem("sub2-7-success");
if (sub2_7_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[1][6].appendChild(alarmDiv);
}

var sub2_8_success = window.localStorage.getItem("sub2-8-success");
if (sub2_8_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[1][7].appendChild(alarmDiv);
}

// 이미지
var sub2_1_image = window.localStorage.getItem("sub2-1-image");
if (sub2_1_image) {
  subArr[1][0].style.setProperty("--after-bg-image", `url(${sub2_1_image})`);
  subArr[1][0].style.backgroundColor = "transparent";
}

var sub2_2_image = window.localStorage.getItem("sub2-2-image");
if (sub2_2_image) {
  subArr[1][1].style.setProperty("--after-bg-image", `url(${sub2_2_image})`);
  subArr[1][1].style.backgroundColor = "transparent";
}

var sub2_3_image = window.localStorage.getItem("sub2-3-image");
if (sub2_3_image) {
  subArr[1][2].style.setProperty("--after-bg-image", `url(${sub2_3_image})`);
  subArr[1][2].style.backgroundColor = "transparent";
}

var sub2_4_image = window.localStorage.getItem("sub2-4-image");
if (sub2_4_image) {
  subArr[1][3].style.setProperty("--after-bg-image", `url(${sub2_4_image})`);
  subArr[1][3].style.backgroundColor = "transparent";
}

var sub2_5_image = window.localStorage.getItem("sub2-5-image");
if (sub2_5_image) {
  subArr[1][4].style.setProperty("--after-bg-image", `url(${sub2_5_image})`);
  subArr[1][4].style.backgroundColor = "transparent";
}

var sub2_6_image = window.localStorage.getItem("sub2-6-image");
if (sub2_6_image) {
  subArr[1][5].style.setProperty("--after-bg-image", `url(${sub2_6_image})`);
  subArr[1][5].style.backgroundColor = "transparent";
}

var sub2_7_image = window.localStorage.getItem("sub2-7-image");
if (sub2_7_image) {
  subArr[1][6].style.setProperty("--after-bg-image", `url(${sub2_7_image})`);
  subArr[1][6].style.backgroundColor = "transparent";
}

var sub2_8_image = window.localStorage.getItem("sub2-8-image");
if (sub2_8_image) {
  subArr[1][7].style.setProperty("--after-bg-image", `url(${sub2_8_image})`);
  subArr[1][7].style.backgroundColor = "transparent";
}
