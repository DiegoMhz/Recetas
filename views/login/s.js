const emailInput = document.querySelector('#email-input');
const passwordInput = document.querySelector('#password-input');
const form = document.querySelector('#form');
const invalido = document.querySelector('#error')
const falso = false
invalido.classList.add('hidden')
form.addEventListener('submit', async e => {
    e.preventDefault();

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
        invalido.classList.remove('hidden')
    }

})

