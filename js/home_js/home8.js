// 큰 서브 8
subArr[7][0].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 8_1);
});

subArr[7][1].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 8_2);
});

subArr[7][2].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 8_3);
});

subArr[7][3].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 8_4);
});

subArr[7][4].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 8_5);
});

subArr[7][5].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 8_6);
});

subArr[7][6].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 8_7);
});

subArr[7][7].addEventListener("click", () => {
  window.localStorage.setItem("subGoalNum", 8_8);
});

var sub8_1 = window.localStorage.getItem("sub8-1"); // 백에 보내기
if (sub8_1) {
  subArr[7][0].innerHTML = `<span>${sub8_1}</span>`; // 백에서 받아온걸로 넣기
}

var sub8_2 = window.localStorage.getItem("sub8-2"); // 백에 보내기
if (sub8_2) {
  subArr[7][1].innerHTML = `<span>${sub8_2}</span>`; // 백에서 받아온걸로 넣기
}

var sub8_3 = window.localStorage.getItem("sub8-3"); // 백에 보내기
if (sub8_3) {
  subArr[7][2].innerHTML = `<span>${sub8_3}</span>`; // 백에서 받아온걸로 넣기
}

var sub8_4 = window.localStorage.getItem("sub8-4"); // 백에 보내기
if (sub8_4) {
  subArr[7][3].innerHTML = `<span>${sub8_4}</span>`; // 백에서 받아온걸로 넣기
}

var sub8_5 = window.localStorage.getItem("sub8-5"); // 백에 보내기
if (sub8_5) {
  subArr[7][4].innerHTML = `<span>${sub8_5}</span>`; // 백에서 받아온걸로 넣기
}

var sub8_6 = window.localStorage.getItem("sub8-6"); // 백에 보내기
if (sub8_6) {
  subArr[7][5].innerHTML = `<span>${sub8_6}</span>`; // 백에서 받아온걸로 넣기
}

var sub8_7 = window.localStorage.getItem("sub8-7"); // 백에 보내기
if (sub8_7) {
  subArr[7][6].innerHTML = `<span>${sub8_7}</span>`; // 백에서 받아온걸로 넣기
}

var sub8_8 = window.localStorage.getItem("sub8-8"); // 백에 보내기
if (sub8_8) {
  subArr[7][7].innerHTML = `<span>${sub8_8}</span>`; // 백에서 받아온걸로 넣기
}

// 달성 여부
var sub8_1_success = window.localStorage.getItem("sub8-1-success");
if (sub8_1_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[7][0].appendChild(alarmDiv);
}

var sub8_2_success = window.localStorage.getItem("sub8-2-success");
if (sub8_2_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[7][1].appendChild(alarmDiv);
}

var sub8_3_success = window.localStorage.getItem("sub8-3-success");
if (sub8_3_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[7][2].appendChild(alarmDiv);
}

var sub8_4_success = window.localStorage.getItem("sub8-4-success");
if (sub8_4_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[7][3].appendChild(alarmDiv);
}

var sub8_5_success = window.localStorage.getItem("sub8-5-success");
if (sub8_5_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[7][4].appendChild(alarmDiv);
}

var sub8_6_success = window.localStorage.getItem("sub8-6-success");
if (sub8_6_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[7][5].appendChild(alarmDiv);
}

var sub8_7_success = window.localStorage.getItem("sub8-7-success");
if (sub8_7_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[7][6].appendChild(alarmDiv);
}

var sub8_8_success = window.localStorage.getItem("sub8-8-success");
if (sub8_8_success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  subArr[7][7].appendChild(alarmDiv);
}
