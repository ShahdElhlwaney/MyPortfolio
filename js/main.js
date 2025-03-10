
const menuBtn=document.querySelector('.menu-btn');
const hamburger=document.querySelector('.menu-btn__burger');
const nav=document.querySelector('.nav');
const menuNav=document.querySelector('.menu-nav');
const menuItems=document.querySelectorAll('.menu-nav__item');
menuBtn.addEventListener('click',toggleMenu);

let showMenu=false;
function toggleMenu(){
  if(!showMenu)
  {
    hamburger.classList.add('open');
    nav.classList.add('open');
    menuNav.classList.add('open');
    menuItems.forEach(item=>item.classList.add('open'));
    showMenu=true;
  }
  else
  {
    hamburger.classList.remove('open');
    nav.classList.remove('open');
    menuNav.classList.remove('open');
    menuItems.forEach(item=>item.classList.remove('open'));
    showMenu=false;
  }
}