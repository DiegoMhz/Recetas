const form = document.querySelector('#form');
const divCalorias = document.querySelector('#div-calorias');
const inputDieta = document.querySelector('#tipo-dieta');
const btnCerrarSesion = document.querySelector('#btn-cerrar');
const btnEntrar = document.querySelector('#btn-entrar');
const btnCerrar = document.querySelector('#btn-cerrar');
const btnCerrarMobile = document.querySelector('#btn-cerrar-mobil');
const btnProgreso = document.querySelector('#btn-progreso');
const btnInicio = document.querySelector('#btn-inicio');
const svgRecetas = document.querySelector('#svg-recetas');
const btnProgresoMobile = document.querySelector('#btn-progreso-mobil');
const btnInicioMobile = document.querySelector('#btn-inicio-mobil');
const svgRecetasMobile = document.querySelector('#svg-recetas-mobil');
const divComidasCompletadas = document.querySelector('#comidas-completadas')
const ctx = document.getElementById('my');
const btnCalorias = document.querySelector('#btn-calorias')
const btnCarbohidratos = document.querySelector('#btn-carbohidratos')
const btnProteinas = document.querySelector('#btn-proteinas')
const btnFibra = document.querySelector('#btn-fibra')
const btnGrasas = document.querySelector('#btn-grasas')
// BOTONES PESO
const divInputContainer = document.querySelector('#div-input-container')
const btnAceptar = document.querySelector('#btn-aceptar')
const inputPeso = document.querySelector('#input-peso')
const btnCambiarPeso = document.querySelector('#btn-cambiarpeso');
const divPeso = document.querySelector('#div-peso');
const btnPeso = document.querySelector('#btn-peso')
// Botones edad
const btnEdad = document.querySelector('#btn-cambiaredad');
const divEdad = document.querySelector('#div-edad');
const divInputContainerEdad = document.querySelector('#div-input-container-edad')
const btnAceptarEdad = document.querySelector('#btn-aceptar-edad')
const inputEdad = document.querySelector('#input-edad')
const divSelectorMes = document.querySelector('#selector-mes')
// Botones Meta


// Telefono
const btnMenuMobile = document.querySelector('.btn-mobil')
const menuMobile = document.querySelector('.menu-mobil')


btnMenuMobile.addEventListener('click', e =>{
  menuMobile.classList.toggle('top-20')
})

btnInicio.addEventListener('click', e => {
  const id = window.location.pathname.split('/')[2]
  window.location.pathname = `/principal/${id}`;
  })





  svgRecetas.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `recetas/${id}`
  })




btnCerrar.addEventListener('click', e => {
  window.location.pathname = '/signup/'
})

btnCerrarMobile.addEventListener('click', e => {
  window.location.pathname = '/signup/'
})


btnProgreso.addEventListener('click', async e => {
  id = window.location.pathname.split('/') [2]
  window.location.pathname = `/progreso/${id}`;
})

btnProgresoMobile.addEventListener('click', async e => {
    id = window.location.pathname.split('/') [2]
    window.location.pathname = `/progreso/${id}`;
  });

svgRecetasMobile.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `recetas/${id}`
  })

btnInicioMobile.addEventListener('click', e => {
  const id = window.location.pathname.split('/')[2]
  window.location.pathname = `/principal/${id}`;
  })


// AXIOS GET
const getTodos = async () => {
    const { data } = await axios.get('/api/todos', {
        withCredentials: true
    })

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


    divPeso.innerHTML = `
    <h1 class="h1">${data[0].pesoEdit}</h1>
  `
 
  divEdad.innerHTML = `
     <h1 class="h1">${data[0].edad}</h1>
  `
};

getTodos();


const getRecetas = async () => {
  const { data } = await axios.get('/api/recetas', {
      withCredentials: true
  })
  if (data[0] === undefined) {
    divComidasCompletadas.innerHTML = `
    <h1 class="h1">0</h1>
    <span>Comidas completadas</span>
  `
  }
  else {
  divComidasCompletadas.innerHTML = `
  <h1 class="h1">${data[0].comidasCompletadas}</h1>
  <span>Comidas completadas</span>
`
}

};

