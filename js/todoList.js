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

  // const todayDate = today.getDate();
  // const todayMonth = today.getMonth();
  // const todayYear = today.getFullYear();

  // const calendarDates = dates.map((date, i) => {
  //   const isToday = todayDate === date && viewMonth === todayMonth && viewYear === todayYear;
  //   return `<div class="date${isToday ? " today" : ""}">${date}</div>`;
  // });

  dates.forEach((date, i) => {
    dates[i] = `<div class="date">${date}</div>`;
  });
  document.querySelector(".cal-dates").innerHTML = dates.join("");
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

// 투두

document.addEventListener("DOMContentLoaded", function () {
  const addItem = document.querySelector(".add-item");
  const addIcon = document.getElementById("todo-add-icon");
  const editIcon = document.getElementById("todo-edit-icon");
  const addTimeInput = document.querySelector(".add-time");
  const addContInput = document.querySelector(".add-cont");
  const delIcon = document.querySelector(".todo-del");

  const addIconSVG1 = `
		<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M13 0C5.8357 0 0 5.8357 0 13C0 20.1643 5.8357 26 13 26C20.1643 26 26 20.1643 26 13C26 5.8357 20.1643 0 13 0ZM13 2.6C18.7592 2.6 23.4 7.24084 23.4 13C23.4 18.7592 18.7592 23.4 13 23.4C7.24084 23.4 2.6 18.7592 2.6 13C2.6 7.24084 7.24084 2.6 13 2.6ZM11.7 6.5V11.7H6.5V14.3H11.7V19.5H14.3V14.3H19.5V11.7H14.3V6.5H11.7Z" fill="#AEAEAE"/>
		</svg>
	`;

  const addIconSVG2 = `
		<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
  		<path d="M13 0C5.8201 0 0 5.8201 0 13C0 20.1799 5.8201 26 13 26C20.1799 26 26 20.1799 26 13C26 5.8201 20.1799 0 13 0ZM19.5 14.3H14.3V19.5H11.7V14.3H6.5V11.7H11.7V6.5H14.3V11.7H19.5V14.3Z" fill="#666666"/>
		</svg>
	`;

  const editIconSVG1 = `
		<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.84526 23.1507H4.83693L17.1071 10.863L15.1154 8.86849L2.84526 21.1562V23.1507ZM23.1888 8.79726L17.1427 2.8137L19.1343 0.819178C19.6797 0.273059 20.3497 0 21.1445 0C21.9383 0 22.6079 0.273059 23.1533 0.819178L25.1449 2.8137C25.6903 3.35982 25.9748 4.01896 25.9985 4.79112C26.0222 5.56234 25.7614 6.221 25.2161 6.76712L23.1888 8.79726ZM21.126 10.8986L6.04617 26H0V19.9452L15.0799 4.84384L21.126 10.8986ZM16.1113 9.86575L15.1154 8.86849L17.1071 10.863L16.1113 9.86575Z" fill="#AEAEAE"/>
		</svg>
	`;

  const editIconSVG2 = `
		<svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
			<path d="M2.84526 23.1507H4.83693L17.1071 10.863L15.1154 8.86849L2.84526 21.1562V23.1507ZM23.1888 8.79726L17.1427 2.8137L19.1343 0.819178C19.6797 0.273059 20.3497 0 21.1445 0C21.9383 0 22.6079 0.273059 23.1533 0.819178L25.1449 2.8137C25.6903 3.35982 25.9748 4.01896 25.9985 4.79112C26.0222 5.56234 25.7614 6.221 25.2161 6.76712L23.1888 8.79726ZM21.126 10.8986L6.04617 26H0V19.9452L15.0799 4.84384L21.126 10.8986ZM16.1113 9.86575L15.1154 8.86849L17.1071 10.863L16.1113 9.86575Z" fill="black"/>
		</svg>
	`;

  // 추가 아이콘 클릭했을 때
  addIcon.addEventListener("click", function () {
    if (addItem.style.display === "none" || addItem.style.display === "") {
      addItem.style.display = "flex";
      addIcon.innerHTML = addIconSVG2;
      editIcon.innerHTML = editIconSVG1;
    } else {
      addItem.style.display = "none";
      addIcon.innerHTML = addIconSVG1;

      //시간, 내용 초기화
      addTimeInput.value = "";
      addContInput.value = "";
    }
  });

  //편집 아이콘 클릭했을 때
  editIcon.addEventListener("click", function () {
    if (delIcon.style.display === "none" || delIcon.style.display === "") {
      delIcon.style.display = "block";
      editIcon.innerHTML = editIconSVG2;
    } else {
      delIcon.style.display = "none";
      editIcon.innerHTML = editIconSVG1;
    }

    addItem.style.display = "none";
    addIcon.innerHTML = addIconSVG1;

    //시간, 내용 초기화
    // addTimeInput.value = "";
    // addContInput.value = "";
  });
});
