//나의 만다라트

// 만다라트 목록 표시
// 임의의 데이터

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

  // 테스트용 무작위 목표 데이터를 생성하는 함수
  function createTestMandalartData() {
    return [
      {
        name: "건강 관리",
        goals: [
          { name: "운동", completed: true, badge: "/img/badge_unlock/1.png" },
          { name: "식이요법", completed: false, badge: "" },
          { name: "수면", completed: true, badge: "/img/badge_unlock/3.png" },
          { name: "스트레스 관리", completed: false, badge: "" },
          { name: "건강 관리", completed: "", badge: "/img/badge_unlock/5.png" },
          { name: "비타민 섭취", completed: false, badge: "" },
          { name: "스트레칭", completed: true, badge: "/img/badge_unlock/7.png" },
          { name: "휴식", completed: false, badge: "" },
          { name: "명상", completed: true, badge: "/img/badge_unlock/9.png" },
        ],
      },
      {
        name: "개인 개발",
        goals: [
          { name: "코딩 연습", completed: true, badge: "/img/badge_unlock/1.png" },
          { name: "독서", completed: true, badge: "/img/badge_unlock/2.png" },
          { name: "새 기술 학습", completed: false, badge: "" },
          { name: "온라인 강의 수강", completed: false, badge: "" },
          { name: "개인 개발", completed: "", badge: "" },
          { name: "포트폴리오 제작", completed: true, badge: "/img/badge_unlock/6.png" },
          { name: "네트워킹", completed: true, badge: "/img/badge_unlock/7.png" },
          { name: "프로젝트 진행", completed: true, badge: "/img/badge_unlock/8.png" },
          { name: "발표 연습", completed: true, badge: "/img/badge_unlock/9.png" },
        ],
      },
      {
        name: "건강 관리2",
        goals: [
          { name: "운동", completed: true, badge: "/img/badge_unlock/1.png" },
          { name: "식이요법", completed: false, badge: "" },
          { name: "수면", completed: true, badge: "/img/badge_unlock/3.png" },
          { name: "스트레스 관리", completed: false, badge: "" },
          { name: "건강 관리2", completed: "", badge: "" },
          { name: "비타민 섭취", completed: false, badge: "" },
          { name: "스트레칭", completed: true, badge: "/img/badge_unlock/7.png" },
          { name: "휴식", completed: false, badge: "" },
          { name: "명상", completed: true, badge: "/img/badge_unlock/9.png" },
        ],
      },
      {
        name: "사회 활동",
        goals: [
          { name: "봉사 활동", completed: true, badge: "/img/badge_unlock/1.png" },
          { name: "동호회 활동", completed: true, badge: "/img/badge_unlock/2.png" },
          { name: "친구와의 만남", completed: false, badge: "" },
          { name: "문화 행사 참여", completed: false, badge: "" },
          { name: "사회 활동", completed: "", badge: "" },
          { name: "취미 활동", completed: true, badge: "/img/badge_unlock/6.png" },
          { name: "가족 시간", completed: true, badge: "/img/badge_unlock/7.png" },
          { name: "연인과의 시간", completed: true, badge: "/img/badge_unlock/8.png" },
          { name: "새로운 사람 만나기", completed: true, badge: "/img/badge_unlock/9.png" },
        ],
      },
      {
        name: "건강 관리3",
        goals: [
          { name: "운동", completed: true, badge: "/img/badge_unlock/1.png" },
          { name: "식이요법", completed: false, badge: "" },
          { name: "수면", completed: true, badge: "/img/badge_unlock/3.png" },
          { name: "스트레스 관리", completed: false, badge: "" },
          { name: "건강 관리3", completed: "", badge: "" },
          { name: "비타민 섭취", completed: false, badge: "" },
          { name: "스트레칭", completed: true, badge: "/img/badge_unlock/7.png" },
          { name: "휴식", completed: false, badge: "" },
          { name: "명상", completed: true, badge: "/img/badge_unlock/9.png" },
        ],
      },
    ];
  }

  // 만다라트를 화면에 렌더링
  function renderMandalart(mandalart) {
    const item = document.createElement("div");
    item.classList.add("mdat-item");

    item.innerHTML = `
      <div class="mdat-item-top">
        ${mandalart.goals
          .map(
            (goal) => `
          <div class="mdat-big-goal ${goal.completed ? "completed" : ""}">
            ${goal.completed ? `<img class="goal-cap" src="${goal.badge}" alt="${goal.name}" />` : `<p>${goal.name}</p>`}
          </div>
        `
          )
          .join("")}
      </div>
      <div class="mdat-item-mid">
        <p>${mandalart.name}</p>
        <img class='name-edit-btn' src="/img/edit-btn.png" alt="edit-button"/>
      </div>
      <div class="mdat-item-bottom">
        <button class="select-btn" type="button">선택</button>
        <button class="del-btn" type="button">삭제</button>
      </div>
    `;

    mdatContent.appendChild(item);
    changePage(currentPage);
  }

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

  // 페이지 변경
  function changePage(page) {
    const allItems = mdatContent.querySelectorAll(".mdat-item");
    const totalItemNum = mandalartData.length;
    const totalPages = Math.ceil(totalItemNum / itemsPerPage);

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

    prevBtn.style.visibility = currentPage === 0 ? "hidden" : "visible";
    nextBtn.style.visibility = currentPage === totalPages - 1 ? "hidden" : "visible";
  }

  // 초기화 함수
  function init() {
    mandalartData = createTestMandalartData();
    mandalartData.forEach((mandalart) => renderMandalart(mandalart)); // 테스트 데이터로 만다라트 렌더링
    changePage(0); // 첫페이지
  }

  prevBtn.addEventListener("click", () => changePage(currentPage - 1));
  nextBtn.addEventListener("click", () => changePage(currentPage + 1));

  // 만다라트 삭제
  mdatContent.addEventListener("click", function (event) {
    if (event.target.classList.contains("del-btn")) {
      const item = event.target.closest(".mdat-item");

      if (confirm("만다라트를 삭제하시겠습니까?")) {
        item.remove();
        changePage(currentPage);
        plusIcon.src = "/img/plus-btn.png";
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

  // 플러스아이콘 클릭
  plusIcon.addEventListener("click", function () {
    renderEmptyMdat();
  });

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
    if ((checkIcon.src = "/img/check-btn.png")) {
      checkIcon.src = "/img/full-check-btn.png";
    } else {
    }
  });

  // 플러스버튼 - 새 만다라트 추가
  plusIcon.addEventListener("click", function () {
    changePage(0);
    plusIcon.src = "/img/full-plus-btn.png";
  });
});
