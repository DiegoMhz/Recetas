const REGEX_NAME = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
const PESO_REGEX = /^[0-9]{2,3}$/;
const EDAD_REGEX = /^[0-9]{2}$/;
const inputName = document.querySelector('#input-nombre');
const inputEdad = document.querySelector('#input-edad');
const inputPeso = document.querySelector('#input-peso');
const inputComidas = document.querySelector('#input-comidas');
const PerfilName = document.querySelector('#name');
const btnGuardar = document.querySelector('#btn');
const form = document.querySelector('#form');
const menuIcon = document.querySelector('#menu-icon');
const menuTelefono = document.querySelector('.menu-telefono');
const btnCerrarSesion = document.querySelectorAll('#btn-cerrar');
const btnProgreso = document.querySelectorAll('#btn-progreso');
const btnInicio = document.querySelectorAll('#btn-inicio');
const btnRecetas = document.querySelectorAll('#btn-recetas');

menuIcon.addEventListener('click',e => {
  menuTelefono.classList.toggle('menu-visible')
})


btnRecetas.forEach(element => {
    element.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `/recetas/${id}`;
    })
  });
  
  btnProgreso.forEach(element => {
    element.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `progreso/${id}`
    })
  });
  
  btnInicio.forEach(element => {
    element.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `principal/${id}`
    })
  });
  
  btnCerrarSesion.forEach(element => {
    element.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname =  '/signup/'
    })
  });
  
  

let NameValidacion = false 
let EdadValidacion = false
let PesoValidacion = false

const validation = () =>{
    if (NameValidacion || EdadValidacion || PesoValidacion) {
        console.log('funciona el boton');
        btnGuardar.disabled = false;
    }
    else{
        btnGuardar.disabled = true;
    }
}



inputName.addEventListener('input', e => {
    NameValidacion = REGEX_NAME.test(e.target.value);
    validation();
})

inputPeso.addEventListener('input', e => {
    PesoValidacion = PESO_REGEX.test(e.target.value);
    validation();
})

inputEdad.addEventListener('input', e => {
    EdadValidacion = EDAD_REGEX.test(e.target.value);
    validation();
})

