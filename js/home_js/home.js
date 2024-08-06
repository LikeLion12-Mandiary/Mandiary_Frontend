// textarea 수직정렬
const textarea = document.getElementsByTagName("textarea");

for (var i = 0; i < textarea.length; i++) {
  textarea[i].oninput = (event) => {
    const target = event.target;
    target.style.height = 0;
    target.style.height = target.scrollHeight + "px";
  };
}

// center 목표 입력 값 가져와서 sub-center 목표에 출력

// center 목표
var center1 = document.getElementById("center1");
var center2 = document.getElementById("center2");
var center3 = document.getElementById("center3");
var center4 = document.getElementById("center4");
var centerGoal = document.getElementById("center-goal");
var center5 = document.getElementById("center5");
var center6 = document.getElementById("center6");
var center7 = document.getElementById("center7");
var center8 = document.getElementById("center8");

// sub 목표
const subCenter = document.querySelectorAll(".sub-center");
var subCenter1 = subCenter[0];
var subCenter2 = subCenter[1];
var subCenter3 = subCenter[2];
var subCenter4 = subCenter[3];
var subCenter5 = subCenter[4];
var subCenter6 = subCenter[5];
var subCenter7 = subCenter[6];
var subCenter8 = subCenter[7];

center1.onkeyup = function () {
  window.localStorage.setItem("center1", this.value);
  subCenter1.innerHTML = `<span>${this.value}</span>`;
};

center2.onkeyup = function () {
  window.localStorage.setItem("center2", this.value);
  subCenter2.innerHTML = `<span>${this.value}</span>`;
};

center3.onkeyup = function () {
  window.localStorage.setItem("center3", this.value);
  subCenter3.innerHTML = `<span>${this.value}</span>`;
};

center4.onkeyup = function () {
  window.localStorage.setItem("center4", this.value);
  subCenter4.innerHTML = `<span>${this.value}</span>`;
};

// 중앙 목표
centerGoal.onkeyup = function () {
  window.localStorage.setItem("centerGoal", this.value);
};

center5.onkeyup = function () {
  window.localStorage.setItem("center5", this.value);
  subCenter5.innerHTML = `<span>${this.value}</span>`;
};

center6.onkeyup = function () {
  window.localStorage.setItem("center6", this.value);
  subCenter6.innerHTML = `<span>${this.value}</span>`;
};

center7.onkeyup = function () {
  window.localStorage.setItem("center7", this.value);
  subCenter7.innerHTML = `<span>${this.value}</span>`;
};

center8.onkeyup = function () {
  window.localStorage.setItem("center8", this.value);
  subCenter8.innerHTML = `<span>${this.value}</span>`;
};

const centerDiv = document.querySelectorAll(".centerDiv");

