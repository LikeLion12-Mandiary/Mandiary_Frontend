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

// 사진 등록
