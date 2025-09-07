//  부드럽게 화면 내리기
  document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll(".mouse_wrap.smoothscroll");

    scrollLinks.forEach(link => {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: "smooth"
          });
        }
      });
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

