var API_SERVER_DOMAIN = "https://mandiary.duckdns.org";
const accessToken = getCookie("accessToken");
const diaryId = sessionStorage.getItem("diaryId");
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
        window.location.href = "./login.html";
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
                window.location.href = "./login.html";
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

            const dirayWriteImgWrapper = document.getElementById(
                "diray-write-img-wrapper"
            );
            const diaryTextarea = document.getElementById("diary-textarea");

            console.log(data);

            if (!data.image1) {
                diaryTextarea.value = `${data.content}`;
            } else if (!data.image2) {
                imageFiles.push(data.image1);
                dirayWriteImgWrapper.innerHTML = `
                <div class="diray-write-img" >
                    <img src="${data.image1}" alt="" class="write-img" />
                    <img src="../img/img-delete.png" alt="" class="write-img-delete" onclick="removeImage(this)" />
                </div>
                `;
                diaryTextarea.value = `${data.content}`;
            } else {
                imageFiles.push(data.image1);
                imageFiles.push(data.image2);

                document.getElementById("img-plus-input").disabled = true;
                document.getElementById("img-plus-btn").src = "../img/img-plus.png";

                dirayWriteImgWrapper.innerHTML = `
                <div class="diray-write-img" >
                    <img src="${data.image1}" alt="" class="write-img" />
                    <img src="../img/img-delete.png" alt="" class="write-img-delete" onclick="removeImage(this)" />
                </div>
                <div class="diray-write-img" >
                    <img src="${data.image2}" alt="" class="write-img" />
                    <img src="../img/img-delete.png" alt="" class="write-img-delete" onclick="removeImage(this)" />
                </div>
                `;
                diaryTextarea.value = `${data.content}`;
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
    <img src="../img/img-delete.png" alt="" class="write-img-delete" onclick="removeImage(this)" />
    `;

    //이미지를 image-show div에 추가
    let dirayWriteImgWrapper = document.getElementById("diray-write-img-wrapper");
    dirayWriteImgWrapper.appendChild(dirayWriteImg);

    let currentImageCount =
        dirayWriteImgWrapper.getElementsByClassName("diray-write-img").length;

    // 최대 2개의 이미지만 추가 가능
    if (currentImageCount >= 2) {
        document.getElementById("img-plus-input").disabled = true;
        document.getElementById("img-plus-btn").src = "../img/img-plus.png";
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
    let index;
    try {
        index = imageFiles.findIndex(
            (file) => URL.createObjectURL(file) === imageSrc
        );
    } catch {
        index = imageFiles.findIndex((file) => file === imageSrc);
    }

    if (index !== -1) {
        imageFiles.splice(index, 1);
    }

    let dirayWriteImgWrapper = document.getElementById("diray-write-img-wrapper");
    let currentImageCount =
        dirayWriteImgWrapper.getElementsByClassName("diray-write-img").length;

    // 2개 이하 체크
    if (currentImageCount < 2) {
        document.getElementById("img-plus-input").disabled = false;
        document.getElementById("img-plus-btn").src = "../img/img-plus-active.png";
    }
}

document
    .getElementById("diary-write-com-btn")
    .addEventListener("click", function() {
        // 콘텐츠 가져오기
        var content = document.getElementById("diary-textarea").value;

        let formData = new FormData();
        formData.append("content", content);

        if (imageFiles.length === 0) {
            formData.append("image1", []);
            formData.append("image2", []);
        }

        // 파일이 하나인 경우
        if (imageFiles.length === 1) {
            if (imageFiles[0] instanceof File) {
                formData.append("image1", imageFiles[0]);
            }
            formData.append("image2", []);
        }
        // 파일이 두 개인 경우
        else if (imageFiles.length === 2) {
            imageFiles.forEach((file, index) => {
                if (file instanceof File) {
                    formData.append(`image${index + 1}`, file);
                }
            });
        }

        for (const [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        fetch(API_SERVER_DOMAIN + `/diarys/${diaryId}/`, {
                method: "PATCH",
                headers: {
                    Authorization: "Bearer " + accessToken,
                },
                body: formData,
            })
            .then((response) => {
                if (response.status === 401) {
                    const cookieName = "accessToken";
                    deleteCookie(cookieName);
                    window.location.href = "./login.html";
                    return;
                }

                window.location.href = "./diary-detail.html";
            })
            .catch(() => {
                console.error("Detailed Error:", error.message);
                // console.error("Error:", error);
            });
    });