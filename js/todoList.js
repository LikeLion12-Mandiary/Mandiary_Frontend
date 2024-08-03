// 캘린더

// 날짜 가져오기
let date = new Date();

const renderCalender = () => {
  const viewYear = date.getFullYear();
  const viewMonth = date.getMonth();
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  // month-year
  document.querySelector(".month-year").textContent = `${months[viewMonth]} ${viewYear}`;

  const prevLast = new Date(viewYear, viewMonth, 0);
  const thisLast = new Date(viewYear, viewMonth + 1, 0);

  const PLDate = prevLast.getDate(); // 지난달 마지막 날짜
  const PLDay = prevLast.getDay(); // 지난달 마지막 요일

  const TLDate = thisLast.getDate(); // 이번달 마지막 날짜
  const TLDay = thisLast.getDay(); // 이번달 마지막 요일

  // 날짜 저장 배열
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1);
  const nextDates = [];

  // prevDates 계산
  if (PLDay !== 6) {
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i);
    }
  }

  // nextDates 계산
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  // Dates 합치기
  const dates = prevDates.concat(thisDates, nextDates);

  const today = new Date();
  const todayDate = today.getDate();
  const todayMonth = today.getMonth();
  const todayYear = today.getFullYear();

  const calendarDates = dates.map((date, i) => {
    const isToday = todayDate === date && viewMonth === todayMonth && viewYear === todayYear;
    return `<div class="date${isToday ? " today" : ""}">${date}</div>`;
  });

  document.querySelector(".cal-dates").innerHTML = calendarDates.join("");
};

renderCalender();

const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  renderCalender();
};

const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  renderCalender();
};

// goToday
// const goToday = () => {
//   date = new Date();
//   renderCalender();
// };

//------------------------------------------------------------------------------------------------
// 투두

document.addEventListener("DOMContentLoaded", function () {
  const addItem = document.querySelector(".add-item");
  const addIcon = document.getElementById("todo-add-icon");
  const editIcon = document.getElementById("todo-edit-icon");
  const addTimeInput = document.querySelector(".add-time");
  const addContInput = document.querySelector(".add-cont");
  const delIcon = document.querySelector(".todo-del");
  const addBtn = document.querySelector(".add-btn");
  const todoMid = document.querySelector(".todo-mid");

  let addingItem = false;
  let editingMode = false;

  // 플러스아이콘(#todo-add-icon) 클릭했을 때 입력창 토글
  addIcon.addEventListener("click", function () {
    addingItem = !addingItem;
    addItem.style.display = addingItem ? "flex" : "none";
    addIcon.src = addingItem ? "/img/full-plus-btn.png" : "/img/plus-btn.png";
    addTimeInput.value = "";
    addContInput.value = "";

    // 삭제 버튼 숨기기
    const delIcon2 = document.querySelectorAll(".todo-del");
    delIcon2.forEach((icon) => {
      icon.style.display = "none";
    });
  });

  // 추가(.add-btn) 클릭했을 때 목록에 추가
  // time, content
  addBtn.addEventListener("click", function () {
    const time = addTimeInput.value.trim();
    const content = addContInput.value.trim();

    if (!time || !content) {
      alert("시간과 내용을 모두 입력해주세요.");
      return;
    }

    if (time && content) {
      const listItemDiv = document.createElement("div");
      addIcon.src = "/img/plus-btn.png";

      listItemDiv.className = "list-item";
      listItemDiv.innerHTML = `
        <img class="todo-check" src="/img/circle.png" />
        <div class="todo-time">${time}</div>
        <div class="todo-cont">${content}</div>
        <img class="todo-del" src="/img/del-icon.png" style="display: none"/>
      `;

      // 투두리스트 완료 -> 체크버튼 클릭 -> 버튼 변경 & 폰트색상 변경
      const checkBtn = listItemDiv.querySelector(".todo-check");
      const todoTimeDiv = listItemDiv.querySelector(".todo-time");
      const todoContDiv = listItemDiv.querySelector(".todo-cont");

      checkBtn.addEventListener("click", function () {
        if (checkBtn.src.includes("circle.png")) {
          checkBtn.src = "/img/full-circle.png";
          todoTimeDiv.style.color = "#AEAEAE";
          todoContDiv.style.color = "#AEAEAE";
        } else {
          checkBtn.src = "/img/circle.png";
          todoTimeDiv.style.color = "#ff452b";
          todoContDiv.style.color = "#000000";
        }
      });

      // 목록에 추가 (시간순 정렬)
      const listItems = document.querySelectorAll(".list-item");
      let inserted = false;
      listItems.forEach((item) => {
        const itemTime = item.querySelector(".todo-time").textContent;
        if (time < itemTime && !inserted) {
          item.parentNode.insertBefore(listItemDiv, item);
          inserted = true;
        }
      });
      if (!inserted) {
        document.querySelector(".todo-mid").appendChild(listItemDiv);
      }

      // 시간, 내용 초기화
      addTimeInput.value = "";
      addContInput.value = "";
      addItem.style.display = "none";
      addingItem = false;
    }
  });

  // 편집 아이콘 클릭했을 때
  editIcon.addEventListener("click", function () {
    const delIcons = document.querySelectorAll(".todo-del");
    delIcons.forEach((icon) => {
      icon.style.display =
        icon.style.display === "none" || icon.style.display === "" ? "block" : "none";
    });

    editingMode = !editingMode;
    editIcon.src = editingMode ? "/img/full-edit-btn.png" : "/img/big-edit-btn.png";
  });

  todoMid.addEventListener("click", function (event) {
    if (event.target.classList.contains("todo-del")) {
      event.target.closest(".list-item").remove();
    }
  });
});
