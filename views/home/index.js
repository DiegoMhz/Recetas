
const menuIcon = document.querySelector('#menu-icon')
const menuMobile = document.querySelector('.menu-telefono')
const btn = document.querySelector('#btn')

menuIcon.addEventListener('click', e => {
    menuMobile.classList.toggle('menu-visible')
});

btn.addEventListener('click', e =>{
    window.location.pathname = '/signup'
})


