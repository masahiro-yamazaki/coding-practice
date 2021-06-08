// ハンバーガーメニュー
var mediaQuery = window.matchMedia('(min-width: 768px)');
handle(mediaQuery);
mediaQuery.addListener(handle);

function handle(mq) {
    if (mq.matches) {
        $("#nav-content").show();
        $(".nav_btn").on("click", function () {
            $("#nav-content").show();
        });
    } else {
        $("#nav-content").hide();
        $(".nav_btn").on("click", function () {
            $("#nav-open").removeClass("active");
            $("#nav-content").removeClass("open").fadeOut(0);
        });
    }
}

$(function () {
    $("#nav-open").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $("#nav-content").removeClass("open").fadeOut(0);
        } else {
            $(this).addClass("active");
            $("#nav-content").fadeIn(0).addClass("open");
            $("#nav-content").show();
        }
    });
});