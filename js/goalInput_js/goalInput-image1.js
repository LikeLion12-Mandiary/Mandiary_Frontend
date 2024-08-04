// 사진 등록 토글 off 시 카메라 아이콘 안보이게
let cameraImage = document.getElementById("camera");

$(document).ready(function () {
  if (!$("#checkbox-image").is(":checked")) {
    cameraImage.style.visibility = "hidden";
  }
  $("#checkbox-image").change(function () {
    if ($("#checkbox-image").is(":checked")) {
      cameraImage.style.visibility = "visible";
    } else {
      cameraImage.style.visibility = "hidden";
    }
  });
});

// 홈화면 이미지 가져오기
var sub1image = window.localStorage.getItem("sub1image");
if (sub1image !== "null") {
  goal1.style.setProperty("--after-bg-image", `url(${sub1image})`);
  goal1.style.backgroundColor = "transparent";
  if (sub1image == "") {
    goal1.style.backgroundColor = "#dcdcdc";
  }
}

var sub2image = window.localStorage.getItem("sub2image");
if (sub2image !== "null") {
  goal2.style.setProperty("--after-bg-image", `url(${sub2image})`);
  goal2.style.backgroundColor = "transparent";
  if (sub2image == "") {
    goal2.style.backgroundColor = "#dcdcdc";
  }
}

var sub3image = window.localStorage.getItem("sub3image");
if (sub3image !== "null") {
  goal3.style.setProperty("--after-bg-image", `url(${sub3image})`);
  goal3.style.backgroundColor = "transparent";
  if (sub3image == "") {
    goal3.style.backgroundColor = "#dcdcdc";
  }
}

var sub4image = window.localStorage.getItem("sub4image");
if (sub4image !== "null") {
  goal4.style.setProperty("--after-bg-image", `url(${sub4image})`);
  goal4.style.backgroundColor = "transparent";
  if (sub4image == "") {
    goal4.style.backgroundColor = "#dcdcdc";
  }
}

var sub5image = window.localStorage.getItem("sub5image");
if (sub5image !== "null") {
  goal5.style.setProperty("--after-bg-image", `url(${sub5image})`);
  goal5.style.backgroundColor = "transparent";
  if (sub5image == "") {
    goal5.style.backgroundColor = "#dcdcdc";
  }
}

var sub6image = window.localStorage.getItem("sub6image");
if (sub6image !== "null") {
  goal6.style.setProperty("--after-bg-image", `url(${sub6image})`);
  goal6.style.backgroundColor = "transparent";
  if (sub6image == "") {
    goal6.style.backgroundColor = "#dcdcdc";
  }
}

var sub7image = window.localStorage.getItem("sub7image");
if (sub7image !== "null") {
  goal7.style.setProperty("--after-bg-image", `url(${sub7image})`);
  goal7.style.backgroundColor = "transparent";
  if (sub7image == "") {
    goal7.style.backgroundColor = "#dcdcdc";
  }
}

var sub8image = window.localStorage.getItem("sub8image");
if (sub8image !== "null") {
  goal8.style.setProperty("--after-bg-image", `url(${sub8image})`);
  goal8.style.backgroundColor = "transparent";
  if (sub8image == "") {
    goal8.style.backgroundColor = "#dcdcdc";
  }
}

// 사진 등록
var upload = document.getElementById("upload");

// 큰 서브 1
upload.addEventListener("change", () => {
  var file = upload.files[0];
  if (file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (event) {
      var base64String = event.target.result;

      if (window.localStorage.getItem("subGoalNum") == 1_1) {
        window.localStorage.setItem("sub1-1-image", base64String);

        goal1.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal1.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 1_2) {
        window.localStorage.setItem("sub1-2-image", base64String);

        goal2.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal2.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 1_3) {
        window.localStorage.setItem("sub1-3-image", base64String);

        goal3.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal3.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 1_4) {
        window.localStorage.setItem("sub1-4-image", base64String);

        goal4.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal4.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 1_5) {
        window.localStorage.setItem("sub1-5-image", base64String);

        goal5.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal5.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 1_6) {
        window.localStorage.setItem("sub1-6-image", base64String);

        goal6.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal6.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 1_7) {
        window.localStorage.setItem("sub1-7-image", base64String);

        goal7.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal7.style.backgroundColor = "transparent";
      }

      if (window.localStorage.getItem("subGoalNum") == 1_8) {
        window.localStorage.setItem("sub1-8-image", base64String);

        goal8.style.setProperty("--after-bg-image", `url(${base64String})`);
        goal8.style.backgroundColor = "transparent";
      }
    };
  }
});

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_1) {
      window.localStorage.setItem("sub1-1-image", "");
      goal1.style.setProperty("--after-bg-image", "");
      goal1.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_1 &&
  window.localStorage.getItem("sub1-1-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_2) {
      window.localStorage.setItem("sub1-2-image", "");
      goal2.style.setProperty("--after-bg-image", "");
      goal2.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_2 &&
  window.localStorage.getItem("sub1-2-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_3) {
      window.localStorage.setItem("sub1-3-image", "");
      goal3.style.setProperty("--after-bg-image", "");
      goal3.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_3 &&
  window.localStorage.getItem("sub1-3-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_4) {
      window.localStorage.setItem("sub1-4-image", "");
      goal4.style.setProperty("--after-bg-image", "");
      goal4.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_4 &&
  window.localStorage.getItem("sub1-4-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_5) {
      window.localStorage.setItem("sub1-5-image", "");
      goal5.style.setProperty("--after-bg-image", "");
      goal5.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_5 &&
  window.localStorage.getItem("sub1-5-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_6) {
      window.localStorage.setItem("sub1-6-image", "");
      goal6.style.setProperty("--after-bg-image", "");
      goal6.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_6 &&
  window.localStorage.getItem("sub1-6-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_7) {
      window.localStorage.setItem("sub1-7-image", "");
      goal7.style.setProperty("--after-bg-image", "");
      goal7.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_7 &&
  window.localStorage.getItem("sub1-7-image")
) {
  $("#checkbox-image").prop("checked", true);
}

$("#checkbox-image").change(function () {
  if (!$("#checkbox-image").is(":checked")) {
    if (window.localStorage.getItem("subGoalNum") == 1_8) {
      window.localStorage.setItem("sub1-8-image", "");
      goal8.style.setProperty("--after-bg-image", "");
      goal8.style.backgroundColor = "#dcdcdc";
    }
  }
});
if (
  window.localStorage.getItem("subGoalNum") == 1_8 &&
  window.localStorage.getItem("sub1-8-image")
) {
  $("#checkbox-image").prop("checked", true);
}
