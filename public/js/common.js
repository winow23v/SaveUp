$(function () {
    console.log('jQuery OK', $.fn.jquery);
    $("#year").text(new Date().getFullYear());
  
    // 모바일 메뉴 토글
    $("#navToggle").on("click", function () {
      $("#navDrawer").toggleClass("hidden");
    });
    $("#navDrawer a").on("click", function () {
      $("#navDrawer").addClass("hidden");
    });
  
    // 부드러운 스크롤
    $('a[href^="#"]').on("click", function (e) {
      const id = $(this).attr("href");
      if (!id || id === "#") return;
      const $t = $(id);
      if (!$t.length) return;
      e.preventDefault();
      $("html, body").animate({ scrollTop: $t.offset().top - 72 }, 300);
    });
  
    // 폼 전송 데모
    $("#contactForm").on("submit", function (e) {
      e.preventDefault();
      const $f = $(this);
      const name = $.trim($f.find('[name="name"]').val());
      const email = $.trim($f.find('[name="email"]').val());
      if (!name || !email) return $f.find(".form__msg").text("성함과 이메일을 입력해주세요.");
      $f[0].reset();
      $f.find(".form__msg").text("전송되었습니다. 24시간 이내 회신드릴게요!");
    });
  });
  