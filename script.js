"use strict"
$(document).ready(function (){
    $('.header_burger').click(function(event) {
        $('.header_burger, .header__anchors').toggleClass('active');
    });
   
});

const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Software Developer', 'Web Developer', 'Mobile Developer', 'Big Daddy'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});