// 배지 초기 세팅
const goalCenter = document.querySelector(".goal-center");
goalCenter.style.setProperty(
  "--after-bg-image",
  "url(/img/badge_unlock/1.png)"
);
goalCenter.style.setProperty("--size", "205px 192px");
goalCenter.style.setProperty("--position", "-6px -2px");

if (window.localStorage.getItem("goalNum") == 1) {
  window.localStorage.setItem("badge1", "url(/img/badge_unlock/1.png)");
} else if (window.localStorage.getItem("goalNum") == 2) {
  window.localStorage.setItem("badge2", "url(/img/badge_unlock/1.png)");
} else if (window.localStorage.getItem("goalNum") == 3) {
  window.localStorage.setItem("badge3", "url(/img/badge_unlock/1.png)");
} else if (window.localStorage.getItem("goalNum") == 4) {
  window.localStorage.setItem("badge4", "url(/img/badge_unlock/1.png)");
} else if (window.localStorage.getItem("goalNum") == 5) {
  window.localStorage.setItem("badge5", "url(/img/badge_unlock/1.png)");
} else if (window.localStorage.getItem("goalNum") == 6) {
  window.localStorage.setItem("badge6", "url(/img/badge_unlock/1.png)");
} else if (window.localStorage.getItem("goalNum") == 7) {
  window.localStorage.setItem("badge7", "url(/img/badge_unlock/1.png)");
} else if (window.localStorage.getItem("goalNum") == 8) {
  window.localStorage.setItem("badge8", "url(/img/badge_unlock/1.png)");
}

// 배지 선택
const badge1 = document.getElementById("badge-1");
const badge2 = document.getElementById("badge-2");
const badge3 = document.getElementById("badge-3");
const badge4 = document.getElementById("badge-4");
const badge5 = document.getElementById("badge-5");
const badge6 = document.getElementById("badge-6");
const badge7 = document.getElementById("badge-7");
const badge8 = document.getElementById("badge-8");
const badge9 = document.getElementById("badge-9");

badge1.addEventListener("click", () => {
  goalCenter.style.setProperty(
    "--after-bg-image",
    "url(/img/badge_unlock/1.png)"
  );
  goalCenter.style.setProperty("--size", "205px 192px");
  goalCenter.style.setProperty("--position", "-6px -2px");

  if (window.localStorage.getItem("goalNum") == 1) {
    window.localStorage.setItem("badge1", "url(/img/badge_unlock/1.png)");
  } else if (window.localStorage.getItem("goalNum") == 2) {
    window.localStorage.setItem("badge2", "url(/img/badge_unlock/1.png)");
  } else if (window.localStorage.getItem("goalNum") == 3) {
    window.localStorage.setItem("badge3", "url(/img/badge_unlock/1.png)");
  } else if (window.localStorage.getItem("goalNum") == 4) {
    window.localStorage.setItem("badge4", "url(/img/badge_unlock/1.png)");
  } else if (window.localStorage.getItem("goalNum") == 5) {
    window.localStorage.setItem("badge5", "url(/img/badge_unlock/1.png)");
  } else if (window.localStorage.getItem("goalNum") == 6) {
    window.localStorage.setItem("badge6", "url(/img/badge_unlock/1.png)");
  } else if (window.localStorage.getItem("goalNum") == 7) {
    window.localStorage.setItem("badge7", "url(/img/badge_unlock/1.png)");
  } else if (window.localStorage.getItem("goalNum") == 8) {
    window.localStorage.setItem("badge8", "url(/img/badge_unlock/1.png)");
  }
});

