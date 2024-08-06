var API_SERVER_DOMAIN = "https://mandiary.duckdns.org";
const accessToken = getCookie("accessToken");
let imageFiles = [];

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

    // 오늘 날짜
    let diaryWriteToday = document.getElementById("diary-write-today");

    const today = new Date();

    // 연도 가져오기
    const year = today.getFullYear();

    // 월 가져오기 (0부터 시작하므로 +1 필요)
    const month = String(today.getMonth() + 1).padStart(2, "0");

    // 일 가져오기
    const day = String(today.getDate()).padStart(2, "0");

    // 원하는 형식으로 날짜 조합
    const formattedDate = `${year}/${month}/${day}`;

    diaryWriteToday.innerHTML = `${formattedDate}`;
});

function loadFile(input) {
    // 선택파일 가져오기
    let file = input.files[0];

    //이미지 source 가져오기
    newImageSrc = URL.createObjectURL(file);

    //새 이미지 태그 생성
    let dirayWriteImg = document.createElement("div");
    dirayWriteImg.classList.add("diray-write-img");

    dirayWriteImg.innerHTML = `
    <img src="${newImageSrc}" alt="" class="write-img" />
    <img src="/img/img-delete.png" alt="" class="write-img-delete" onclick="removeImage(this)" />
    `;

    //이미지를 image-show div에 추가
    let dirayWriteImgWrapper = document.getElementById("diray-write-img-wrapper");
    dirayWriteImgWrapper.appendChild(dirayWriteImg);

    let currentImageCount =
        dirayWriteImgWrapper.getElementsByClassName("diray-write-img").length;

    // 최대 2개의 이미지만 추가 가능
    if (currentImageCount >= 2) {
        document.getElementById("img-plus-input").disabled = true;
        document.getElementById("img-plus-btn").src = "/img/img-plus.png";
    }

    imageFiles.push(file);
    input.value = "";
}

function removeImage(element) {
    // 부모 요소(diray-write-img)를 찾아서 제거
    let dirayWriteImg = element.parentElement;
    dirayWriteImg.remove();
    let imgElement = dirayWriteImg.querySelector("img");
    let imageSrc = imgElement.src;

    URL.revokeObjectURL(imageSrc);

    // 파일 배열에서 제거
    let index = imageFiles.findIndex(
        (file) => URL.createObjectURL(file) === imageSrc
    );

    if (index !== -1) {
        imageFiles.splice(index, 1);
    }

    let dirayWriteImgWrapper = document.getElementById("diray-write-img-wrapper");
    let currentImageCount =
        dirayWriteImgWrapper.getElementsByClassName("diray-write-img").length;

    // 2개 이하 체크
    if (currentImageCount < 2) {
        document.getElementById("img-plus-input").disabled = false;
        document.getElementById("img-plus-btn").src = "/img/img-plus-active.png";
    }
}

// 다이어리 생성
document
    .getElementById("diary-write-com-btn")
    .addEventListener("click", function() {
        // 콘텐츠 가져오기
        var content = document.getElementById("diary-textarea").value;

        if (!content) {
            document.getElementById("diary-write-content-container").style.border =
                "1px solid #ff452b";
            return;
        }

        let formData = new FormData();
        formData.append("content", content);

        // 파일이 하나인 경우
        if (imageFiles.length === 1) {
            formData.append("image1", imageFiles[0]);
        }
        // 파일이 두 개인 경우
        else if (imageFiles.length === 2) {
            imageFiles.forEach((file, index) => {
                formData.append(`image${index + 1}`, file);
            });
        }

        fetch(API_SERVER_DOMAIN + "/diarys/", {
                method: "POST",
                headers: {
                    Authorization: "Bearer " + accessToken,
                },
                body: formData,
            })
            .then((response) => {
                if (response.status === 401) {
                    const cookieName = "accessToken";
                    deleteCookie(cookieName);
                    window.location.href = "/html/login.html";
                    return;
                }
                window.location.href = "/html/diary.html";
            })
            .catch(() => {
                console.error("Detailed Error:", error.message);
                // console.error("Error:", error);
            });
    });