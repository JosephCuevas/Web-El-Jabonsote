/* Scrollreveal */

ScrollReveal().reveal('.header', { delay: 500 });
ScrollReveal().reveal('.container', { delay: 600 });

/* Menu */
$(document).ready(main);
var cont = 1;
function main() {
    $('.menu-bar').click(function () {
        if(cont == 1) {
            $('nav').animate({
                left: '0'
            });
            cont = 0;
        } else {
            cont = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });
};

/* Contact */
$("section.contact").click(function () {
    $(this).toggleClass("contact-toogle");
});


