// 큰 서브 6
subArr[5][0].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 6_1);
});

subArr[5][1].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 6_2);
});

subArr[5][2].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 6_3);
});

subArr[5][3].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 6_4);
});

subArr[5][4].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 6_5);
});

subArr[5][5].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 6_6);
});

subArr[5][6].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 6_7);
});

subArr[5][7].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 6_8);
});

var sub6_1 = window.localStorage.getItem("sub6-1"); // 백에 보내기
if (sub6_1) {
  subArr[5][0].innerHTML = `<span>${sub6_1}</span>`; // 백에서 받아온걸로 넣기
}

var sub6_2 = window.localStorage.getItem("sub6-2"); // 백에 보내기
if (sub6_2) {
  subArr[5][1].innerHTML = `<span>${sub6_2}</span>`; // 백에서 받아온걸로 넣기
}

var sub6_3 = window.localStorage.getItem("sub6-3"); // 백에 보내기
if (sub6_3) {
  subArr[5][2].innerHTML = `<span>${sub6_3}</span>`; // 백에서 받아온걸로 넣기
}

var sub6_4 = window.localStorage.getItem("sub6-4"); // 백에 보내기
if (sub6_4) {
  subArr[5][3].innerHTML = `<span>${sub6_4}</span>`; // 백에서 받아온걸로 넣기
}

var sub6_5 = window.localStorage.getItem("sub6-5"); // 백에 보내기
if (sub6_5) {
  subArr[5][4].innerHTML = `<span>${sub6_5}</span>`; // 백에서 받아온걸로 넣기
}

var sub6_6 = window.localStorage.getItem("sub6-6"); // 백에 보내기
if (sub6_6) {
  subArr[5][5].innerHTML = `<span>${sub6_6}</span>`; // 백에서 받아온걸로 넣기
}

var sub6_7 = window.localStorage.getItem("sub6-7"); // 백에 보내기
if (sub6_7) {
  subArr[5][6].innerHTML = `<span>${sub6_7}</span>`; // 백에서 받아온걸로 넣기
}

var sub6_8 = window.localStorage.getItem("sub6-8"); // 백에 보내기
if (sub6_8) {
  subArr[5][7].innerHTML = `<span>${sub6_8}</span>`; // 백에서 받아온걸로 넣기
}

// 달성 여부
var sub6_1_success = window.localStorage.getItem("sub6-1-success");
if (sub6_1_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[5][0].appendChild(alarmDiv);
}

var sub6_2_success = window.localStorage.getItem("sub6-2-success");
if (sub6_2_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[5][1].appendChild(alarmDiv);
}

var sub6_3_success = window.localStorage.getItem("sub6-3-success");
if (sub6_3_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[5][2].appendChild(alarmDiv);
}

var sub6_4_success = window.localStorage.getItem("sub6-4-success");
if (sub6_4_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[5][3].appendChild(alarmDiv);
}

var sub6_5_success = window.localStorage.getItem("sub6-5-success");
if (sub6_5_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[5][4].appendChild(alarmDiv);
}

var sub6_6_success = window.localStorage.getItem("sub6-6-success");
if (sub6_6_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[5][5].appendChild(alarmDiv);
}

var sub6_7_success = window.localStorage.getItem("sub6-7-success");
if (sub6_7_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[5][6].appendChild(alarmDiv);
}

var sub6_8_success = window.localStorage.getItem("sub6-8-success");
if (sub6_8_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[5][7].appendChild(alarmDiv);
}
