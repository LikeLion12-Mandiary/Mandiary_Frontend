// 큰 서브 7
upload.addEventListener("change", () => {
  var file = upload.files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
      var base64String = event.target.result;

      if (window.localStorage.getItem("subGoalNum") == 7_1) {
        window.localStorage.setItem("sub7-1-image", base64String);

        goal1.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal1.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 7_2) {
        window.localStorage.setItem("sub7-2-image", base64String);

        goal2.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal2.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 7_3) {
        window.localStorage.setItem("sub7-3-image", base64String);

        goal3.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal3.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 7_4) {
        window.localStorage.setItem("sub7-4-image", base64String);

        goal4.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal4.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 7_5) {
        window.localStorage.setItem("sub7-5-image", base64String);

        goal5.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal5.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 7_6) {
        window.localStorage.setItem("sub7-6-image", base64String);

        goal6.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal6.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 7_7) {
        window.localStorage.setItem("sub7-7-image", base64String);

        goal7.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal7.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 7_8) {
        window.localStorage.setItem("sub7-8-image", base64String);

        goal8.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal8.style.backgroundColor = "transparent";
      }
    };
  }
});

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 7_1) {
      window.localStorage.setItem("sub7-1-image", "");
      goal1.style.setProperty("--after-bg-image", "");
      goal1.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 7_1 &&
  window.localStorage.getItem("sub7-1-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 7_2) {
      window.localStorage.setItem("sub7-2-image", "");
      goal2.style.setProperty("--after-bg-image", "");
      goal2.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 7_2 &&
  window.localStorage.getItem("sub7-2-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 7_3) {
      window.localStorage.setItem("sub7-3-image", "");
      goal3.style.setProperty("--after-bg-image", "");
      goal3.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 7_3 &&
  window.localStorage.getItem("sub7-3-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 7_4) {
      window.localStorage.setItem("sub7-4-image", "");
      goal4.style.setProperty("--after-bg-image", "");
      goal4.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 7_4 &&
  window.localStorage.getItem("sub7-4-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 7_5) {
      window.localStorage.setItem("sub7-5-image", "");
      goal5.style.setProperty("--after-bg-image", "");
      goal5.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 7_5 &&
  window.localStorage.getItem("sub7-5-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 7_6) {
      window.localStorage.setItem("sub7-6-image", "");
      goal6.style.setProperty("--after-bg-image", "");
      goal6.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 7_6 &&
  window.localStorage.getItem("sub7-6-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 7_7) {
      window.localStorage.setItem("sub7-7-image", "");
      goal7.style.setProperty("--after-bg-image", "");
      goal7.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 7_7 &&
  window.localStorage.getItem("sub7-7-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 7_8) {
      window.localStorage.setItem("sub7-8-image", "");
      goal8.style.setProperty("--after-bg-image", "");
      goal8.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 7_8 &&
  window.localStorage.getItem("sub7-8-image")
) {
  $("#checkbox-image").prop("checked", true);
}