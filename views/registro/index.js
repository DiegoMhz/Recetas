
const REGEX_NAME = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const REGEX_PASSWORD =  /^(?=.*\d)(?=.*[a-z]).{5,}$/;
const REGEX_EMAIL = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/

const inputName = document.querySelector('#input-name');
const inputPassword = document.querySelector('#input-password');
const inputEmail = document.querySelector('#input-email');
const inputConfirm = document.querySelector('#input-confirm');
const formError = document.querySelector('.form-error');
const form = document.querySelector('#form');
const btn = document.querySelector('#btn');
const menuIcon = document.querySelector('#menu-icon');
const menuTelefono = document.querySelector('.menu-telefono');
const svgInputPassword = document.querySelectorAll('.svg-input-password');
const svgPasswordVisible = document.querySelectorAll('.svg-password-visible');


svgInputPassword.forEach(element => {
    element.addEventListener('click', e => {
        const input = element.parentElement.parentElement.children[1];
        input.setAttribute('type','text');
        element.parentElement.children[1].classList.toggle('d');
    })
});


svgPasswordVisible.forEach(element => {
    element.addEventListener('click', e => {
        const input = element.parentElement.parentElement.children[1];
        input.setAttribute('type','password');
        element.parentElement.children[1].classList.toggle('d');
    })
});


menuIcon.addEventListener('click', e => {
    form.classList.toggle("form-opacity");
    menuTelefono.classList.toggle("menu-visible");
})


let validacionEmail = false
let validacionPassword = false
let validacionConfirm = false

const validacion = (input, element) =>{
   const formatos = input.parentElement.children[2]
    if (!validacionPassword || !validacionEmail || !validacionConfirm) {
        console.log('se');
        btn.disabled = true
    }
    else{
        btn.disabled = false
      
    }
    if (!element && input.value != '') {
        formatos.classList.add('info-visible')
    }
    else{
        console.log('Si se cumple');
        formatos.classList.remove('info-visible')
    }
}


inputEmail.addEventListener('input', e =>{
    validacionEmail = REGEX_EMAIL.test(e.target.value);
    validacion(inputEmail, validacionEmail)
})

inputPassword.addEventListener('input', e =>{
    validacionPassword = REGEX_PASSWORD.test(e.target.value);
    validacionConfirm = e.target.value === inputConfirm.value;
    validacion(inputPassword, validacionPassword)
    validacion(inputConfirm, validacionConfirm)
})

inputConfirm.addEventListener('input', e =>{
    validacionConfirm = inputPassword.value === e.target.value;
    validacion(inputConfirm, validacionConfirm)
}) 

form.addEventListener('submit', async e =>{
    e.preventDefault();
    const loader = document.querySelector('.contenedor-loader')
    loader.classList.add('loader-visible')
    btn.innerText = ''
    formError.classList.remove('error-visible') 
        try {
            const newUser = {
                email: inputEmail.value,
                password: inputPassword.value
            }
            await axios.post('/api/users/', newUser);
            window.location.pathname = '/login';
        } catch (error) {
            console.log(error.response.data.error);
            loader.classList.remove('loader-visible')
            btn.innerText = 'Registrar'
            formError.classList.add('error-visible') 
            console.log(formError);
        }
})