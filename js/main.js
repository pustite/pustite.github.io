const menuDesktop = document.getElementById('menu');
const menuBtn = document.getElementById('mobile-button');
const btnImg = document.getElementById('mobile-button-img');
const wrapper = document.getElementById('wrapper');
let navItems = document.querySelectorAll('.nav-item');


menuBtn.onclick = () => {
    if (menuDesktop.classList.toggle('open')) {
        btnImg.src="./img/mobile_menu_close.svg";
        wrapper.classList.add('open'); 
        document.body.style.overflow = 'hidden'; 
    }
    else {
        btnImg.src="./img/mobile_menu_open.svg";
        wrapper.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
}
