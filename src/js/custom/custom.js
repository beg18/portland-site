$(function() {

/*menu__top-main*/

$('nav').coreNavigation({
    menuPosition: "center",
    container: true,
    mode: 'sticky'
});

/*menu__bottom*/
var home = document.querySelector('.menu__bottom-icon');
home.addEventListener('click', collapsible);

function collapsible() {
    document.querySelector('#menu__bottom')
            .classList
            .toggle("show");
}




});
