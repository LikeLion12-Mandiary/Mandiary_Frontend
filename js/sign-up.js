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

document.addEventListener("DOMContentLoaded", function() {
    if (accessToken) {
        window.location.href = "./home.html";
    }
});

// 이메일 중복확인
document
    .getElementById("email-double-check")
    .addEventListener("click", function() {
        const strictEmailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        var email = document.getElementById("input-email").value;

        document.getElementById("email-invalid").style.display = "none";
        document.getElementById("email-duplication").style.display = "none";

        if (!strictEmailRegex.test(email)) {
            document.getElementById("email-invalid").style.display = "block";
            document.getElementById("input-email").style.border = "1px solid #fc522f";
            return;
        }

        const formData = new FormData();
        formData.append("email", email);

        fetch(API_SERVER_DOMAIN + "/users/email/", {
                method: "POST",
                body: formData,
            })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Login failed");
                }

                document.getElementById("email-confirm").style.display = "block";
                document.getElementById("input-email").style.border =
                    "1px solid #AEAEAE";
                document.getElementById("email-double-check").disabled = true;
            })
            .catch(() => {
                document.getElementById("email-duplication").style.display = "block";
                document.getElementById("input-email").style.border =
                    "1px solid #fc522f";
            });
    });

// 이메일 변경 감지
document.getElementById("input-email").addEventListener("input", function() {
    if (document.getElementById("email-double-check").disabled) {
        document.getElementById("email-double-check").disabled = false;
        document.getElementById("email-confirm").style.display = "none";
    }
});

// 회원가입
document.getElementById("sign-up-btn").addEventListener("click", function() {
    var nameFlag = 0;
    var passwordFlag = 0;
    var passwordCheckFlag = 0;

    // 사용자가 입력한 이메일과 비밀번호를 가져옵니다.
    var name = document.getElementById("input-name").value;
    var email = document.getElementById("input-email").value;
    var password = document.getElementById("input-password").value;
    var passwordCheck = document.getElementById("input-password-check").value;

    // 이름 입력
    if (name) {
        document.getElementById("name-error").style.display = "none";
        document.getElementById("input-name").style.border = "1px solid #AEAEAE";
        nameFlag = 1;
    } else {
        document.getElementById("name-error").style.display = "block";
        document.getElementById("input-name").style.border = "1px solid #fc522f";
        nameFlag = 0;
    }

    // 이메일 중복 확인 여부
    if (!document.getElementById("email-double-check").disabled) {
        document.getElementById("email-duplication").style.display = "none";

        document.getElementById("email-invalid").style.display = "block";
        document.getElementById("input-email").style.border = "1px solid #fc522f";
    }

    // 비밀번호 정규식 체크
    const passwordRegex =
        /^(?=.*[A-Za-z])(?=.*\d|.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,16}$|^(?=.*\d)(?=.*[A-Za-z]|.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{10,16}$|^(?=.*[!@#$%^&*])(?=.*[A-Za-z]|.*\d)[A-Za-z\d!@#$%^&*]{10,16}$/;

    if (passwordRegex.test(password)) {
        document.getElementById("password-valid").style.color = "#AEAEAE";
        document.getElementById("input-password").style.border =
            "1px solid #AEAEAE";
        passwordFlag = 1;
    } else {
        document.getElementById("password-valid").style.color = "#fc522f";
        document.getElementById("input-password").style.border =
            "1px solid #fc522f";
        passwordFlag = 0;
    }

    // 비밀번호 중복 체크
    if (password !== passwordCheck) {
        document.getElementById("password-check-error").style.display = "block";
        document.getElementById("input-password-check").style.border =
            "1px solid #fc522f";
        passwordCheckFlag = 0;
    } else {
        document.getElementById("password-check-error").style.display = "none";
        document.getElementById("input-password-check").style.border =
            "1px solid #AEAEAE";
        passwordCheckFlag = 1;
    }

    if (
        nameFlag &&
        passwordFlag &&
        passwordCheckFlag &&
        document.getElementById("email-double-check").disabled
    ) {
        // 회원가입
        const formData = new FormData();
        formData.append("username", name);
        formData.append("password", password);
        formData.append("email", email);

        fetch(API_SERVER_DOMAIN + "/users/", {
                method: "POST",
                body: formData,
            })
            .then((response) => {
                console.log(response);
                if (!response.ok) {
                    throw new Error("Login failed");
                }
                window.location.href = "./login.html";
            })
            .catch((error) => {
                console.log(error);
                console.error("Detailed Error:", error.message);
            });
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        event.preventDefault(); // 기본 동작 방지 (선택 사항)
        document.getElementById("sign-up-btn").click(); // 버튼 클릭 이벤트 트리거
    }
});