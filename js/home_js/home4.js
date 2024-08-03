// 큰 서브 4
subArr[3][0].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 4_1);
});

subArr[3][1].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 4_2);
});

subArr[3][2].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 4_3);
});

subArr[3][3].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 4_4);
});

subArr[3][4].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 4_5);
});

subArr[3][5].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 4_6);
});

subArr[3][6].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 4_7);
});

subArr[3][7].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 4_8);
});

var sub4_1 = window.localStorage.getItem("sub4-1"); // 백에 보내기
if (sub4_1) {
  subArr[3][0].innerHTML = `<span>${sub4_1}</span>`; // 백에서 받아온걸로 넣기
}

var sub4_2 = window.localStorage.getItem("sub4-2"); // 백에 보내기
if (sub4_2) {
  subArr[3][1].innerHTML = `<span>${sub4_2}</span>`; // 백에서 받아온걸로 넣기
}

var sub4_3 = window.localStorage.getItem("sub4-3"); // 백에 보내기
if (sub4_3) {
  subArr[3][2].innerHTML = `<span>${sub4_3}</span>`; // 백에서 받아온걸로 넣기
}

var sub4_4 = window.localStorage.getItem("sub4-4"); // 백에 보내기
if (sub4_4) {
  subArr[3][3].innerHTML = `<span>${sub4_4}</span>`; // 백에서 받아온걸로 넣기
}

var sub4_5 = window.localStorage.getItem("sub4-5"); // 백에 보내기
if (sub4_5) {
  subArr[3][4].innerHTML = `<span>${sub4_5}</span>`; // 백에서 받아온걸로 넣기
}

var sub4_6 = window.localStorage.getItem("sub4-6"); // 백에 보내기
if (sub4_6) {
  subArr[3][5].innerHTML = `<span>${sub4_6}</span>`; // 백에서 받아온걸로 넣기
}

var sub4_7 = window.localStorage.getItem("sub4-7"); // 백에 보내기
if (sub4_7) {
  subArr[3][6].innerHTML = `<span>${sub4_7}</span>`; // 백에서 받아온걸로 넣기
}

var sub4_8 = window.localStorage.getItem("sub4-8"); // 백에 보내기
if (sub4_8) {
  subArr[3][7].innerHTML = `<span>${sub4_8}</span>`; // 백에서 받아온걸로 넣기
}

// 달성 여부
var sub4_1_success = window.localStorage.getItem("sub4-1-success");
if (sub4_1_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[3][0].appendChild(alarmDiv);
}

var sub4_2_success = window.localStorage.getItem("sub4-2-success");
if (sub4_2_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[3][1].appendChild(alarmDiv);
}

var sub4_3_success = window.localStorage.getItem("sub4-3-success");
if (sub4_3_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[3][2].appendChild(alarmDiv);
}

var sub4_4_success = window.localStorage.getItem("sub4-4-success");
if (sub4_4_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[3][3].appendChild(alarmDiv);
}

var sub4_5_success = window.localStorage.getItem("sub4-5-success");
if (sub4_5_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[3][4].appendChild(alarmDiv);
}

var sub4_6_success = window.localStorage.getItem("sub4-6-success");
if (sub4_6_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[3][5].appendChild(alarmDiv);
}

var sub4_7_success = window.localStorage.getItem("sub4-7-success");
if (sub4_7_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[3][6].appendChild(alarmDiv);
}

var sub4_8_success = window.localStorage.getItem("sub4-8-success");
if (sub4_8_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[3][7].appendChild(alarmDiv);
}
