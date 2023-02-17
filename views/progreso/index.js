const svgRecetas = document.querySelector('#svg-recetas')
const btnPerfil = document.querySelector('#btn-perfil')
const btnInicio = document.querySelector('#btn-inicio')
const btnCerrarSesion = document.querySelector('#btn-cerrar')
const btnEntrar = document.querySelector('#btn-entrar')
const divSelectorMes = document.querySelector('#selector-mes')


// NewDATE
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
console.log(MONTHS);

const getTodos = async () => {
  const { data } = await axios.get('/api/todos', {
      withCredentials: true
  })
  console.log(data[0].newDate);

  if (data[0].newDate === "Enero") {
    if (month === 'Enero') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Enero">Enero</option>
    </select>`
    }

    if (month === 'Febrero') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Enero">Enero</option>
    <option value="Febrero">Febrero</option>
    </select>`
    }
    
    if (month === 'Marzo') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Enero">Enero</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    </select>`
    }
    
    if (month === 'Abril') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
    </select>`
    }
    
    if (month === 'Mayo') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
    </select>`
    }
    
    if (month === 'Junio') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
    </select>`
    }
    
    if (month === 'Julio') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
    </select>`
    }
  
    if (month === 'Agosto') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
    </select>`
    }
  
    if (month === 'Septiembre') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
    </select>`
    }
  
    if (month === 'Octubre') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
      <option value="Octubre">Octubre</option>
    </select>`
    }
  
    if (month === 'Noviembre') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
      <option value="Octubre">Octubre</option>
      <option value="Noviembre">Noviembre</option>
    </select>`
    }
  
    if (month === 'Diciembre') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
      <option value="Octubre">Octubre</option>
      <option value="Noviembre">Noviembre</option>
      <option value="Diciembre">Diciembre</option>
    </select>`
    }
    
    
  }

if (data[0].newDate === "Febrero") {
  if (month === 'Febrero') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
  <option value="value1"selected disabled>Selecciona el mes</option>
  <option value="Febrero">Febrero</option>
  </select>`
  }
  
  if (month === 'Marzo') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
  <option value="value1"selected disabled>Selecciona el mes</option>
  <option value="Febrero">Febrero</option>
  <option value="Marzo">Marzo</option>
  </select>`
  }
  
  if (month === 'Abril') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
  </select>`
  }
  
  if (month === 'Mayo') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
  </select>`
  }
  
  if (month === 'Junio') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
  </select>`
  }
  
  if (month === 'Julio') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
  </select>`
  }

  if (month === 'Agosto') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
  </select>`
  }

  if (month === 'Septiembre') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
  </select>`
  }

  if (month === 'Octubre') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
  </select>`
  }

  if (month === 'Noviembre') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
    <option value="Noviembre">Noviembre</option>
  </select>`
  }

  if (month === 'Diciembre') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
    <option value="Noviembre">Noviembre</option>
    <option value="Diciembre">Diciembre</option>
  </select>`
  }

  if (month === 'Enero') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
    <option value="Noviembre">Noviembre</option>
    <option value="Diciembre">Diciembre</option>
    <option value="Enero">Enero</option>
  </select>`
  }
  
  
}


if (data[0].newDate === "Marzo") {
console.log(month);
  if (month === 'Marzo') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
  <option value="value1"selected disabled>Selecciona el mes</option>
  <option value="Marzo">Marzo</option>
  </select>`
  }
  
  if (month === 'Abril') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
  </select>`
  }
  
  if (month === 'Mayo') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
  </select>`
  }
  
  if (month === 'Junio') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
  </select>`
  }
  
  if (month === 'Julio') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
  </select>`
  }

  if (month === 'Agosto') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
  </select>`
  }

  if (month === 'Septiembre') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
  </select>`
  }

  if (month === 'Octubre') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>

    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
  </select>`
  }

  if (month === 'Noviembre') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
   
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
    <option value="Noviembre">Noviembre</option>
  </select>`
  }

  if (month === 'Diciembre') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
    <option value="Noviembre">Noviembre</option>
    <option value="Diciembre">Diciembre</option>
  </select>`
  }

  if (month === 'Enero') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
   
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
    <option value="Noviembre">Noviembre</option>
    <option value="Diciembre">Diciembre</option>
    <option value="Enero">Enero</option>
  </select>`
  }

  if (month === 'Febrero') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
   
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
    <option value="Agosto">Agosto</option>
    <option value="Septiembre">Septiembre</option>
    <option value="Octubre">Octubre</option>
    <option value="Noviembre">Noviembre</option>
    <option value="Diciembre">Diciembre</option>
    <option value="Enero">Enero</option>
    <option value="Febrero">Febrero</option>
  </select>`
  }


}

if (data[0].newDate === "Abril") {
  console.log(month);
  
    
    if (month === 'Abril') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
    </select>`
    }
    
    if (month === 'Mayo') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
    </select>`
    }
    
    if (month === 'Junio') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
    </select>`
    }
    
    if (month === 'Julio') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
    </select>`
    }

    if (month === 'Agosto') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
    </select>`
    }
  
    if (month === 'Septiembre') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
    </select>`
    }
  
    if (month === 'Octubre') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
      <option value="Octubre">Octubre</option>
    </select>`
    }
  
    if (month === 'Noviembre') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
      <option value="Octubre">Octubre</option>
      <option value="Noviembre">Noviembre</option>
    </select>`
    }
  
    if (month === 'Diciembre') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
      <option value="Octubre">Octubre</option>
      <option value="Noviembre">Noviembre</option>
      <option value="Diciembre">Diciembre</option>
    </select>`
    }
  
    if (month === 'Enero') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
      <option value="Octubre">Octubre</option>
      <option value="Noviembre">Noviembre</option>
      <option value="Diciembre">Diciembre</option>
      <option value="Enero">Enero</option>
    </select>`
    }
  
    if (month === 'Febrero') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
      <option value="Octubre">Octubre</option>
      <option value="Noviembre">Noviembre</option>
      <option value="Diciembre">Diciembre</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
    </select>`
    }

    if (month === 'Marzo') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
      <option value="Septiembre">Septiembre</option>
      <option value="Octubre">Octubre</option>
      <option value="Noviembre">Noviembre</option>
      <option value="Diciembre">Diciembre</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
    </select>`
    }
  }

if (data[0].newDate === "Mayo") {
    console.log(month);
      
      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
      </select>`
      }
      
      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
      </select>`
      }
      
      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
      </select>`
      }
  
      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
      </select>`
      }
   }


if (data[0].newDate === "Junio") {
    console.log(month);
      
      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
      </select>`
      }
      
      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
      </select>`
      }
  
      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
      </select>`
      }

      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
      </select>`
      }
   }

 if (data[0].newDate === "Julio") {
    console.log(month);
      
      
      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
      </select>`
      }
  
      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
      </select>`
      }

      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
      </select>`


      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
      </select>`
      }
      }
   }   


if (data[0].newDate === "Agosto") {
    console.log(month);
      
  
      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
      </select>`
      }

      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
      </select>`


      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
      </select>`
      }

      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Junio</option>
      </select>`
      }
      }
   }   


if (data[0].newDate === "Septiembre") {
    console.log(month);
      
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
      </select>`
      }

      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
      </select>`


      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
      </select>`
      }

      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
      </select>`
      }

      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Junio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }


      }
   }   


if (data[0].newDate === "Octubre") {
    console.log(month);
    
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>   
        <option value="Octubre">Octubre</option>    
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Octubre">Octubre</option>    
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>     
        <option value="Octubre">Octubre</option> 
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
      </select>`
      }

      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option> 
        <option value="Octubre">Octubre</option>      
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
      </select>`


      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>    
        <option value="Octubre">Octubre</option>  
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
      </select>`
      }

      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>        
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
      </select>`
      }

      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }

      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Junio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }


      }
   }   


if (data[0].newDate === "Noviembre") {
    console.log(month);
    
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>       
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>      
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>      
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
      </select>`
      }

      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>       
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
      </select>`


      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>      
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
      </select>`
      }

      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>        
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
      </select>`
      }

      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }

      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Junio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }

      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Junio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }


      }
   }   


   if (data[0].newDate === "Diciembre") {
    console.log(month);
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>       
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>      
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>      
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
      </select>`
      }

      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>       
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
      </select>`


      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>      
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
      </select>`
      }

      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>        
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
      </select>`
      }

      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }

      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Junio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }

      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Junio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }


      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>  
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Junio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }



      }
   }   
  
  


const select = divSelectorMes.children[0];

select.addEventListener('click', async e =>{
  console.log(e.target.value);
  
  // CHARTJS
  const ctx = document.getElementById('my');
    let myChart =  new Chart(ctx, {
     type: 'bar',
     data: {
      // Peso inicial
       labels: ['Enero'],
       datasets: [{
         label: 'Peso inicial',
         data: [data[0].Enero[0].pesoinicial],
         borderColor: '#36A2EB',
         backgroundColor: '#9BD0F5',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       },
       {
          // Peso actual
          label: 'Peso Actual',
          data: [data[0].Enero[0].pesoActual],
          borderColor: '#922B21',
          backgroundColor: '#E74C3C',
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        }
      ]
     },
     options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
         },
         title: {
          display: true,
          text: 'Tu progreso'
      }
       }
     },
   });
   myChart.destroy();

   select.addEventListener('click',  e =>{
    myChart.destroy();
   })

  //  IF CHART
  if (data[0].newDate === 'Febrero') {

   if (e.target.value === 'Febrero') {
   
     const p = [data[0].peso]
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero'],
          datasets: [{
            label: 'Peso inicial',
            data: p,
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
    
   }

   if (e.target.value === 'Marzo') {
    
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso, data[0].Febrero[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
    
   }

   if (e.target.value === 'Abril') {
  
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril'],
          datasets: [{
            label: 'Peso inicial',
            data:[data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
    
   }

   if (e.target.value === 'Mayo') {
   
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril','Mayo'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
    
   }

   if (e.target.value === 'Junio') {
     
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril','Mayo','Junio'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
  
   }

   if (e.target.value === 'Julio') {
     
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril','Mayo','Junio','Julio'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
    
   }

   if (e.target.value === 'Agosto') {
   
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
    
   }

   if (e.target.value === 'Septiembre') {
   
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
    
   }

   if (e.target.value === 'Octubre') {
   
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
   }

   if (e.target.value === 'Noviembre') {
     
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
   }

   if (e.target.value === 'Diciembre') {
    
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
    
   }


   if (e.target.value === 'Enero') {
     
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Febrero','Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Febrero[0].pesoActual,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual,
              data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
    
   }


  }

  if (data[0].newDate === 'Marzo') {

 
    if (e.target.value === 'Marzo') {
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }
 
    if (e.target.value === 'Abril') {
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo','Abril'],
           datasets: [{
             label: 'Peso inicial',
             data:[data[0].peso,data[0].Marzo[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }
 
    if (e.target.value === 'Mayo') {
     
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo','Abril','Mayo'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Junio') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo','Abril','Mayo','Junio'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    
    }
 
    if (e.target.value === 'Julio') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo','Abril','Mayo','Junio','Julio'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Agosto') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo','Abril','Mayo','Junio','Julio', 'Agosto'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
   
    }
 
    if (e.target.value === 'Septiembre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }
 
    if (e.target.value === 'Octubre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    
    }
 
    if (e.target.value === 'Noviembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Diciembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }

    
    if (e.target.value === 'Enero') {
    
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
             data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
   }

      
   if (e.target.value === 'Febrero') {
    
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Marzo','Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
          data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual],
          borderColor: '#36A2EB',
          backgroundColor: '#9BD0F5',
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
        {
           // Peso actual
           label: 'Peso Actual',
           data: [data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
           data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
           data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual],
           borderColor: '#922B21',
           backgroundColor: '#E74C3C',
           borderWidth: 2,
           borderRadius: 5,
           borderSkipped: false,
         }
       ]
      },
      options: {
       responsive: true,
       plugins: {
           legend: {
               position: 'top',
          },
          title: {
           display: true,
           text: 'Tu progreso'
       }
        }
      },
    });
 }
 
 
   }


   if (data[0].newDate === 'Abril') {
 
    if (e.target.value === 'Abril') {
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Abril'],
           datasets: [{
             label: 'Peso inicial',
             data:[data[0].peso],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Abril[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }
 
    if (e.target.value === 'Mayo') {
     
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Abril','Mayo'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Abril[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Junio') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Abril','Mayo','Junio'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    
    }
 
    if (e.target.value === 'Julio') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Abril','Mayo','Junio','Julio'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Agosto') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Abril','Mayo','Junio','Julio', 'Agosto'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
   
    }
 
    if (e.target.value === 'Septiembre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Abril','Mayo','Junio','Julio', 'Agosto','Septiembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }
 
    if (e.target.value === 'Octubre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    
    }
 
    if (e.target.value === 'Noviembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Diciembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }

    
    if (e.target.value === 'Enero') {
    
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
             data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
   }

      
   if (e.target.value === 'Febrero') {
    
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
          data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual],
          borderColor: '#36A2EB',
          backgroundColor: '#9BD0F5',
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
        {
           // Peso actual
           label: 'Peso Actual',
           data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
           data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
           data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual],
           borderColor: '#922B21',
           backgroundColor: '#E74C3C',
           borderWidth: 2,
           borderRadius: 5,
           borderSkipped: false,
         }
       ]
      },
      options: {
       responsive: true,
       plugins: {
           legend: {
               position: 'top',
          },
          title: {
           display: true,
           text: 'Tu progreso'
       }
        }
      },
    });
 }

       
 if (e.target.value === 'Marzo') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Abril','Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [data[0].Abril[0].pesoActual,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}
 
 
   }


   
   if (data[0].newDate === 'Mayo') {
 
    if (e.target.value === 'Mayo') {
     
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Mayo'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Mayo[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Junio') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Mayo','Junio'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Mayo[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    
    }
 
    if (e.target.value === 'Julio') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Mayo','Junio','Julio'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Agosto') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Mayo','Junio','Julio', 'Agosto'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
   
    }
 
    if (e.target.value === 'Septiembre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Mayo','Junio','Julio', 'Agosto','Septiembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }
 
    if (e.target.value === 'Octubre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    
    }
 
    if (e.target.value === 'Noviembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Diciembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }

    
    if (e.target.value === 'Enero') {
    
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
             data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
   }

      
   if (e.target.value === 'Febrero') {
    
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
          data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual],
          borderColor: '#36A2EB',
          backgroundColor: '#9BD0F5',
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
        {
           // Peso actual
           label: 'Peso Actual',
           data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
           data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
           data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual],
           borderColor: '#922B21',
           backgroundColor: '#E74C3C',
           borderWidth: 2,
           borderRadius: 5,
           borderSkipped: false,
         }
       ]
      },
      options: {
       responsive: true,
       plugins: {
           legend: {
               position: 'top',
          },
          title: {
           display: true,
           text: 'Tu progreso'
       }
        }
      },
    });
 }

       
 if (e.target.value === 'Marzo') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}


if (e.target.value === 'Abril') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Mayo','Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual, data[0].Marzo[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual,
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}
 
 
 
   }


   if (data[0].newDate === 'Junio') {
 
    if (e.target.value === 'Junio') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Junio'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Junio[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    
    }
 
    if (e.target.value === 'Julio') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Junio','Julio'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Junio[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Agosto') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Junio','Julio', 'Agosto'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
   
    }
 
    if (e.target.value === 'Septiembre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Junio','Julio', 'Agosto','Septiembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }
 
    if (e.target.value === 'Octubre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Junio','Julio', 'Agosto','Septiembre', 'Octubre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    
    }
 
    if (e.target.value === 'Noviembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Diciembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Junio[0].pesoActual,
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }

    
    if (e.target.value === 'Enero') {
    
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,data[0].Junio[0].pesoActual,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [data[0].Junio[0].pesoActual,
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
             data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
   }

      
   if (e.target.value === 'Febrero') {
    
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,data[0].Junio[0].pesoActual,
          data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual],
          borderColor: '#36A2EB',
          backgroundColor: '#9BD0F5',
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
        {
           // Peso actual
           label: 'Peso Actual',
           data: [data[0].Junio[0].pesoActual,
           data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
           data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual],
           borderColor: '#922B21',
           backgroundColor: '#E74C3C',
           borderWidth: 2,
           borderRadius: 5,
           borderSkipped: false,
         }
       ]
      },
      options: {
       responsive: true,
       plugins: {
           legend: {
               position: 'top',
          },
          title: {
           display: true,
           text: 'Tu progreso'
       }
        }
      },
    });
 }

       
 if (e.target.value === 'Marzo') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,data[0].Junio[0].pesoActual,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [data[0].Junio[0].pesoActual,
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}


if (e.target.value === 'Abril') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,data[0].Junio[0].pesoActual,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual, data[0].Marzo[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [data[0].Junio[0].pesoActual,
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}


if (e.target.value === 'Mayo') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Junio','Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,data[0].Junio[0].pesoActual,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual, data[0].Marzo[0].pesoActual,data[0].Abril[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [data[0].Junio[0].pesoActual,
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual, data[0].Mayo[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}

 
 
 
   }


   if (data[0].newDate === 'Julio') {

 
    if (e.target.value === 'Julio') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Julio'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Julio[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Agosto') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Julio', 'Agosto'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,data[0].Julio[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
   
    }
 
    if (e.target.value === 'Septiembre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Julio', 'Agosto','Septiembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }
 
    if (e.target.value === 'Octubre') {
   
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Julio', 'Agosto','Septiembre', 'Octubre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    
    }
 
    if (e.target.value === 'Noviembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
     
    }
 
    if (e.target.value === 'Diciembre') {
    
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
          // Peso inicial
           labels: ['Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'],
           datasets: [{
             label: 'Peso inicial',
             data: [data[0].peso,
             data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
           {
              // Peso actual
              label: 'Peso Actual',
              data: [
              data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
              borderColor: '#922B21',
              backgroundColor: '#E74C3C',
              borderWidth: 2,
              borderRadius: 5,
              borderSkipped: false,
            }
          ]
         },
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Tu progreso'
          }
           }
         },
       });
    }

    
    if (e.target.value === 'Enero') {
    
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
          {
             // Peso actual
             label: 'Peso Actual',
             data: [
             data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
             data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual],
             borderColor: '#922B21',
             backgroundColor: '#E74C3C',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           }
         ]
        },
        options: {
         responsive: true,
         plugins: {
             legend: {
                 position: 'top',
            },
            title: {
             display: true,
             text: 'Tu progreso'
         }
          }
        },
      });
   }

      
   if (e.target.value === 'Febrero') {
    
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,
          data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual],
          borderColor: '#36A2EB',
          backgroundColor: '#9BD0F5',
          borderWidth: 2,
          borderRadius: 5,
          borderSkipped: false,
        },
        {
           // Peso actual
           label: 'Peso Actual',
           data: [
           data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
           data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual],
           borderColor: '#922B21',
           backgroundColor: '#E74C3C',
           borderWidth: 2,
           borderRadius: 5,
           borderSkipped: false,
         }
       ]
      },
      options: {
       responsive: true,
       plugins: {
           legend: {
               position: 'top',
          },
          title: {
           display: true,
           text: 'Tu progreso'
       }
        }
      },
    });
 }

       
 if (e.target.value === 'Marzo') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}


if (e.target.value === 'Abril') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual, data[0].Marzo[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}


if (e.target.value === 'Mayo') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril', 'Mayo'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual, data[0].Marzo[0].pesoActual,  data[0].Abril[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual, data[0].Mayo[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}

if (e.target.value === 'Junio') {
    
  myChart =  new Chart(ctx, {
    type: 'bar',
    data: {
     // Peso inicial
      labels: ['Julio', 'Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
      datasets: [{
        label: 'Peso inicial',
        data: [data[0].peso,
        data[0].Julio[0].pesoActual, data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
        data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual, data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual, data[0].Mayo[0].pesoActual],
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5',
        borderWidth: 2,
        borderRadius: 5,
        borderSkipped: false,
      },
      {
         // Peso actual
         label: 'Peso Actual',
         data: [
         data[0].Julio[0].pesoActual,data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
         data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual, data[0].Mayo[0].pesoActual, data[0].Junio[0].pesoActual],
         borderColor: '#922B21',
         backgroundColor: '#E74C3C',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       }
     ]
    },
    options: {
     responsive: true,
     plugins: {
         legend: {
             position: 'top',
        },
        title: {
         display: true,
         text: 'Tu progreso'
     }
      }
    },
  });
}

 
 
 
   }
 


});
}


getTodos()



btnInicio.addEventListener('click', e => {
  const id = window.location.pathname.split('/')[2]
  window.location.pathname = `/principal/${id}`;
  })
  
  
  btnCerrarSesion.addEventListener('click', e =>{
    window.location.pathname =  '/signup/'
  })
  

svgRecetas.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `recetas/${id}`
  })

  
  btnPerfil.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `perfil/${id}`
  })



const ctx = document.getElementById('my');








// btnEntrar.addEventListener('click',async e => {
//   e.preventDefault();

   


// const addTodo = async () => {
//     const { data } = await axios.post('/api/todos', {
//       Enero: [{
//         mes: 'Enero',
//         pesoinicial : 0,
//         pesoActual : 46,
//       }],
//       Febrero: [{
//         mes: 'Febrero',
//         pesoinicial : 5,
//         pesoActual : 6,
//       }],
      // Marzo:  [{
      //   mes: 'Marzo',
      //   pesoinicial : 50,
      //   pesoActual : 60,
      // }],
      // Abril:  [{
      //   mes: 'Abril',
      //   pesoinicial : 0,
      //   pesoActual : 0,
      // }],
      // Mayo:  [{
      //   mes: 'Mayo',
      //   pesoinicial : 0,
      //   pesoActual : 0,
      // }],
      // Junio:  [{
      //   pesoinicial : 0,
      //   pesoActual : 0,
      // }],
      // Julio:  [{
      //   pesoinicial : 0,
      //   pesoActual : 0,
      // }],
      // Agosto:  [{
      //   pesoinicial : 0,
      //   pesoActual : 0,
      // }],
      // Septiembre:[{
      //   pesoinicial : 0,
      //   pesoActual : 0,
      // }],
      // Octubre:[{
      //   pesoinicial : 0,
      //   pesoActual : 0,
      // }],
      // Noviembre:  [{
      //   pesoinicial : 0,
      //   pesoActual : 0,
      // }],
      // Diciembre:  [{
      //   pesoinicial : 0,
      //   pesoActual : 0,
      // }],
      // withCredentials: true
    // })
  //   console.log(data);
  // }

  // addTodo();
  // });
