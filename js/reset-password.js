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
  if (accessToken) {
    window.location.href = "./home.html";
  }
});

// 이메일 가입 확인
document
  .getElementById("email-double-check")
  .addEventListener("click", function () {
    const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    var email = document.getElementById("input-email").value;

    document.getElementById("email-invalid").style.display = "none";
    document.getElementById("email-being").style.display = "none";

    if (!strictEmailRegex.test(email)) {
      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("input-email").style.border = "1px solid #fc522f";
      return;
    }

    fetch(API_SERVER_DOMAIN + "/password_reset_confirm", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    })
      .then((response) => {
        console.log(response);

        if (!response.ok) {
          throw new Error("Login failed");
        }

        document.getElementById("input-email").style.border =
          "1px solid #AEAEAE";
        document.getElementById("email-double-check").disabled = true;

        return response.json();
      })
      .catch((error) => {
        document.getElementById("email-being").style.display = "block";
        document.getElementById("input-email").style.border =
          "1px solid #fc522f";
      });
  });

document
  .getElementById("reset-password-btn")
  .addEventListener("click", function () {
    var passwordFlag = 0;
    var passwordCheckFlag = 0;

    // 사용자가 입력한 이메일과 비밀번호를 가져옵니다.
    var email = document.getElementById("input-email").value;
    var code = document.getElementById("input-code").value;
    var password = document.getElementById("input-password").value;
    var passwordCheck = document.getElementById("input-password-check").value;

    // 이메일 중복 확인 여부
    if (!document.getElementById("email-double-check").disabled) {
      document.getElementById("being").style.display = "none";

      document.getElementById("email-invalid").style.display = "block";
      document.getElementById("input-email").style.border = "1px solid #fc522f";
    }

    fetch(API_SERVER_DOMAIN + "/password_reset", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        email: email,
        password: password,
      }),
    })
      .then((response) => {
        console.log(response);
        window.location.href = "./login.html";
        if (!response.ok) {
          throw new Error("Login failed");
        }
        return response.json();
      })
      .catch((error) => {
        alert("아이디나 비밀번호를 다시 확인해주세요", error);
      });
  });
