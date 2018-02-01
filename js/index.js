$(document).ready(function() {
    function alertModel(index) {
        new Swiper(".alertSwiper-container", {
            initialSlide: index,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            spaceBetween: 30,
            effect: 'fade'
        });
    }


    var loopStop = false;
    mainSwiper()

    function mainSwiper() {
        new Swiper(".swiper-container", {
            autoplay: 1000,
            speed: 4000,
            loop: true,
            effect: 'fade',
            fade: {
                crossFade: true
            },
            onClick: function(swiper, ev) {
                var target = ev.target;

                var parentIndex = $(target).parent().index()
                console.log($(target).parent().attr("class"))
                var index = $(target).index();
                if (!loopStop) {
                    swiper.stopAutoplay(); // 停止循环
                    loopStop = true;
                } else {
                    swiper.startAutoplay(); // 开启循环
                    loopStop = false;
                }
                $("#alertlModel").show();
                var num = (1 - (parentIndex % 2)) * 3 + index
                    // * 3 + index;
                console.log(parentIndex + ":" + num)
                alertModel(num);
            }
        });
    }
    $(".close").on("click", function() {
        swiper = null;
        $("#alertlModel").hide();
        var loopStop = false;
        mainSwiper()
    })
});