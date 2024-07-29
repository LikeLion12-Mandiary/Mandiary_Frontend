document.querySelectorAll(".diary-daily").forEach(function (element) {
  element.addEventListener("click", function () {
    window.location.href = "./diary-detail.html";
  });
});
