"use strict"
$(document).ready(function (){
    $('.header_burger').click(function(event) {
        $('.header_burger, .header__anchors').toggleClass('active');
    });
   
});

const typed = new Typed('.multiple-text', {
    strings: ['Experienced in building applications.'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 1000,
    loop: true,
});