const emailInput = document.querySelector('#input-email');
const passwordInput = document.querySelector('#input-password');
const form = document.querySelector('#form');
const formError = document.querySelector('.formato-error')
const menuIcon = document.querySelector('#menu-icon')
const menuTelefono = document.querySelector('.menu-telefono')
const svgInputPassword = document.querySelector('.svg-input-password');
const svgPasswordVisible = document.querySelector('.svg-password-visible');


svgInputPassword.addEventListener('click', e => {
        passwordInput.setAttribute('type','text');
        e.target.parentElement.children[1].classList.toggle('d');
    })


svgPasswordVisible.addEventListener('click', e => {
        passwordInput.setAttribute('type','password');
        e.target.parentElement.children[1].classList.toggle('d');
    })


menuIcon.addEventListener('click', e => {
    const contenedor = document.querySelector('#contenedor')
    contenedor.classList.toggle('opacity')
    menuTelefono.classList.toggle('menu-visible')
})

form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.querySelector('#btn')
    const loader = document.querySelector('.contenedor-loader')
    btn.innerText = ''
    loader.classList.add('loader-visible')
    formError.classList.remove('formato-visible')
    try {
        const credentials = {
            email: emailInput.value,
            password: passwordInput.value
        }
        const { data } = await axios.post('/api/login/', credentials)
        console.log(data.newUser);
        if (data.newUser) {
            window.location.pathname = `/app/${data.id}`
        } else {
            window.location.pathname = `/principal/${data.id}`
        }

        // window.location.pathname = `/app/${data}`;
    } catch (error) {
        const errorText = (error.response.data.error);
        console.log(errorText);
        loader.classList.remove('loader-visible')
        formError.classList.add('formato-visible')
        btn.innerText = 'Inicia Sesion'
    }
})

