// 메뉴 열고 닫기 스크립트
$(function () {
  $("nav > ul > li").mouseenter(function () {
    $(".sub").stop().slideDown();
    $(".nav_bg").stop().slideDown();
  });

  $("nav > ul > li").mouseleave(function () {
    $(".sub").stop().slideUp();
    $(".nav_bg").stop().slideUp();
  });
});

// 헤더 고정 및 배경색 변경
document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  const body = document.querySelector("body");

  // 헤더를 항상 고정
  header.style.position = "fixed";
  header.style.top = "0";
  header.style.left = "0";
  header.style.width = "100%";
  header.style.zIndex = "1000";

  // body에 class="main"이 있을 때만 배경 색상 변경
  if (body.classList.contains("main")) {
    header.style.transition = "background 0.35s linear";

    if (window.scrollY > 0) {
      header.style.background = "#0D1639"; // 스크롤 시 배경 색상 변경
    } else {
      header.style.background = "initial"; // 원래 배경 색상으로 복귀
    }
  }
});

// 스크롤 애니메이션 (요소에 .show 클래스 추가)
document.addEventListener("DOMContentLoaded", function () {
  const targets = document.querySelectorAll(".main_con2, .main_con3, .main_con4, .main_con5");

  const handleScroll = () => {
    targets.forEach((target) => {
      const rect = target.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight - 100 && !target.classList.contains("show")) {
        target.classList.add("show");
      }
    });
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // 페이지 로드 시 초기 상태 확인
});

// Swiper 슬라이드
document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper-container", {
    loop: true, // 무한 루프
    slidesPerView: "auto", // 슬라이드 너비는 CSS에서 정의
    spaceBetween: 30, // 슬라이드 간 간격
    grabCursor: true, // 마우스 커서 활성화
    autoplay: {
      delay: 4000, // 자동 슬라이드 딜레이
      disableOnInteraction: false, // 상호작용 후에도 자동 슬라이드 유지
    },
    navigation: {
      nextEl: ".main_news_btn .next", // 다음 버튼
      prevEl: ".main_news_btn .prev", // 이전 버튼
    },
  });
});

// 맨 위로 이동 버튼 (Quick 버튼)
document.addEventListener("DOMContentLoaded", function () {
  const btnQuick = document.querySelector(".btn_quick"); // 버튼 요소

  // 스크롤 이벤트로 버튼 표시/숨김
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // 스크롤 위치가 300px 이상일 때 버튼 표시
      btnQuick.style.display = "block";
    } else {
      btnQuick.style.display = "none"; // 맨 위에 있을 때 버튼 숨김
    }
  });

  // 버튼 클릭 이벤트
  btnQuick.addEventListener("click", function () {
    window.scrollTo({
      top: 0, // 맨 위로 이동
      behavior: "smooth", // 부드럽게 이동
    });
  });

  // 초기 상태 체크 (맨 위에서 페이지 로드 시 숨김)
  if (window.scrollY === 0) {
    btnQuick.style.display = "none";
  }
});

//모바일 메뉴
document.addEventListener("DOMContentLoaded", function () {
  const btnToggle = document.querySelector(".btn_toggle"); // .btn_toggle 버튼 선택
  const body = document.body; // body 요소 선택

  // 버튼 클릭 이벤트
  btnToggle.addEventListener("click", function () {
    body.classList.toggle("menu_on"); // class="menu_on" 추가/제거
  });
});