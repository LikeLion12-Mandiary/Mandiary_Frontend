var API_SERVER_DOMAIN = "https://mandiary.duckdns.org";
const accessToken = getCookie("accessToken");
let sortedEntriesByYear;
const now = new Date();
const currentYear = now.getFullYear(); // 현재 연도
let firstYearInEntries;

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

    // 다이어리 전체 조회
    fetch(API_SERVER_DOMAIN + "/diarys/users_diarys/", {
            method: "get",
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
            // 년도별로 나누기 위한 객체 초기화
            const entriesByYear = {};

            // 배열을 순회하며 년도별로 분류
            data.forEach((entry) => {
                const date = new Date(entry.created_at);
                const year = date.getFullYear();
                const month = date.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함

                if (!entriesByYear[year]) {
                    entriesByYear[year] = {};
                }

                if (!entriesByYear[year][month]) {
                    entriesByYear[year][month] = [];
                }

                entriesByYear[year][month].push(entry);
            });

            // 각 년도와 월의 데이터를 내림차순으로 정렬
            Object.keys(entriesByYear).forEach((year) => {
                Object.keys(entriesByYear[year]).forEach((month) => {
                    entriesByYear[year][month].sort(
                        (a, b) => new Date(b.created_at) - new Date(a.created_at)
                    );
                });
            });

            // 년도를 내림차순으로 정렬
            sortedEntriesByYear = Object.keys(entriesByYear)
                .sort((a, b) => b - a)
                .reduce((acc, year) => {
                    acc[year] = Object.keys(entriesByYear[year])
                        .sort((a, b) => b - a)
                        .reduce((accMonth, month) => {
                            accMonth[month] = entriesByYear[year][month];
                            return accMonth;
                        }, {});
                    return acc;
                }, {});
        })
        .then(() => {
            loadDiaryTitle(currentYear);
            loadDiaryContent(currentYear);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
});

