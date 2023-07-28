
const form = document.querySelector('#form')
const divMasculino = document.querySelector('#div-masculino')
const divfemenino = document.querySelector('#div-femenino')
const inputActividad = document.querySelector("#input-actividad")
const inputMeta = document.querySelector("#input-meta")
const inputAltura = document.querySelector("#input-altura")
const inputName = document.querySelector('#input-name')
const inputPeso = document.querySelector("#input-peso")
const inputMasculino = document.querySelector("#sexo-masculino")
const inputFemenino = document.querySelector("#sexo-femenino")
const inputEdad = document.querySelector("#input-edad")
const btnAceptar = document.querySelector('#btn-aceptar');
const falso = false

// ------REGEX------

const NUMBER_REGEX = /^[0-9]{3}$/;
const REGEX_NAME = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const PESO_REGEX = /^[0-9]{2,3}$/;

let nombreValidacion = false
let actividadValidacion = false;
let alturaValidacion = false;
let pesoValidacion = false;
let metaValidacion = false;
let masculinoValidacion = false;
let femeninoValidacion = false;
let edadValidacion = false;


const validation = ( validation, element) => {
    btnAceptar.disabled = !nombreValidacion || !alturaValidacion || !pesoValidacion ||  !actividadValidacion || !metaValidacion || !masculinoValidacion || !femeninoValidacion || !edadValidacion  ? true : false;
    if (validation) {
      element.classList.add('correct');
      element.classList.remove('incorrect');
    } else {
      element.classList.add('incorrect');
      element.classList.remove('correct');
    }
  }


inputMasculino.addEventListener('click', e =>{
    console.log(e.target.checked);
    if (e.target.checked === true) {
        masculinoValidacion = true;
        femeninoValidacion = true;
    }
    divMasculino.classList.add('bg-green')
    divfemenino.classList.remove('bg-green') 
    console.log(inputFemenino.checked);
    validation( masculinoValidacion, inputMasculino);
})


inputFemenino.addEventListener('click', e =>{
    console.log(inputMasculino.checked);
    console.log(e.target.checked);
    if (e.target.checked === true) {
        masculinoValidacion = true;
        femeninoValidacion = true;
    }
    divMasculino.classList.remove('bg-green')
    divfemenino.classList.add('bg-green')
    validation( femeninoValidacion, inputFemenino);
})

inputName.addEventListener('input', e => {
   nombreValidacion = REGEX_NAME.test(e.target.value);
   validation( nombreValidacion, inputName);
})

inputEdad.addEventListener('input', e => {
    console.log(e.target.value);
    edadValidacion = PESO_REGEX.test(e.target.value);
    console.log(edadValidacion);
    validation( edadValidacion, inputEdad);
})

inputMeta.addEventListener('input', e => {
    console.log(e.target.value);
    if (e.target.value != '' ) {
        metaValidacion = true;
    };
    console.log(metaValidacion);
    validation( metaValidacion, inputMeta);
})

inputPeso.addEventListener('input', e => {
    console.log(e.target.value);
    pesoValidacion = PESO_REGEX.test(e.target.value);
    console.log(pesoValidacion);
    validation(pesoValidacion, inputPeso);
})

inputAltura.addEventListener('input', e => {
    console.log(e.target.value);
    alturaValidacion = NUMBER_REGEX.test(e.target.value);
    console.log(alturaValidacion);
    validation(alturaValidacion, inputAltura);
})

inputActividad.addEventListener('input', e => {
    console.log(e.target.value);
    if (e.target.value != '' ) {
        actividadValidacion = true
    }
    console.log(actividadValidacion);
    validation(actividadValidacion, inputActividad);
})



form.addEventListener('submit', e => {
    e.preventDefault();
    const edad = inputEdad.value
    const actividad = inputActividad.value
    const altura = inputAltura.value
    const peso = inputPeso.value
    const meta = inputMeta.value
    const masculino = inputMasculino.checked
    const femenino = inputFemenino.checked
    const nombre = inputName.value



    const MONTHS = [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ];
      const newDate = new Date();
      let month = MONTHS[newDate.getMonth()];
      console.log(month);


        const addTodo = async () => {
            const { data } = await axios.post('/api/todos', {
                newDate : month,
                nombre: nombre,
                newUser: falso,
                actividad: actividad,
                altura: altura,
                peso: peso,
                pesoEdit: peso,
                Enero : [{
                    pesoinicial : parseInt(peso),
                    pesoActual : parseInt(peso)
                }],
                Febrero : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Marzo : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Abril : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Mayo : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Junio : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Julio : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Agosto : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Septiembre : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Octubre : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Noviembre : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                Diciembre : [{
                    pesoinicial :  parseInt(peso),
                    pesoActual :  parseInt(peso)
                }],
                meta: meta,
                edad: edad,
                masculino: masculino,
                femenino: femenino
            }, {
                withCredentials: true
            })
            console.log(data);
            const id = window.location.pathname.split('/')[2];
            await axios.put(`/api/users/${id}`);
            window.location.pathname = `/principal/${data.user}`;
        };
        addTodo();    
      
      

     
      
      

    
console.log(edad,actividad,altura,peso,meta,masculino,femenino);
    
});