// 페이지 로드 시 localStorage에 저장된 값 로드
window.onload = function () {
  var center1Text = window.localStorage.getItem("center1"); // 백에 보내기
  if (center1Text) {
    center1.textContent = center1Text; // 백에서 받아온걸로 넣기
    center1.style.height = center1.scrollHeight + "px";
    subCenter1.innerHTML = `<span>${center1Text}</span>`; // 백에서 받아온걸로 넣기
    if (alarms1 == 9) {
      subCenter1.style.backgroundColor = "#FF452B";
      subCenter1.style.cursor = "pointer";
      subCenter1.innerHTML = `<span>CLICK!</span>`;
    }
  }

  var center2Text = window.localStorage.getItem("center2"); // 백에 보내기
  if (center2Text) {
    center2.textContent = center2Text; // 백에서 받아온걸로 넣기
    center2.style.height = center2.scrollHeight + "px";
    subCenter2.innerHTML = `<span>${center2Text}</span>`; // 백에서 받아온걸로 넣기
    if (alarms2 == 9) {
      subCenter2.style.backgroundColor = "#FF452B";
      subCenter2.style.cursor = "pointer";
      subCenter2.innerHTML = `<span>CLICK!</span>`;
    }
  }

  var center3Text = window.localStorage.getItem("center3"); // 백에 보내기
  if (center3Text) {
    center3.textContent = center3Text; // 백에서 받아온걸로 넣기
    center3.style.height = center3.scrollHeight + "px";
    subCenter3.innerHTML = `<span>${center3Text}</span>`; // 백에서 받아온걸로 넣기
    if (alarms3 == 9) {
      subCenter3.style.backgroundColor = "#FF452B";
      subCenter3.style.cursor = "pointer";
      subCenter3.innerHTML = `<span>CLICK!</span>`;
    }
  }

  var center4Text = window.localStorage.getItem("center4"); // 백에 보내기
  if (center4Text) {
    center4.textContent = center4Text; // 백에서 받아온걸로 넣기
    center4.style.height = center4.scrollHeight + "px";
    subCenter4.innerHTML = `<span>${center4Text}</span>`; // 백에서 받아온걸로 넣기
    if (alarms4 == 9) {
      subCenter4.style.backgroundColor = "#FF452B";
      subCenter4.style.cursor = "pointer";
      subCenter4.innerHTML = `<span>CLICK!</span>`;
    }
  }

  // 중앙 목표
  var centerGoalText = window.localStorage.getItem("centerGoal"); // 백에 보내기 (페이지 이동할때?)
  if (centerGoalText) {
    centerGoal.textContent = centerGoalText; // 백에서 받아온걸로 넣기
    centerGoal.style.height = centerGoal.scrollHeight + "px";
  }

  var center5Text = window.localStorage.getItem("center5"); // 백에 보내기
  if (center5Text) {
    center5.textContent = center5Text; // 백에서 받아온걸로 넣기
    center5.style.height = center5.scrollHeight + "px";
    subCenter5.innerHTML = `<span>${center5Text}</span>`; // 백에서 받아온걸로 넣기
    if (alarms5 == 9) {
      subCenter5.style.backgroundColor = "#FF452B";
      subCenter5.style.cursor = "pointer";
      subCenter5.innerHTML = `<span>CLICK!</span>`;
    }
  }

  var center6Text = window.localStorage.getItem("center6"); // 백에 보내기
  if (center6Text) {
    center6.textContent = center6Text; // 백에서 받아온걸로 넣기
    center6.style.height = center6.scrollHeight + "px";
    subCenter6.innerHTML = `<span>${center6Text}</span>`; // 백에서 받아온걸로 넣기
    if (alarms6 == 9) {
      subCenter6.style.backgroundColor = "#FF452B";
      subCenter6.style.cursor = "pointer";
      subCenter6.innerHTML = `<span>CLICK!</span>`;
    }
  }

  var center7Text = window.localStorage.getItem("center7"); // 백에 보내기
  if (center7Text) {
    center7.textContent = center7Text; // 백에서 받아온걸로 넣기
    center7.style.height = center7.scrollHeight + "px";
    subCenter7.innerHTML = `<span>${center7Text}</span>`; // 백에서 받아온걸로 넣기
    if (alarms7 == 9) {
      subCenter7.style.backgroundColor = "#FF452B";
      subCenter7.style.cursor = "pointer";
      subCenter7.innerHTML = `<span>CLICK!</span>`;
    }
  }

  var center8Text = window.localStorage.getItem("center8"); // 백에 보내기
  if (center8Text) {
    center8.textContent = center8Text; // 백에서 받아온걸로 넣기
    center8.style.height = center8.scrollHeight + "px";
    subCenter8.innerHTML = `<span>${center8Text}</span>`; // 백에서 받아온걸로 넣기
    if (alarms8 == 9) {
      subCenter8.style.backgroundColor = "#FF452B";
      subCenter8.style.cursor = "pointer";
      subCenter8.innerHTML = `<span>CLICK!</span>`;
    }
  }

  var centerSuccessCount = 0; // 배지 해금 개수 (CLICK! 태그 개수)

  // 배지 선택 화면으로 이동
  if (subCenter1.innerText == "CLICK!") {
    subCenter1.addEventListener("click", () => {
      location.href = "/html/select-badge.html";
    });

    centerSuccessCount += 1;
  }

  if (subCenter2.innerText == "CLICK!") {
    subCenter2.addEventListener("click", () => {
      location.href = "/html/select-badge.html";
    });

    centerSuccessCount += 1;
  }

  if (subCenter3.innerText == "CLICK!") {
    subCenter3.addEventListener("click", () => {
      location.href = "/html/select-badge.html";
    });

    centerSuccessCount += 1;
  }

  if (subCenter4.innerText == "CLICK!") {
    subCenter4.addEventListener("click", () => {
      location.href = "/html/select-badge.html";
    });

    centerSuccessCount += 1;
  }

  if (subCenter5.innerText == "CLICK!") {
    subCenter5.addEventListener("click", () => {
      location.href = "/html/select-badge.html";
    });

    centerSuccessCount += 1;
  }

  if (subCenter6.innerText == "CLICK!") {
    subCenter6.addEventListener("click", () => {
      location.href = "/html/select-badge.html";
    });

    centerSuccessCount += 1;
  }

  if (subCenter7.innerText == "CLICK!") {
    subCenter7.addEventListener("click", () => {
      location.href = "/html/select-badge.html";
    });

    centerSuccessCount += 1;
  }

  if (subCenter8.innerText == "CLICK!") {
    subCenter8.addEventListener("click", () => {
      location.href = "/html/select-badge.html";
    });

    centerSuccessCount += 1;
  }

  window.localStorage.setItem("badgeUnlockCount", centerSuccessCount); // 백에 보내기

  // 배지
  var badge1 = window.localStorage.getItem("badge1");
  if (badge1) {
    subCenter1.getElementsByTagName("span")[0].remove();
    subCenter1.style.backgroundColor = "transparent";
    subCenter1.style.setProperty("--after-bg-image", badge1);

    // 중앙에도 배지 추가
    centerDiv[0].style.backgroundColor = "transparent";
    centerDiv[0].style.setProperty("--after-bg-image", badge1);

    // 마우스 hover -> 배경 어둡게, 일 달성완료! 추가
    subCenter1.addEventListener("mouseover", () => {
      subCenter1.style.setProperty("--filter", "brightness(35%)");
      subCenter1.innerHTML = `<span>${center1Text}</span>`;
      const p = document.createElement("p");
      p.innerText = "달성완료!";
      subCenter1.appendChild(p);
    });

    subCenter1.addEventListener("mouseout", () => {
      subCenter1.style.setProperty("--filter", "");
      subCenter1.getElementsByTagName("span")[0].remove();
      subCenter1.getElementsByTagName("p")[0].remove();
    });

    // 마우스 이벤트 막기
    const subGoals = document.querySelectorAll(".sub");
    subGoals[0].style.setProperty("--pointer", "none");
    subCenter1.style.setProperty("--pointerSubcenter", "auto");

    // 가운데 목표 입력 막기
    center1.readOnly = "true";

    // 알람 삭제하고 전제적으로 어두워지게
    for (var i = 0; i < 8; i++) {
      subGoals[0].querySelectorAll(".alarm")[0].remove();
    }
    for (var i = 0; i < 8; i++) {
      subArr[0][i].style.backgroundColor = "#595959";
      if (subArr[0][i].getElementsByTagName("span")[0]) {
        subArr[0][i].getElementsByTagName("span")[0].style.color = "#FFFFFF";
      }
    }
  }

  var badge2 = window.localStorage.getItem("badge2");
  if (badge2) {
    subCenter2.getElementsByTagName("span")[0].remove();
    subCenter2.style.backgroundColor = "transparent";
    subCenter2.style.setProperty("--after-bg-image", badge2);

    centerDiv[1].style.backgroundColor = "transparent";
    centerDiv[1].style.setProperty("--after-bg-image", badge2);

    subCenter2.addEventListener("mouseover", () => {
      subCenter2.style.setProperty("--filter", "brightness(35%)");
      subCenter2.innerHTML = `<span>${center2Text}</span>`;
      const p = document.createElement("p");
      p.innerText = "달성완료!";
      subCenter2.appendChild(p);
    });

    subCenter2.addEventListener("mouseout", () => {
      subCenter2.style.setProperty("--filter", "");
      subCenter2.getElementsByTagName("span")[0].remove();
      subCenter2.getElementsByTagName("p")[0].remove();
    });

    const subGoals = document.querySelectorAll(".sub");
    subGoals[1].style.setProperty("--pointer", "none");
    subCenter2.style.setProperty("--pointerSubcenter", "auto");

    center2.readOnly = "true";

    for (var i = 0; i < 8; i++) {
      subGoals[1].querySelectorAll(".alarm")[0].remove();
    }
    for (var i = 0; i < 8; i++) {
      subArr[1][i].style.backgroundColor = "#595959";
      if (subArr[1][i].getElementsByTagName("span")[0]) {
        subArr[1][i].getElementsByTagName("span")[0].style.color = "#FFFFFF";
      }
    }
  }

  var badge3 = window.localStorage.getItem("badge3");
  if (badge3) {
    subCenter3.getElementsByTagName("span")[0].remove();
    subCenter3.style.backgroundColor = "transparent";
    subCenter3.style.setProperty("--after-bg-image", badge3);

    centerDiv[2].style.backgroundColor = "transparent";
    centerDiv[2].style.setProperty("--after-bg-image", badge3);

    subCenter3.addEventListener("mouseover", () => {
      subCenter3.style.setProperty("--filter", "brightness(35%)");
      subCenter3.innerHTML = `<span>${center3Text}</span>`;
      const p = document.createElement("p");
      p.innerText = "달성완료!";
      subCenter3.appendChild(p);
    });

    subCenter3.addEventListener("mouseout", () => {
      subCenter3.style.setProperty("--filter", "");
      subCenter3.getElementsByTagName("span")[0].remove();
      subCenter3.getElementsByTagName("p")[0].remove();
    });

    const subGoals = document.querySelectorAll(".sub");
    subGoals[2].style.setProperty("--pointer", "none");
    subCenter3.style.setProperty("--pointerSubcenter", "auto");

    center3.readOnly = "true";

    for (var i = 0; i < 8; i++) {
      subGoals[2].querySelectorAll(".alarm")[0].remove();
    }
    for (var i = 0; i < 8; i++) {
      subArr[2][i].style.backgroundColor = "#595959";
      if (subArr[2][i].getElementsByTagName("span")[0]) {
        subArr[2][i].getElementsByTagName("span")[0].style.color = "#FFFFFF";
      }
    }
  }

  var badge4 = window.localStorage.getItem("badge4");
  if (badge4) {
    subCenter4.getElementsByTagName("span")[0].remove();
    subCenter4.style.backgroundColor = "transparent";
    subCenter4.style.setProperty("--after-bg-image", badge4);

    centerDiv[3].style.backgroundColor = "transparent";
    centerDiv[3].style.setProperty("--after-bg-image", badge4);

    subCenter4.addEventListener("mouseover", () => {
      subCenter4.style.setProperty("--filter", "brightness(35%)");
      subCenter4.innerHTML = `<span>${center4Text}</span>`;
      const p = document.createElement("p");
      p.innerText = "달성완료!";
      subCenter4.appendChild(p);
    });

    subCenter4.addEventListener("mouseout", () => {
      subCenter4.style.setProperty("--filter", "");
      subCenter4.getElementsByTagName("span")[0].remove();
      subCenter4.getElementsByTagName("p")[0].remove();
    });

    const subGoals = document.querySelectorAll(".sub");
    subGoals[3].style.setProperty("--pointer", "none");
    subCenter4.style.setProperty("--pointerSubcenter", "auto");

    center4.readOnly = "true";

    for (var i = 0; i < 8; i++) {
      subGoals[3].querySelectorAll(".alarm")[0].remove();
    }
    for (var i = 0; i < 8; i++) {
      subArr[3][i].style.backgroundColor = "#595959";
      if (subArr[3][i].getElementsByTagName("span")[0]) {
        subArr[3][i].getElementsByTagName("span")[0].style.color = "#FFFFFF";
      }
    }
  }

  var badge5 = window.localStorage.getItem("badge5");
  if (badge5) {
    subCenter5.getElementsByTagName("span")[0].remove();
    subCenter5.style.backgroundColor = "transparent";
    subCenter5.style.setProperty("--after-bg-image", badge5);

    centerDiv[4].style.backgroundColor = "transparent";
    centerDiv[4].style.setProperty("--after-bg-image", badge5);

    subCenter5.addEventListener("mouseover", () => {
      subCenter5.style.setProperty("--filter", "brightness(35%)");
      subCenter5.innerHTML = `<span>${center5Text}</span>`;
      const p = document.createElement("p");
      p.innerText = "달성완료!";
      subCenter5.appendChild(p);
    });

    subCenter5.addEventListener("mouseout", () => {
      subCenter5.style.setProperty("--filter", "");
      subCenter5.getElementsByTagName("span")[0].remove();
      subCenter5.getElementsByTagName("p")[0].remove();
    });

    const subGoals = document.querySelectorAll(".sub");
    subGoals[4].style.setProperty("--pointer", "none");
    subCenter5.style.setProperty("--pointerSubcenter", "auto");

    center5.readOnly = "true";

    for (var i = 0; i < 8; i++) {
      subGoals[4].querySelectorAll(".alarm")[0].remove();
    }
    for (var i = 0; i < 8; i++) {
      subArr[4][i].style.backgroundColor = "#595959";
      if (subArr[4][i].getElementsByTagName("span")[0]) {
        subArr[4][i].getElementsByTagName("span")[0].style.color = "#FFFFFF";
      }
    }
  }

  var badge6 = window.localStorage.getItem("badge6");
  if (badge6) {
    subCenter6.getElementsByTagName("span")[0].remove();
    subCenter6.style.backgroundColor = "transparent";
    subCenter6.style.setProperty("--after-bg-image", badge6);

    centerDiv[5].style.backgroundColor = "transparent";
    centerDiv[5].style.setProperty("--after-bg-image", badge6);

    subCenter6.addEventListener("mouseover", () => {
      subCenter6.style.setProperty("--filter", "brightness(35%)");
      subCenter6.innerHTML = `<span>${center6Text}</span>`;
      const p = document.createElement("p");
      p.innerText = "달성완료!";
      subCenter6.appendChild(p);
    });

    subCenter6.addEventListener("mouseout", () => {
      subCenter6.style.setProperty("--filter", "");
      subCenter6.getElementsByTagName("span")[0].remove();
      subCenter6.getElementsByTagName("p")[0].remove();
    });

    const subGoals = document.querySelectorAll(".sub");
    subGoals[5].style.setProperty("--pointer", "none");
    subCenter6.style.setProperty("--pointerSubcenter", "auto");

    center6.readOnly = "true";

    for (var i = 0; i < 8; i++) {
      subGoals[5].querySelectorAll(".alarm")[0].remove();
    }
    for (var i = 0; i < 8; i++) {
      subArr[5][i].style.backgroundColor = "#595959";
      if (subArr[5][i].getElementsByTagName("span")[0]) {
        subArr[5][i].getElementsByTagName("span")[0].style.color = "#FFFFFF";
      }
    }
  }

  var badge7 = window.localStorage.getItem("badge7");
  if (badge7) {
    subCenter7.getElementsByTagName("span")[0].remove();
    subCenter7.style.backgroundColor = "transparent";
    subCenter7.style.setProperty("--after-bg-image", badge7);

    centerDiv[6].style.backgroundColor = "transparent";
    centerDiv[6].style.setProperty("--after-bg-image", badge7);

    subCenter7.addEventListener("mouseover", () => {
      subCenter7.style.setProperty("--filter", "brightness(35%)");
      subCenter7.innerHTML = `<span>${center7Text}</span>`;
      const p = document.createElement("p");
      p.innerText = "달성완료!";
      subCenter7.appendChild(p);
    });

    subCenter7.addEventListener("mouseout", () => {
      subCenter7.style.setProperty("--filter", "");
      subCenter7.getElementsByTagName("span")[0].remove();
      subCenter7.getElementsByTagName("p")[0].remove();
    });

    const subGoals = document.querySelectorAll(".sub");
    subGoals[6].style.setProperty("--pointer", "none");
    subCenter7.style.setProperty("--pointerSubcenter", "auto");

    center7.readOnly = "true";

    for (var i = 0; i < 8; i++) {
      subGoals[6].querySelectorAll(".alarm")[0].remove();
    }
    for (var i = 0; i < 8; i++) {
      subArr[6][i].style.backgroundColor = "#595959";
      if (subArr[6][i].getElementsByTagName("span")[0]) {
        subArr[6][i].getElementsByTagName("span")[0].style.color = "#FFFFFF";
      }
    }
  }

  var badge8 = window.localStorage.getItem("badge8");
  if (badge8) {
    subCenter8.getElementsByTagName("span")[0].remove();
    subCenter8.style.backgroundColor = "transparent";
    subCenter8.style.setProperty("--after-bg-image", badge8);

    centerDiv[7].style.backgroundColor = "transparent";
    centerDiv[7].style.setProperty("--after-bg-image", badge8);

    subCenter8.addEventListener("mouseover", () => {
      subCenter8.style.setProperty("--filter", "brightness(35%)");
      subCenter8.innerHTML = `<span>${center8Text}</span>`;
      const p = document.createElement("p");
      p.innerText = "달성완료!";
      subCenter8.appendChild(p);
    });

    subCenter8.addEventListener("mouseout", () => {
      subCenter8.style.setProperty("--filter", "");
      subCenter8.getElementsByTagName("span")[0].remove();
      subCenter8.getElementsByTagName("p")[0].remove();
    });

    const subGoals = document.querySelectorAll(".sub");
    subGoals[7].style.setProperty("--pointer", "none");
    subCenter8.style.setProperty("--pointerSubcenter", "auto");

    center8.readOnly = "true";

    for (var i = 0; i < 8; i++) {
      subGoals[7].querySelectorAll(".alarm")[0].remove();
    }
    for (var i = 0; i < 8; i++) {
      subArr[7][i].style.backgroundColor = "#595959";
      if (subArr[7][i].getElementsByTagName("span")[0]) {
        subArr[7][i].getElementsByTagName("span")[0].style.color = "#FFFFFF";
      }
    }
  }
};

