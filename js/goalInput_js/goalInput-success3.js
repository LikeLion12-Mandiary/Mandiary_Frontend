// 큰 서브 3
$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 3_1) {
      window.localStorage.setItem("sub3-1-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-1";
      goal1.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 3_1) {
      window.localStorage.setItem("sub3-1-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-1").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 3_1 &&
  window.localStorage.getItem("sub3-1-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 3_2) {
      window.localStorage.setItem("sub3-2-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-2";
      goal2.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 3_2) {
      window.localStorage.setItem("sub3-2-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-2").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 3_2 &&
  window.localStorage.getItem("sub3-2-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 3_3) {
      window.localStorage.setItem("sub3-3-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-3";
      goal3.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 3_3) {
      window.localStorage.setItem("sub3-3-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-3").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 3_3 &&
  window.localStorage.getItem("sub3-3-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 3_4) {
      window.localStorage.setItem("sub3-4-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-4";
      goal4.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 3_4) {
      window.localStorage.setItem("sub3-4-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-4").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 3_4 &&
  window.localStorage.getItem("sub3-4-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 3_5) {
      window.localStorage.setItem("sub3-5-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-5";
      goal5.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 3_5) {
      window.localStorage.setItem("sub3-5-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-5").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 3_5 &&
  window.localStorage.getItem("sub3-5-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 3_6) {
      window.localStorage.setItem("sub3-6-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-6";
      goal6.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 3_6) {
      window.localStorage.setItem("sub3-6-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-6").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 3_6 &&
  window.localStorage.getItem("sub3-6-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 3_7) {
      window.localStorage.setItem("sub3-7-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-7";
      goal7.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 3_7) {
      window.localStorage.setItem("sub3-7-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-7").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 3_7 &&
  window.localStorage.getItem("sub3-7-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}

$("#checkbox-success").change(function () {
  if ($("#checkbox-success").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 3_8) {
      window.localStorage.setItem("sub3-8-success", "on"); // 백에 true 값으로 전달
      const alarmDiv = document.createElement("div");
      alarmDiv.className = "alarm";
      alarmDiv.id = "alarm-8";
      goal8.appendChild(alarmDiv);
    }
  } else {
    if (window.localStorage.getItem("subGoalNum") == 3_8) {
      window.localStorage.setItem("sub3-8-success", "off"); // 백에 false 값으로 전달
      document.getElementById("alarm-8").remove();
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 3_8 &&
  window.localStorage.getItem("sub3-8-success") == "on"
) {
  $("#checkbox-success").prop("checked", true);
}
