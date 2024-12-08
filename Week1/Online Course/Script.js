const menu = document.getElementById("menu");
const sideMenu = document.querySelector('.side-menu');
const closeMenu = document.querySelector('.close-btn');
menu.addEventListener('click',(e)=>{
    sideMenu.classList.add('active');
    document.body.style.overflow='hidden';
})
closeMenu.addEventListener('click',(e)=>{
    sideMenu.classList.remove('active');
    document.body.style.overflow='';
})
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && sideMenu.classList.contains('active')) {
        sideMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

menu.addEventListener('click', (e) => {
    sideMenu.classList.add('active');
    if (!document.body.style.overflow) {
        document.body.style.overflow = 'hidden';
    }
});

