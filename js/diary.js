var API_SERVER_DOMAIN = "http://3.38.46.212";
const accessToken = getCookie("accessToken");
let sortedEntriesByYear;

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

const diaryEntries = [{
        id: 1,
        user: {
            id: 1,
            username: "lion",
            email: "tjgustjr16@naver.com",
        },
        content: "멋사",
        image: null,
        created_at: "2024-08-01T04:53:40.735225",
        updated_at: "2024-08-01T04:53:40.735225",
    },
    {
        id: 2,
        user: {
            id: 2,
            username: "tiger",
            email: "tiger@example.com",
        },
        content: "강의",
        image: null,
        created_at: "2024-08-02T10:20:30.123456",
        updated_at: "2024-08-02T10:20:30.123456",
    },
    {
        id: 3,
        user: {
            id: 3,
            username: "eagle",
            email: "eagle@example.com",
        },
        content: "코딩",
        image: null,
        created_at: "2024-08-03T14:15:20.654321",
        updated_at: "2024-08-03T14:15:20.654321",
    },
    {
        id: 4,
        user: {
            id: 4,
            username: "shark",
            email: "shark@example.com",
        },
        content: "프로젝트",
        image: null,
        created_at: "2024-08-04T09:10:10.123456",
        updated_at: "2024-08-04T09:10:10.123456",
    },
    {
        id: 5,
        user: {
            id: 5,
            username: "wolf",
            email: "wolf@example.com",
        },
        content: "팀미팅",
        image: null,
        created_at: "2024-07-25T16:30:45.123789",
        updated_at: "2024-07-25T16:30:45.123789",
    },
    {
        id: 6,
        user: {
            id: 6,
            username: "fox",
            email: "fox@example.com",
        },
        content: "개발",
        image: null,
        created_at: "2024-07-26T11:15:35.987654",
        updated_at: "2024-07-26T11:15:35.987654",
    },
    {
        id: 7,
        user: {
            id: 7,
            username: "bear",
            email: "bear@example.com",
        },
        content: "리서치",
        image: null,
        created_at: "2024-07-27T08:45:25.456123",
        updated_at: "2024-07-27T08:45:25.456123",
    },
    {
        id: 8,
        user: {
            id: 8,
            username: "deer",
            email: "deer@example.com",
        },
        content: "설계",
        image: null,
        created_at: "2024-07-28T14:05:15.321789",
        updated_at: "2024-07-28T14:05:15.321789",
    },
    {
        id: 9,
        user: {
            id: 9,
            username: "hawk",
            email: "hawk@example.com",
        },
        content: "테스트",
        image: null,
        created_at: "2023-12-15T12:30:45.987654",
        updated_at: "2023-12-15T12:30:45.987654",
    },
    {
        id: 10,
        user: {
            id: 10,
            username: "rabbit",
            email: "rabbit@example.com",
        },
        content: "리팩토링",
        image: null,
        created_at: "2023-11-20T09:20:30.123456",
        updated_at: "2023-11-20T09:20:30.123456",
    },
    {
        id: 11,
        user: {
            id: 11,
            username: "frog",
            email: "frog@example.com",
        },
        content: "디버깅",
        image: null,
        created_at: "2023-10-05T14:10:20.654321",
        updated_at: "2023-10-05T14:10:20.654321",
    },
    {
        id: 12,
        user: {
            id: 12,
            username: "elephant",
            email: "elephant@example.com",
        },
        content: "유지보수",
        image: null,
        created_at: "2023-09-12T16:45:10.456123",
        updated_at: "2023-09-12T16:45:10.456123",
    },
    {
        id: 13,
        user: {
            id: 13,
            username: "giraffe",
            email: "giraffe@example.com",
        },
        content: "기획",
        image: null,
        created_at: "2023-08-22T11:25:35.321789",
        updated_at: "2023-08-22T11:25:35.321789",
    },
    {
        id: 14,
        user: {
            id: 14,
            username: "zebra",
            email: "zebra@example.com",
        },
        content: "디자인",
        image: null,
        created_at: "2023-07-30T08:15:40.123456",
        updated_at: "2023-07-30T08:15:40.123456",
    },
    {
        id: 15,
        user: {
            id: 15,
            username: "panda",
            email: "panda@example.com",
        },
        content: "테스트 케이스 작성",
        image: null,
        created_at: "2023-06-18T10:05:30.987654",
        updated_at: "2023-06-18T10:05:30.987654",
    },
];

document.addEventListener("DOMContentLoaded", function() {
    // accessToken 없으면 login 화면으로
    if (!accessToken) {
        window.location.href = "./login.html";
        return;
    }

    // 년도별로 나누기 위한 객체 초기화
    const entriesByYear = {};

    // 배열을 순회하며 년도별로 분류
    diaryEntries.forEach((entry) => {
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

    // 결과 출력
    console.log(sortedEntriesByYear);

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
            // 다이어리 배열에 저장
        })
        .catch((error) => {
            console.error("Error:", error);
        });

    // 특정 년도의 데이터 필터링
    const specificYear = 2024; // 원하는 년도
    const entriesForSpecificYear = sortedEntriesByYear[specificYear] || {};

    // sortedEntriesByYear의 첫 번째 연도 찾기
    const years = Object.keys(sortedEntriesByYear).map(Number); // 연도 키를 숫자로 변환
    const firstYearInEntries = Math.min(...years); // 가장 작은 연도 (첫 번째 연도)

    // 현재 날짜 객체 생성
    const now = new Date();
    const currentYear = now.getFullYear(); // 현재 연도
    const currentMonth = now.getMonth() + 1; // 현재 월

    // 다이어리 타이틀 생성
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

    if (specificYear === currentYear) {
        const rightBtn = document.getElementById("diary-right-btn");
        rightBtn.style.visibility = "hidden";
    }

    if (specificYear === firstYearInEntries) {
        const leftBtn = document.getElementById("diary-left-btn");
        if (leftBtn) {
            leftBtn.style.visibility = "hidden";
        }
    }

    // 현재 년도 다이어리 생성

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
          <a href="./diary-write.html">
            <img src="../img/diary-plus.png" alt="" />
          </a>`;
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
                diaryDaily.innerHTML = `
              <img src="../img/diary-background.png" alt="" class="diary-background" />
                <div class="daily-content">
                  <p>${entry.content}</p>
                </div>
                <span class="daily-date">${formatDate(entry.created_at)}</span>
              `;
                diaryDailyWrapper.appendChild(diaryDaily);
            });
    });
});