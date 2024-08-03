// 홈화면에서 클릭한 목표 띄우기
var goal1 = document.querySelector(".goal1");
var goal2 = document.querySelector(".goal2");
var goal3 = document.querySelector(".goal3");
var goal4 = document.querySelector(".goal4");
var goalCenter = document.querySelector(".goal-center");
var goal5 = document.querySelector(".goal5");
var goal6 = document.querySelector(".goal6");
var goal7 = document.querySelector(".goal7");
var goal8 = document.querySelector(".goal8");

var goalNum = window.localStorage.getItem("goalNum");

// 중앙 목표
var centerText = window.localStorage.getItem("centerText");
if (centerText !== "null") {
  goalCenter.innerHTML = `<span>${centerText}</span>`;
}

// 서브 목표
var sub1 = window.localStorage.getItem("sub1");
if (sub1) {
  goal1.innerHTML = `<span>${sub1}</span>`;
}

var sub2 = window.localStorage.getItem("sub2");
if (sub2) {
  goal2.innerHTML = `<span>${sub2}</span>`;
}

var sub3 = window.localStorage.getItem("sub3");
if (sub3) {
  goal3.innerHTML = `<span>${sub3}</span>`;
}

var sub4 = window.localStorage.getItem("sub4");
if (sub4) {
  goal4.innerHTML = `<span>${sub4}</span>`;
}

var sub5 = window.localStorage.getItem("sub5");
if (sub5) {
  goal5.innerHTML = `<span>${sub5}</span>`;
}

var sub6 = window.localStorage.getItem("sub6");
if (sub6) {
  goal6.innerHTML = `<span>${sub6}</span>`;
}

var sub7 = window.localStorage.getItem("sub7");
if (sub7) {
  goal7.innerHTML = `<span>${sub7}</span>`;
}

var sub8 = window.localStorage.getItem("sub8");
if (sub8) {
  goal8.innerHTML = `<span>${sub8}</span>`;
}

// 서브 목표 입력 실시간 감지
const goalInput = document.getElementById("goal");