// 클릭한 목표 goal-input에 띄우도록 localStorage에 저장
// 2차원 배열 사용
const subGoals = document.querySelectorAll(".sub");

const sub1s = document.querySelectorAll(".sub1");
const sub2s = document.querySelectorAll(".sub2");
const sub3s = document.querySelectorAll(".sub3");
const sub4s = document.querySelectorAll(".sub4");
const sub5s = document.querySelectorAll(".sub5");
const sub6s = document.querySelectorAll(".sub6");
const sub7s = document.querySelectorAll(".sub7");
const sub8s = document.querySelectorAll(".sub8");

const subArr = [
  [
    sub1s[0],
    sub2s[0],
    sub3s[0],
    sub4s[0],
    sub5s[0],
    sub6s[0],
    sub7s[0],
    sub8s[0],
  ],
  [
    sub1s[1],
    sub2s[1],
    sub3s[1],
    sub4s[1],
    sub5s[1],
    sub6s[1],
    sub7s[1],
    sub8s[1],
  ],
  [
    sub1s[2],
    sub2s[2],
    sub3s[2],
    sub4s[2],
    sub5s[2],
    sub6s[2],
    sub7s[2],
    sub8s[2],
  ],
  [
    sub1s[3],
    sub2s[3],
    sub3s[3],
    sub4s[3],
    sub5s[3],
    sub6s[3],
    sub7s[3],
    sub8s[3],
  ],
  [
    sub1s[4],
    sub2s[4],
    sub3s[4],
    sub4s[4],
    sub5s[4],
    sub6s[4],
    sub7s[4],
    sub8s[4],
  ],
  [
    sub1s[5],
    sub2s[5],
    sub3s[5],
    sub4s[5],
    sub5s[5],
    sub6s[5],
    sub7s[5],
    sub8s[5],
  ],
  [
    sub1s[6],
    sub2s[6],
    sub3s[6],
    sub4s[6],
    sub5s[6],
    sub6s[6],
    sub7s[6],
    sub8s[6],
  ],
  [
    sub1s[7],
    sub2s[7],
    sub3s[7],
    sub4s[7],
    sub5s[7],
    sub6s[7],
    sub7s[7],
    sub8s[7],
  ],
];

