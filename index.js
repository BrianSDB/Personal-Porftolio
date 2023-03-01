const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile = document.querySelector('.header .nav-bar .nav-list ul');
const menuItem = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click',()=>{
    hamburger.classList.toggle('active');
    mobile.classList.toggle('active');
})

document.addEventListener('scroll',()=>{
    var scroll_pos = window.scrollY;
    if(scroll_pos > 250){
        header.style.backgroundColor = '#191970';
    } else {
        header.style.backgroundColor = 'transparent';

    }

})

