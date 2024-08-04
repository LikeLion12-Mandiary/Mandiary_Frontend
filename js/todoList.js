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

// 캘린더 =======================================================================

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

// 투두 ===========================================================================================

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

  // 오늘 날짜 YYYY-MM-DD
  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  // 투두리스트 목록 가져오기
  function loadTodoLists() {
    const todayDate = getTodayDate();

    fetch(API_SERVER_DOMAIN + `/todolists/date/${todayDate}/`, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        todoMid.innerHTML = ""; //목록 비우기
        data.forEach((item) => {
          addTodoToList(item.time, item.content, item.id);
        });
      })
      .catch((error) => {
        console.error("Error fetching todo-list:", error);
      });
  }

  // 투두리스트를 목록에 추가
  function addTodoToList(time, content, id) {
    const listItemDiv = document.createElement("div");
    listItemDiv.className = "list-item";
    listItemDiv.dataset.id = id; //ID
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
    // // 시간, 내용 초기화
    // addTimeInput.value = "";
    // addContInput.value = "";
    // addItem.style.display = "none";
    // addingItem = false;

    // // 플러스 아이콘 상태 변경
    // addIcon.src = "/img/plus-btn.png";
  }

  // 추가(.add-btn) 클릭했을 때 목록에 추가
  // time, content
  addBtn.addEventListener("click", function () {
    const time = addTimeInput.value.trim();
    const content = addContInput.value.trim();

    if (!time || !content) {
      alert("시간과 내용을 모두 입력해주세요.");
      return;
    }

    // 입력한 투두리스트 서버에 전송 (time, content)
    fetch(API_SERVER_DOMAIN + "/todolists/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
      body: JSON.stringify({
        date: getTodayDate(),
        time: time,
        content: content,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch");
        }
        return response.json();
      })
      .then((data) => {
        if (data.id) {
          //addTodoToList(data.time, data.content, data.id);
          addTimeInput.value = "";
          addContInput.value = "";
          addItem.style.display = "none";
          addingItem = false;
          addIcon.src = "/img/plus-btn.png";
          loadTodoLists();
        } else {
          console.log("투두리스트를 추가에 실패했습니다: " + data.message);
        }
      })
      .catch((error) => {
        console.error("Error adding todo-list:", error);
      });

    // if (time && content) {
    //   const listItemDiv = document.createElement("div");
    //   addIcon.src = "/img/plus-btn.png";

    //   listItemDiv.className = "list-item";
    //   listItemDiv.innerHTML = `
    //     <img class="todo-check" src="/img/circle.png" />
    //     <div class="todo-time">${time}</div>
    //     <div class="todo-cont">${content}</div>
    //     <img class="todo-del" src="/img/del-icon.png" style="display: none"/>
    //   `;

    //   // 투두리스트 완료 -> 체크버튼 클릭 -> 버튼 변경 & 폰트색상 변경
    //   const checkBtn = listItemDiv.querySelector(".todo-check");
    //   const todoTimeDiv = listItemDiv.querySelector(".todo-time");
    //   const todoContDiv = listItemDiv.querySelector(".todo-cont");

    //   checkBtn.addEventListener("click", function () {
    //     if (checkBtn.src.includes("circle.png")) {
    //       checkBtn.src = "/img/full-circle.png";
    //       todoTimeDiv.style.color = "#AEAEAE";
    //       todoContDiv.style.color = "#AEAEAE";
    //     } else {
    //       checkBtn.src = "/img/circle.png";
    //       todoTimeDiv.style.color = "#ff452b";
    //       todoContDiv.style.color = "#000000";
    //     }
    //   });

    //   // 목록에 추가 (시간순 정렬)
    //   const listItems = document.querySelectorAll(".list-item");
    //   let inserted = false;
    //   listItems.forEach((item) => {
    //     const itemTime = item.querySelector(".todo-time").textContent;
    //     if (time < itemTime && !inserted) {
    //       item.parentNode.insertBefore(listItemDiv, item);
    //       inserted = true;
    //     }
    //   });
    //   if (!inserted) {
    //     document.querySelector(".todo-mid").appendChild(listItemDiv);
    //   }

    //   // 시간, 내용 초기화
    //   addTimeInput.value = "";
    //   addContInput.value = "";
    //   addItem.style.display = "none";
    //   addingItem = false;
    // }
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

  // 투두리스트 삭제
  todoMid.addEventListener("click", function (event) {
    if (event.target.classList.contains("todo-del")) {
      const listItem = event.target.closest(".list-item");
      const id = listItem.dataset.id;

      if (confirm("삭제하시겠습니까?")) {
        fetch(API_SERVER_DOMAIN + `/todolists/delete/${id}/`, {
          method: "DELETE",
          headers: {
            Authorization: "Bearer " + accessToken,
          },
        })
          .then((response) => {
            if (!response.ok) {
              throw new Error("Failed to delete");
            }
            return response.json();
          })
          .then((data) => {
            if (data.success) {
              loadTodoLists();
              // listItem.remove();
            } else {
              console.log("삭제 실패:", data.message);
            }
          })
          .catch((error) => {
            console.error("투두 삭제 중 오류 발생:", error);
          });
      }
    }
  });
  loadTodoLists();
});