getRecetas();


const axiosPatch = async () => {
  const { data } = await axios.get('/api/todos', {
    withCredentials: true
})

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


  btnCambiarPeso.addEventListener('click', e =>{
    if (e.target) {
      btnEdad.disabled = true
    }
    divPeso.classList.add('hidden')
    document.querySelector('#btn-aceptar').classList.remove('hidden')
    btnCambiarPeso.classList.add('hidden');
    const inputPeso = document.querySelector('#input-editar-peso')
    inputPeso.classList.remove('hidden')
    inputPeso.placeholder= `${data[0].pesoEdit}`

    btnAceptar.addEventListener('click', async e =>{
      console.log(inputPeso);
const axiosPatchPeso = async () => {
      if (data[0].newDate === "Enero") {
        if (month === 'Enero') {
          await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
          await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
            await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
        await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
  }); 
  }


  if (month === 'Octubre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
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
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPeso.value,
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPeso.value),
        pesoinicial :   data[0].Noviembre[0].pesoinicial
      }],
  }); 
  }


}
 


  divPeso.innerHTML = `
     <h1 class="h1">${inputPeso.value}</h1>
`

btnCambiarPeso.classList.remove('hidden');
btnAceptar.classList.add('hidden');
inputPeso.classList.add('hidden');
divPeso.classList.remove('hidden');

// location.reload();
}     
axiosPatchPeso();
location.reload();
})
  })



// EDIT EDAD
  btnEdad.addEventListener('click', e =>{
    if (e.target) {
      btnCambiarPeso.disabled = true
    }
    divEdad.classList.add('hidden')
    const inputEdad = document.querySelector('#input-editar-edad')
    document.querySelector('#btn-aceptar-edad').classList.remove('hidden')
    btnEdad.classList.add('hidden');
    inputEdad.classList.remove('hidden')
    inputEdad.placeholder= `${data[0].edad}`
    
    btnAceptarEdad.addEventListener('click', async e =>{
      await axios.patch(`/api/todos/${data[0].id}`,{ 
        edad: inputEdad.value,
      })

  divEdad.innerHTML = `
  <h1 class="h1">${inputEdad.value}</h1>
 </div>
`

inputEdad.classList.add('hidden')
btnEdad.classList.remove('hidden');
btnAceptarEdad.classList.add('hidden');
divEdad.classList.remove('hidden')
})

  })


// META Edit

//   btnMeta.addEventListener('click', e =>{
//     if (e.target) {
//       btnEdad.disabled = true
//       btnCambiarPeso.disabled = true
//     }
//     document.querySelector('#btn-aceptar-meta').classList.remove('hidden')
//     btnMeta.classList.add('hidden');
//     document.querySelector('#x-meta').classList.add('hidden');
//     divInputContainerMeta.classList.remove('hidden');
//     console.log('MUTE');
//     divMeta.children[0].classList.remove('hidden');
//    const inputMetaValue = divMeta.children[0].children[0]
   
//     btnAceptarMeta.addEventListener('click', async e =>{
//       console.log(inputMetaValue.value);
//       await axios.patch(`/api/todos/${data[0].id}`,{ 
//         meta: inputMetaValue.value,
//       })
//   divMeta.innerHTML = `
//   <div id="div-input-container" class="flex gap-4 hidden">
//   <input type="text"  id="input-meta" placeholder="20" class="p-4 bg-slate-200 rounded-lg w-full outline-none placeholder:text-slate-400">
  
// </div>
//   <div  id="x-meta" class="flex gap-2.5">
//   <label for="spam-meta" class="text-4xl">${inputMetaValue.value}</label>
// `

// btnMeta.classList.remove('hidden');
// btnAceptarMeta.classList.add('hidden');
// location.reload();

// })
//   })

  }
axiosPatch()