badge2.addEventListener("click", () => {
  goalCenter.style.setProperty(
    "--after-bg-image",
    "url(/img/badge_unlock/2.png)"
  );
  goalCenter.style.setProperty("--size", "180px 180px");
  goalCenter.style.setProperty("--position", "0px 2px");

  if (window.localStorage.getItem("goalNum") == 1) {
    window.localStorage.setItem("badge1", "url(/img/badge_unlock/2.png)");
  } else if (window.localStorage.getItem("goalNum") == 2) {
    window.localStorage.setItem("badge2", "url(/img/badge_unlock/2.png)");
  } else if (window.localStorage.getItem("goalNum") == 3) {
    window.localStorage.setItem("badge3", "url(/img/badge_unlock/2.png)");
  } else if (window.localStorage.getItem("goalNum") == 4) {
    window.localStorage.setItem("badge4", "url(/img/badge_unlock/2.png)");
  } else if (window.localStorage.getItem("goalNum") == 5) {
    window.localStorage.setItem("badge5", "url(/img/badge_unlock/2.png)");
  } else if (window.localStorage.getItem("goalNum") == 6) {
    window.localStorage.setItem("badge6", "url(/img/badge_unlock/2.png)");
  } else if (window.localStorage.getItem("goalNum") == 7) {
    window.localStorage.setItem("badge7", "url(/img/badge_unlock/2.png)");
  } else if (window.localStorage.getItem("goalNum") == 8) {
    window.localStorage.setItem("badge8", "url(/img/badge_unlock/2.png)");
  }
});

badge3.addEventListener("click", () => {
  goalCenter.style.setProperty(
    "--after-bg-image",
    "url(/img/badge_unlock/3.png)"
  );
  goalCenter.style.setProperty("--size", "180px 177px");
  goalCenter.style.setProperty("--position", "4px 3px");

  if (window.localStorage.getItem("goalNum") == 1) {
    window.localStorage.setItem("badge1", "url(/img/badge_unlock/3.png)");
  } else if (window.localStorage.getItem("goalNum") == 2) {
    window.localStorage.setItem("badge2", "url(/img/badge_unlock/3.png)");
  } else if (window.localStorage.getItem("goalNum") == 3) {
    window.localStorage.setItem("badge3", "url(/img/badge_unlock/3.png)");
  } else if (window.localStorage.getItem("goalNum") == 4) {
    window.localStorage.setItem("badge4", "url(/img/badge_unlock/3.png)");
  } else if (window.localStorage.getItem("goalNum") == 5) {
    window.localStorage.setItem("badge5", "url(/img/badge_unlock/3.png)");
  } else if (window.localStorage.getItem("goalNum") == 6) {
    window.localStorage.setItem("badge6", "url(/img/badge_unlock/3.png)");
  } else if (window.localStorage.getItem("goalNum") == 7) {
    window.localStorage.setItem("badge7", "url(/img/badge_unlock/3.png)");
  } else if (window.localStorage.getItem("goalNum") == 8) {
    window.localStorage.setItem("badge8", "url(/img/badge_unlock/3.png)");
  }
});

badge4.addEventListener("click", () => {
  goalCenter.style.setProperty(
    "--after-bg-image",
    "url(/img/badge_unlock/4.png)"
  );
  goalCenter.style.setProperty("--size", "190px 180px");
  goalCenter.style.setProperty("--position", "-1px -1px");

  if (window.localStorage.getItem("goalNum") == 1) {
    window.localStorage.setItem("badge1", "url(/img/badge_unlock/4.png)");
  } else if (window.localStorage.getItem("goalNum") == 2) {
    window.localStorage.setItem("badge2", "url(/img/badge_unlock/4.png)");
  } else if (window.localStorage.getItem("goalNum") == 3) {
    window.localStorage.setItem("badge3", "url(/img/badge_unlock/4.png)");
  } else if (window.localStorage.getItem("goalNum") == 4) {
    window.localStorage.setItem("badge4", "url(/img/badge_unlock/4.png)");
  } else if (window.localStorage.getItem("goalNum") == 5) {
    window.localStorage.setItem("badge5", "url(/img/badge_unlock/4.png)");
  } else if (window.localStorage.getItem("goalNum") == 6) {
    window.localStorage.setItem("badge6", "url(/img/badge_unlock/4.png)");
  } else if (window.localStorage.getItem("goalNum") == 7) {
    window.localStorage.setItem("badge7", "url(/img/badge_unlock/4.png)");
  } else if (window.localStorage.getItem("goalNum") == 8) {
    window.localStorage.setItem("badge8", "url(/img/badge_unlock/4.png)");
  }
});