const MESES = [
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
    let month = MESES[newDate.getMonth()];
   console.log(month);

const getDatos = async () => {
    const { data } = await axios.get('/api/todos', {
        withCredentials: true
    });
    console.log(data);
    PerfilName.innerText = `${data[0].nombre}`
    inputName.value = `${data[0].nombre}`
    inputEdad.value = `${data[0].edad}`
    inputPeso.value = `${data[0].pesoEdit}`

    form.addEventListener('submit',async e => {
        e.preventDefault();
        location.reload();
        

        if (data[0].newDate === "Enero") {
                    if (month === 'Enero') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Enero: [{
                          mes : 'Enero',
                          pesoinicial : parseInt(inputPeso.value),
                          pesoActual : data[0].peso
                        }], 
                        Febrero: [{
                          mes : 'Febrero',
                          pesoinicial : parseInt(inputPeso.value),
                          pesoActual : parseInt(inputPeso.value),
                        }], 
                        Marzo: [{
                          mes : 'Marzo',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : parseInt(inputPeso.value)
                        }],
                        Mayo: [{
                          mes : 'Mayo',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : parseInt(inputPeso.value)
                        }],
                        Junio: [{
                          mes : 'Junio',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Julio: [{
                          mes : 'Julio',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Agosto: [{
                          mes : 'Agosto',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Septiembre: [{
                          mes : 'Septiembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Octubre: [{
                          mes : 'Octubre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Noviembre: [{
                          mes : 'Noviembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                  }); 
                  }
            
            
                  if (month === 'Febrero') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Febrero: [{
                        mes : 'Febrero',
                        pesoinicial : parseInt(inputPeso.value),
                        pesoActual : data[0].Febrero[0].pesoinicial,
                      }], 
                      Marzo: [{
                        mes : 'Marzo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                }); 
                }
                  
                    if (month === 'Marzo') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Marzo: [{
                        mes : 'Marzo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Marzo[0].pesoinicial
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Abril') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Abril[0].pesoinicial
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Mayo') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Mayo[0].pesoinicial
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Junio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Junio[0].pesoinicial
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value),
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Julio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Julio[0].pesoinicial
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Agosto') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Agosto[0].pesoinicial
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Septiembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Septiembre[0].pesoinicial
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Octubre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Octubre[0].pesoinicial
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Noviembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Noviembre[0].pesoinicial
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Diciembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Diciembre[0].pesoinicial
                      }],
                  }); 
                  }
            
            
                }
            
                if (data[0].newDate === "Febrero") {
                    if (month === 'Febrero') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Febrero: [{
                          mes : 'Febrero',
                          pesoinicial : data[0].peso,
                          pesoActual : parseInt(inputPeso.value),
                        }], 
                        Marzo: [{
                          mes : 'Marzo',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : parseInt(inputPeso.value)
                        }],
                        Mayo: [{
                          mes : 'Mayo',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : parseInt(inputPeso.value)
                        }],
                        Junio: [{
                          mes : 'Junio',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Julio: [{
                          mes : 'Julio',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Agosto: [{
                          mes : 'Agosto',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Septiembre: [{
                          mes : 'Septiembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Octubre: [{
                          mes : 'Octubre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Noviembre: [{
                          mes : 'Noviembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                
                  }); 
                  }
                  
                    if (month === 'Marzo') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Marzo: [{
                        mes : 'Marzo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Marzo[0].pesoinicial
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Abril') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Abril[0].pesoinicial
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Mayo') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Mayo[0].pesoinicial
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Junio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Junio[0].pesoinicial
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value),
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Julio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Julio[0].pesoinicial
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Agosto') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Agosto[0].pesoinicial
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Septiembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Septiembre[0].pesoinicial
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Octubre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Octubre[0].pesoinicial
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Noviembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Noviembre[0].pesoinicial
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Diciembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Diciembre[0].pesoinicial
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Enero') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Enero[0].pesoinicial
                      }],
                  }); 
                  }
            
            
                }
            
                if (data[0].newDate === "Marzo") {
                    if (month === 'Marzo') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Marzo: [{
                        mes : 'Marzo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].peso
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Abril') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Abril[0].pesoinicial
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Mayo') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Mayo[0].pesoinicial
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Junio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Junio[0].pesoinicial
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value),
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Julio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Julio[0].pesoinicial
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Agosto') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Agosto[0].inicial
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Septiembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :   data[0].Agosto[0].pesoinicial
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Octubre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Octubre[0].pesoinicial
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Noviembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :   data[0].Noviembre[0].pesoinicial
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Diciembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Diciembre[0].pesoinicial
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Enero') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Enero[0].pesoinicial
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Febrero') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : data[0].Febrero[0].pesoinicial,
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                }
            
            
            
            
                if (data[0].newDate === "Abril") {
                  if (month === 'Abril') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].peso
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Mayo') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Mayo[0].pesoinicial
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Junio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Junio[0].pesoinicial
                      }],
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value),
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
                  
                  if (month === 'Julio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Julio[0].inicial
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Agosto') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Agosto[0].inicial
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Septiembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
            
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Septiembre[0].inicial
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Octubre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Octubre[0].pesoinicial
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Noviembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Noviembre[0].pesoinicial
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Diciembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Diciembre[0].pesoinicial
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Enero') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Enero[0].pesoinicial
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Febrero') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Febrero[0].pesoinicial
                      }],
                  }); 
                  }
            
            
                }
            
            
            
            
            
                
                if (data[0].newDate === "Mayo") {
                    
                    if (month === 'Mayo') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Mayo: [{
                          mes : 'Mayo',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  data[0].peso
                        }],
                        Junio: [{
                          mes : 'Junio',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Julio: [{
                          mes : 'Julio',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Agosto: [{
                          mes : 'Agosto',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Septiembre: [{
                          mes : 'Septiembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Octubre: [{
                          mes : 'Octubre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Noviembre: [{
                          mes : 'Noviembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
                    
                    if (month === 'Junio') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Junio: [{
                          mes : 'Junio',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : data[0].Junio[0].pesoinicial
                        }],
                        Julio: [{
                          mes : 'Julio',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value),
                        }],
                        Agosto: [{
                          mes : 'Agosto',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Septiembre: [{
                          mes : 'Septiembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Octubre: [{
                          mes : 'Octubre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Noviembre: [{
                          mes : 'Noviembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
                    
                    if (month === 'Julio') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Julio: [{
                          mes : 'Julio',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : data[0].Julio[0].inicial
                        }],
                        Agosto: [{
                          mes : 'Agosto',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Septiembre: [{
                          mes : 'Septiembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Octubre: [{
                          mes : 'Octubre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Noviembre: [{
                          mes : 'Noviembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
              
                    if (month === 'Agosto') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Agosto: [{
                          mes : 'Agosto',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  data[0].Agosto[0].inicial
                        }],
                        Septiembre: [{
                          mes : 'Septiembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Octubre: [{
                          mes : 'Octubre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Noviembre: [{
                          mes : 'Noviembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
              
                    if (month === 'Septiembre') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
              
                        Septiembre: [{
                          mes : 'Septiembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  data[0].Septiembre[0].inicial
                        }],
                        Octubre: [{
                          mes : 'Octubre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Noviembre: [{
                          mes : 'Noviembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
              
                    if (month === 'Octubre') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Octubre: [{
                          mes : 'Octubre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  data[0].Octubre[0].pesoinicial
                        }],
                        Noviembre: [{
                          mes : 'Noviembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
              
                    if (month === 'Noviembre') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Noviembre: [{
                          mes : 'Noviembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : data[0].Noviembre[0].pesoinicial
                        }],
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
              
              
                    if (month === 'Diciembre') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Diciembre: [{
                          mes : 'Diciembre',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  data[0].Diciembre[0].pesoinicial
                        }],
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
              
              
                    if (month === 'Enero') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Enero: [{
                          mes : 'Enero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial : data[0].Enero[0].pesoinicial
                        }],
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
              
              
                    if (month === 'Febrero') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Febrero: [{
                          mes : 'Febrero',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  data[0].Febrero[0].pesoinicial
                        }],
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  parseInt(inputPeso.value)
                        }],
                    }); 
                    }
            
                    if (month === 'Abril') {
                      await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                        pesoEdit : inputPeso.value,
                        Abril: [{
                          mes : 'Abril',
                          pesoActual : parseInt(inputPeso.value),
                          pesoinicial :  data[0].Abril[0].pesoinicial
                        }],
                    }); 
                    }
              
              
                }
            
            
            
                if (data[0].newDate === "Junio") {
                      
                      if (month === 'Junio') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Junio: [{
                            mes : 'Junio',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  data[0].peso
                          }],
                          Julio: [{
                            mes : 'Julio',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value),
                          }],
                          Agosto: [{
                            mes : 'Agosto',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Septiembre: [{
                            mes : 'Septiembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Octubre: [{
                            mes : 'Octubre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Noviembre: [{
                            mes : 'Noviembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Diciembre: [{
                            mes : 'Diciembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Enero: [{
                            mes : 'Enero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Febrero: [{
                            mes : 'Febrero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
                      
                      if (month === 'Julio') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Julio: [{
                            mes : 'Julio',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial : data[0].Julio[0].inicial
                          }],
                          Agosto: [{
                            mes : 'Agosto',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Septiembre: [{
                            mes : 'Septiembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Octubre: [{
                            mes : 'Octubre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Noviembre: [{
                            mes : 'Noviembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Diciembre: [{
                            mes : 'Diciembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Enero: [{
                            mes : 'Enero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Febrero: [{
                            mes : 'Febrero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
                
                      if (month === 'Agosto') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Agosto: [{
                            mes : 'Agosto',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  data[0].Agosto[0].inicial
                          }],
                          Septiembre: [{
                            mes : 'Septiembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Octubre: [{
                            mes : 'Octubre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Noviembre: [{
                            mes : 'Noviembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Diciembre: [{
                            mes : 'Diciembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Enero: [{
                            mes : 'Enero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Febrero: [{
                            mes : 'Febrero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
                
                      if (month === 'Septiembre') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                
                          Septiembre: [{
                            mes : 'Septiembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  data[0].Septiembre[0].inicial
                          }],
                          Octubre: [{
                            mes : 'Octubre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Noviembre: [{
                            mes : 'Noviembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Diciembre: [{
                            mes : 'Diciembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Enero: [{
                            mes : 'Enero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Febrero: [{
                            mes : 'Febrero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
                
                      if (month === 'Octubre') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Octubre: [{
                            mes : 'Octubre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  data[0].Octubre[0].pesoinicial
                          }],
                          Noviembre: [{
                            mes : 'Noviembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Diciembre: [{
                            mes : 'Diciembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Enero: [{
                            mes : 'Enero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Febrero: [{
                            mes : 'Febrero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
                
                      if (month === 'Noviembre') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Noviembre: [{
                            mes : 'Noviembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial : data[0].Noviembre[0].pesoinicial
                          }],
                          Diciembre: [{
                            mes : 'Diciembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Enero: [{
                            mes : 'Enero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Febrero: [{
                            mes : 'Febrero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
                
                
                      if (month === 'Diciembre') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Diciembre: [{
                            mes : 'Diciembre',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  data[0].Diciembre[0].pesoinicial
                          }],
                          Enero: [{
                            mes : 'Enero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Febrero: [{
                            mes : 'Febrero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
                
                
                      if (month === 'Enero') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Enero: [{
                            mes : 'Enero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial : data[0].Enero[0].pesoinicial
                          }],
                          Febrero: [{
                            mes : 'Febrero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
                
                
                      if (month === 'Febrero') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Febrero: [{
                            mes : 'Febrero',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  data[0].Febrero[0].pesoinicial
                          }],
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
              
                      if (month === 'Abril') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Abril: [{
                            mes : 'Abril',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  data[0].Abril[0].pesoinicial
                          }],
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :  parseInt(inputPeso.value)
                          }],
                      }); 
                      }
            
                      if (month === 'Mayo') {
                        await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                          pesoEdit : inputPeso.value,
                          Mayo: [{
                            mes : 'Mayo',
                            pesoActual : parseInt(inputPeso.value),
                            pesoinicial :   data[0].Mayo[0].pesoinicial
                          }],
                      }); 
                      }
                
                
                }
            
            
            
            
                if (data[0].newDate === "Julio") {
                      
                  if (month === 'Julio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Julio: [{
                        mes : 'Julio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].peso,
                      }],
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Agosto') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Agosto: [{
                        mes : 'Agosto',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Agosto[0].inicial
                      }],
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Septiembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
            
                      Septiembre: [{
                        mes : 'Septiembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Septiembre[0].inicial
                      }],
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Octubre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Octubre: [{
                        mes : 'Octubre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Octubre[0].pesoinicial
                      }],
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Noviembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Noviembre: [{
                        mes : 'Noviembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Noviembre[0].pesoinicial
                      }],
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Diciembre') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Diciembre: [{
                        mes : 'Diciembre',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Diciembre[0].pesoinicial
                      }],
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Enero') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Enero: [{
                        mes : 'Enero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial : data[0].Enero[0].pesoinicial
                      }],
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
            
                  if (month === 'Febrero') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Febrero: [{
                        mes : 'Febrero',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Febrero[0].pesoinicial
                      }],
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Abril') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Abril: [{
                        mes : 'Abril',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Abril[0].pesoinicial
                      }],
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Mayo') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Mayo: [{
                        mes : 'Mayo',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :   data[0].Mayo[0].pesoinicial
                      }],
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  parseInt(inputPeso.value)
                      }],
                  }); 
                  }
            
                  if (month === 'Junio') {
                    await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                      pesoEdit : inputPeso.value,
                      Junio: [{
                        mes : 'Junio',
                        pesoActual : parseInt(inputPeso.value),
                        pesoinicial :  data[0].Junio[0].pesoinicial
                      }],
                  }); 
                  }
            
            
            }
            
            
            
            
            if (data[0].newDate === "Agosto") {
                      
              if (month === 'Agosto') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].peso,
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Septiembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
            
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Septiembre[0].inicial
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Octubre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Octubre[0].pesoinicial
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Noviembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Noviembre[0].pesoinicial
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Diciembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Diciembre[0].pesoinicial
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Enero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Enero[0].pesoinicial
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Febrero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Febrero[0].pesoinicial
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Abril') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Abril[0].pesoinicial
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Mayo') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :   data[0].Mayo[0].pesoinicial
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Junio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Junio[0].pesoinicial
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
            
              if (month === 'Julio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Julio[0].pesoinicial
                  }],
              }); 
              }
            
            
            }
            
            
            if (data[0].newDate === "Septiembre") {
            
              if (month === 'Septiembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
            
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].peso
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Octubre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Octubre[0].pesoinicial
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Noviembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Noviembre[0].pesoinicial
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Diciembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Diciembre[0].pesoinicial
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Enero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Enero[0].pesoinicial
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Febrero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Febrero[0].pesoinicial
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Abril') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Abril[0].pesoinicial
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Mayo') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :   data[0].Mayo[0].pesoinicial
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Junio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Junio[0].pesoinicial
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
            
              if (month === 'Julio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Julio[0].pesoinicial
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Agosto') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :    data[0].Agosto[0].pesoinicial
                  }],
              }); 
              }
            
            
            }
            
            if (data[0].newDate === "Octubre") {
            
              if (month === 'Octubre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].peso
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Noviembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Noviembre[0].pesoinicial
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Diciembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Diciembre[0].pesoinicial
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Enero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Enero[0].pesoinicial
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Febrero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Febrero[0].pesoinicial
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Abril') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Abril[0].pesoinicial
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Mayo') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :   data[0].Mayo[0].pesoinicial
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Junio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Junio[0].pesoinicial
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
            
              if (month === 'Julio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Julio[0].pesoinicial
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Agosto') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :    data[0].Agosto[0].pesoinicial
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Septiembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :   data[0].Septiembre[0].pesoinicial
                  }],
              }); 
              }
            
            
            }
            
            
            if (data[0].newDate === "Noviembre") {
            
              if (month === 'Noviembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].peso
                  }],
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Diciembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Diciembre[0].pesoinicial
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Enero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Enero[0].pesoinicial
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Febrero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Febrero[0].pesoinicial
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Abril') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Abril[0].pesoinicial
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Mayo') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :   data[0].Mayo[0].pesoinicial
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Junio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Junio[0].pesoinicial
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
            
              if (month === 'Julio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Julio[0].pesoinicial
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Agosto') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :    data[0].Agosto[0].pesoinicial
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Septiembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Septiembre[0].pesoinicial
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Octubre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Octubre[0].pesoinicial
                  }],
              }); 
              }
            
            
            }
            
            
            
            if (data[0].newDate === "Diciembre") {
            
              if (month === 'Diciembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Diciembre: [{
                    mes : 'Diciembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].peso
                  }],
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Enero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Enero: [{
                    mes : 'Enero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Enero[0].pesoinicial
                  }],
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Febrero') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Febrero: [{
                    mes : 'Febrero',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Febrero[0].pesoinicial
                  }],
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Abril') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Abril: [{
                    mes : 'Abril',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Abril[0].pesoinicial
                  }],
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Mayo') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Mayo: [{
                    mes : 'Mayo',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :   data[0].Mayo[0].pesoinicial
                  }],
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Junio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Junio: [{
                    mes : 'Junio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Junio[0].pesoinicial
                  }],
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
            
              if (month === 'Julio') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Julio: [{
                    mes : 'Julio',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  data[0].Julio[0].pesoinicial
                  }],
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Agosto') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Agosto: [{
                    mes : 'Agosto',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :    data[0].Agosto[0].pesoinicial
                  }],
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Septiembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Septiembre: [{
                    mes : 'Septiembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :   data[0].Septiembre[0].pesoinicial
                  }],
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
            
              if (month === 'Octubre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Octubre: [{
                    mes : 'Octubre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial : data[0].Octubre[0].pesoinicial
                  }],
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :  parseInt(inputPeso.value)
                  }],
              }); 
              }
            
              if (month === 'Noviembre') {
                await axios.patch(`/api/todos/${data[0].id}`,{ edad: inputEdad.value,
                        nombre: inputName.value, 
                  pesoEdit : inputPeso.value,
                  Noviembre: [{
                    mes : 'Noviembre',
                    pesoActual : parseInt(inputPeso.value),
                    pesoinicial :   data[0].Noviembre[0].pesoinicial
                  }],
              }); 
              }
            
            
            }      
            
            
    })
}

getComidas = async () => {
    const { data } = await axios.get('/api/recetas', {
        withCredentials: true
    });
    inputComidas.value = `${data[0].comidasCompletadas}`
}

FuncionTodo = async () => {
    getDatos();
    getComidas();
}

FuncionTodo();
















