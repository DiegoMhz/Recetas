
const form = document.querySelector('#form');
const divCalorias = document.querySelector('#div-calorias');
const inputDieta = document.querySelector('#tipo-dieta');
const btnCerrarSesion = document.querySelector('#btn-cerrar');
const btnEntrar = document.querySelector('#btn-entrar');
const btnCerrar = document.querySelector('#btn-cerrar');
const btnProgreso = document.querySelector('#btn-progreso');
const btnInicio = document.querySelector('#btn-inicio');
const svgRecetas = document.querySelector('#svg-recetas');
const btnProgresoMobile = document.querySelector('#btn-progreso-mobil');
const btnInicioMobile = document.querySelector('#btn-inicio-mobil');
const svgRecetasMobile = document.querySelector('#svg-recetas-mobil');

// BOTONES PESO
const divInputContainer = document.querySelector('#div-input-container')
const btnAceptar = document.querySelector('#btn-aceptar')
const inputPeso = document.querySelector('#input-peso')
const btnPeso = document.querySelector('#btn-cambiarpeso');
const divPeso = document.querySelector('#div-peso');

// Botones edad
const btnEdad = document.querySelector('#btn-cambiaredad');
const divEdad = document.querySelector('#div-edad');
const divInputContainerEdad = document.querySelector('#div-input-container-edad')
const btnAceptarEdad = document.querySelector('#btn-aceptar-edad')
const inputEdad = document.querySelector('#input-edad')

// Botones Meta

const btnMeta = document.querySelector('#btn-cambiarmeta');
const divMeta = document.querySelector('#div-meta');
const divInputContainerMeta = document.querySelector('#div-input-container-meta')
const btnAceptarMeta = document.querySelector('#btn-aceptar-meta')
const inputMeta = document.querySelector('#input-meta')

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
    console.log(divInputContainer);

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
    <div id="div-input-container" class="flex gap-4 hidden">
    <input type="text"  id="input-peso" placeholder="${data[0].pesoEdit}" class="p-4 bg-slate-200 rounded-lg w-full outline-none placeholder:text-slate-400">
    <span id="spam-peso" class="text-3xl">kg</span>
  </div>
    <div  id="x" class="flex gap-2.5">
    <label for="spam-peso" class="text-3xl">${data[0].pesoEdit}</label>
    <span id="spam-peso" class="text-3xl">kg</span>
  `
 
  divEdad.innerHTML = `
    <div id="div-input-container" class="flex gap-4 hidden">
    <input type="text"  id="input-edad" placeholder="${data[0].edad}" class="p-4 bg-slate-200 rounded-lg w-full outline-none placeholder:text-slate-400">
    <span id="spam-edad" class="text-3xl">Años</span>
  </div>
    <div  id="x-edad" class="flex gap-2.5">
    <label for="spam-edad" class="text-3xl">${data[0].edad}</label>
    <span id="spam-edad" class="text-3xl">años</span>
  `

  divMeta.innerHTML = `
  <div id="div-input-container" class="flex gap-4 hidden">
  <select name="meta" class="outline-none p-2 rounded-lg bg-slate-200  dark:bg-slate-600" id="input-meta">
  <option value="Bajar de peso"selected disabled>Bajar de peso</option>
  <option value="Subir de peso">Subir de peso</option>
  </select>
</div>
  <div  id="x-meta" class="flex gap-2.5">
  <label for="spam-meta" class="text-3xl">${data[0].meta}</label>