// console.log(subArr[0][0].innerText); // 그림연구

subGoals[0].addEventListener("click", () => {
  window.localStorage.setItem(
    "centerText",
    window.localStorage.getItem("center1")
  );

  // 서브 목표 문자열 저장
  window.localStorage.setItem("sub1", subArr[0][0].innerText);
  window.localStorage.setItem("sub2", subArr[0][1].innerText);
  window.localStorage.setItem("sub3", subArr[0][2].innerText);
  window.localStorage.setItem("sub4", subArr[0][3].innerText);
  window.localStorage.setItem("sub5", subArr[0][4].innerText);
  window.localStorage.setItem("sub6", subArr[0][5].innerText);
  window.localStorage.setItem("sub7", subArr[0][6].innerText);
  window.localStorage.setItem("sub8", subArr[0][7].innerText);

  // 서브 목표 달성 여부 저장
  window.localStorage.setItem("sub1success", sub1_1_success);
  window.localStorage.setItem("sub2success", sub1_2_success);
  window.localStorage.setItem("sub3success", sub1_3_success);
  window.localStorage.setItem("sub4success", sub1_4_success);
  window.localStorage.setItem("sub5success", sub1_5_success);
  window.localStorage.setItem("sub6success", sub1_6_success);
  window.localStorage.setItem("sub7success", sub1_7_success);
  window.localStorage.setItem("sub8success", sub1_8_success);

  // 이미지 저장
  window.localStorage.setItem("sub1image", sub1_1_image);
  window.localStorage.setItem("sub2image", sub1_2_image);
  window.localStorage.setItem("sub3image", sub1_3_image);
  window.localStorage.setItem("sub4image", sub1_4_image);
  window.localStorage.setItem("sub5image", sub1_5_image);
  window.localStorage.setItem("sub6image", sub1_6_image);
  window.localStorage.setItem("sub7image", sub1_7_image);
  window.localStorage.setItem("sub8image", sub1_8_image);

  window.localStorage.setItem("goalNum", 1);
});

