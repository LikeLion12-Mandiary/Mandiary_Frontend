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

const successCount = document.querySelector(".success-count");
successCount.innerText = `81 / ${alarmsTotal} 개 성공`; // 백에서 받아온걸로 넣기
