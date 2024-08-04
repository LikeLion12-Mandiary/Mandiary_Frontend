// 큰 서브 6
upload.addEventListener("change", () => {
  var file = upload.files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
      var base64String = event.target.result;

      if (window.localStorage.getItem("subGoalNum") == 6_1) {
        window.localStorage.setItem("sub6-1-image", base64String);

        goal1.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal1.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 6_2) {
        window.localStorage.setItem("sub6-2-image", base64String);

        goal2.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal2.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 6_3) {
        window.localStorage.setItem("sub6-3-image", base64String);

        goal3.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal3.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 6_4) {
        window.localStorage.setItem("sub6-4-image", base64String);

        goal4.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal4.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 6_5) {
        window.localStorage.setItem("sub6-5-image", base64String);

        goal5.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal5.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 6_6) {
        window.localStorage.setItem("sub6-6-image", base64String);

        goal6.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal6.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 6_7) {
        window.localStorage.setItem("sub6-7-image", base64String);

        goal7.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal7.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 6_8) {
        window.localStorage.setItem("sub6-8-image", base64String);

        goal8.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal8.style.backgroundColor = "transparent";
      }
    };
  }
});

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 6_1) {
      window.localStorage.setItem("sub6-1-image", "");
      goal1.style.setProperty("--after-bg-image", "");
      goal1.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 6_1 &&
  window.localStorage.getItem("sub6-1-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 6_2) {
      window.localStorage.setItem("sub6-2-image", "");
      goal2.style.setProperty("--after-bg-image", "");
      goal2.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 6_2 &&
  window.localStorage.getItem("sub6-2-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 6_3) {
      window.localStorage.setItem("sub6-3-image", "");
      goal3.style.setProperty("--after-bg-image", "");
      goal3.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 6_3 &&
  window.localStorage.getItem("sub6-3-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 6_4) {
      window.localStorage.setItem("sub6-4-image", "");
      goal4.style.setProperty("--after-bg-image", "");
      goal4.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 6_4 &&
  window.localStorage.getItem("sub6-4-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 6_5) {
      window.localStorage.setItem("sub6-5-image", "");
      goal5.style.setProperty("--after-bg-image", "");
      goal5.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 6_5 &&
  window.localStorage.getItem("sub6-5-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 6_6) {
      window.localStorage.setItem("sub6-6-image", "");
      goal6.style.setProperty("--after-bg-image", "");
      goal6.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 6_6 &&
  window.localStorage.getItem("sub6-6-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 6_7) {
      window.localStorage.setItem("sub6-7-image", "");
      goal7.style.setProperty("--after-bg-image", "");
      goal7.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 6_7 &&
  window.localStorage.getItem("sub6-7-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 6_8) {
      window.localStorage.setItem("sub6-8-image", "");
      goal8.style.setProperty("--after-bg-image", "");
      goal8.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 6_8 &&
  window.localStorage.getItem("sub6-8-image")
) {
  $("#checkbox-image").prop("checked", true);
}
