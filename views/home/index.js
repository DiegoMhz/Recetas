const menuMobile = document.querySelector('#menu-mobile');
const menuBar = document.querySelector('#menu-bar');
const menuIcon = document.querySelector('#menu-icon');
const registroIcon = document.querySelector('#regitro-icono');
const loginIcon = document.querySelector('#login-icono');
console.log(registroIcon);

menuIcon.addEventListener('click', e => {
    console.log(menuBar);
    console.log(menuIcon);
    console.log('yes');
    menuBar.classList.toggle('hidden')
    menuMobile.classList.toggle('show');
});


registroIcon.addEventListener('click', e => {
    window.location.pathname = '/signup';
});

loginIcon.addEventListener('click', e => {
    window.location.pathname = '/login';
});



