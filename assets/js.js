window.addEventListener('scroll', function(){
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function toogleMenu(){
    const menuToogle = document.querySelector('.menuToogle');
    const nav = document.querySelector('.nav');
    menuToogle.classList.toggle('active');
    nav.classList.toggle('active');
}