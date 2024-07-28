//나의 만다라트

// 체크버튼 - 달성 완료한 만다라트
document.addEventListener("DOMContentLoaded", function () {
  const checkIcon = document.querySelector(".finish-mdat");

  checkIcon.addEventListener("click", function () {
    if ((checkIcon.src = "/img/check-btn.png")) {
      checkIcon.src = "/img/full-check-btn.png";
    } else {
    }
  });
});

// 플러스버튼 - 새 만다라트 추가
document.addEventListener("DOMContentLoaded", function () {
  const plusIcon = document.querySelector(".add-mdat");

  plusIcon.addEventListener("click", function () {
    plusIcon.src = "/img/full-plus-btn.png";
  });
});