`


// AXIOS EDIT




  btnPeso.addEventListener('click', e =>{
    if (e.target) {
      btnMeta.disabled = true
      btnEdad.disabled = true
    }
    document.querySelector('#btn-aceptar').classList.remove('hidden')
    btnPeso.classList.add('hidden');
    document.querySelector('#x').classList.add('hidden');
    divInputContainer.classList.remove('hidden');
    divPeso.children[0].classList.remove('hidden');
   const inputPesoValue = divPeso.children[0].children[0]


    btnAceptar.addEventListener('click', async e =>{
      console.log(inputPesoValue.value);

      if (data[0].newDate === "Enero") {
        if (month === 'Enero') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Enero: [{
              mes : 'Enero',
              pesoinicial : parseInt(inputPesoValue.value),
              pesoActual : data[0].peso
            }], 
            Febrero: [{
              mes : 'Febrero',
              pesoinicial : parseInt(inputPesoValue.value),
              pesoActual : parseInt(inputPesoValue.value),
            }], 
            Marzo: [{
              mes : 'Marzo',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : parseInt(inputPesoValue.value)
            }],
            Mayo: [{
              mes : 'Mayo',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : parseInt(inputPesoValue.value)
            }],
            Junio: [{
              mes : 'Junio',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Julio: [{
              mes : 'Julio',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Agosto: [{
              mes : 'Agosto',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Septiembre: [{
              mes : 'Septiembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Octubre: [{
              mes : 'Octubre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Noviembre: [{
              mes : 'Noviembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
      }); 
      }


      if (month === 'Febrero') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Febrero: [{
            mes : 'Febrero',
            pesoinicial : parseInt(inputPesoValue.value),
            pesoActual : data[0].Febrero[0].pesoinicial,
          }], 
          Marzo: [{
            mes : 'Marzo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
    }); 
    }
      
        if (month === 'Marzo') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Marzo: [{
            mes : 'Marzo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Marzo[0].pesoinicial
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Abril') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Abril[0].pesoinicial
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Mayo') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Mayo[0].pesoinicial
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Junio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Junio[0].pesoinicial
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value),
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Julio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Julio[0].pesoinicial
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Agosto') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Agosto[0].pesoinicial
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Septiembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Septiembre[0].pesoinicial
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Octubre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Octubre[0].pesoinicial
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Noviembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Noviembre[0].pesoinicial
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Diciembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Diciembre[0].pesoinicial
          }],
      }); 
      }


    }

    if (data[0].newDate === "Febrero") {
        if (month === 'Febrero') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Febrero: [{
              mes : 'Febrero',
              pesoinicial : data[0].peso,
              pesoActual : parseInt(inputPesoValue.value),
            }], 
            Marzo: [{
              mes : 'Marzo',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : parseInt(inputPesoValue.value)
            }],
            Mayo: [{
              mes : 'Mayo',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : parseInt(inputPesoValue.value)
            }],
            Junio: [{
              mes : 'Junio',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Julio: [{
              mes : 'Julio',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Agosto: [{
              mes : 'Agosto',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Septiembre: [{
              mes : 'Septiembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Octubre: [{
              mes : 'Octubre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Noviembre: [{
              mes : 'Noviembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
    
      }); 
      }
      
        if (month === 'Marzo') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Marzo: [{
            mes : 'Marzo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Marzo[0].pesoinicial
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Abril') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Abril[0].pesoinicial
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Mayo') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Mayo[0].pesoinicial
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Junio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Junio[0].pesoinicial
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value),
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Julio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Julio[0].pesoinicial
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Agosto') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Agosto[0].pesoinicial
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Septiembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Septiembre[0].pesoinicial
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Octubre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Octubre[0].pesoinicial
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Noviembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Noviembre[0].pesoinicial
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Diciembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Diciembre[0].pesoinicial
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Enero') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Enero[0].pesoinicial
          }],
      }); 
      }


    }




    if (data[0].newDate === "Marzo") {
        if (month === 'Marzo') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Marzo: [{
            mes : 'Marzo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].peso
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Abril') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Abril[0].pesoinicial
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Mayo') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Mayo[0].pesoinicial
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Junio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Junio[0].pesoinicial
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value),
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Julio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Julio[0].pesoinicial
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Agosto') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Agosto[0].inicial
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Septiembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :   data[0].Agosto[0].pesoinicial
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Octubre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Octubre[0].pesoinicial
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Noviembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :   data[0].Noviembre[0].pesoinicial
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Diciembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Diciembre[0].pesoinicial
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Enero') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Enero[0].pesoinicial
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Febrero') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Febrero: [{
            mes : 'Febrero',
            pesoActual : data[0].Febrero[0].pesoinicial,
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
    }




    if (data[0].newDate === "Abril") {
      if (month === 'Abril') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].peso
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Mayo') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Mayo[0].pesoinicial
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Junio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Junio[0].pesoinicial
          }],
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value),
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }
      
      if (month === 'Julio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Julio[0].inicial
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Agosto') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Agosto[0].inicial
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Septiembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,

          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Septiembre[0].inicial
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Octubre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Octubre[0].pesoinicial
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Noviembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Noviembre[0].pesoinicial
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Diciembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Diciembre[0].pesoinicial
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Enero') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Enero[0].pesoinicial
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Febrero') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Febrero[0].pesoinicial
          }],
      }); 
      }


    }





    
    if (data[0].newDate === "Mayo") {
        
        if (month === 'Mayo') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Mayo: [{
              mes : 'Mayo',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  data[0].peso
            }],
            Junio: [{
              mes : 'Junio',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Julio: [{
              mes : 'Julio',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Agosto: [{
              mes : 'Agosto',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Septiembre: [{
              mes : 'Septiembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Octubre: [{
              mes : 'Octubre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Noviembre: [{
              mes : 'Noviembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }
        
        if (month === 'Junio') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Junio: [{
              mes : 'Junio',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : data[0].Junio[0].pesoinicial
            }],
            Julio: [{
              mes : 'Julio',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value),
            }],
            Agosto: [{
              mes : 'Agosto',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Septiembre: [{
              mes : 'Septiembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Octubre: [{
              mes : 'Octubre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Noviembre: [{
              mes : 'Noviembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }
        
        if (month === 'Julio') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Julio: [{
              mes : 'Julio',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : data[0].Julio[0].inicial
            }],
            Agosto: [{
              mes : 'Agosto',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Septiembre: [{
              mes : 'Septiembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Octubre: [{
              mes : 'Octubre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Noviembre: [{
              mes : 'Noviembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }
  
        if (month === 'Agosto') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Agosto: [{
              mes : 'Agosto',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  data[0].Agosto[0].inicial
            }],
            Septiembre: [{
              mes : 'Septiembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Octubre: [{
              mes : 'Octubre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Noviembre: [{
              mes : 'Noviembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }
  
        if (month === 'Septiembre') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
  
            Septiembre: [{
              mes : 'Septiembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  data[0].Septiembre[0].inicial
            }],
            Octubre: [{
              mes : 'Octubre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Noviembre: [{
              mes : 'Noviembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }
  
        if (month === 'Octubre') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Octubre: [{
              mes : 'Octubre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  data[0].Octubre[0].pesoinicial
            }],
            Noviembre: [{
              mes : 'Noviembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }
  
        if (month === 'Noviembre') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Noviembre: [{
              mes : 'Noviembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : data[0].Noviembre[0].pesoinicial
            }],
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }
  
  
        if (month === 'Diciembre') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Diciembre: [{
              mes : 'Diciembre',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  data[0].Diciembre[0].pesoinicial
            }],
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }
  
  
        if (month === 'Enero') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Enero: [{
              mes : 'Enero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial : data[0].Enero[0].pesoinicial
            }],
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }
  
  
        if (month === 'Febrero') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Febrero: [{
              mes : 'Febrero',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  data[0].Febrero[0].pesoinicial
            }],
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  parseInt(inputPesoValue.value)
            }],
        }); 
        }

        if (month === 'Abril') {
          await axios.patch(`/api/todos/${data[0].id}`,{
            pesoEdit : inputPesoValue.value,
            Abril: [{
              mes : 'Abril',
              pesoActual : parseInt(inputPesoValue.value),
              pesoinicial :  data[0].Abril[0].pesoinicial
            }],
        }); 
        }
  
  
    }



    if (data[0].newDate === "Junio") {
          
          if (month === 'Junio') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Junio: [{
                mes : 'Junio',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  data[0].peso
              }],
              Julio: [{
                mes : 'Julio',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value),
              }],
              Agosto: [{
                mes : 'Agosto',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Septiembre: [{
                mes : 'Septiembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Octubre: [{
                mes : 'Octubre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Noviembre: [{
                mes : 'Noviembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Diciembre: [{
                mes : 'Diciembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Enero: [{
                mes : 'Enero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Febrero: [{
                mes : 'Febrero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }
          
          if (month === 'Julio') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Julio: [{
                mes : 'Julio',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial : data[0].Julio[0].inicial
              }],
              Agosto: [{
                mes : 'Agosto',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Septiembre: [{
                mes : 'Septiembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Octubre: [{
                mes : 'Octubre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Noviembre: [{
                mes : 'Noviembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Diciembre: [{
                mes : 'Diciembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Enero: [{
                mes : 'Enero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Febrero: [{
                mes : 'Febrero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }
    
          if (month === 'Agosto') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Agosto: [{
                mes : 'Agosto',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  data[0].Agosto[0].inicial
              }],
              Septiembre: [{
                mes : 'Septiembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Octubre: [{
                mes : 'Octubre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Noviembre: [{
                mes : 'Noviembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Diciembre: [{
                mes : 'Diciembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Enero: [{
                mes : 'Enero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Febrero: [{
                mes : 'Febrero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }
    
          if (month === 'Septiembre') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
    
              Septiembre: [{
                mes : 'Septiembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  data[0].Septiembre[0].inicial
              }],
              Octubre: [{
                mes : 'Octubre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Noviembre: [{
                mes : 'Noviembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Diciembre: [{
                mes : 'Diciembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Enero: [{
                mes : 'Enero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Febrero: [{
                mes : 'Febrero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }
    
          if (month === 'Octubre') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Octubre: [{
                mes : 'Octubre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  data[0].Octubre[0].pesoinicial
              }],
              Noviembre: [{
                mes : 'Noviembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Diciembre: [{
                mes : 'Diciembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Enero: [{
                mes : 'Enero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Febrero: [{
                mes : 'Febrero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }
    
          if (month === 'Noviembre') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Noviembre: [{
                mes : 'Noviembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial : data[0].Noviembre[0].pesoinicial
              }],
              Diciembre: [{
                mes : 'Diciembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Enero: [{
                mes : 'Enero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Febrero: [{
                mes : 'Febrero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }
    
    
          if (month === 'Diciembre') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Diciembre: [{
                mes : 'Diciembre',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  data[0].Diciembre[0].pesoinicial
              }],
              Enero: [{
                mes : 'Enero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Febrero: [{
                mes : 'Febrero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }
    
    
          if (month === 'Enero') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Enero: [{
                mes : 'Enero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial : data[0].Enero[0].pesoinicial
              }],
              Febrero: [{
                mes : 'Febrero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }
    
    
          if (month === 'Febrero') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Febrero: [{
                mes : 'Febrero',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  data[0].Febrero[0].pesoinicial
              }],
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }
  
          if (month === 'Abril') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Abril: [{
                mes : 'Abril',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  data[0].Abril[0].pesoinicial
              }],
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :  parseInt(inputPesoValue.value)
              }],
          }); 
          }

          if (month === 'Mayo') {
            await axios.patch(`/api/todos/${data[0].id}`,{
              pesoEdit : inputPesoValue.value,
              Mayo: [{
                mes : 'Mayo',
                pesoActual : parseInt(inputPesoValue.value),
                pesoinicial :   data[0].Mayo[0].pesoinicial
              }],
          }); 
          }
    
    
    }




    if (data[0].newDate === "Julio") {
          
      if (month === 'Julio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Julio: [{
            mes : 'Julio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].peso,
          }],
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Agosto') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Agosto: [{
            mes : 'Agosto',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Agosto[0].inicial
          }],
          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Septiembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,

          Septiembre: [{
            mes : 'Septiembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Septiembre[0].inicial
          }],
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Octubre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Octubre: [{
            mes : 'Octubre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Octubre[0].pesoinicial
          }],
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Noviembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Noviembre: [{
            mes : 'Noviembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Noviembre[0].pesoinicial
          }],
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Diciembre') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Diciembre: [{
            mes : 'Diciembre',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Diciembre[0].pesoinicial
          }],
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Enero') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Enero: [{
            mes : 'Enero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial : data[0].Enero[0].pesoinicial
          }],
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }


      if (month === 'Febrero') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Febrero: [{
            mes : 'Febrero',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Febrero[0].pesoinicial
          }],
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Abril') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Abril: [{
            mes : 'Abril',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Abril[0].pesoinicial
          }],
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Mayo') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Mayo: [{
            mes : 'Mayo',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :   data[0].Mayo[0].pesoinicial
          }],
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  parseInt(inputPesoValue.value)
          }],
      }); 
      }

      if (month === 'Junio') {
        await axios.patch(`/api/todos/${data[0].id}`,{
          pesoEdit : inputPesoValue.value,
          Junio: [{
            mes : 'Junio',
            pesoActual : parseInt(inputPesoValue.value),
            pesoinicial :  data[0].Junio[0].pesoinicial
          }],
      }); 
      }


}




if (data[0].newDate === "Agosto") {
          
  if (month === 'Agosto') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].peso,
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Septiembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,

      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Septiembre[0].inicial
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Octubre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Octubre[0].pesoinicial
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Noviembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Noviembre[0].pesoinicial
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Diciembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Diciembre[0].pesoinicial
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Enero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Enero[0].pesoinicial
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Febrero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Febrero[0].pesoinicial
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Abril') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Abril[0].pesoinicial
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Mayo') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :   data[0].Mayo[0].pesoinicial
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Junio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Junio[0].pesoinicial
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }



  if (month === 'Julio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Julio[0].pesoinicial
      }],
  }); 
  }


}


if (data[0].newDate === "Septiembre") {

  if (month === 'Septiembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,

      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].peso
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Octubre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Octubre[0].pesoinicial
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Noviembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Noviembre[0].pesoinicial
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Diciembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Diciembre[0].pesoinicial
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Enero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Enero[0].pesoinicial
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Febrero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Febrero[0].pesoinicial
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Abril') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Abril[0].pesoinicial
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Mayo') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :   data[0].Mayo[0].pesoinicial
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Junio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Junio[0].pesoinicial
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }



  if (month === 'Julio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Julio[0].pesoinicial
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Agosto') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :    data[0].Agosto[0].pesoinicial
      }],
  }); 
  }


}

if (data[0].newDate === "Octubre") {

  if (month === 'Octubre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].peso
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Noviembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Noviembre[0].pesoinicial
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Diciembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Diciembre[0].pesoinicial
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Enero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Enero[0].pesoinicial
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Febrero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Febrero[0].pesoinicial
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Abril') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Abril[0].pesoinicial
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Mayo') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :   data[0].Mayo[0].pesoinicial
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Junio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Junio[0].pesoinicial
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }



  if (month === 'Julio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Julio[0].pesoinicial
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Agosto') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :    data[0].Agosto[0].pesoinicial
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Septiembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :   data[0].Septiembre[0].pesoinicial
      }],
  }); 
  }


}


if (data[0].newDate === "Noviembre") {

  if (month === 'Noviembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].peso
      }],
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Diciembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Diciembre[0].pesoinicial
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Enero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Enero[0].pesoinicial
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Febrero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Febrero[0].pesoinicial
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Abril') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Abril[0].pesoinicial
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Mayo') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :   data[0].Mayo[0].pesoinicial
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Junio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Junio[0].pesoinicial
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }



  if (month === 'Julio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Julio[0].pesoinicial
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Agosto') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :    data[0].Agosto[0].pesoinicial
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Septiembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :   data[0].Septiembre[0].pesoinicial
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Octubre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Octubre[0].pesoinicial
      }],
  }); 
  }


}



if (data[0].newDate === "Diciembre") {

  if (month === 'Diciembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Diciembre: [{
        mes : 'Diciembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].peso
      }],
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Enero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Enero: [{
        mes : 'Enero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Enero[0].pesoinicial
      }],
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Febrero') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Febrero: [{
        mes : 'Febrero',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Febrero[0].pesoinicial
      }],
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Abril') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Abril: [{
        mes : 'Abril',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Abril[0].pesoinicial
      }],
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Mayo') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Mayo: [{
        mes : 'Mayo',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :   data[0].Mayo[0].pesoinicial
      }],
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Junio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Junio: [{
        mes : 'Junio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Junio[0].pesoinicial
      }],
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }



  if (month === 'Julio') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Julio: [{
        mes : 'Julio',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  data[0].Julio[0].pesoinicial
      }],
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Agosto') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Agosto: [{
        mes : 'Agosto',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :    data[0].Agosto[0].pesoinicial
      }],
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Septiembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Septiembre: [{
        mes : 'Septiembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :   data[0].Septiembre[0].pesoinicial
      }],
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }


  if (month === 'Octubre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Octubre: [{
        mes : 'Octubre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial : data[0].Octubre[0].pesoinicial
      }],
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :  parseInt(inputPesoValue.value)
      }],
  }); 
  }

  if (month === 'Noviembre') {
    await axios.patch(`/api/todos/${data[0].id}`,{
      pesoEdit : inputPesoValue.value,
      Noviembre: [{
        mes : 'Noviembre',
        pesoActual : parseInt(inputPesoValue.value),
        pesoinicial :   data[0].Noviembre[0].pesoinicial
      }],
  }); 
  }


}
      


            
  



  divPeso.innerHTML = `
  <div id="div-input-container" class="flex gap-4 hidden">
  <input type="text"  id="input-peso" placeholder="20" class="p-4 bg-slate-200 rounded-lg w-full outline-none placeholder:text-slate-400">
  <span id="spam-peso" class="text-4xl">kg</span>
