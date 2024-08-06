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

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

document.addEventListener("DOMContentLoaded", function() {
    if (accessToken) {
        window.location.href = "./home.html";
    }
});

document.getElementById("login-btn").addEventListener("click", function() {
    // 사용자가 입력한 이메일과 비밀번호를 가져옵니다.
    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value;

    fetch(API_SERVER_DOMAIN + "/users/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
                password: password,
            }),
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error("Login failed");
            }
            return response.json();
        })
        .then((data) => {
            var accessToken = data.token;
            setCookie("accessToken", accessToken, 1);

            window.location.replace("/html/home.html");
        })
        .catch(() => {
            console.error("Detailed Error:", error.message);

            var error = document.getElementById("login-error");
            var emailError = document.getElementById("input-email");
            var passwordError = document.getElementById("input-password");

            error.style.display = "block";
            emailError.style.border = "1px solid #fc522f";
            passwordError.style.border = "1px solid #fc522f";
        });
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // 기본 동작 방지 (선택 사항)
        document.getElementById("login-btn").click(); // 버튼 클릭 이벤트 트리거
    }
});