badge5.addEventListener("click", () => {
  goalCenter.style.setProperty(
    "--after-bg-image",
    "url(/img/badge_unlock/5.png)"
  );
  goalCenter.style.setProperty("--size", "180px 180px");
  goalCenter.style.setProperty("--position", "0px 2px");

  if (window.localStorage.getItem("goalNum") == 1) {
    window.localStorage.setItem("badge1", "url(/img/badge_unlock/5.png)");
  } else if (window.localStorage.getItem("goalNum") == 2) {
    window.localStorage.setItem("badge2", "url(/img/badge_unlock/5.png)");
  } else if (window.localStorage.getItem("goalNum") == 3) {
    window.localStorage.setItem("badge3", "url(/img/badge_unlock/5.png)");
  } else if (window.localStorage.getItem("goalNum") == 4) {
    window.localStorage.setItem("badge4", "url(/img/badge_unlock/5.png)");
  } else if (window.localStorage.getItem("goalNum") == 5) {
    window.localStorage.setItem("badge5", "url(/img/badge_unlock/5.png)");
  } else if (window.localStorage.getItem("goalNum") == 6) {
    window.localStorage.setItem("badge6", "url(/img/badge_unlock/5.png)");
  } else if (window.localStorage.getItem("goalNum") == 7) {
    window.localStorage.setItem("badge7", "url(/img/badge_unlock/5.png)");
  } else if (window.localStorage.getItem("goalNum") == 8) {
    window.localStorage.setItem("badge8", "url(/img/badge_unlock/5.png)");
  }
});

badge6.addEventListener("click", () => {
  goalCenter.style.setProperty(
    "--after-bg-image",
    "url(/img/badge_unlock/6.png)"
  );
  goalCenter.style.setProperty("--size", "187px 184px");
  goalCenter.style.setProperty("--position", "-6px 2px");

  if (window.localStorage.getItem("goalNum") == 1) {
    window.localStorage.setItem("badge1", "url(/img/badge_unlock/6.png)");
  } else if (window.localStorage.getItem("goalNum") == 2) {
    window.localStorage.setItem("badge2", "url(/img/badge_unlock/6.png)");
  } else if (window.localStorage.getItem("goalNum") == 3) {
    window.localStorage.setItem("badge3", "url(/img/badge_unlock/6.png)");
  } else if (window.localStorage.getItem("goalNum") == 4) {
    window.localStorage.setItem("badge4", "url(/img/badge_unlock/6.png)");
  } else if (window.localStorage.getItem("goalNum") == 5) {
    window.localStorage.setItem("badge5", "url(/img/badge_unlock/6.png)");
  } else if (window.localStorage.getItem("goalNum") == 6) {
    window.localStorage.setItem("badge6", "url(/img/badge_unlock/6.png)");
  } else if (window.localStorage.getItem("goalNum") == 7) {
    window.localStorage.setItem("badge7", "url(/img/badge_unlock/6.png)");
  } else if (window.localStorage.getItem("goalNum") == 8) {
    window.localStorage.setItem("badge8", "url(/img/badge_unlock/6.png)");
  }
});

