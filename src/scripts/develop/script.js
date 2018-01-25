function formButton() {

    var formUp = $('.header-contact');
    var rightBox = $('#right-box');

    function close(){

        formUp.css('opacity','1', 500);
        rightBox.animate({right: '-360px'}, 500);
    };

    $('.form-up').on('click', function(e){

        var w = ($(window).width() - $('.mbox').width()) / 2;

        e.stopPropagation();
        e.preventDefault();

        if ($(window).height() < 750 ) {

            $.fancybox.open({
                src  : "#call-popup",
                type : '',
            });

        } else if($(window).height() > 750) {

            formUp.css('opacity','0', 500);
            rightBox.animate({right: w}, 500);

        }
    });

    $('.close-button').on('click', function(){

        close();
    });

    rightBox.on('click', function(e){

        e.stopPropagation();
    });

    $(document).on('click', function(e){

        close();
    });
};

function menuButton() {

    var flag = 0;

    $('.logo-button').on('click', function(e){

        // e.preventDefault();

        if ($(window).width() < 517 && flag === 0) {

            e.preventDefault();
            $('.nav-manu').animate({left: '13px'}, 500);

            flag = 1;

        } else if($(window).width() < 517 && flag === 1) {

            e.preventDefault();
            $('.nav-manu').animate({left: '-295px'}, 500);

            flag = 0;

        };
    });
};

function tabsTabs() {

    var tab = $('#section5 .item-tab');
    var tab2 = $('#section-Q-and-A .item-tab');

    if ($(window).width() < 480) {

        tab.on('click', function(){

            if ($(this).hasClass('tab-active')) {
                return false;
            } else {
                tab.removeClass('tab-active').find('.text-box p').slideUp("slow");
                $(this).addClass('tab-active').find('.text-box p').slideDown("slow");
            }
        });
    };

    tab2.on('click', function(){

        if ($(this).hasClass('question-active')) {
            return false;
        } else {
            tab2.removeClass('question-active').find('.text-box p').slideUp("slow");
            $(this).addClass('question-active').find('.text-box p').slideDown("slow");
        }
    });

};


$(document).ready(function(){

   formButton();
   menuButton();
   tabsTabs();
   $('.js_popup').fancybox();

});

$(window).load(function(){

});

$(window).resize(function(){

});