subGoals[1].addEventListener("click", () => {
  window.localStorage.setItem(
    "centerText",
    window.localStorage.getItem("center2")
  );

  window.localStorage.setItem("sub1", subArr[1][0].innerText);
  window.localStorage.setItem("sub2", subArr[1][1].innerText);
  window.localStorage.setItem("sub3", subArr[1][2].innerText);
  window.localStorage.setItem("sub4", subArr[1][3].innerText);
  window.localStorage.setItem("sub5", subArr[1][4].innerText);
  window.localStorage.setItem("sub6", subArr[1][5].innerText);
  window.localStorage.setItem("sub7", subArr[1][6].innerText);
  window.localStorage.setItem("sub8", subArr[1][7].innerText);

  window.localStorage.setItem("sub1success", sub2_1_success);
  window.localStorage.setItem("sub2success", sub2_2_success);
  window.localStorage.setItem("sub3success", sub2_3_success);
  window.localStorage.setItem("sub4success", sub2_4_success);
  window.localStorage.setItem("sub5success", sub2_5_success);
  window.localStorage.setItem("sub6success", sub2_6_success);
  window.localStorage.setItem("sub7success", sub2_7_success);
  window.localStorage.setItem("sub8success", sub2_8_success);

  window.localStorage.setItem("sub1image", sub2_1_image);
  window.localStorage.setItem("sub2image", sub2_2_image);
  window.localStorage.setItem("sub3image", sub2_3_image);
  window.localStorage.setItem("sub4image", sub2_4_image);
  window.localStorage.setItem("sub5image", sub2_5_image);
  window.localStorage.setItem("sub6image", sub2_6_image);
  window.localStorage.setItem("sub7image", sub2_7_image);
  window.localStorage.setItem("sub8image", sub2_8_image);

  window.localStorage.setItem("goalNum", 2);
});

