var API_SERVER_DOMAIN = "http://3.38.46.212";
const accessToken = getCookie("accessToken");

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

document.addEventListener("DOMContentLoaded", function () {
  // accessToken 없으면 login 화면으로
  if (!accessToken) {
    window.location.href = "./login.html";
    return;
  }

  // 다이어리 전체 조회
  fetch(API_SERVER_DOMAIN + "/diarys/users_diarys/", {
    method: "get",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Login failed");
      }
      return response.json();
    })
    .then((data) => {
      // 다이어리 생성
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

document.querySelectorAll(".diary-daily").forEach(function (element) {
  element.addEventListener("click", function () {
    window.location.href = "./diary-detail.html";
  });
});

{
  /* <div class="diary-title">
            <img src="../img/left-btn.png" alt="" />
            <p>2024 다이어리</p>
            <img src="../img/right-btn.png" alt="" />
            </div>
            <p class="diary-count">총 20개의 일기</p> */
}

// if (event.key == "Enter") {
//   var li = document.createElement("li");
//   const list = document.getElementById("list-wrapper");
//   const content = document.getElementById("text").value;

//   if (content == "") {
//     return;
//   }

//   li.innerHTML =
//     `<span><input type="checkbox" class="todo-checkbox" onchange="updateNumber()"/><span class="todo-text">` +
//     content +
//     `</span></span><img src="./trashcan.png" alt="" class="deleteBtn" onclick="remove(event)" />`;

//   list.appendChild(li);
//   updateNumber();
//   document.getElementById("text").value = "";
// }
