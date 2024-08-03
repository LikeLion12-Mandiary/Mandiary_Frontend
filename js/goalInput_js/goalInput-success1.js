// 달성 여부 띄우기
var sub1success = window.localStorage.getItem("sub1success");
if (sub1success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  alarmDiv.id = "alarm-1";
  goal1.appendChild(alarmDiv);
}

var sub2success = window.localStorage.getItem("sub2success");
if (sub2success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  alarmDiv.id = "alarm-2";
  goal2.appendChild(alarmDiv);
}

var sub3success = window.localStorage.getItem("sub3success");
if (sub3success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  alarmDiv.id = "alarm-3";
  goal3.appendChild(alarmDiv);
}

var sub4success = window.localStorage.getItem("sub4success");
if (sub4success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  alarmDiv.id = "alarm-4";
  goal4.appendChild(alarmDiv);
}

var sub5success = window.localStorage.getItem("sub5success");
if (sub5success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  alarmDiv.id = "alarm-5";
  goal5.appendChild(alarmDiv);
}

var sub6success = window.localStorage.getItem("sub6success");
if (sub6success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  alarmDiv.id = "alarm-6";
  goal6.appendChild(alarmDiv);
}

var sub7success = window.localStorage.getItem("sub7success");
if (sub7success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  alarmDiv.id = "alarm-7";
  goal7.appendChild(alarmDiv);
}

var sub8success = window.localStorage.getItem("sub8success");
if (sub8success == "on") {
  const alarmDiv = document.createElement("div");
  alarmDiv.className = "alarm";
  alarmDiv.id = "alarm-8";
  goal8.appendChild(alarmDiv);
}

// 토글 on 하면 <div class="alarm"></div> 추가
// 큰 서브 1
$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_1) {
      window.localStorage.setItem("sub1-1-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-1";
      goal1.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 1_1) {
      window.localStorage.setItem("sub1-1-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-1").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_1 &&
  window.localStorage.getItem("sub1-1-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_2) {
      window.localStorage.setItem("sub1-2-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-2";
      goal2.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 1_2) {
      window.localStorage.setItem("sub1-2-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-2").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_2 &&
  window.localStorage.getItem("sub1-2-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_3) {
      window.localStorage.setItem("sub1-3-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-3";
      goal3.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 1_3) {
      window.localStorage.setItem("sub1-3-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-3").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_3 &&
  window.localStorage.getItem("sub1-3-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_4) {
      window.localStorage.setItem("sub1-4-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-4";
      goal4.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 1_4) {
      window.localStorage.setItem("sub1-4-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-4").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_4 &&
  window.localStorage.getItem("sub1-4-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_5) {
      window.localStorage.setItem("sub1-5-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-5";
      goal5.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 1_5) {
      window.localStorage.setItem("sub1-5-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-5").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_5 &&
  window.localStorage.getItem("sub1-5-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_6) {
      window.localStorage.setItem("sub1-6-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-6";
      goal6.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 1_6) {
      window.localStorage.setItem("sub1-6-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-6").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_6 &&
  window.localStorage.getItem("sub1-6-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_7) {
      window.localStorage.setItem("sub1-7-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-7";
      goal7.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 1_7) {
      window.localStorage.setItem("sub1-7-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-7").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_7 &&
  window.localStorage.getItem("sub1-7-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_8) {
      window.localStorage.setItem("sub1-8-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-8";
      goal8.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 1_8) {
      window.localStorage.setItem("sub1-8-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-8").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_8 &&
  window.localStorage.getItem("sub1-8-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}