</div>
  <div  id="x" class="flex gap-2.5">
  <label for="spam-peso" class="text-4xl">${inputPesoValue.value}</label>
  <span id="spam-peso" class="text-4xl">kg</span>
`

btnPeso.classList.remove('hidden');
btnAceptar.classList.add('hidden');
location.reload();

})
  })



// EDIT EDAD
  btnEdad.addEventListener('click', e =>{
    if (e.target) {
      btnMeta.disabled = true
      btnPeso.disabled = true
    }
    document.querySelector('#btn-aceptar-edad').classList.remove('hidden')
    btnEdad.classList.add('hidden');
    document.querySelector('#x-edad').classList.add('hidden');
    divInputContainerEdad.classList.remove('hidden');
    console.log('MUTE');
    divEdad.children[0].classList.remove('hidden');
   const inputEdadValue = divEdad.children[0].children[0]

    btnAceptarEdad.addEventListener('click', async e =>{
      console.log(inputEdadValue.value);
      await axios.patch(`/api/todos/${data[0].id}`,{ 
        edad: inputEdadValue.value,
      })
  divEdad.innerHTML = `
  <div id="div-input-container" class="flex gap-4 hidden">
  <input type="text"  id="input-edad" placeholder="20" class="p-4 bg-slate-200 rounded-lg w-full outline-none placeholder:text-slate-400">
  <span id="spam-edad" class="text-4xl">Años</span>
