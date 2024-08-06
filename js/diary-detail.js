var API_SERVER_DOMAIN = "https://mandiary.duckdns.org";
const accessToken = getCookie("accessToken");
const diaryId = sessionStorage.getItem("diaryId");

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

document.addEventListener("DOMContentLoaded", function() {
    // accessToken 없으면 login 화면으로
    if (!accessToken) {
        window.location.href = "/html/login.html";
        return;
    }

    // 다이어리 특정 조회
    fetch(API_SERVER_DOMAIN + `/diarys/${diaryId}`, {
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
                window.location.href = "/html/login.html";
                return;
            }
            if (!response.ok) {
                throw new Error("Login failed");
            }
            return response.json();
        })
        .then((data) => {
            var dateSpan = document.getElementById("diary-detail-date");

            // 새로운 날짜 값을 설정합니다
            dateSpan.textContent = `${formatDate(data.created_at)}`;

            const dirayDetailImg = document.getElementById("diray-detail-img");
            const diaryDetailContent = document.getElementById(
                "diary-detail-content"
            );

            if (!data.image1) {
                diaryDetailContent.innerHTML = `${data.content}`;
            } else if (!data.image2) {
                dirayDetailImg.innerHTML = `
                    <img src="${data.image1}" alt="" />`;
                diaryDetailContent.innerHTML = `${data.content}`;
            } else {
                dirayDetailImg.innerHTML = `
                    <img src="${data.image1}" alt="" />
                    <img src="${data.image2}" alt="" />`;
                diaryDetailContent.innerHTML = `${data.content}`;
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}/${month}/${day}`;
}

// 다이어리 수정으로 이동
const diaryModifyBtn = document.getElementById("diary-modify-btn");

diaryModifyBtn.onclick = function() {
    window.location.href = "/html/diary-modify.html";
};

// 모달
const modal = document.getElementById("diary-delete-modal");

const openModalBtn = document.getElementById("diary-delete-btn");
const closeModalBtn = document.getElementById("diary-delete-can");

const diaryDeleteCom = document.getElementById("diary-delete-com");

openModalBtn.onclick = function() {
    modal.style.display = "block";
    openModalBtn.src = "/img/diary-delete.png";
};

closeModalBtn.onclick = function() {
    modal.style.display = "none";
    openModalBtn.src = "/img/diary-delete-active.png";
};

// 다이어리 삭제
diaryDeleteCom.onclick = function() {
    fetch(API_SERVER_DOMAIN + `/diarys/${diaryId}/`, {
            method: "DELETE",
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        })
        .then((response) => {
            // 401 Unauthorized 에러가 발생한 경우
            if (response.status === 401) {
                const cookieName = "accessToken";
                deleteCookie(cookieName);
                window.location.href = "/html/login.html";
                return;
            }
            if (!response.ok) {
                throw new Error("Login failed");
            }
            window.location.href = "/html/diary.html";
        })
        .catch((error) => {
            console.error("Detailed Error:", error.message);
        });
};

window.onclick = function(event) {
    if (event.target == modal) {
        openModalBtn.src = "/img/diary-delete-active.png";
        modal.style.display = "none";
    }
};