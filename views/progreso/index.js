const btnEntrar = document.querySelector('#btn-entrar')
const divSelectorMes = document.querySelector('#selector-mes')
const btnValoresNutricionales = document.querySelector('#btn-valores-nutricionales')
const btnPeso = document.querySelector('#btn-peso')
const ctx = document.getElementById('my');
const btnIncio = document.querySelectorAll('#btn-inicio');
const btnPerfil = document.querySelectorAll('#btn-perfil');
const btnRecetas= document.querySelectorAll('#btn-recetas');
const btnCerrarSesion= document.querySelectorAll('#btn-cerrar');
const menuIcon = document.querySelector('#menu-icon')
const menuTelefono = document.querySelector('.menu-telefono')


menuIcon.addEventListener('click',e => {
  menuTelefono.classList.toggle('menu-visible')
})

const idPage = window.location.pathname.split('/')[2];


btnIncio.forEach(element => {
  element.addEventListener('click', e => {
    window.location.pathname = `principal/${idPage}`
  })
});

btnRecetas.forEach(element => {
  element.addEventListener('click', e => {
    window.location.pathname = `recetas/${idPage}`
  })
});

btnPerfil.forEach(element => {
  element.addEventListener('click', e => {
    window.location.pathname = `perfil/${idPage}`
  })
});

btnCerrarSesion.forEach(element => {
  element.addEventListener('click', async e => {
  window.location.pathname = `/signup`
  })
});



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


const getPeso = async () => {
  const { data } = await axios.get('/api/todos', {
      withCredentials: true
  })
  const ctx = document.getElementById('my');
  const Peso = ()=>{
if (data[0].newDate === "Enero") {
    if (month === 'Enero') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Enero">Enero</option>
    </select>`
    }

    if (month === 'Febrero') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Enero">Enero</option>
    <option value="Febrero">Febrero</option>
    </select>`
    }
    
    if (month === 'Marzo') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Enero">Enero</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    </select>`
    }
    
    if (month === 'Abril') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
    </select>`
    }
    
    if (month === 'Mayo') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Enero">Enero</option>
      <option value="Febrero">Febrero</option>
      <option value="Marzo">Marzo</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
    </select>`
    }
    
    if (month === 'Junio') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
  <option value="value1"selected disabled>Selecciona el mes</option>
  <option value="Febrero">Febrero</option>
  </select>`

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
  
  if (month === 'Marzo') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
  <option value="value1"selected disabled>Selecciona el mes</option>
  <option value="Febrero">Febrero</option>
  <option value="Marzo">Marzo</option>
  </select>`
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
  
  if (month === 'Abril') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
  </select>`
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
  
  if (month === 'Mayo') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
  </select>`
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
  
  if (month === 'Junio') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Febrero">Febrero</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
  </select>`
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
  
  if (month === 'Julio') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
  <option value="value1"selected disabled>Selecciona el mes</option>
  <option value="Marzo">Marzo</option>
  </select>`
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
  
  if (month === 'Abril') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
  </select>`

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
  
  if (month === 'Mayo') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
  </select>`
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
  
  if (month === 'Junio') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
  </select>`
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
  
  if (month === 'Julio') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
    <option value="value1"selected disabled>Selecciona el mes</option>
    <option value="Marzo">Marzo</option>
    <option value="Abril">Abril</option>
    <option value="Mayo">Mayo</option>
    <option value="Junio">Junio</option>
    <option value="Julio">Julio</option>
  </select>`
  }

  if (month === 'Agosto') {
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
    divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
    </select>`
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
    
    if (month === 'Mayo') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
    </select>`
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
    
    if (month === 'Junio') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
    </select>`
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
    
    if (month === 'Julio') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
    </select>`
    }

    if (month === 'Agosto') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
      <option value="value1"selected disabled>Selecciona el mes</option>
      <option value="Abril">Abril</option>
      <option value="Mayo">Mayo</option>
      <option value="Junio">Junio</option>
      <option value="Julio">Julio</option>
      <option value="Agosto">Agosto</option>
    </select>`
    }
  
    if (month === 'Septiembre') {
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
      </select>`
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
      
      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
      </select>`
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
      
      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
      </select>`
      }
  
      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Mayo">Mayo</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
      </select>`
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
      
      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
      </select>`
      }
  
      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Junio">Junio</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      
      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
      </select>`
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
             text: 'Tu progreso',
             color: 'white'
         }
          }
        },
      });
      }
  
      if (month === 'Agosto') {
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
      </select>`
      }
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Julio">Julio</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
  
      if (month === 'Agosto') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
      </select>`
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto'],
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
             data: [data[0].Agosto[0].pesoActual],
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
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual],
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual],
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
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual],
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
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
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
           data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
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
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
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
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Agosto">Agosto</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual],
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
  
      if (month === 'Marzo') {
        myChart =  new Chart(ctx, {
          type: 'bar',
          data: {
           // Peso inicial
            labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo'],
            datasets: [{
              label: 'Peso inicial',
              data: [data[0].peso,
              data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
               data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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

      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril', 'Mayo'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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

      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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

      if (month === 'Julio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        <option value="Julio">Julio</option>
      </select>`
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
            data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual, data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual, data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
             data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual, data[0].Mayo[0].pesoActual, data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
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