</div>
  <div  id="x-edad" class="flex gap-2.5">
  <label for="spam-edad" class="text-4xl">${inputEdadValue.value}</label>
  <span id="spam-edad" class="text-4xl">años</span>
`

btnEdad.classList.remove('hidden');
btnAceptarEdad.classList.add('hidden');
location.reload();
     
})
  })


// META Edit

  btnMeta.addEventListener('click', e =>{
    if (e.target) {
      btnEdad.disabled = true
      btnPeso.disabled = true
    }
    document.querySelector('#btn-aceptar-meta').classList.remove('hidden')
    btnMeta.classList.add('hidden');
    document.querySelector('#x-meta').classList.add('hidden');
    divInputContainerMeta.classList.remove('hidden');
    console.log('MUTE');
    divMeta.children[0].classList.remove('hidden');
   const inputMetaValue = divMeta.children[0].children[0]
   
    btnAceptarMeta.addEventListener('click', async e =>{
      console.log(inputMetaValue.value);
      await axios.patch(`/api/todos/${data[0].id}`,{ 
        meta: inputMetaValue.value,
      })
  divMeta.innerHTML = `
  <div id="div-input-container" class="flex gap-4 hidden">
  <input type="text"  id="input-meta" placeholder="20" class="p-4 bg-slate-200 rounded-lg w-full outline-none placeholder:text-slate-400">
  
</div>
  <div  id="x-meta" class="flex gap-2.5">
  <label for="spam-meta" class="text-4xl">${inputMetaValue.value}</label>
`

btnMeta.classList.remove('hidden');
btnAceptarMeta.classList.add('hidden');
location.reload();

})
  })

    console.log(data);
    console.log(data[0].actividad);
    console.log(data[0].meta);
    console.log(data[0].altura);
    console.log(data[0].peso);
    console.log(data[0].masculino);
    console.log(data[0].femenino);
    console.log(data[0].edad);




};
getTodos();

