subGoals[2].addEventListener("click", () => {
  window.localStorage.setItem(
    "centerText",
    window.localStorage.getItem("center3")
  );

  window.localStorage.setItem("sub1", subArr[2][0].innerText);
  window.localStorage.setItem("sub2", subArr[2][1].innerText);
  window.localStorage.setItem("sub3", subArr[2][2].innerText);
  window.localStorage.setItem("sub4", subArr[2][3].innerText);
  window.localStorage.setItem("sub5", subArr[2][4].innerText);
  window.localStorage.setItem("sub6", subArr[2][5].innerText);
  window.localStorage.setItem("sub7", subArr[2][6].innerText);
  window.localStorage.setItem("sub8", subArr[2][7].innerText);

  window.localStorage.setItem("sub1success", sub3_1_success);
  window.localStorage.setItem("sub2success", sub3_2_success);
  window.localStorage.setItem("sub3success", sub3_3_success);
  window.localStorage.setItem("sub4success", sub3_4_success);
  window.localStorage.setItem("sub5success", sub3_5_success);
  window.localStorage.setItem("sub6success", sub3_6_success);
  window.localStorage.setItem("sub7success", sub3_7_success);
  window.localStorage.setItem("sub8success", sub3_8_success);

  window.localStorage.setItem("sub1image", sub3_1_image);
  window.localStorage.setItem("sub2image", sub3_2_image);
  window.localStorage.setItem("sub3image", sub3_3_image);
  window.localStorage.setItem("sub4image", sub3_4_image);
  window.localStorage.setItem("sub5image", sub3_5_image);
  window.localStorage.setItem("sub6image", sub3_6_image);
  window.localStorage.setItem("sub7image", sub3_7_image);
  window.localStorage.setItem("sub8image", sub3_8_image);

  window.localStorage.setItem("goalNum", 3);
});

