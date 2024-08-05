let API_SERVER_DOMAIN = "http://3.38.46.212";
const accessToken = getCookie("accessToken");

// 쿠키 관련 함수들
function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

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

// 유저 정보 가져오기
function fetchUserInfo() {
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
      const userId = data.id;
      console.log("User ID:", userId);
    })
    .catch((error) => {
      console.error("Error fetching user info", error);
    });
}

//나의 만다라트

document.addEventListener("DOMContentLoaded", function () {
  const mdatContent = document.querySelector(".mdat-content");
  const checkIcon = document.querySelector(".finish-mdat");
  const plusIcon = document.querySelector(".add-mdat");
  const prevBtn = document.querySelector(".mdat-prev-btn");
  const nextBtn = document.querySelector(".mdat-next-btn");

  let currentPage = 0; // 현재 페이지 번호
  const itemsPerPage = 2; // 한 페이지에 표시할 만다라트 개수
  let selectedItem = null; // 선택한 만다라트 (홈화면에 표시)
  let mandalartData = []; // 만다라트 저장 배열
  let showFinishMdats = false;

  // 진행 중인 만다라트 데이터 가져오기
  function fetchMandalartData() {
    fetch(API_SERVER_DOMAIN + "/mandalarts/inprogress/", {
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
        console.log("mandalart data:", data);
        data.forEach((mandalart) => fetchMandalartDetails(mandalart.id));
        // mandalartData = data;
        // console.log("mandalart data:", mandalartData);
        // renderAllMdats(mandalartData);
      })
      .catch((error) => {
        console.error("Error fetching mandalart data", error);
      });
  }

  // 완료한 만다라트 데이터 가져오기
  function fetchCompletedMandalarts() {
    fetch(API_SERVER_DOMAIN + "/mandalarts/complete/", {
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
        console.log("finish mandalart data:", data);
        data.forEach((mandalart) => fetchMandalartDetails(mandalart.id));
        // mandalartData = data;
        // console.log("mandalart data:", mandalartData);
        // renderAllMdats(mandalartData);
      })
      .catch((error) => {
        console.error("Error fetching mandalart data", error);
      });
  }

  function fetchMandalartDetails(mandalartId) {
    fetch(API_SERVER_DOMAIN + `/mandalarts/Mandalart-Goal/${mandalartId}/`, {
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
        renderAllMdats(mandalart);
      })
      .catch((error) => {
        console.error("Error fetching mandalart data", error);
      });
  }

  // 테스트용 무작위 목표 데이터를 생성하는 함수
  // function createTestMandalartData() {
  //   return [
  // {
  //   name: "건강 관리",
  //   goals: [
  //     { name: "운동", completed: true, badge: "/img/badge_unlock/1.png" },
  //     { name: "식이요법", completed: false, badge: "" },
  //     { name: "수면", completed: true, badge: "/img/badge_unlock/3.png" },
  //     { name: "스트레스 관리", completed: false, badge: "" },
  //     { name: "건강 관리", completed: "", badge: "/img/badge_unlock/5.png" },
  //     { name: "비타민 섭취", completed: false, badge: "" },
  //     { name: "스트레칭", completed: true, badge: "/img/badge_unlock/7.png" },
  //     { name: "휴식", completed: false, badge: "" },
  //     { name: "명상", completed: true, badge: "/img/badge_unlock/9.png" },
  //   ],
  // },
  //     {
  //       name: "개인 개발",
  //       goals: [
  //         { name: "코딩 연습", completed: true, badge: "/img/badge_unlock/1.png" },
  //         { name: "독서", completed: true, badge: "/img/badge_unlock/2.png" },
  //         { name: "새 기술 학습", completed: false, badge: "" },
  //         { name: "온라인 강의 수강", completed: false, badge: "" },
  //         { name: "개인 개발", completed: "", badge: "" },
  //         { name: "포트폴리오 제작", completed: true, badge: "/img/badge_unlock/6.png" },
  //         { name: "네트워킹", completed: true, badge: "/img/badge_unlock/7.png" },
  //         { name: "프로젝트 진행", completed: true, badge: "/img/badge_unlock/8.png" },
  //         { name: "발표 연습", completed: true, badge: "/img/badge_unlock/9.png" },
  //       ],
  //     },
  //     {
  //       name: "건강 관리2",
  //       goals: [
  //         { name: "운동", completed: true, badge: "/img/badge_unlock/1.png" },
  //         { name: "식이요법", completed: false, badge: "" },
  //         { name: "수면", completed: true, badge: "/img/badge_unlock/3.png" },
  //         { name: "스트레스 관리", completed: false, badge: "" },
  //         { name: "건강 관리2", completed: "", badge: "" },
  //         { name: "비타민 섭취", completed: false, badge: "" },
  //         { name: "스트레칭", completed: true, badge: "/img/badge_unlock/7.png" },
  //         { name: "휴식", completed: false, badge: "" },
  //         { name: "명상", completed: true, badge: "/img/badge_unlock/9.png" },
  //       ],
  //     },
  //     {
  //       name: "사회 활동",
  //       goals: [
  //         { name: "봉사 활동", completed: true, badge: "/img/badge_unlock/1.png" },
  //         { name: "동호회 활동", completed: true, badge: "/img/badge_unlock/2.png" },
  //         { name: "친구와의 만남", completed: false, badge: "" },
  //         { name: "문화 행사 참여", completed: false, badge: "" },
  //         { name: "사회 활동", completed: "", badge: "" },
  //         { name: "취미 활동", completed: true, badge: "/img/badge_unlock/6.png" },
  //         { name: "가족 시간", completed: true, badge: "/img/badge_unlock/7.png" },
  //         { name: "연인과의 시간", completed: true, badge: "/img/badge_unlock/8.png" },
  //         { name: "새로운 사람 만나기", completed: true, badge: "/img/badge_unlock/9.png" },
  //       ],
  //     },
  //     {
  //       name: "건강 관리3",
  //       goals: [
  //         { name: "운동", completed: true, badge: "/img/badge_unlock/1.png" },
  //         { name: "식이요법", completed: false, badge: "" },
  //         { name: "수면", completed: true, badge: "/img/badge_unlock/3.png" },
  //         { name: "스트레스 관리", completed: false, badge: "" },
  //         { name: "건강 관리3", completed: "", badge: "" },
  //         { name: "비타민 섭취", completed: false, badge: "" },
  //         { name: "스트레칭", completed: true, badge: "/img/badge_unlock/7.png" },
  //         { name: "휴식", completed: false, badge: "" },
  //         { name: "명상", completed: true, badge: "/img/badge_unlock/9.png" },
  //       ],
  //     },
  //   ];
  // }

  function finishedMandalartData() {
    return [
      {
        name: "건강 관리4",
        goals: [
          { name: "운동", completed: true, badge: "/img/badge_unlock/1.png" },
          { name: "식이요법", completed: true, badge: "/img/badge_unlock/2.png" },
          { name: "수면", completed: true, badge: "/img/badge_unlock/3.png" },
          { name: "스트레스 관리", completed: true, badge: "/img/badge_unlock/4.png" },
          { name: "건강 관리4", completed: "", badge: "" },
          { name: "비타민 섭취", completed: true, badge: "/img/badge_unlock/6.png" },
          { name: "스트레칭", completed: true, badge: "/img/badge_unlock/7.png" },
          { name: "휴식", completed: true, badge: "/img/badge_unlock/8.png" },
          { name: "명상", completed: true, badge: "/img/badge_unlock/9.png" },
        ],
      },
      {
        name: "건강 관리5",
        goals: [
          { name: "운동", completed: true, badge: "/img/badge_unlock/1.png" },
          { name: "식이요법", completed: true, badge: "/img/badge_unlock/2.png" },
          { name: "수면", completed: true, badge: "/img/badge_unlock/3.png" },
          { name: "스트레스 관리", completed: true, badge: "/img/badge_unlock/4.png" },
          { name: "건강 관리5", completed: "", badge: "" },
          { name: "비타민 섭취", completed: true, badge: "/img/badge_unlock/6.png" },
          { name: "스트레칭", completed: true, badge: "/img/badge_unlock/7.png" },
          { name: "휴식", completed: true, badge: "/img/badge_unlock/8.png" },
          { name: "명상", completed: true, badge: "/img/badge_unlock/9.png" },
        ],
      },
    ];
  }

  // 초기화 함수
  function init() {
    fetchMandalartData();
    //mandalartData.forEach((mandalart) => renderMandalart(mandalart));
    //mandalartData = createTestMandalartData();
    //mandalartData.forEach((mandalart) => renderMandalart(mandalart)); // 테스트 데이터로 만다라트 렌더링
    //changePage(0); // 첫페이지
    fetchUserInfo();
  }

  // 만다라트를 화면에 렌더링
  function renderMandalart(mandalart) {
    const item = document.createElement("div");
    item.classList.add("mdat-item");

    item.innerHTML = `
      <div class="mdat-item-top">
        <div class="mdat-big-goal ${mandalart.completed ? "completed" : ""}">
              ${mandalart.completed ? `<p>${mandalart.table_name}</p>` : `<p>${mandalart.table_name}</p>`}
            </div>
      </div>
      <div class="mdat-item-mid">
        <p class = 'mdat-name-input'>${mandalart.table_name}</p>
        <img class='name-edit-btn' src="/img/edit-btn.png" alt="edit-button"/>
      </div>
      <div class="mdat-item-bottom">
        <button class="select-btn" type="button">선택</button>
        <button class="del-btn" type="button">삭제</button>
      </div>
    `;

    item.style.backgroundColor = showFinishMdats ? "#000000" : "";
    const selectBtn = item.querySelector(".select-btn");
    const delBtn = item.querySelector(".del-btn");
    const mdatName = item.querySelector(".mdat-item-mid p");
    const mdatBigGoal5 = item.querySelector(".mdat-big-goal:nth-child(5)");
    const goalCap = item.querySelectorAll(".goal-cap");

    if (showFinishMdats) {
      delBtn.style.backgroundColor = "#000000";
      delBtn.style.border = "1px solid #FFFFFF";
      selectBtn.style.border = "1px solid #FFFFFF";
      mdatName.style.color = "#FFFFFF";
      mdatBigGoal5.style.backgroundColor = "#FF452B";
      goalCap.forEach((cap) => {
        cap.style.opacity = "30%";
      });
    }
    mdatContent.appendChild(item);
    changePage(currentPage);
  }

  function renderAllMdats(data) {
    console.log(data);
    mdatContent.innerHTML = "";
    data.forEach((mandalart) => renderMandalart(mandalart));
    changePage(currentPage); // 페이지 변경 처리
  }

  // 플러스아이콘 클릭 //
  plusIcon.addEventListener("click", function () {
    renderEmptyMdat();
  });

  // 빈 만다라트 생성
  function renderEmptyMdat() {
    const form = document.createElement("div");
    form.classList.add("mdat-item", "mdat-item-form");

    form.innerHTML = `
      <div class="mdat-item-top">
        ${Array(9)
          .fill("")
          .map(() => `<div class="mdat-big-goal empty"><p></p></div>`)
          .join("")}
      </div>
      <div class="mdat-item-mid">
        <input type="text" placeholder="테이블명" class="mdat-title-input"/>
        <img class='name-edit-btn' src="/img/edit-btn.png" alt="edit-button"/>
      </div>
      <div class="mdat-item-bottom">
        <button class="create-btn" type="button">생성</button>
        <button class="del-btn" type="button">취소</button>
      </div>
    `;

    // 만다라트 목록의 맨 앞에 추가
    mdatContent.prepend(form);
    changePage(currentPage);
  }

  function calTotalPageNum(data) {
    return Math.ceil(data.length / itemsPerPage);
  }

  // 페이지 변경
  function changePage(page) {
    const allItems = mdatContent.querySelectorAll(".mdat-item");
    const dataToShow = showFinishMdats ? fetchCompletedMandalarts() : fetchMandalartData();
    const totalItemNum = dataToShow.length;
    const totalPages = calTotalPageNum(dataToShow);

    // 페이지 조정
    if (page < 0) {
      currentPage = 0;
    } else if (page >= totalPages) {
      currentPage = totalPages - 1;
    } else {
      currentPage = page;
    }

    allItems.forEach((item, index) => {
      item.style.display =
        index >= currentPage * itemsPerPage && index < (currentPage + 1) * itemsPerPage
          ? "flex"
          : "none";
    });

    //prevBtn.style.visibility = currentPage === 0 ? "hidden" : "visible";
    //nextBtn.style.visibility = currentPage === totalPages - 1 ? "hidden" : "visible";
  }

  prevBtn.addEventListener("click", () => changePage(currentPage - 1));
  nextBtn.addEventListener("click", () => changePage(currentPage + 1));

  // 만다라트 삭제
  mdatContent.addEventListener("click", function (event) {
    if (event.target.classList.contains("del-btn")) {
      const item = event.target.closest(".mdat-item");
      const action = event.target.textContent.trim().toLowerCase();

      if (action === "취소") {
        if (confirm("만다라트 생성을 취소하시겠습니까?")) {
          item.remove();
          const totalPages = calTotalPageNum(mandalartData);
          if (currentPage >= totalPages) {
            currentPage = totalPages - 1;
          }
          changePage(currentPage);
          plusIcon.src = "/img/plus-btn.png";
        }
      } else if (action === "삭제") {
        if (confirm("만다라트를 삭제하시겠습니까?")) {
          const itemName = item.querySelector(".mdat-item-mid p").textContent;
          mandalartData = mandalartData.filter((mandalart) => mandalart.name !== itemName);
          item.remove();

          const totalPages = calTotalPageNum(mandalartData);
          if (currentPage >= totalPages) {
            currentPage = totalPages - 1;
          }
          changePage(currentPage);
          plusIcon.src = "/img/plus-btn.png";
        }
      }
    }
  });

  // 대표 만다라트 선택
  mdatContent.addEventListener("click", function (event) {
    if (event.target.classList.contains("select-btn")) {
      const selectedMdatItem = event.target.closest(".mdat-item");

      // 이미 선택된 만다라트 존재 -> 현재 클릭한 만다라트가 아닐 경우
      if (selectedItem) {
        selectedItem.querySelector(".select-btn").style.backgroundColor = "";
      }

      selectedItem = selectedMdatItem;
      selectedMdatItem.classList.add("selected");
      event.target.style.backgroundColor = "#FF452B";
    }
  });

  // 만다라트 이름 수정

  // mdatContent.addEventListener("click", function (event) {
  //   console.log(event.target);
  //   const item = event.target.closest(".mdat-item");
  //   const mdatTitleElement = item.querySelector(".mdat-name-input");
  //   console.log(mdatTitleElement);
  //   const currentTitle = mdatTitleElement.textContent.trim();
  //   console.log(currentTitle);

  //   const inputField = document.createElement("input");
  //   inputField.type = "text";
  //   inputField.value = currentTitle;
  //   inputField.classList.add("mdat-title-input");

  //   mdatTitleElement.replaceWith(inputField);

  //   inputField.focus();

  //   inputField.addEventListener("blur", function () {
  //     const newTitle = inputField.value.trim();

  //     if (newTitle) {
  //       // Update the title in the data array
  //       const itemName = currentTitle;
  //       const mandarat = mandalartData.find((mandalart) => mandalart.name === itemName);
  //       if (mandarat) {
  //         mandarat.name = newTitle;
  //       }

  //       // Replace input field with updated title
  //       const newTitleElement = document.createElement("p");
  //       newTitleElement.classList.add("mdat-title");
  //       newTitleElement.textContent = newTitle;
  //       inputField.replaceWith(newTitleElement);
  //     } else {
  //       // Revert to original title if new title is empty
  //       inputField.replaceWith(titleElement);
  //     }
  //   });
  //   // if (event.target.classList.contains("name-edit-icon")) {
  //   //   const item = event.target.closest(".mdat-item");
  //   //   const mdatTitleElement = item.querySelector(".mdat-title");
  //   //   const currentTitle = mdatTitleElement.textContent.trim();
  //   //   console.log(currentTitle);

  //   //   const inputField = document.createElement("input");
  //   //   inputField.type = "text";
  //   //   inputField.value = currentTitle;
  //   //   inputField.classList.add("mdat-title-input");

  //   //   mdatTitleElement.replaceWith(inputField);

  //   //   inputField.focus();

  //   //   inputField.addEventListener("blur", function () {
  //   //     const newTitle = inputField.value.trim();

  //   //     if (newTitle) {
  //   //       // Update the title in the data array
  //   //       const itemName = currentTitle;
  //   //       const mandarat = mandalartData.find((mandalart) => mandalart.name === itemName);
  //   //       if (mandarat) {
  //   //         mandarat.name = newTitle;
  //   //       }

  //   //       // Replace input field with updated title
  //   //       const newTitleElement = document.createElement("p");
  //   //       newTitleElement.classList.add("mdat-title");
  //   //       newTitleElement.textContent = newTitle;
  //   //       inputField.replaceWith(newTitleElement);
  //   //     } else {
  //   //       // Revert to original title if new title is empty
  //   //       inputField.replaceWith(titleElement);
  //   //     }
  //   //   });
  //   // }
  // });

  // // 플러스아이콘 클릭
  // plusIcon.addEventListener("click", function () {
  //   renderEmptyMdat();
  // });

  // 새 만다라트 - 생성버튼 클릭
  mdatContent.addEventListener("click", function (event) {
    if (event.target.classList.contains("create-btn")) {
      const form = event.target.closest(".mdat-item-form");
      const titleInput = form.querySelector(".mdat-title-input");
      const title = titleInput.value.trim();

      if (title) {
        const newMandalart = {
          name: title,
          goals: Array(9).fill({ name: "", completed: false, badge: "" }),
        };
        mandalartData.unshift(newMandalart); // 데이터 배열에 새 만다라트 추가
        renderMandalart(newMandalart); // 새 만다라트 렌더링
        form.remove();

        plusIcon.src = "/img/plus-btn.png";

        changePage(0);
      } else {
        alert("만다라트 이름을 입력하세요");
      }
    }
    // 새 만다라트의 취소버튼 -> 폼 제거
    if (event.target.classList.contains("cancel-btn")) {
      const form = event.target.closest(".mdat-item-form");
      form.remove();
    }
  });

  init(); // 초기화 실행

  // 체크버튼 - 달성 완료한 만다라트
  checkIcon.addEventListener("click", function () {
    changePage(0);
    showFinishMdats = !showFinishMdats;
    if (showFinishMdats) {
      fetchCompletedMandalarts();
      // const finishedData = finishedMandalartData();
      // renderAllMdats(finishedData);
      checkIcon.src = "/img/full-check-btn.png";
    } else {
      fetchMandalartData();
      // renderAllMdats(mandalartData);
      checkIcon.src = "/img/check-btn.png";
    }
  });

  // 플러스버튼 - 새 만다라트 추가
  // plusIcon.addEventListener("click", function () {
  //   changePage(0);
  //   plusIcon.src = "/img/full-plus-btn.png";
  // });

  //---------------------------------------------------------------------------------
  // 나의 칭호
  const titleList = [
    { name: "알잘딱깔센", img: "/img/title/알잘딱깔센.png" },
    { name: "갓생러", img: "/img/title/갓생러.png" },
    { name: "중꺾마", img: "/img/title/중꺾마.png" },
  ];

  function renderTitles(titleList) {
    const titleMain = document.querySelector(".my-title-main");
    titleMain.innerHTML = "";

    for (let i = 0; i < titleList.length; i += 3) {
      const titleItem = document.createElement("div");
      titleItem.classList.add("title-item");

      for (let j = i; j < i + 3 && j < titleList.length; j++) {
        const titleImg = document.createElement("img");
        titleImg.src = titleList[j].img;
        titleImg.alt = titleList[j].name;
        titleItem.appendChild(titleImg);
      }
      titleMain.appendChild(titleItem);
    }
  }

  renderTitles(titleList);

  //----------------------------------------------------------------------------------
  //나의 배지

  let unlockableNum = 3; // 해제 가능한 배지 개수
  const badgeItems = document.querySelectorAll(".badge-item");

  if (unlockableNum > 0) {
    document.querySelector(".new-icon").style.display = "block";
    document.querySelector(".new-ment").style.display = "block";
    document.querySelector(".unlockable-num").style.display = "block";
    document.querySelector(".unlockable-num").textContent =
      "(획득 가능 개수 : " + unlockableNum + ")";
  }

  const originalTitle = [
    "알잘딱깔센",
    "갓생러",
    "중꺾마",
    "가보자고",
    "오히려 좋은",
    "럭키비키",
    "거친 세상에 뛰어든",
    "성공시대 시작된",
    "일취월장",
  ];

  // 배지 해제

  const mybadge = [
    "/img/badge_unlock/1.png",
    "/img/badge_unlock/2.png",
    "/img/badge_unlock/3.png",
    "/img/badge_lock/basic4.png",
    "/img/badge_lock/basic5.png",
    "/img/badge_lock/basic6.png",
    "/img/badge_lock/basic7.png",
    "/img/badge_lock/basic8.png",
    "/img/badge_lock/basic9.png",
  ];

  const unlockedImages = [
    "/img/badge_unlock/1.png",
    "/img/badge_unlock/2.png",
    "/img/badge_unlock/3.png",
    "/img/badge_unlock/4.png",
    "/img/badge_unlock/5.png",
    "/img/badge_unlock/6.png",
    "/img/badge_unlock/7.png",
    "/img/badge_unlock/8.png",
    "/img/badge_unlock/9.png",
  ];

  const lockedImages = [
    "/img/badge_lock/basic1.png",
    "/img/badge_lock/basic2.png",
    "/img/badge_lock/basic3.png",
    "/img/badge_lock/basic4.png",
    "/img/badge_lock/basic5.png",
    "/img/badge_lock/basic6.png",
    "/img/badge_lock/basic7.png",
    "/img/badge_lock/basic8.png",
    "/img/badge_lock/basic9.png",
  ];

  const badgeCaps = document.querySelectorAll(".cap-img");
  badgeCaps.forEach((badge) => {
    badge.addEventListener("click", function () {
      const badgeSrc = badge.src;
      console.log(badgeSrc);

      const isLocked = badgeSrc.includes("badge_lock");
      console.log("Is badge locked?", isLocked);

      // 잠겨있는 배지일 경우
      if (isLocked) {
        const lockedIndex = lockedImages.findIndex((src) => badgeSrc.includes(src));

        if (lockedIndex !== -1 && unlockableNum > 0) {
          unlockableNum--;

          // unlockedImages 배열에서 해제된 이미지를 찾기
          badge.src = unlockedImages[lockedIndex];
          document.querySelector(".unlockable-num").textContent =
            "(획득 가능 개수 : " + unlockableNum + ")";

          if (unlockableNum == 0) {
            document.querySelector(".new-icon").style.display = "none";
            document.querySelector(".new-ment").style.display = "none";
            document.querySelector(".unlockable-num").style.display = "none";
          }

          // 배지 잠금해제 후 칭호 획득
          const badgeContainer = badge.closest(".badge-item");
          if (!badgeContainer) {
            console.error("not found");
            return;
          }
          const badgeTitleElement = badgeContainer.querySelector(".cap-title");
          const badgeTitle = badgeTitleElement.textContent;
          console.log("Badge title:", badgeTitle);
        }
      } else if (unlockableNum === 0) {
        console.log("모든 배지를 해제하였습니다.");
      } else {
        alert("이미 보유하고 있는 배지입니다. 잠겨있는 배지를 클릭하세요!");
      }
    });
  });
});