if (data[0].newDate === "Septiembre") {
    console.log(month);
      
    
      if (month === 'Septiembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
      </select>`
      }
    
      if (month === 'Octubre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Septiembre">Septiembre</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Octubre">Octubre</option>
      </select>`
      }
    
      if (month === 'Noviembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Octubre">Octubre</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>   
        <option value="Octubre">Octubre</option>    
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Noviembre">Noviembre</option>
      </select>`
      }
    
      if (month === 'Diciembre') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>       
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>      
        <option value="Noviembre">Noviembre</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Diciembre">Diciembre</option>
      </select>`
      }
    
      if (month === 'Enero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
      </select>`
      }
    
      if (month === 'Febrero') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>       
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
      </select>`
      }
  
      if (month === 'Marzo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>      
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
      </select>`
      }

      if (month === 'Abril') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>      
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
      </select>`
      }

      if (month === 'Mayo') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
        <option value="value1"selected disabled>Selecciona el mes</option>       
        <option value="Diciembre">Diciembre</option>
        <option value="Enero">Enero</option>
        <option value="Febrero">Febrero</option>
        <option value="Marzo">Marzo</option>
        <option value="Abril">Abril</option>
        <option value="Mayo">Mayo</option>
      </select>`


      if (month === 'Junio') {
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
        divSelectorMes.innerHTML = `<select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5  text-center" id="select">
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
  }

btnPeso.addEventListener('click', e =>{
  divSelectorMes.classList.remove('hidden')
  myChart.destroy();
  Peso()
  FuncionSelect()
})

Peso()
FuncionSelect()
}
getPeso()