subGoals[3].addEventListener("click", () => {
  window.localStorage.setItem(
    "centerText",
    window.localStorage.getItem("center4")
  );

  window.localStorage.setItem("sub1", subArr[3][0].innerText);
  window.localStorage.setItem("sub2", subArr[3][1].innerText);
  window.localStorage.setItem("sub3", subArr[3][2].innerText);
  window.localStorage.setItem("sub4", subArr[3][3].innerText);
  window.localStorage.setItem("sub5", subArr[3][4].innerText);
  window.localStorage.setItem("sub6", subArr[3][5].innerText);
  window.localStorage.setItem("sub7", subArr[3][6].innerText);
  window.localStorage.setItem("sub8", subArr[3][7].innerText);

  window.localStorage.setItem("sub1success", sub4_1_success);
  window.localStorage.setItem("sub2success", sub4_2_success);
  window.localStorage.setItem("sub3success", sub4_3_success);
  window.localStorage.setItem("sub4success", sub4_4_success);
  window.localStorage.setItem("sub5success", sub4_5_success);
  window.localStorage.setItem("sub6success", sub4_6_success);
  window.localStorage.setItem("sub7success", sub4_7_success);
  window.localStorage.setItem("sub8success", sub4_8_success);

  window.localStorage.setItem("sub1image", sub4_1_image);
  window.localStorage.setItem("sub2image", sub4_2_image);
  window.localStorage.setItem("sub3image", sub4_3_image);
  window.localStorage.setItem("sub4image", sub4_4_image);
  window.localStorage.setItem("sub5image", sub4_5_image);
  window.localStorage.setItem("sub6image", sub4_6_image);
  window.localStorage.setItem("sub7image", sub4_7_image);
  window.localStorage.setItem("sub8image", sub4_8_image);

  window.localStorage.setItem("goalNum", 4);
});

subGoals[4].addEventListener("click", () => {
  window.localStorage.setItem(
    "centerText",
    window.localStorage.getItem("center5")
  );

  window.localStorage.setItem("sub1", subArr[4][0].innerText);
  window.localStorage.setItem("sub2", subArr[4][1].innerText);
  window.localStorage.setItem("sub3", subArr[4][2].innerText);
  window.localStorage.setItem("sub4", subArr[4][3].innerText);
  window.localStorage.setItem("sub5", subArr[4][4].innerText);
  window.localStorage.setItem("sub6", subArr[4][5].innerText);
  window.localStorage.setItem("sub7", subArr[4][6].innerText);
  window.localStorage.setItem("sub8", subArr[4][7].innerText);

  window.localStorage.setItem("sub1success", sub5_1_success);
  window.localStorage.setItem("sub2success", sub5_2_success);
  window.localStorage.setItem("sub3success", sub5_3_success);
  window.localStorage.setItem("sub4success", sub5_4_success);
  window.localStorage.setItem("sub5success", sub5_5_success);
  window.localStorage.setItem("sub6success", sub5_6_success);
  window.localStorage.setItem("sub7success", sub5_7_success);
  window.localStorage.setItem("sub8success", sub5_8_success);

  window.localStorage.setItem("sub1image", sub5_1_image);
  window.localStorage.setItem("sub2image", sub5_2_image);
  window.localStorage.setItem("sub3image", sub5_3_image);
  window.localStorage.setItem("sub4image", sub5_4_image);
  window.localStorage.setItem("sub5image", sub5_5_image);
  window.localStorage.setItem("sub6image", sub5_6_image);
  window.localStorage.setItem("sub7image", sub5_7_image);
  window.localStorage.setItem("sub8image", sub5_8_image);

  window.localStorage.setItem("goalNum", 5);
});

