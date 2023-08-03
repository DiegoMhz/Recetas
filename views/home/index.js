
const menuIcon = document.querySelector('#menu-icon')
const menuMobile = document.querySelector('.menu-telefono')
const btn = document.querySelector('#btn')
const loader = document.querySelector('.loader-contenedor')
menuIcon.addEventListener('click', e => {
    menuMobile.classList.toggle('menu-visible')
});

btn.addEventListener('click', e =>{
    loader.classList.add('loader-visible')
    btn.innerText = ''
    window.location.pathname = '/signup'
})