badge7.addEventListener("click", () => {
  goalCenter.style.setProperty(
    "--after-bg-image",
    "url(/img/badge_unlock/7.png)"
  );
  goalCenter.style.setProperty("--size", "200px 190px");
  goalCenter.style.setProperty("--position", "-15px 2px");

  if (window.localStorage.getItem("goalNum") == 1) {
    window.localStorage.setItem("badge1", "url(/img/badge_unlock/7.png)");
  } else if (window.localStorage.getItem("goalNum") == 2) {
    window.localStorage.setItem("badge2", "url(/img/badge_unlock/7.png)");
  } else if (window.localStorage.getItem("goalNum") == 3) {
    window.localStorage.setItem("badge3", "url(/img/badge_unlock/7.png)");
  } else if (window.localStorage.getItem("goalNum") == 4) {
    window.localStorage.setItem("badge4", "url(/img/badge_unlock/7.png)");
  } else if (window.localStorage.getItem("goalNum") == 5) {
    window.localStorage.setItem("badge5", "url(/img/badge_unlock/7.png)");
  } else if (window.localStorage.getItem("goalNum") == 6) {
    window.localStorage.setItem("badge6", "url(/img/badge_unlock/7.png)");
  } else if (window.localStorage.getItem("goalNum") == 7) {
    window.localStorage.setItem("badge7", "url(/img/badge_unlock/7.png)");
  } else if (window.localStorage.getItem("goalNum") == 8) {
    window.localStorage.setItem("badge8", "url(/img/badge_unlock/7.png)");
  }
});

badge8.addEventListener("click", () => {
  goalCenter.style.setProperty(
    "--after-bg-image",
    "url(/img/badge_unlock/8.png)"
  );
  goalCenter.style.setProperty("--size", "185px 185px");
  goalCenter.style.setProperty("--position", "0px -1px");

  if (window.localStorage.getItem("goalNum") == 1) {
    window.localStorage.setItem("badge1", "url(/img/badge_unlock/8.png)");
  } else if (window.localStorage.getItem("goalNum") == 2) {
    window.localStorage.setItem("badge2", "url(/img/badge_unlock/8.png)");
  } else if (window.localStorage.getItem("goalNum") == 3) {
    window.localStorage.setItem("badge3", "url(/img/badge_unlock/8.png)");
  } else if (window.localStorage.getItem("goalNum") == 4) {
    window.localStorage.setItem("badge4", "url(/img/badge_unlock/8.png)");
  } else if (window.localStorage.getItem("goalNum") == 5) {
    window.localStorage.setItem("badge5", "url(/img/badge_unlock/8.png)");
  } else if (window.localStorage.getItem("goalNum") == 6) {
    window.localStorage.setItem("badge6", "url(/img/badge_unlock/8.png)");
  } else if (window.localStorage.getItem("goalNum") == 7) {
    window.localStorage.setItem("badge7", "url(/img/badge_unlock/8.png)");
  } else if (window.localStorage.getItem("goalNum") == 8) {
    window.localStorage.setItem("badge8", "url(/img/badge_unlock/8.png)");
  }
});

badge9.addEventListener("click", () => {
  goalCenter.style.setProperty(
    "--after-bg-image",
    "url(/img/badge_unlock/9.png)"
  );
  goalCenter.style.setProperty("--size", "185px 182px");
  goalCenter.style.setProperty("--position", "-3px 1px");

  if (window.localStorage.getItem("goalNum") == 1) {
    window.localStorage.setItem("badge1", "url(/img/badge_unlock/9.png)");
  } else if (window.localStorage.getItem("goalNum") == 2) {
    window.localStorage.setItem("badge2", "url(/img/badge_unlock/9.png)");
  } else if (window.localStorage.getItem("goalNum") == 3) {
    window.localStorage.setItem("badge3", "url(/img/badge_unlock/9.png)");
  } else if (window.localStorage.getItem("goalNum") == 4) {
    window.localStorage.setItem("badge4", "url(/img/badge_unlock/9.png)");
  } else if (window.localStorage.getItem("goalNum") == 5) {
    window.localStorage.setItem("badge5", "url(/img/badge_unlock/9.png)");
  } else if (window.localStorage.getItem("goalNum") == 6) {
    window.localStorage.setItem("badge6", "url(/img/badge_unlock/9.png)");
  } else if (window.localStorage.getItem("goalNum") == 7) {
    window.localStorage.setItem("badge7", "url(/img/badge_unlock/9.png)");
  } else if (window.localStorage.getItem("goalNum") == 8) {
    window.localStorage.setItem("badge8", "url(/img/badge_unlock/9.png)");
  }
});