subGoals[5].addEventListener("click", () => {
  window.localStorage.setItem(
    "centerText",
    window.localStorage.getItem("center6")
  );

  window.localStorage.setItem("sub1", subArr[5][0].innerText);
  window.localStorage.setItem("sub2", subArr[5][1].innerText);
  window.localStorage.setItem("sub3", subArr[5][2].innerText);
  window.localStorage.setItem("sub4", subArr[5][3].innerText);
  window.localStorage.setItem("sub5", subArr[5][4].innerText);
  window.localStorage.setItem("sub6", subArr[5][5].innerText);
  window.localStorage.setItem("sub7", subArr[5][6].innerText);
  window.localStorage.setItem("sub8", subArr[5][7].innerText);

  window.localStorage.setItem("sub1success", sub6_1_success);
  window.localStorage.setItem("sub2success", sub6_2_success);
  window.localStorage.setItem("sub3success", sub6_3_success);
  window.localStorage.setItem("sub4success", sub6_4_success);
  window.localStorage.setItem("sub5success", sub6_5_success);
  window.localStorage.setItem("sub6success", sub6_6_success);
  window.localStorage.setItem("sub7success", sub6_7_success);
  window.localStorage.setItem("sub8success", sub6_8_success);

  window.localStorage.setItem("sub1image", sub6_1_image);
  window.localStorage.setItem("sub2image", sub6_2_image);
  window.localStorage.setItem("sub3image", sub6_3_image);
  window.localStorage.setItem("sub4image", sub6_4_image);
  window.localStorage.setItem("sub5image", sub6_5_image);
  window.localStorage.setItem("sub6image", sub6_6_image);
  window.localStorage.setItem("sub7image", sub6_7_image);
  window.localStorage.setItem("sub8image", sub6_8_image);

  window.localStorage.setItem("goalNum", 6);
});

subGoals[6].addEventListener("click", () => {
  window.localStorage.setItem(
    "centerText",
    window.localStorage.getItem("center7")
  );

  window.localStorage.setItem("sub1", subArr[6][0].innerText);
  window.localStorage.setItem("sub2", subArr[6][1].innerText);
  window.localStorage.setItem("sub3", subArr[6][2].innerText);
  window.localStorage.setItem("sub4", subArr[6][3].innerText);
  window.localStorage.setItem("sub5", subArr[6][4].innerText);
  window.localStorage.setItem("sub6", subArr[6][5].innerText);
  window.localStorage.setItem("sub7", subArr[6][6].innerText);
  window.localStorage.setItem("sub8", subArr[6][7].innerText);

  window.localStorage.setItem("sub1success", sub7_1_success);
  window.localStorage.setItem("sub2success", sub7_2_success);
  window.localStorage.setItem("sub3success", sub7_3_success);
  window.localStorage.setItem("sub4success", sub7_4_success);
  window.localStorage.setItem("sub5success", sub7_5_success);
  window.localStorage.setItem("sub6success", sub7_6_success);
  window.localStorage.setItem("sub7success", sub7_7_success);
  window.localStorage.setItem("sub8success", sub7_8_success);

  window.localStorage.setItem("sub1image", sub7_1_image);
  window.localStorage.setItem("sub2image", sub7_2_image);
  window.localStorage.setItem("sub3image", sub7_3_image);
  window.localStorage.setItem("sub4image", sub7_4_image);
  window.localStorage.setItem("sub5image", sub7_5_image);
  window.localStorage.setItem("sub6image", sub7_6_image);
  window.localStorage.setItem("sub7image", sub7_7_image);
  window.localStorage.setItem("sub8image", sub7_8_image);

  window.localStorage.setItem("goalNum", 7);
});

subGoals[7].addEventListener("click", () => {
  window.localStorage.setItem(
    "centerText",
    window.localStorage.getItem("center8")
  );

  window.localStorage.setItem("sub1", subArr[7][0].innerText);
  window.localStorage.setItem("sub2", subArr[7][1].innerText);
  window.localStorage.setItem("sub3", subArr[7][2].innerText);
  window.localStorage.setItem("sub4", subArr[7][3].innerText);
  window.localStorage.setItem("sub5", subArr[7][4].innerText);
  window.localStorage.setItem("sub6", subArr[7][5].innerText);
  window.localStorage.setItem("sub7", subArr[7][6].innerText);
  window.localStorage.setItem("sub8", subArr[7][7].innerText);

  window.localStorage.setItem("sub1success", sub8_1_success);
  window.localStorage.setItem("sub2success", sub8_2_success);
  window.localStorage.setItem("sub3success", sub8_3_success);
  window.localStorage.setItem("sub4success", sub8_4_success);
  window.localStorage.setItem("sub5success", sub8_5_success);
  window.localStorage.setItem("sub6success", sub8_6_success);
  window.localStorage.setItem("sub7success", sub8_7_success);
  window.localStorage.setItem("sub8success", sub8_8_success);

  window.localStorage.setItem("sub1image", sub8_1_image);
  window.localStorage.setItem("sub2image", sub8_2_image);
  window.localStorage.setItem("sub3image", sub8_3_image);
  window.localStorage.setItem("sub4image", sub8_4_image);
  window.localStorage.setItem("sub5image", sub8_5_image);
  window.localStorage.setItem("sub6image", sub8_6_image);
  window.localStorage.setItem("sub7image", sub8_7_image);
  window.localStorage.setItem("sub8image", sub8_8_image);

  window.localStorage.setItem("goalNum", 8);
});
