function deleteCookie(name) {
    document.cookie = name + "=; Expires=Thu, 01 Jan 1970 00:00:01 GMT; path=/;";
}

document
    .getElementsByClassName("logout-img")[0]
    .addEventListener("click", function() {
        // 쿠키 이름 확인
        const cookieName = "accessToken"; // 실제 쿠키 이름으로 교체
        deleteCookie(cookieName);

        // 로그아웃 후 리디렉션
        window.location.href = "/html/login.html"; // 로그인 페이지로 이동
    });