$("#goal").on("propertychange change paste input", function () {
  // 큰 서브 1
  if (window.localStorage.getItem("subGoalNum") == 1_1) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub1-1-success", "off");

    goal1.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub1-1", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 1_2) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub1-2-success", "off");

    goal2.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub1-2", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 1_3) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub1-3-success", "off");

    goal3.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub1-3", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 1_4) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub1-4-success", "off");

    goal4.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub1-4", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 1_5) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub1-5-success", "off");

    goal5.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub1-5", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 1_6) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub1-6-success", "off");

    goal6.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub1-6", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 1_7) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub1-7-success", "off");

    goal7.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub1-7", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 1_8) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub1-8-success", "off");

    goal8.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub1-8", goalInput.value);
  } // 큰 서브 2
  else if (window.localStorage.getItem("subGoalNum") == 2_1) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub2-1-success", "off");

    goal1.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub2-1", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 2_2) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub2-2-success", "off");

    goal2.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub2-2", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 2_3) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub2-3-success", "off");

    goal3.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub2-3", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 2_4) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub2-4-success", "off");

    goal4.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub2-4", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 2_5) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub2-5-success", "off");

    goal5.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub2-5", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 2_6) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub2-6-success", "off");

    goal6.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub2-6", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 2_7) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub2-7-success", "off");

    goal7.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub2-7", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 2_8) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub2-8-success", "off");

    goal8.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub2-8", goalInput.value);
  } // 큰 서브 3
  else if (window.localStorage.getItem("subGoalNum") == 3_1) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub3-1-success", "off");

    goal1.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub3-1", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 3_2) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub3-2-success", "off");

    goal2.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub3-2", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 3_3) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub3-3-success", "off");

    goal3.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub3-3", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 3_4) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub3-4-success", "off");

    goal4.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub3-4", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 3_5) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub3-5-success", "off");

    goal5.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub3-5", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 3_6) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub3-6-success", "off");

    goal6.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub3-6", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 3_7) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub3-7-success", "off");

    goal7.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub3-7", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 3_8) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub3-8-success", "off");

    goal8.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub3-8", goalInput.value);
  } // 큰 서브 4
  else if (window.localStorage.getItem("subGoalNum") == 4_1) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub4-1-success", "off");

    goal1.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub4-1", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 4_2) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub4-2-success", "off");

    goal2.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub4-2", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 4_3) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub4-3-success", "off");

    goal3.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub4-3", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 4_4) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub4-4-success", "off");

    goal4.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub4-4", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 4_5) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub4-5-success", "off");

    goal5.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub4-5", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 4_6) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub4-6-success", "off");

    goal6.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub4-6", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 4_7) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub4-7-success", "off");

    goal7.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub4-7", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 4_8) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub4-8-success", "off");

    goal8.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub4-8", goalInput.value);
  } // 큰 서브 5
  else if (window.localStorage.getItem("subGoalNum") == 5_1) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub5-1-success", "off");

    goal1.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub5-1", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 5_2) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub5-2-success", "off");

    goal2.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub5-2", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 5_3) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub5-3-success", "off");

    goal3.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub5-3", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 5_4) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub5-4-success", "off");

    goal4.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub5-4", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 5_5) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub5-5-success", "off");

    goal5.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub5-5", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 5_6) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub5-6-success", "off");

    goal6.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub5-6", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 5_7) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub5-7-success", "off");

    goal7.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub5-7", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 5_8) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub5-8-success", "off");

    goal8.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub5-8", goalInput.value);
  } // 큰 서브 6
  else if (window.localStorage.getItem("subGoalNum") == 6_1) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub6-1-success", "off");

    goal1.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub6-1", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 6_2) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub6-2-success", "off");

    goal2.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub6-2", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 6_3) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub6-3-success", "off");

    goal3.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub6-3", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 6_4) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub6-4-success", "off");

    goal4.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub6-4", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 6_5) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub6-5-success", "off");

    goal5.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub6-5", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 6_6) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub6-6-success", "off");

    goal6.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub6-6", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 6_7) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub6-7-success", "off");

    goal7.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub6-7", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 6_8) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub6-8-success", "off");

    goal8.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub6-8", goalInput.value);
  } // 큰 서브 7
  else if (window.localStorage.getItem("subGoalNum") == 7_1) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub7-1-success", "off");

    goal1.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub7-1", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 7_2) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub7-2-success", "off");

    goal2.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub7-2", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 7_3) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub7-3-success", "off");

    goal3.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub7-3", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 7_4) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub7-4-success", "off");

    goal4.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub7-4", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 7_5) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub7-5-success", "off");

    goal5.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub7-5", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 7_6) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub7-6-success", "off");

    goal6.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub7-6", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 7_7) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub7-7-success", "off");

    goal7.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub7-7", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 7_8) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub7-8-success", "off");

    goal8.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub7-8", goalInput.value);
  } // 큰 서브 8
  else if (window.localStorage.getItem("subGoalNum") == 8_1) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub8-1-success", "off");

    goal1.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub8-1", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 8_2) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub8-2-success", "off");

    goal2.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub8-2", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 8_3) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub8-3-success", "off");

    goal3.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub8-3", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 8_4) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub8-4-success", "off");

    goal4.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub8-4", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 8_5) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub8-5-success", "off");

    goal5.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub8-5", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 8_6) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub8-6-success", "off");

    goal6.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub8-6", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 8_7) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub8-7-success", "off");

    goal7.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub8-7", goalInput.value);
  } else if (window.localStorage.getItem("subGoalNum") == 8_8) {
    $("#checkbox-success").prop("checked", false);
    window.localStorage.setItem("sub8-8-success", "off");

    goal8.innerHTML = `<span>${$("#goal").val()}</span>`;
    window.localStorage.setItem("sub8-8", goalInput.value);
  }
});