const FuncionSelect = async () =>{
  const { data } = await axios.get('/api/todos', {
    withCredentials: true
})
  const select = document.querySelector('#select');
  console.log(select);
  select.addEventListener('input', async e =>{

    if (data[0].newDate === 'Febrero') {
  
     if (e.target.value === 'Febrero') {
      myChart.destroy();
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
      myChart.destroy();
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
      myChart.destroy();
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
      myChart.destroy();
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
       myChart.destroy();
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
        myChart.destroy();
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
        myChart.destroy();
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
       myChart.destroy();
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
        myChart.destroy();
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
        myChart.destroy();
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
       myChart.destroy();
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
        myChart.destroy();
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
       myChart.destroy();
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
        myChart.destroy();
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
        myChart.destroy();
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
      myChart.destroy();
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
        myChart.destroy();
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
  
     if (data[0].newDate === 'Agosto') {
  
   
      if (e.target.value === 'Agosto') {
      myChart.destroy();
      myChart =  new Chart(ctx, {
           type: 'bar',
           data: {
            // Peso inicial
             labels: ['Agosto'],
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
                data: [data[0].Agosto[0].pesoActual],
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
        myChart.destroy();
         myChart =  new Chart(ctx, {
           type: 'bar',
           data: {
            // Peso inicial
             labels: ['Agosto','Septiembre'],
             datasets: [{
               label: 'Peso inicial',
               data: [data[0].peso,
               data[0].Agosto[0].pesoActual],
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
                data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual],
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
        myChart.destroy();
         myChart =  new Chart(ctx, {
           type: 'bar',
           data: {
            // Peso inicial
             labels: ['Agosto','Septiembre', 'Octubre'],
             datasets: [{
               label: 'Peso inicial',
               data: [data[0].peso,
               data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual],
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
                data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
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
      myChart.destroy();
         myChart =  new Chart(ctx, {
           type: 'bar',
           data: {
            // Peso inicial
             labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre'],
             datasets: [{
               label: 'Peso inicial',
               data: [data[0].peso,
              data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual],
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
                data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
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
      myChart.destroy();
         myChart =  new Chart(ctx, {
           type: 'bar',
           data: {
            // Peso inicial
             labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre'],
             datasets: [{
               label: 'Peso inicial',
               data: [data[0].peso,
               data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual],
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
                data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
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
      myChart.destroy();
        myChart =  new Chart(ctx, {
          type: 'bar',
          data: {
           // Peso inicial
            labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero'],
            datasets: [{
              label: 'Peso inicial',
              data: [data[0].peso,
              data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual],
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
               data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
      myChart.destroy();
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
         // Peso inicial
          labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero'],
          datasets: [{
            label: 'Peso inicial',
            data: [data[0].peso,
            data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual],
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
             data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
      myChart.destroy();
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,
          data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
           data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
    myChart.destroy();
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,
          data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
           data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
    myChart.destroy();  
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,
          data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
           data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
    myChart.destroy();
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,
          data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
           data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
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
  
  if (e.target.value === 'Julio') {
    myChart.destroy();
    myChart =  new Chart(ctx, {
      type: 'bar',
      data: {
       // Peso inicial
        labels: ['Agosto','Septiembre', 'Octubre', 'Noviembre','Diciembre', 'Enero' , 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [{
          label: 'Peso inicial',
          data: [data[0].peso,
          data[0].Agosto[0].pesoActual, data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
          data[0].Diciembre[0].pesoActual,data[0].Enero[0].pesoActual,data[0].Febrero[0].pesoActual, data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual, data[0].Mayo[0].pesoActual,data[0].Junio[0].pesoActual],
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
           data[0].Agosto[0].pesoActual,data[0].Septiembre[0].pesoActual, data[0].Octubre[0].pesoActual, data[0].Noviembre[0].pesoActual, 
           data[0].Diciembre[0].pesoActual, data[0].Enero[0].pesoActual, data[0].Febrero[0].pesoActual,  data[0].Marzo[0].pesoActual, data[0].Abril[0].pesoActual, data[0].Mayo[0].pesoActual, data[0].Junio[0].pesoActual,data[0].Julio[0].pesoActual],
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


const getCalorias = async () => {
  const { data } = await axios.get('/api/recetas', {
    withCredentials: true
})


btnValoresNutricionales.addEventListener('click', e =>{
  divSelectorMes.innerHTML = ` <select name="Progreso" class="outline-none p-2 rounded-lg bg-slate-200 w-4/5 dark:bg-slate-600 text-center" id="select">
  <option value="calorias"selected>Calorias</option>
  <option value="carbohidratos">Carbohidratos</option>
  <option value="grasas">Grasas</option>
  <option value="fibra">Fibra</option>
  <option value="proteinas">Proteinas</option>

</select>`

  if (data[0] === undefined || data[0].calorias === 0) {
    myChart.destroy();
   myChart =  new Chart(ctx, {
     type: 'bar',
     options: {
      responsive: true,
      plugins: {
          legend: {
              position: 'top',
         },
         title: {
          display: true,
          text: 'Aun no has comido ningun plato',
          color: 'white',
      }
       }
     },
   });
  }
  else{
  myChart.destroy();
  const p = [data[0].calorias]
   myChart =  new Chart(ctx, {
     type: 'bar',
     data: {
       labels: ['Calorias',],
       datasets: [{
         label: 'Calorias consumidas',
         data: p,
         borderColor: '#36A2EB',
         backgroundColor: '#9BD0F5',
         borderWidth: 2,
         borderRadius: 5,
         borderSkipped: false,
       },
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
  const selectValoresNutricionales = document.querySelector('#select')
  selectValoresNutricionales.addEventListener('input', e => {
    console.log(e.target.value);

    if (e.target.value === 'carbohidratos') {
      myChart.destroy();
      if (data[0] === undefined  || data[0].grasa === 0) {
        console.log('asut');
        myChart.destroy();
       myChart =  new Chart(ctx, {
         type: 'bar',
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Aun no has comido ningun plato'
          }
           }
         },
       });
      }
      else{
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Carbohidratos'],
          datasets: [{
            label: 'Carbohidratos consumidos',
            data: [data[0].carbohidratos],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
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

    if (e.target.value === 'grasas') {
      myChart.destroy();
      if (data[0] === undefined  || data[0].grasa === 0) {
        console.log('asut');
        myChart.destroy();
       myChart =  new Chart(ctx, {
         type: 'bar',
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Aun no has comido ningun plato'
          }
           }
         },
       });
      }
      else{
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Grasas'],
          datasets: [{
            label: 'Grasas consumidas',
            data: [data[0].grasas],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
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

    if (e.target.value === 'fibra') {
      myChart.destroy();

      if (data[0] === undefined  || data[0].fibra === 0) {
        console.log('asut');
        myChart.destroy();
       myChart =  new Chart(ctx, {
         type: 'bar',
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Aun no has comido ningun plato'
          }
           }
         },
       });
      }
      else{
      myChart =  new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ['Fibra'],
          datasets: [{
            label: 'Fibras consumidas',
            data: [data[0].fibra],
            borderColor: '#36A2EB',
            backgroundColor: '#9BD0F5',
            borderWidth: 2,
            borderRadius: 5,
            borderSkipped: false,
          },
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

    if (e.target.value === 'proteinas') {
      myChart.destroy();
      if (data[0] === undefined  || data[0].proteinas === 0) {
        console.log('asut');
        myChart.destroy();
       myChart =  new Chart(ctx, {
         type: 'bar',
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Aun no has comido ningun plato'
          }
           }
         },
       });
      }
      else{
        console.log('ooooo');
      myChart.destroy();
      const p = [data[0].proteinas]
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
           labels: ['Proteinas',],
           datasets: [{
             label: 'Proteinas consumidas',
             data: p,
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
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
    if (e.target.value === 'calorias') {
      myChart.destroy();
      if (data[0] === undefined  || data[0].calorias === 0) {
        console.log('aqio');
        myChart.destroy();
       myChart =  new Chart(ctx, {
         type: 'bar',
         options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
             },
             title: {
              display: true,
              text: 'Aun no has comido ningun plato'
          }
           }
         },
       });
      }
      else{
        console.log('ooooo');
      myChart.destroy();
      const p = [data[0].calorias]
       myChart =  new Chart(ctx, {
         type: 'bar',
         data: {
           labels: ['Calorias',],
           datasets: [{
             label: 'Calorias consumidas',
             data: p,
             borderColor: '#36A2EB',
             backgroundColor: '#9BD0F5',
             borderWidth: 2,
             borderRadius: 5,
             borderSkipped: false,
           },
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
  })
})

}
getCalorias()







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