// 다이어리 타이틀 생성
function loadDiaryTitle(specificYear) {
    // 가입한 년도
    fetch(API_SERVER_DOMAIN + "/users/profile/", {
            method: "get",
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
            firstYearInEntries = data.created_at.substring(0, 4);
        })
        .then(() => {
            // 특정 년도의 데이터 필터링
            const entriesForSpecificYear = sortedEntriesByYear[specificYear] || {};

            let totalEntriesCount = 0;

            Object.values(entriesForSpecificYear).forEach((entries) => {
                totalEntriesCount += entries.length; // 각 월의 다이어리 개수를 합산
            });

            const diaryTitleWrapper = document.getElementById("diary-title-wrapper");

            diaryTitleWrapper.innerHTML = `
                <div class="diary-title">
                    <img src="../img/left-btn.png" id="diary-left-btn" alt="" />
                    <p>${specificYear} 다이어리</p>
                <img src="../img/right-btn.png" id="diary-right-btn" alt="" />
                </div>
                 <p class="diary-count">총 ${totalEntriesCount}개의 일기</p>`;

            if (specificYear == currentYear) {
                const rightBtn = document.getElementById("diary-right-btn");
                rightBtn.style.visibility = "hidden";
            }

            if (specificYear == firstYearInEntries) {
                const leftBtn = document.getElementById("diary-left-btn");
                if (leftBtn) {
                    leftBtn.style.visibility = "hidden";
                }
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

// 현재 년도 다이어리 생성
function loadDiaryContent(specificYear) {
    // 특정 년도의 데이터 필터링
    const entriesForSpecificYear = sortedEntriesByYear[specificYear] || {};

    // sortedEntriesByYear의 첫 번째 연도 찾기
    const years = Object.keys(sortedEntriesByYear).map(Number); // 연도 키를 숫자로 변환
    const firstYearInEntries = Math.min(...years); // 가장 작은 연도 (첫 번째 연도)

    // 현재 날짜 객체 생성
    const currentMonth = now.getMonth() + 1; // 현재 월

    // 월 목록 생성 및 정렬
    const months = Array.from({ length: 12 }, (_, i) => i + 1);

    // `filteredMonths` 배열 생성
    const filteredMonths =
        specificYear === currentYear ?
        months.filter((month) => month <= currentMonth).sort((a, b) => b - a) // 현재 연도일 때
        :
        months.sort((a, b) => b - a); // 현재 연도가 아닐 때

    function formatDate(dateString) {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0"); // 월은 0부터 시작하므로 +1
        const day = String(date.getDate()).padStart(2, "0");

        return `${year}/${month}/${day}`;
    }

    const diaryContentWrapper = document.getElementById("diary-content-wrapper");
    diaryContentWrapper.innerHTML = "";

    filteredMonths.forEach((month) => {
        var diaryMonthly = document.createElement("div");
        diaryMonthly.classList.add("diary-monthly");

        if (specificYear === currentYear && month === currentMonth) {
            diaryMonthly.innerHTML = `
              <p>${month}월</p>
                <img src="../img/diary-plus.png" alt="" id="go-diary-write-btn" />`;
        } else {
            diaryMonthly.innerHTML = `<p>${month}월</p>`;
        }

        diaryContentWrapper.appendChild(diaryMonthly);

        var diaryDailyWrapper = document.createElement("div");
        diaryDailyWrapper.classList.add("diary-daily-wrapper");
        diaryMonthly.appendChild(diaryDailyWrapper);

        const entriesForMonth = entriesForSpecificYear[month] || [];

        if (month !== 1) {
            // 1월이 아닌 경우
            const hrElement = document.createElement("hr");
            diaryContentWrapper.appendChild(hrElement);
        }
        entriesForMonth
            .sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) // 일 기준 내림차순
            .forEach((entry) => {
                var diaryDaily = document.createElement("div");
                diaryDaily.classList.add("diary-daily");
                diaryDaily.setAttribute("key", entry.id);

                if (!entry.image1) {
                    const firstLine = entry.content.split("\n")[0];

                    diaryDaily.innerHTML = `
                    <img src="../img/diary-background.png" alt="" class="diary-background" />
                      <div class="daily-content">
                        <p>${firstLine}</p>
                      </div>
                      <span class="daily-date">${formatDate(
                        entry.created_at
                      )}</span>
                    `;
                } else if (!entry.image2) {
                    diaryDaily.innerHTML = `
                    <img src="../img/diary-background.png" alt="" class="diary-background" />
                      <div class="daily-content">
                            <img src="${
                              entry.image1
                            }" alt="" class="daily-img" />
                      </div>
                      <span class="daily-date">${formatDate(
                        entry.created_at
                      )}</span>
                    `;
                } else {
                    diaryDaily.innerHTML = `
                    <img src="../img/diary-background.png" alt="" class="diary-background" />
                      <div class="daily-content">
                            <img src="${
                              entry.image1
                            }" alt="" class="daily-img" />
                            <img src="${
                              entry.image2
                            }" alt="" class="daily-img" />
                      </div>
                      <span class="daily-date">${formatDate(
                        entry.created_at
                      )}</span>
                    `;
                }

                diaryDailyWrapper.appendChild(diaryDaily);
            });
    });

    document
        .getElementById("go-diary-write-btn")
        .addEventListener("click", function() {
            // 오늘 날짜 구하기
            const today = new Date();
            const year = today.getFullYear();
            const month = today.getMonth() + 1; // 월은 0부터 시작하므로 1을 더함
            const day = today.getDate();

            // 오늘 날짜가 있는지 확인하는 함수
            function isTodayInData(data) {
                if (data[year] && data[year][month]) {
                    return data[year][month].some((entry) => {
                        const entryDate = new Date(entry.created_at);
                        return (
                            entryDate.getFullYear() === year &&
                            entryDate.getMonth() + 1 === month &&
                            entryDate.getDate() === day
                        );
                    });
                }
                return false;
            }

            if (isTodayInData(sortedEntriesByYear)) {
                alert("오늘은 이미 다이어리를 작성하였습니다.");
            } else {
                window.location.href = "./diary-write.html";
            }
        });

    document.querySelectorAll(".diary-daily").forEach(function(element) {
        element.addEventListener("click", function() {
            var key = this.getAttribute("key");

            sessionStorage.setItem("diaryId", key);

            window.location.href = "./diary-detail.html";
        });
    });
}