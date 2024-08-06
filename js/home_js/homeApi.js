var API_SERVER_DOMAIN = "https://mandiary.duckdns.org";
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

function deleteCookie(name) {
  document.cookie = name + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
}

document.addEventListener("DOMContentLoaded", function () {
  // accessToken 없으면 login 화면으로
  if (!accessToken) {
    window.location.href = "./login.html";
    return;
  }

  // 유저 정보 가져오기
  fetch(API_SERVER_DOMAIN + "/users/profile/", {
    method: "GET",
    headers: {
      Authorization: "Bearer " + accessToken,
    },
  })
    .then((response) => {
      // 401 Unauthorized 에러가 발생한 경우
      if (response.status === 401) {
        const cookieName = "accessToken";
        deleteCookie(cookieName);
        window.location.href = "./login.html";
        return;
      }
      if (!response.ok) {
        throw new Error("Failed to fetch");
      }
      return response.json();
    })
    .then((data) => {
      var userName = data.username;
      console.log(userName);

      const userNameClass = document.querySelector(".user-name");
      userNameClass.innerText = `${userName}님!`;
    })
    .catch((error) => {
      console.error("Error fetching user name", error);
    });
});

// 칭호 랜덤 띄우기
const allTitles = [
  "알잘딱깔센",
  "거친 세상에 뛰어든",
  "오히려 좋은",
  "럭키비키",
  "일취월장",
  "중꺾마",
  "갓생러",
  "성공시대 시작된",
  "가보자고",
];

const randomIndex = Math.floor(Math.random() * allTitles.length);
console.log(allTitles[randomIndex]);

const userTitle = document.querySelector(".user-title");
userTitle.innerText = allTitles[randomIndex];
