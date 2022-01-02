$(document).ready(function () {

    if (window.matchMedia("(max-width: 1280px)").matches) {


        $('.slide_wrap').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows:true,
            dots:false,
            autoplay: false,
          });


          $('.app_wrap').slick({
            autoplay:true,
            dots:false,
            arrows:false,
            slidesToShow:2,
            slidesToScroll:1,
            infinite:true,
        });


        $('.appdetail').hide();


        $('.app_wrap').click(function(){
        
            $('.appdetail').show();
            $('.appdetail').click(function(){
                $('.appdetail').hide();
            })
        })
        $('.detail_wrap li dl').hide();
        $('.detail_wrap li').mouseover(function(){
            $(this).children('img').css('opacity','0.2')
            $(this).children('dl').show();
        })/* end */
        $('.detail_wrap li').mouseleave(function(){
            $(this).children('img').css('opacity','1');
            $(this).children('dl').hide();
        })
        
    } else {

    }
    /*     ★ 스크롤 트리거 */
    $(window).scroll(function () {
        $('.ani_stop').each(function (i) {
            var bottom_of_object = $(this).offset().top + $(this).outerHeight() * .3;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            if (bottom_of_window > bottom_of_object) {
                $(this).removeClass('ani_stop');
            }
            if (bottom_of_window < bottom_of_object) {
                $(this).addClass('ani_stop');
            }
        });
    });

    /* 스크롤 트리거 \애니메이트 */



    $('.depth2').hide();

    $('.gnb li').mouseenter(function () {
        $(this).children('.depth2').slideDown(1000);
    })
    $('.gnb li').mouseleave(function () {
        $(this).children('.depth2').slideUp();
    })

    /* gnb 영역 호버 이벤트 */

    $('.slide_wrap').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows:true,
        dots:false,
        autoplay: false,
      });
      
      $('.guide').colorbox({closeButton:false,overlayClose:true,iframe:true,width:'80%',height:'100%'});
      $('.poster').colorbox({closeButton:true,overlayClose:true,iframe:true,width:'80%',height:'100%'});

    $('.app_wrap').slick({
        autoplay:true,
        dots:false,
        arrows:false,
        slidesToShow:4,
        slidesToScroll:1,
        infinite:true
    })
    $('.detail_wrap li dl').hide();
    $('.appdetail').hide();
    $('.detail_wrap li').mouseover(function(){
        $(this).children('img').css('opacity','0.2')
        $(this).children('dl').show();
    })/* end */
    $('.detail_wrap li').mouseleave(function(){
        $(this).children('img').css('opacity','1');
        $(this).children('dl').hide();
    })







})/* end */