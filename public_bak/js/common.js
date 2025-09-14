/* 기본 인터랙션 & 폼 처리 */
$(function () {
    // 현재 연도
    $("#year").text(new Date().getFullYear());
  
    // 모바일 메뉴 토글
    $(".nav__toggle").on("click", function () {
      $(this).closest(".nav").toggleClass("open");
    });
  
    // 부드러운 스크롤
    $('a[href^="#"]').on("click", function (e) {
      const target = $($(this).attr("href"));
      if (target.length) {
        e.preventDefault();
        $("html, body").animate({ scrollTop: target.offset().top - 72 }, 300);
        $(".nav").removeClass("open");
      }
    });
  
    // 간단한 폼 검증 & 전송(데모)
    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
      const $form = $(this);
      const name = $.trim($form.find('[name="name"]').val());
      const email = $.trim($form.find('[name="email"]').val());
      const msg = $.trim($form.find('[name="message"]').val());
  
      if (!name || !email) {
        return $form.find(".form__msg").text("성함과 이메일을 입력해주세요.");
      }
      // 실제 전송 로직: fetch('/api/contact', { method:'POST', body: JSON.stringify({...}) })
      $form[0].reset();
      $form.find(".form__msg").text("전송되었습니다. 24시간 이내 회신드릴게요!");
    });
  
    // (선택) 스크롤 시 헤더 그림자
    const $header = $(".site-header");
    $(window).on("scroll", function () {
      $header.toggleClass("scrolled", window.scrollY > 8);
    });
  });

  $(function () {
    console.log('jQuery OK', $.fn.jquery); // ← 콘솔에서 버전 출력되어야 정상
    // ... (이하 기존 코드)
  });
  
  