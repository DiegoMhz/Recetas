
const form = document.querySelector('#form')
// INPUTS
const divMasculino = document.querySelector('#div-input-masculino')
const divfemenino = document.querySelector('#div-input-femenino')
const inputActividad = document.querySelector("#input-actividad")
const inputMeta = document.querySelector("#input-meta")
const inputAltura = document.querySelector("#input-altura")
const inputPeso = document.querySelector("#input-peso")
const inputMasculino = document.querySelector("#sexo-masculino")
const inputFemenino = document.querySelector("#sexo-femenino")
const inputEdad = document.querySelector("#input-edad")
const falso = false

inputMasculino.addEventListener('click', e =>{
    divMasculino.classList.add('bg-green-500')
    divfemenino.classList.remove('bg-green-500') 
})

inputFemenino.addEventListener('click', e =>{
    divMasculino.classList.remove('bg-green-500')
    divfemenino.classList.add('bg-green-500')
})

const btnAceptar = document.querySelector('btn-aceptar');

form.addEventListener('submit', e => {
    e.preventDefault();
    const edad = inputEdad.value
    const actividad = inputActividad.value
    const altura = inputAltura.value
    const peso = inputPeso.value
    const meta = inputMeta.value
    const masculino = inputMasculino.checked
    const femenino = inputFemenino.checked


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

