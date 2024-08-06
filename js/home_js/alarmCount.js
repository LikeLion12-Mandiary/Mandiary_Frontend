// 홈화면에 존재하는 alarm 태그 개수로 달성 개수 저장
// 큰 서브 별로 개수 저장
var alarms1 = subGoals[0].querySelectorAll(".alarm").length; // 큰 서브 1
var alarms2 = subGoals[1].querySelectorAll(".alarm").length;
var alarms3 = subGoals[2].querySelectorAll(".alarm").length;
var alarms4 = subGoals[3].querySelectorAll(".alarm").length;
var alarms5 = subGoals[4].querySelectorAll(".alarm").length;
var alarms6 = subGoals[5].querySelectorAll(".alarm").length;
var alarms7 = subGoals[6].querySelectorAll(".alarm").length;
var alarms8 = subGoals[7].querySelectorAll(".alarm").length;

if (alarms1 == 8) {
  alarms1 += 1;
}

if (alarms2 == 8) {
  alarms2 += 1;
}

if (alarms3 == 8) {
  alarms3 += 1;
}

if (alarms4 == 8) {
  alarms4 += 1;
}

if (alarms5 == 8) {
  alarms5 += 1;
}

if (alarms6 == 8) {
  alarms6 += 1;
}

if (alarms7 == 8) {
  alarms7 += 1;
}

if (alarms8 == 8) {
  alarms8 += 1;
}

const alarmsArr = [
  alarms1,
  alarms2,
  alarms3,
  alarms4,
  alarms5,
  alarms6,
  alarms7,
  alarms8,
];

var alarmsTotal = 0; // 총 개수 백에 보내기
for (var i = 0; i < 8; i++) {
  alarmsTotal += alarmsArr[i];
}

var badge1 = window.localStorage.getItem("badge1");
if (badge1) {
  alarmsTotal += 1;
}

var badge2 = window.localStorage.getItem("badge2");
if (badge2) {
  alarmsTotal += 1;
}

var badge3 = window.localStorage.getItem("badge3");
if (badge3) {
  alarmsTotal += 1;
}

var badge4 = window.localStorage.getItem("badge4");
if (badge4) {
  alarmsTotal += 1;
}

var badge5 = window.localStorage.getItem("badge5");
if (badge5) {
  alarmsTotal += 1;
}

var badge6 = window.localStorage.getItem("badge6");
if (badge6) {
  alarmsTotal += 1;
}

var badge7 = window.localStorage.getItem("badge7");
if (badge7) {
  alarmsTotal += 1;
}

var badge8 = window.localStorage.getItem("badge8");
if (badge8) {
  alarmsTotal += 1;
}

// 성공 개수 80 시 1 증가 (81되게)
// 정중앙 목표 다홍색, 정중앙 목표 입력 막기
const centerGoalDiv = document.querySelector(".centerGoalDiv");
if (alarmsTotal == 80) {
  alarmsTotal += 1;
  centerGoalDiv.style.backgroundColor = "#FF452B";
  centerGoal.readOnly = "true";
}

const successCount = document.querySelector(".success-count");
successCount.innerText = `81 / ${alarmsTotal} 개 성공`; // 백에서 받아온걸로 넣기
