$(function() {

/*menu__top-main*/

$('nav').coreNavigation({
    menuPosition: "center",
    container: true,
    mode: 'sticky'
});

/*menu__bottom menu__top-left-btn*/
var leftBtn = document.querySelector('.menu__top-left-btn');
var home = document.querySelector('.menu__bottom-icon');
leftBtn.addEventListener('click', collapsible); 
home.addEventListener('click', collapsible);

function collapsible() {
    document.querySelector('#menu__bottom')
            .classList
            .toggle("show");
}

    /* ===============================
     accordion-mobile-navigation070817
     ================================*/
    function init() {
        $('[data-behaviour="toggle-menu-icon"]').on('click', toggleMenuIcon);
        $('[data-behaviour="toggle-link-icon"]').on('click', toggleSubMenu);
    };

    function toggleMenuIcon() {
        $(this).toggleClass('menu-icon--open');
        $('[data-element="toggle-nav"]').toggleClass('nav--active');
    };

    function toggleSubMenu() {
        $(this).toggleClass('nav__link--plus nav__link--minus');
        $('[data-behaviour="toggle-sub-menu"]').slideToggle('nav__sub-list--active');
    };

    init()


    $(".js-card-title").on("click", function(e) {

        e.preventDefault();
        var $this = $(this),
            answerId = $this.attr("href");

        if( !$this.hasClass("active") ) {
            $(".js-card-content").slideUp();
            $(".js-card-title").removeClass("active");
        }

        $this.toggleClass("active");
        $(answerId).slideToggle();

    });



    /* iCheck https://github.com/fronteed/icheck
     https://ruseller.com/lessons/les1676/demo/
     ========================*/

    $('input').iCheck({
        checkboxClass: 'icheckbox_flat-green',
        radioClass: 'iradio_flat-green',
    });

/* Modals
    ====================================*/

    $(".js-modal").each(function() {
        var modalWidth = $(this).innerWidth() / 2;

        $(this).css({
            "marginLeft": "-" + modalWidth + "px"
        });
    });

    $(".js-show-modal").on("click", function(e) {

        e.preventDefault();

        var currentModal = $(this).attr("href");

        $(currentModal).fadeIn(500);
        $("body").append("<div class='overlay' id='js-overlay'></div>").addClass("open-modal");

    });


    $(".js-modal-close").on("click", function(e) {

        e.preventDefault();
        $(".js-modal").fadeOut(100);
        $("body").removeClass("open-modal");
        $("#js-overlay").remove();

    });


    $("body").on("click", "#js-overlay", function() {
        $(".js-modal").fadeOut(100);
        $("body").removeClass("open-modal");
        $("#js-overlay").remove();
    });


    /* WOW.js https://github.com/matthieua/WOW
    ========================*/

    var wow = new WOW(
        {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       140,          // distance to the element when triggering the animation (default is 0)
            mobile:       false,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            scrollContainer: null // optional scroll container selector, otherwise use window
        }
    );
    wow.init();

});
