'use strict';

/**
* Check scroll-bar width
* exemple ->   let scroll = $.scrollbarWidth();
*/
$.scrollbarWidth = function () {
    var a, b, c;if (c === undefined) {
        a = $('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo('body');b = a.children();c = b.innerWidth() - b.height(99).innerWidth();a.remove();
    }return c;
};

/**
* Scroll to the block
* @param {block} str - For what we click
* @param {targetBlock} str - to what we should scroll
*/
function scrollUp(block, targetBlock) {
    $(block).click(function (e) {
        var target = $(targetBlock).offset().top;

        $('body,html').stop().animate({ scrollTop: target }, 800);
        return false;

        e.preventDefault();
    });
}

/**
* Scroll animation
* @param {item} jquery obj - Wrapper for class 'animate-it';
*/
function animationBlock(item) {

    $(window).scroll(function () {
        checkForAnimate();
    });

    function checkForAnimate() {
        var bottomCheck = $(window).height() + $(window).scrollTop();
        var windowTop = $(window).scrollTop() + $(window).height() / 1.5;
        item.each(function () {
            if (windowTop > $(this).offset().top || bottomCheck > $('body').height() * 0.98) {

                var itemSect = $(this);
                var point = 0;
                itemSect.find('.animate-it').addClass('animated');

                var timer = setInterval(function () {
                    itemSect.find('.animate-delay').eq(point).addClass('animated');
                    point++;
                    if (itemSect.find('.animate-delay').length == point) {
                        clearInterval(timer);
                    }
                }, 200);
            }
        });
    }
    checkForAnimate();
}

/**
* GO TO href (smooth)
*/
function goTo() {
    $('a.GoTo').click(function (e) {
        e.preventDefault();
        var href = $(this).attr('href');
        var target = $(href).offset().top - 10;
        $('body,html').animate({ scrollTop: target }, 800);
    });
}

/**
* Cut text script
* (Add to  div class "cut-text" width data-attr "data-cut"(length letters to show) )
*/
function cutText() {
    var filler = '...';
    var filler_length = filler.length;
    $('.cut-text').each(function () {
        var value = $(this).data('cut') - filler_length;
        var text = $.trim($(this).text());
        if (text.length > value && value > 0) {
            var newText = text.substring(0, value) + filler;
            $(this).text(newText);
        }
    });
};

/**
* Functional header butter
* @param {menuMobile} jquery obj - For what we click
* @param {toggleMenu} jquery obj - to what menu we will slideToggle
*/
function headeButer(menuMobile, toggleMenu) {
    if (menuMobile) {
        menuMobile.click(function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                $(this).toggleClass('active');
                toggleMenu.stop().slideToggle();
            }
        });

        $(document).on('click touchstart', function (event) {
            if ($(window).width() < 1024 - $.scrollbarWidth()) {
                var div = toggleMenu;
                if (!div.is(event.target) && div.has(event.target).length === 0 && !menuMobile.is(event.target) && menuMobile.has(event.target).length === 0) {
                    toggleMenu.slideUp();
                    menuMobile.removeClass('active');
                }
            }
        });
    }
}

/**
* Expresion for numbers with spaces
* @param {x} number
* @return {string}
*/
function numberWithSpaces(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

$(document).ready(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());

    goTo();
});

$(window).resize(function () {

    $('.footer_placeholder').height($('.footer').outerHeight());
});
'use strict';

function formButton() {

    var formUp = $('.header-contact');
    var rightBox = $('#right-box');

    function close() {

        formUp.css('opacity', '1', 500);
        rightBox.animate({ right: '-360px' }, 500);
    };

    $('.form-up').on('click', function (e) {

        var w = ($(window).width() - $('.mbox').width()) / 2;

        e.stopPropagation();
        e.preventDefault();

        if ($(window).height() < 750) {

            $.fancybox.open({
                src: "#call-popup",
                type: ''
            });
        } else if ($(window).height() > 750) {

            formUp.css('opacity', '0', 500);
            rightBox.animate({ right: w }, 500);
        }
    });

    $('.close-button').on('click', function () {

        close();
    });

    rightBox.on('click', function (e) {

        e.stopPropagation();
    });

    $(document).on('click', function (e) {

        close();
    });
};

function menuButton() {

    var flag = 0;

    $('.logo-button').on('click', function (e) {

        // e.preventDefault();

        if ($(window).width() < 517 && flag === 0) {

            e.preventDefault();
            $('.nav-manu').animate({ left: '13px' }, 500);

            flag = 1;
        } else if ($(window).width() < 517 && flag === 1) {

            e.preventDefault();
            $('.nav-manu').animate({ left: '-295px' }, 500);

            flag = 0;
        };
    });
};

function tabsTabs() {

    var tab = $('#section5 .item-tab');
    var tab2 = $('#section-Q-and-A .item-tab');

    if ($(window).width() < 480) {

        tab.on('click', function () {

            if ($(this).hasClass('tab-active')) {
                return false;
            } else {
                tab.removeClass('tab-active').find('.text-box p').slideUp("slow");
                $(this).addClass('tab-active').find('.text-box p').slideDown("slow");
            }
        });
    };

    tab2.on('click', function () {

        if ($(this).hasClass('question-active')) {
            return false;
        } else {
            tab2.removeClass('question-active').find('.text-box p').slideUp("slow");
            $(this).addClass('question-active').find('.text-box p').slideDown("slow");
        }
    });
};

$(document).ready(function () {

    formButton();
    menuButton();
    tabsTabs();
    $('.js_popup').fancybox();
});

$(window).load(function () {});

$(window).resize(function () {});