$(document).ready(function(){
    //按下行動版開啟鈕,就在body 切換 .open
    $('.mobileMenu').click(function(e){
        e.preventDefault();
        $('body').toggleClass('open');
    });

    //按下行動版關閉鈕，就在 body 切換 .open
    $('.close_mobileMenu').click(function(e){
        e.preventDefault();
        $('body').toggleClass('open');
    });

    //按下行動版選擔任一按鈕，就在body 切換 .open
    $('.offCanvas-Menu li a').click(function(){
        $('body').toggleClass('open');
    });

    $('.favorite').click(function(e){
        e.preventDefault();
        $(this).toggleClass('click_favorite');
    });
});