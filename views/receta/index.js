
const divcontenedor = document.querySelector('#contenedor')
const select = document.querySelector('#select-semanas')
const btnProgreso = document.querySelector('#btn-progreso')
const btnPerfil = document.querySelector('#btn-perfil')
const btnInicio = document.querySelector('#btn-inicio')
const btnPerfilMobile = document.querySelector('#btn-perfil-mobil')
const btnInicioMobile = document.querySelector('#btn-inicio-mobil')
const btnCerrarSesion = document.querySelector('#btn-cerrar')
const btnCerrarSesionMobile = document.querySelector('#btn-cerrar-mobil')
const labelProgreso = document.querySelector('#label-progreso')
const divSelect = document.querySelector('#select')
const btnMenuMobile = document.querySelector('.btn-mobil')
const menuMobile = document.querySelector('.menu-mobil')

// Telefono
btnInicioMobile.addEventListener('click', e => {
  const id = window.location.pathname.split('/')[2]
  window.location.pathname = `/principal/${id}`;
  })

  btnMenuMobile.addEventListener('click', e =>{
    menuMobile.classList.toggle('top-20')
    divcontenedor.classList.toggle('hidden')
  })
  btnPerfilMobile.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `perfil/${id}`
  })

btnInicio.addEventListener('click', e => {
  const id = window.location.pathname.split('/')[2]
  window.location.pathname = `/principal/${id}`;
  })
  
  
  btnCerrarSesion.addEventListener('click', e =>{
    window.location.pathname =  '/signup/'
  })
  
  btnCerrarSesionMobile.addEventListener('click', e =>{
    window.location.pathname =  '/signup/'
  })

  btnPerfil.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `perfil/${id}`
  })
  
  
  btnProgreso.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `progreso/${id}`
  })
  
  labelProgreso.addEventListener('click', e =>{
    const id = window.location.pathname.split('/')[2];
    window.location.pathname = `progreso/${id}`
  })
  
  const addRecetas = async ()=>{
    const { data } = await axios.post('/api/recetas', {
      SemanaUno: [
        {Lunes:{Desayuno:{Titulo:'Tostadas de pan integral con queso fresco y frutas',
        Ingredientes:'Pan integral: 2 rebanadas. Queso fresco: 2 cucharadas. Frutas frescas: 1/2 taza.',
        Calorias: 300, Carbohidratos: 55, Proteinas: 14, Grasas: 3, Fibra: 8,
        Preparacion:'1-Calienta un sartén a fuego medio. 2-Coloca las rebanadas de pan integral en el sartén y tosta hasta que estén doradas. 3-Retira del sartén y coloca el queso fresco sobre cada rebanada de pan. 4-Coloca las frutas frescas encima del queso fresco. 5-Sirve inmediatamente y disfruta.', 
      }, 
  
        Almuerzo:{Titulo:'Pollo a la parrilla con verduras al vapor',
        Ingredientes:'Pechugas de pollo : 2, Verduras: 1 taza',
        Calorias: 212, Carbohidratos: 3, Proteinas: 41, Grasas: 4, Fibra: 1,
        Preparacion: '1-Tempere las pechugas de pollo con sal y pimienta a gusto. 2-Caliente una parrilla a fuego medio-alto y coloque las pechugas de pollo. 3-Cocine durante 4-5 minutos por lado, o hasta que estén cocidas por completo. 4-Mientras tanto, prepare una olla con agua y coloque las verduras al vapor (por ejemplo, brócoli, zanahorias, etc) hasta que estén suaves. 5-Sirva las pechugas de pollo con las verduras al vapor y disfrute.'
      },  
  
        Cena:{Titulo:'Ensalada de pollo con aguacate y nueces',
        Ingredientes:'Pechuga de pollo cocida: 2 tazas, Aguacate: 1, Nueces: 1/4 taza, Lechuga: 2 taza, Aderezo de ensalada: 2 cucharadas',
        Calorias: 738, Carbohidratos: 22, Proteinas: 47, Grasas: 54, Fibra: 14,
        Preparacion: '1-En un bol grande, mezcle la lechuga picada con la pechuga de pollo cocida. 2-Agregue el aguacate y las nueces picadas. 3-Sirva con el aderezo de ensalada por encima. 4-Sirva inmediatamente y disfrute.'
      }},
  
        // Martes
        Martes:{Desayuno:{Titulo:'Pan integral con huevo y tomate',
        Ingredientes:'Pan integral: 2 rebanadas, Huevo: 1, Tomate: 1',
        Preparacion:'1-Calienta una sartén a fuego medio. 2-Agregue un poco de aceite de oliva o mantequilla. 3-Coloque el huevo en la sartén y cocine hasta que la yema esté cocida a su gusto. 4-Mientras tanto, tostar el pan en un tostador o en el horno. 5-Corta el tomate en rodajas y colócalos sobre el pan tostado. 6-Coloca el huevo cocido encima del tomate y el pan. 7-Sirve inmediatamente y disfruta.', 
        Calorias: 290, Carbohidratos: 44, Proteinas: 15, Grasas: 8, Fibra: 7
      },
  
        Almuerzo:{Titulo:'Wrap de salmón con ensalada de verduras',
        Ingredientes:'Wrap integral: 1 unidad. Salmón cocido: 4oz. Verduras (ej: lechuga, tomate, pimiento): 1 taza. Yogurt bajo en grasa: 1 cucharada',
        Preparacion:'1-Caliente el wrap en una sartén o en el horno para que quede suave. 2-Agregue el salmón cocido en el centro del wrap, junto con las verduras picadas. 3-Enróllelo y sirva con el yogur bajo en grasa como aderezo. 4-Sirva inmediatamente y disfrute.', 
        Calorias: 355, Carbohidratos: 32, Proteinas: 30, Grasas: 11, Fibra: 6
      },
  
      Cena:{Titulo:'Sopa de verduras y pollo',
        Ingredientes:'Verduras (ej: zanahorias, papa, cebolla): 1 taza. Pollo cocido: 3 oz. Caldo de pollo : 4 taza. Aceite de oliva: 1 cucharada',
        Preparacion:'1-Caliente el aceite de oliva en una olla a fuego medio y añada las verduras picadas. 2-Sofría por unos minutos hasta que estén suaves. 3-Agregue el caldo de pollo y el pollo cocido y deje que hierva. 4-Reduzca el fuego y deje cocinar durante unos 15 minutos más hasta que las verduras estén suaves. 5-Sirva caliente y disfrute.', 
        Calorias: 290, Carbohidratos: 14, Proteinas: 28, Grasas: 16, Fibra: 3
      }},
  
      // Miercoles
  
  
      Miercoles:{Desayuno:{Titulo:'Avena con leche y frutas',
      Ingredientes:'Avena: 1/2 taza, Leche: 1 taza, Frutas frescas o congeladas: 1/2 taza, Miel (opcional): 1 cucharadita',
      Preparacion:'1-Calentar la leche en una olla mediana a fuego medio. 2-Agregar la avena y mezclar bien. 3-Cocinar la mezcla durante unos 3-5 minutos, revolviendo ocasionalmente, hasta que la avena esté suave. 4-Retirar del fuego y dejar reposar por unos minutos. 5-Agregar las frutas y la miel (si se desea) y mezclar bien. 6-Servir caliente.', 
      Calorias: 300, Carbohidratos: 42, Proteinas: 14, Grasas: 8, Fibra: 6
    },
  
      Almuerzo:{Titulo:'Sopa de lentejas con verduras',
      Ingredientes:'Lentejas cocidas: 1 taza. Verduras (ej: zanahorias, papa, cebolla): 1 taza. Caldo de pollo/vegetal: 4 taza. Aceite de oliva: 1 cucharada',
      Preparacion:'1-Caliente el aceite de oliva en una olla a fuego medio y añada las verduras picadas.2-Sofría por unos minutos hasta que estén suaves. 3-Agregue el caldo de pollo o vegetal y las lentejas cocidas y deje que hierva. 4-Reduzca el fuego y deje cocinar durante unos 15 minutos más hasta que las verduras estén suaves. 5-Sirva caliente y disfrute.', 
      Calorias: 440, Carbohidratos: 54, Proteinas: 24, Grasas: 15, Fibra: 18
    },
  
    Cena:{Titulo:'Pescado al horno con ensalada de verduras',
      Ingredientes:'Pescado blanco (ej: tilapia, lenguado): 4 onzas. Aceite de oliva: 1 cucharada. Verduras (ej: lechuga, tomate, pimiento: 1 taza. Vinagreta: 2 cucharadas',
      Preparacion:'1-Precaliente el horno a 425 grados F (220 grados C). 2-Colocar el pescado en una bandeja para hornear y rociar con aceite de oliva. 3-Cocinar durante 15-20 minutos, o hasta que el pescado esté cocido a su gusto. 4-Mientras tanto, mezclar las verduras en un bol grande. 5-Sirva el pescado con las verduras y aderezar con una vinagreta ligera.', 
      Calorias: 325, Carbohidratos: 7, Proteinas: 27, Grasas: 21, Fibra: 2
    }},
  
    // Jueves
  
    Jueves:{Desayuno:{Titulo:'Tostadas de aguacate con huevo',
    Ingredientes:'Tostadas integrales: 2 unidades, Aguacate maduro: 1 unidad, Huevo cocido: 1 unidad, Pimienta negra: 1 cucharadita',
    Preparacion:'1-Caliente una sartén a fuego medio y fría los huevos hasta que estén cocidos. 2-Mientras tanto, coloque las tostadas integrales en el tostador. 3-En un bol, mezcle el aguacate con un tenedor y sazone con pimienta negra. 4-Coloque el aguacate sobre las tostadas integrales y agregue el huevo cocido encima. 5-Sirva inmediatamente y disfrute.', 
    Calorias: 521, Carbohidratos: 53, Proteinas: 18, Grasas: 30, Fibra: 18
  },
  
    Almuerzo:{Titulo:'Arroz integral con pollo y verduras con huevo',
    Ingredientes:'Arroz integral: 1 taza. Pollo cocido: 4oz. Verduras (ej: zanahorias, pimientos, cebolla): 1taza. Huevo cocido: 1unidad. Aceite de oliva: 1 cucharada ',
    Preparacion:'1-Cocer el arroz integral según las instrucciones del paquete. 2-Caliente una sartén a fuego medio y fría las verduras y el pollo cocido en el aceite de oliva hasta que estén cocidos. 3-En la misma sartén, fría el huevo cocido. 4-Mezclar el arroz cocido con las verduras, pollo y huevo cocido. 5-Sirva caliente y disfrute.', 
    Calorias: 689, Carbohidratos: 50, Proteinas: 33, Grasas: 25, Fibra: 5
  },
  
  Cena:{Titulo:'Tortilla de patatas',
    Ingredientes:'2 huevos. 100 gramos de patatas peladas y cortadas en rodajas finas.1/4 de cebolla cortada en rodajas finas.Aceite de oliva.Sal al gusto',
    Preparacion:'1-Calienta una sartén antiadherente con un poco de aceite de oliva a fuego medio-alto.2-Agrega las patatas y la cebolla a la sartén y fríe hasta que estén doradas y tiernas, aproximadamente 8-10 minutos.3-Mientras tanto, batir los huevos en un tazón con una pizca de sal.4-Agrega las patatas y la cebolla a los huevos batidos y mezcla bien.5-Vierte la mezcla de huevo y patatas de vuelta a la sartén y cocina a fuego medio-bajo hasta que esté dorado por debajo, aproximadamente 5-7 minutos.6-Dale la vuelta a la tortilla con ayuda de un plato y termina de cocinar por el otro lado hasta que esté bien dorado, aproximadamente 3-5 minutos más.7-Sirve la tortilla de patatas caliente.', 
    Calorias: 350, Carbohidratos: 30, Proteinas: 13, Grasas: 20, Fibra: 2
  }},
  
  // Viernes
  Viernes:{Desayuno:{Titulo:'Pancake de avena',
  Ingredientes:'1/2 taza de harina de avena.1 cucharadita de levadura en polvo.1 huevo.1/4 taza de leche.1/2 plátano maduro.Aceite de coco o mantequilla para engrasar la sartén',
  Preparacion:'1-En un tazón mediano, mezcla la harina de avena, la levadura y una pizca de sal hasta combinarlos.2-En otro tazón pequeño, bate el huevo y agrega la leche.3-Añade los ingredientes húmedos a los ingredientes secos y mezcla hasta obtener una mezcla homogénea.4-Añade el plátano maduro aplastado y mezcla hasta incorporar.5-Engrasa una sartén pequeña con aceite de coco o mantequilla y caliéntala a fuego medio.6-Vierte una cucharada de la mezcla de pancake en la sartén y cocina hasta que comience a formarse burbujas en la superficie.7-Da vuelta el pancake y cocina hasta que esté dorado por ambos lados.8-Repite con la mezcla restante hasta formar tres o cuatro pancakes.9-Sirve caliente con un poco de miel o mermelada si lo deseas.', 
  Calorias: 300, Carbohidratos: 50, Proteinas: 10, Grasas: 6, Fibra: 4
  },
  
  Almuerzo:{Titulo:'Lasaña de verduras con queso ricotta',
  Ingredientes:'Pasta de lasaña: 8oz. Verduras (ej: pimientos, cebolla, berenjena, champiñones: 1taza. Tomate picado: 1taza. Queso ricotta: 1/2 taza. Queso mozzarella: 1/4 taza. Aceite de oliva: 1 cucharada ',
  Preparacion:'1-Cocer la pasta de lasaña según las instrucciones del paquete.2-Escurrir y dejar enfriar. 3-Calentar el aceite de oliva en una sartén a fuego medio y añadir las verduras picadas.4-Sofría por unos minutos hasta que estén suaves.5-Agregue el tomate picado y cocine durante unos minutos más.6-En un refractario para hornear, colocar una capa de pasta de lasaña, seguida de una capa de verduras, una capa de queso ricotta y una capa de queso mozzarella. 7-Repetir estas capas hasta terminar con una capa de queso mozzarella en la parte superior. 8-Hornear a 180°C durante 25 minutos o hasta que el queso esté dorado. 9-Dejar enfriar antes de servir.', 
  Calorias: 855, Carbohidratos: 88, Proteinas: 37, Grasas: 38, Fibra: 5
  },
  
  Cena:{Titulo:'Ensalada de atún con verduras',
  Ingredientes:'Atún en lata: 1taza. Verduras (ej: lechuga, tomate, cebolla): 1taza. Aceite de oliva: 1 cucharada. Vinagre balsámico: 1 cucharada',
  Preparacion:'1-En un bol grande, mezclar el atún desmenuzado con las verduras picadas. 2-En un tazón pequeño, mezclar el aceite de oliva y el vinagre balsámico. 3-Verter la mezcla de vinagre sobre la ensalada y mezclar bien. 4-Servir frío y disfrutar.', 
  Calorias: 359, Carbohidratos: 8, Proteinas: 42, Grasas: 20, Fibra: 2
  }},
  
  // Sabado
  Sabado:{Desayuno:{Titulo:'Huevos revueltos con espinacas y champiñones',
  Ingredientes:'Huevo: 2 unidades, Champiñones: 1/2 taza, Espinacas: 1/2 taza, Queso rallado 1/4 taza, Aceite de oliva 1 cucharada',
  Preparacion:'1-Calentar el aceite de oliva en una sartén a fuego medio. 2-Agregar los champiñones y las espinacas a la sartén y cocinar hasta que estén suaves. 3-Batir los huevos en un tazón y agregar a la sartén con las verduras.4-Revolver hasta que los huevos estén cocidos. 5-Agregar el queso rallado y mezclar hasta que se derrita. 6-Servir caliente y disfrutar.', 
  Calorias: 415, Carbohidratos: 5, Proteinas: 22, Grasas: 35, Fibra: 2
  },
  
  Almuerzo:{Titulo:'Salteado de garbanzos con pollo y verduras',
  Ingredientes:'85 g de pechuga de pollo cortada en tiras.100 g de garbanzos cocidos.60 g de verduras mixtas (puedes usar zanahoria, pimiento, cebolla, etc).1 cucharada de aceite de oliva.Sal y pimienta al gusto',
  Preparacion:'1-Calienta el aceite de oliva en una sartén a fuego medio-alto.2-Agrega las tiras de pollo y fríelas hasta que estén doradas.3-Retira del fuego y reserva.4-En la misma sartén, agrega las verduras cortadas en rodajas y fríelas hasta que estén tiernas.5-Agrega los garbanzos cocidos y mezcla con las verduras.6-Vuelve a agregar el pollo y continúa saltear hasta que todo esté bien caliente.7-Ajusta la sazón con sal y pimienta al gusto.8-Sirve caliente.', 
  Calorias: 380, Carbohidratos: 37, Proteinas: 28, Grasas: 15, Fibra: 8
  },
  
  Cena:{Titulo:'Ensalada de quinoa con pollo y verduras',
  Ingredientes:'Quinoa: 1 taza, Pechuga de pollo: 1 taza. Verduras (ej: pimientos, cebolla, zanahorias, espinacas): 1 taza. Aceite de oliva: 1 cucharada. Vinagre balsámico: 1 cucharada',
  Preparacion:'1-Cocer la quinoa siguiendo las instrucciones del paquete.2-Escurrir y dejar enfriar. 3-Cocer la pechuga de pollo y cortarla en cubos. 4-Picar las verduras en cubos de tamaño similar. 5-En un tazón grande, mezclar la quinoa, el pollo, las verduras, el aceite de oliva y el vinagre balsámico. 6-Mezclar bien, probar y ajustar la sazón si es necesario. 7-Servir frío o a temperatura ambiente.', 
  Calorias: 696, Carbohidratos: 53, Proteinas: 52, Grasas: 23, Fibra: 8
  }},
  
  //  Domingo
  Domingo:{Desayuno:{Titulo:'Pan de centeno con queso cottage y frutas',
  Ingredientes:'Pan de centeno: 2 rebanadas. Queso cottage: 2 oz, Frutas (ej: fresas, plátano, manzana): 1 taza. Miel: 1 cucharada',
  Preparacion:'1-Calentar el pan de centeno en un tostador o en un sartén a fuego medio. 2-Colocar el queso cottage en las rebanadas de pan tostado. 3-Picar las frutas y colocarlas encima del queso cottage. 4-Espolvorear con miel si deseas. 5-Servir caliente y disfrutar.', 
  Calorias: 374, Carbohidratos: 61, Proteinas: 23, Grasas: 6, Fibra: 5
  },
  
  Almuerzo:{Titulo:'Brochetas de pollo con calabaza',
  Ingredientes:'1 pechuga de pollo cortada en cubos.1/2 taza de calabaza cortada en cubos.Sal y pimienta al gusto.1 cucharadita de aceite de oliva',
  Preparacion:'1-Precalentar el horno a 200°C.2-Cortar la pechuga de pollo en cubos y la calabaza en cubos.3-En un tazón, mezclar los cubos de pollo y calabaza con una cucharadita de aceite de oliva, sal y pimienta.4-Colocar los cubos de pollo y calabaza en brochetas alternados.5-Colocar las brochetas en una bandeja para horno y llevarlas al horno durante 15-20 minutos hasta que estén dorados y cocidos.', 
  Calorias: 250, Carbohidratos: 6, Proteinas: 28, Grasas: 10, Fibra: 2
  },
  
  Cena:{Titulo:'Nuggets de pollo con espinacas',
  Ingredientes:'2 pechugas de pollo, picadas.1 taza de espinacas frescas,picadas.1 huevo.2 cucharadas de harina de avena.1/4 taza de pan rallado.Sal y pimienta al gusto.Aceite de oliva',
  Preparacion:'1-Picar las pechugas de pollo y las espinacas. Reservar.2-Batir el huevo en un tazón pequeño. Reservar.3-Mezclar la harina de avena, el pan rallado, la sal y la pimienta en un tazón separado. Reservar.4-Formar los nuggets de pollo: Sumergir cada porción de pollo picado en la mezcla de huevo, luego en la mezcla de harina de avena y pan rallado, asegurándose de cubrirlos completamente.5-Calentar una sartén con un poco de aceite de oliva a fuego medio-alto.6-Cocinar los nuggets de pollo hasta que estén dorados y cocidos, aproximadamente 5 a 7 minutos.6-En la misma sartén, agregar las espinacas y cocinar hasta que estén tiernas, aproximadamente 2 minutos.7-Servir los nuggets de pollo junto con las espinacas calientes.', 
  Calorias: 350, Carbohidratos: 30, Proteinas: 35, Grasas: 11, Fibra: 4
  }},
  }],
  
  
  // SemanaDos
  
  // Lunes
  SemanaDos: [
  {Lunes:{Desayuno:{Titulo:'Tostadas de pan integral con hummus y verduras',
  Ingredientes:'Pan integra: 2 rebanadas. Hummus: 2 cucharadas. Verduras (ej: pepino, tomate, cebolla): 1 taza. Aceite de oliva: 1 cucharada. Vinagre de manzana: 1 cucharada',
  Preparacion:'1-Calentar el pan integral en un tostador o en un sartén a fuego medio. 2-Extender el hummus en las rebanadas de pan tostado. 3-Picar las verduras y colocarlas encima del hummus. 4-Espolvorear con un poco de aceite de oliva y vinagre de manzana para mejorar el sabor. 5-Servir caliente y disfrutar.', 
  Calorias: 454, Carbohidratos: 56, Proteinas: 11, Grasas: 25, Fibra: 10
  }, 
  
  Almuerzo:{Titulo:'Arroz integral con camarones y verduras',
  Ingredientes:'Arroz integral: 1 taza. Camarones cocidos: 1 taza. Verduras (ej: zanahoria, brócoli, pimiento): 1 taza, Aceite de oliva: 1 cucharada. Jugo de limón: 1 cucharada',
  Preparacion: '1-Cocer el arroz integral según las instrucciones del paquete. 2-Calentar el aceite de oliva en una sartén a fuego medio. 3-Agregar las verduras y saltearlas durante unos 5 minutos o hasta que estén cocidas. 4-Agregar los camarones y saltearlos durante 2 minutos o hasta que estén cocidos. 5-Agregar el arroz cocido y el jugo de limón a la sartén y mezclar bien. 6-Servir caliente y disfrutar.',
  Calorias: 666, Carbohidratos: 51, Proteinas: 46, Grasas: 18, Fibra: 4
  },  
  
  Cena:{Titulo:'Ensalada de pollo con frutas y nueces',
  Ingredientes:'Pechuga de pollo cocida y cortada en cubos: 2 taza. Frutas (ej: fresas, kiwi, plátano): 1 taza. Nueces: 1/4 taza. Lechuga: 2 taza. Vinagre balsámico: 1 cucharada. Aceite de oliva: 1 cucharada',
  Preparacion:'1-En un tazón grande, mezclar el pollo, las frutas picadas, las nueces picadas, la lechuga picada y el vinagre balsámico y el aceite de oliva. 2-Mezclar bien, probar y ajustar la sazón si es necesario. 3-Servir frío o a temperatura ambiente.',
  Calorias: 832, Carbohidratos: 34, Proteinas: 90, Grasas: 48, Fibra: 6
  }},
  
  // Martes
  Martes:{Desayuno:{Titulo:'Tostadas de pan integral con huevo y tomate',
  Ingredientes:'Pan integral: 2 rebanadas, Huevo cocido: 1, Tomate: 2 rebanadas, Aceite de oliva: 1 cucharada, Sal y pimienta: al gusto',
  Preparacion:'1-Calentar una sartén a fuego medio con una cucharada de aceite de oliva. 2-Colocar el huevo cocido y los tomates en la sartén y cocinar durante unos minutos, hasta que estén calientes. 3-Calentar el pan en el tostador. 4-Colocar el huevo cocido y los tomates sobre el pan tostado y sazonar con sal y pimienta al gusto. 5-Servir caliente y disfrutar.', 
  Calorias: 406, Carbohidratos: 42, Proteinas: 15, Grasas: 21, Fibra: 5
  },
  Almuerzo:{Titulo:'Arroz integral con salmón y verduras',
  Ingredientes:'Arroz integral: 1 taza. Salmon: 4oz. Verduras (ej: zanahorias, brócoli, pimientos): 1 taza. Aceite de oliva: 1 cucharada',
  Preparacion:'1-Cocer el arroz según las instrucciones del paquete y dejarlo enfriar. 2-Calentar una sartén con un poco de aceite de oliva. 3-Añadir las verduras a la sartén y cocinar a fuego medio hasta que estén tiernas. 4-Añadir el salmón a la sartén y cocinar durante 3-5 minutos por lado, hasta que esté cocido. 5-Mezclar el arroz con las verduras y el salmón. 6-Servir y disfrutar.', 
  Calorias: 646, Carbohidratos: 50, Proteinas: 32, Grasas: 25, Fibra: 4
  },
  
  Cena:{Titulo:'Ensalada Cesar con pollo o tofu',
  Ingredientes:'Lechuga romana: 4 tazas, Pollo o Tofu cocido: 1 taza, Pan rallado: 1/4 taza, Queso parmesano rallado: 1/4 taza, Aceite de oliva: 2 cucharadas, Jugo de limón: 1 cucharada, Ajo: 2 dientes, Mostaza dijon: 1 cucharada, Sal y pimienta: al gusto',
  Preparacion:'1-Picar la lechuga romana en trozos pequeños. 2-Picar el pollo o el tofu cocido en trozos pequeños. 3-Mezclar la lechuga, el pollo o el tofu, el pan rallado y el queso parmesano rallado en un tazón grande. 4-En un tazón pequeño, mezclar el aceite de oliva, el jugo de limón, el ajo picado, la mostaza dijon, la sal y la pimienta. 5-Verter la mezcla de aderezo sobre la ensalada y mezclar bien. 6-Servir inmediatamente y disfrutar.', 
  Calorias: 660, Carbohidratos: 20, Proteinas: 51, Grasas: 46, Fibra: 2
  }},
  
  // Miercoles
  
  
  Miercoles:{Desayuno:{Titulo:'Yogurt con frutas y nueces',
  Ingredientes:'Yogurt natural: 1 taza. Frutas (ej: fresas, kiwi, manzana): 1 taza. Nueces(opcional): 2 cucharadas. Miel(opcional): 1 cucharada',
  Preparacion:'1-En un tazón grande, mezclar el yogurt natural, las frutas picadas y las nueces picadas. 2-Si desea, agregar miel al gusto. 3-Mezclar bien y servir.', 
  Calorias: 394, Carbohidratos: 38, Proteinas: 15, Grasas: 21, Fibra: 4
  },
  
  Almuerzo:{Titulo:'Pasta con salsa de aguacate',
  Ingredientes:'60 g de pasta integral.1 aguacate maduro.1/2 limón.1 diente de ajo.1/4 taza de cilantro fresco.Sal y pimienta al gusto.2 cucharadas de aceite de oliva.1/2 taza de cherry tomatoes.1/4 taza de queso rallado',
  Preparacion:'1-Cocine la pasta de acuerdo a las instrucciones del paquete hasta que esté al dente.2-Mientras tanto, haga la salsa de aguacate: corte el aguacate por la mitad y retire el hueso.3-Después, retire la pulpa y coloque en un tazón.4-Agregue el jugo de medio limón, el ajo picado, el cilantro fresco, la sal y la pimienta y mezcle todo con un tenedor hasta obtener una salsa uniforme.5-Caliente el aceite de oliva en una sartén a fuego medio y agregue los cherry tomatoes cortados por la mitad.6-Cocine por 3-4 minutos o hasta que estén ligeramente blandos.5-Agregue la pasta cocida a la sartén con los cherry tomatoes y mezcle bien.7-Agregue la salsa de aguacate y mezcle hasta que la pasta quede bien cubierta.8-Sirva la pasta en un plato y espolvoree queso rallado por encima.', 
  Calorias: 500, Carbohidratos: 49, Proteinas: 15, Grasas: 31, Fibra: 11
  },
  
  Cena:{Titulo:'Huevos revueltos con verduras y un trozo de pan integral.',
  Ingredientes:'Huevo: 2. Verduras (ej: espinacas, champiñones, pimiento): 1 taza. Aceite de oliva: 1 cucharada. Pan integral: 1 rebanada',
  Preparacion:'1-Picar las verduras en trozos pequeños. 2-Calentar una sartén con una cucharada de aceite de oliva a fuego medio-alto. 3-Añadir las verduras y saltearlas durante unos minutos, hasta que estén cocidas pero aún crujientes. 4-Batir los huevos en un tazón y verterlos en la sartén con las verduras. 5-Saltear los huevos y las verduras durante unos minutos hasta que los huevos estén cocidos. 6-Servir los huevos revueltos con verduras junto con un trozo de pan integral tostado.', 
  Calorias: 344, Carbohidratos: 20, Proteinas: 18, Grasas: 25, Fibra: 3
  }},
  
  // Jueves
  
  Jueves:{Desayuno:{Titulo:'Tostadas de pan integral con queso cottage y frutas',
  Ingredientes:'Pan integral: 2 rebanadas. Queso cottage: 1/4 taza. Frutas (ej: fresas, plátano, kiwi): 1 taza',
  Preparacion:'1-Tostar las rebanadas de pan integral hasta que estén doradas. 2-Colocar el queso cottage en las rebanadas de pan integral tostado. 3-Picar las frutas y colocarlas encima del queso cottage. 4-Servir y disfrutar.', 
  Calorias: 300, Carbohidratos: 47, Proteinas: 15, Grasas: 8, Fibra: 7
  },
  
  Almuerzo:{Titulo:'Tortilla de huevo con verduras y queso feta',
  Ingredientes:'Huevo: 4. Verduras (ej: espinacas, champiñones, pimiento): 1 taza. Queso feta: 1/4, Aceite de oliva: 1 cucharada',
  Preparacion:'1-Picar las verduras en trozos pequeños. 2-Calentar una sartén con una cucharada de aceite de oliva a fuego medio-alto. 3-Añadir las verduras y saltearlas durante unos minutos, hasta que estén cocidas pero aún crujientes. 4-Batir los huevos en un tazón y verterlos en la sartén con las verduras. 5-Saltear los huevos y las verduras durante unos minutos hasta que los huevos estén cocidos. 6-Agregar el queso feta rallado en la parte superior de la tortilla y dejar que se derrita durante unos minutos. 7-Servir y disfrutar.', 
  Calorias: 600, Carbohidratos: 7, Proteinas: 32, Grasas: 44, Fibra: 1
  },
  
  Cena:{Titulo:'Ensalada de camarones con frutas y nueces',
  Ingredientes:'Camarones cocidos: 1/2 taza. Frutas (ej: fresas, plátano, kiwi): 1 taza. Nueces (almendras, nueces, macadamias): 1/4 taza. Vinagreta: 2 cucharadas',
  Preparacion:'1-Picar las frutas y las nueces en trozos pequeños. 2-Mezclar las frutas, las nueces y los camarones en un tazón. 3-Mezclar la vinagreta en un tazón separado. 4-Agregar la vinagreta a la ensalada y mezclar bien. 5-Servir y disfrutar.', 
  Calorias: 440, Carbohidratos: 23, Proteinas: 29, Grasas: 28, Fibra: 6
  }},
  
  // Viernes
  Viernes:{Desayuno:{Titulo:'Tostadas de pan integral con huevo y champiñones',
  Ingredientes:'Pan integral: 2 rebanadas, Huevo: 1, Champiñones: 1 taza, Aceite de oliva: 1 cucharada, Queso rallado (opcional): 1 cucharada',
  Preparacion:'1-Calentar una sartén con una cucharada de aceite de oliva a fuego medio-alto. 2-Picar los champiñones en trozos pequeños y saltearlos en la sartén hasta que estén cocidos. 3-Batir el huevo en un tazón y verterlo en la sartén con los champiñones. 4-Saltear los huevos y los champiñones durante unos minutos hasta que los huevos estén cocidos. 5-Calentar las tostadas de pan integral en un tostador o en una sartén. 6-Colocar la mezcla de huevo y champiñones en las tostadas. 7-Agregar el queso rallado encima (opcional) 8-Servir y disfrutar.', 
  Calorias: 345, Carbohidratos: 28, Proteinas: 14, Grasas: 23, Fibra: 4
  },
  
  Almuerzo:{Titulo:'Hamburguesa de lentejas con arroz integral y verduras.',
  Ingredientes:'Lentejas cocidas: 1 taza. Pan rallado de aveja: 1/4 taza. Cebolla picada: 1/4 taza. Ajo picado: 1 diente. Huevo: 1. Aceite de oliva: 1 cucharada. Arroz integral: 1 taza. Verduras (ej: zanahoria, pimiento, cebolla): 1 taza',
  Preparacion:'1-Mezclar las lentejas cocidas, el pan rallado, la cebolla picada, el ajo picado y el huevo en un tazón grande. 2-Formar las mezclas en 4 hamburguesas. 3-Calentar el aceite de oliva en una sartén a fuego medio-alto y cocinar las hamburguesas durante 4-5 minutos por cada lado, hasta que estén doradas y cocidas a través. 4-Mientras tanto, cocer el arroz integral de acuerdo a las instrucciones del paquete. 5-Cocer las verduras al vapor o saltearlas en una sartén con un poco de aceite de oliva hasta que estén cocidas pero aún crujientes. 6-Servir la hamburguesa de lentejas con una porción de arroz integral y verduras al lado.', 
  Calorias: 785, Carbohidratos: 116, Proteinas: 30, Grasas: 25, Fibra: 16
  },
  
  Cena:{Titulo:'Bocadillo de pavo con jamon y verduras',
  Ingredientes:'Pan integral: 2 rebanadas. Pavo cocido: 3 onzas. jamon: 2 rebanadas. Verduras (ej: lechuga, tomate, pepino): 1 taza. Mostaza: 1 cucharada',
  Preparacion:'1-Calentar el pan integral en un tostador o en una sartén. 2-Picar las verduras en trozos pequeños. 3-Colocar el pavo cocido, las rebanadas de jamon y las verduras en el pan integral caliente. 4-Agregar mostaza al gusto. 5-Servir y disfrutar.', 
  Calorias: 345, Carbohidratos: 30, Proteinas: 41, Grasas: 8, Fibra: 4
  }},
  
  // Sabado
  Sabado:{Desayuno:{Titulo:'Ensalada de frutas con yogur natural',
  Ingredientes:'Yogur natural: 1 taza. Frutas (ej: fresas, plátano, kiwi): 2 tazas. Nueces: 1/4 taza',
  Preparacion:'1-Picar las frutas en trozos pequeños. 2-Mezclar las frutas con el yogur natural. 3-Agregar las nueces picadas. 4-Servir y disfrutar.', 
  Calorias: 470, Carbohidratos: 48, Proteinas: 16, Grasas: 24, Fibra: 6
  },
  
  Almuerzo:{Titulo:'Fajitas de pollo con arroz integral',
  Ingredientes:'Pollo: 100g, Tortilla de arroz integral : 1, Arroz integral cocido: 60 g, Aceite de oliva: 1 cucharadita, Clavo de ajo: 1, Agua: 1/4 taza, Salsa de tomate: 1/4, Queso rallado (opcional): 1/4 taza ',
  Preparacion:'1-Cortar el pollo en tiras finas. 2-Calentar el aceite de oliva en una sartén a fuego medio y añadir el pollo y el ajo picado. 3-Cocinar hasta que estén dorados. 4-Agregar 1/4 taza de agua y la salsa de tomate. 5-Cocinar por unos minutos hasta que la salsa esté caliente. 6-Colocar una tortilla de trigo integral en un plato y agregar una porción de arroz integral. 7-Añadir la mezcla de pollo y salsa sobre el arroz. 8-Enrollar la tortilla y añadir queso rallado al gusto.', 
  Calorias: 400, Carbohidratos: 60, Proteinas: 25, Grasas: 12, Fibra: 6
  },
  
  Cena:{Titulo:'Ensalada de espinacas con frutas y queso de cabra',
  Ingredientes:'Espinacas frescas: 4 taza. Frutas (ej: fresas, kiwi): 2 tazas. Queso de cabra: 2 oz. Vinagreta de mostaza: 2 cucharadas',
  Preparacion:'1-Picar las frutas en trozos pequeños. 2-Mezclar las espinacas con frutas. 3-Agregar el queso de cabra rallado. 4-Mezclar la vinagreta de mostaza con un poco de vinagre y aceite de oliva. 5-Aliñar la ensalada con la vinagreta de mostaza. 6-Servir y disfrutar.', 
  Calorias: 380, Carbohidratos: 39, Proteinas: 15, Grasas: 20, Fibra: 7
  }},
  
  //  Domingo
  Domingo:{Desayuno:{Titulo:'Pan integral con mantequilla de maní y frutas',
  Ingredientes:'Pan integral: 2 rebanadas. Mantequilla de maní: 2 cucharadas. Frutas (ej: fresas, plátano): 1 taza',
  Preparacion:'1-Calentar el pan integral en un tostador o en una sartén. 2-Aplicar la mantequilla de maní sobre el pan caliente. 3-Picar las frutas en trozos pequeños y colocarlas sobre la mantequilla de maní. 4-Servir y disfrutar.', 
  Calorias: 410, Carbohidratos: 55, Proteinas: 14, Grasas: 18, Fibra: 8
  },
  
  Almuerzo:{Titulo:'Ensalada de verduras con salmón ahumado',
  Ingredientes:'Verduras (ej: espinacas, zanahorias, tomates, pimientos): 2 tazas. Salmón ahumado: 4 onzas. Aceite de oliva: 2 cucharadas. Vinagre balsámico: 2 cucharadas. Mostaza Dijon: 1 cucharada',
  Preparacion:'1-Picar las verduras en trozos pequeños. 2-Mezclar las verduras en un tazón grande. 3-Agregar el salmón ahumado, el aceite de oliva, el vinagre balsámico y la mostaza Dijon. 4-Mezclar bien. 5-Servir y disfrutar.',
  Calorias: 555, Carbohidratos: 12, Proteinas: 37, Grasas: 42, Fibra: 2
  },
  
  Cena:{Titulo:'Tortilla de huevo con verduras y queso feta',
  Ingredientes:'Huevo: 4. Verduras (ej: espinacas, champiñones, pimiento): 1 taza. Queso feta: 1/4 taza. Aceite de oliva: 1 cucharada',
  Preparacion:'1-Picar las verduras en trozos pequeños. 2-Calentar una sartén con una cucharada de aceite de oliva a fuego medio-alto. 3-Añadir las verduras y saltearlas durante unos minutos, hasta que estén cocidas pero aún crujientes. 4-Batir los huevos en un tazón y verterlos en la sartén con las verduras. 5-Saltear los huevos y las verduras durante unos minutos hasta que los huevos estén cocidos. 6-Agregar el queso feta rallado en la parte superior de la tortilla y dejar que se derrita durante unos minutos. 7-Servir y disfrutar.', 
  Calorias: 600, Carbohidratos: 7, Proteinas: 32, Grasas: 44, Fibra: 1
  }},
  
  // FALTAN 2 En sabado y miercoles
  }],
  
  
  // Semana Tres
  
  SemanaTres: [
  {Lunes:{Desayuno:{Titulo:'Huevos revueltos con verduras y tomate',
  Ingredientes:'Huevo: 2 unidades. Tomate: 2 unidades. Verduras (ej: espinacas, champiñones): 1 taza. Aceite de oliva: 1 cucharada. Sal: al gusto',
  Preparacion:'1-Calentar una sartén con un poco de aceite de oliva. 2-Añadir las verduras a la sartén y cocinar a fuego medio hasta que estén tiernas. 3-Batir los huevos en un tazón con una pizca de sal y añadir a la sartén junto con las verduras. 4-Cocinar los huevos revueltos hasta que estén cocidos. 5-Servir y disfrutar.', 
  Calorias: 293, Carbohidratos: 8, Proteinas: 15, Grasas: 25, Fibra: 2
  }, 
  
  Almuerzo:{Titulo:'Atún en lata con ensalada verde y tomate',
  Ingredientes:'Atún en lata: 1 lata, Lechuga: 1 taza, Tomate: 1 unidad, Aceite de oliva: 1 cucharada, Vinagre balsámico: 1 cucharada ',
  Preparacion: '1-Escurrir el atún en lata y escurrir el aceite. 2-Cortar los tomates y la lechuga en trozos pequeños. 3-Mezclar el vinagre balsámico con el aceite de oliva en un tazón pequeño. 4-Agregar el atún, los tomates y la lechuga en un tazón grande y mezclar. 5-Verter la mezcla de vinagre y aceite sobre la ensalada y mezclar. 6-Servir y disfrutar.',
  Calorias: 281, Carbohidratos: 9, Proteinas: 26, Grasas: 16, Fibra: 2
  },  
  
  Cena:{Titulo:'Pescado al horno con verduras al vapor y arroz integral',
  Ingredientes:'Pescado (tilapia, salmón, etc): 4 oz. Verduras (espinacas, brócoli, etc: 1 taza. Arroz integral: 1/2 taza. Aceite de oliva: 1 cucharada. Limon: 1/2 unidad',
  Preparacion:'1-Precalentar el horno a 375 grados. 2-Lavar y cortar las verduras en trozos pequeños. 3-Cocinar el arroz según las instrucciones del paquete. 4-Colocar el pescado en una bandeja para hornear y sazonar con sal, pimienta y el zumo de medio limón. 5-Colocar las verduras alrededor del pescado y regar con una cucharada de aceite de oliva. 6-Hornear durante 15-20 minutos o hasta que el pescado esté cocido y las verduras estén suaves. 7-Servir el pescado con las verduras y el arroz integral.',
  Calorias: 350, Carbohidratos: 26, Proteinas: 46, Grasas: 22, Fibra: 4
  }},
  
  // Martes
  Martes:{Desayuno:{Titulo:'Yogurt con frutas y granola sin azúcar añadida',
  Ingredientes:'Yogurt natural: 1 taza. Frutas (fresas, kiwi, etc): 1 taza. Granola (sin azúcar añadida): 1/4 taza',
  Preparacion:'1-En un bol, mezclar 1 taza de yogurt natural con 1 taza de frutas cortadas en trozos pequeños. 2-Agregar 1/4 taza de granola sin azúcar añadida. 3-Mezclar bien y disfrutar.', 
  Calorias: 330, Carbohidratos: 43, Proteinas: 17, Grasas: 12, Fibra: 5
  },
  Almuerzo:{Titulo:'Ensalada de pollo a la parrilla con vegetales y vinagreta baja en grasa',
  Ingredientes:'Pechuga de pollo a la parrilla: 4 oz. Lechuga romana: 2 taza. Tomate: 1/2 taza. Pepino: 1/2 taza. Cebolla: 1/4 taza. Vinagreta baja en grasa (aceite de oliva, vinagre balsámico, mostaza, ajo, hierbas: 2 cucharadas',
  Preparacion:'1-A la parrilla o cocina la pechuga de pollo hasta que esté cocida. 2-Mientras tanto, en un bol grande, mezclar 2 tazas de lechuga romana, 1/2 taza de tomate, 1/2 taza de pepino, y 1/4 taza de cebolla picada. 3-En una jarra pequeña, mezclar 2 cucharadas de vinagreta baja en grasa hecha con aceite de oliva, vinagre balsámico, mostaza, ajo y hierbas frescas. 4-Cortar la pechuga de pollo en trozos y agregar a la ensalada. 5-Verter la vinagreta sobre la ensalada y mezclar bien. 6-Sirva inmediatamente o refrigere hasta que esté listo para servir.', 
  Calorias: 252, Carbohidratos: 8, Proteinas: 39, Grasas: 9, Fibra: 3
  },
  
  Cena:{Titulo:'Ensalada de frutas',
  Ingredientes:'1 taza de frutas frescas (manzana, plátano, fresas, uvas, etc) cortadas en cubos.1 pocillo de yogur natural.1 cucharadita de miel.1 pizca de canela en polvo.Hojas frescas de hierbas (opcional)',
  Preparacion:'1-Corte las frutas frescas en cubos y colóquelas en un tazón.2-En un tazón pequeño, mezcle el yogur, la miel y la canela.3-Agregue la mezcla de yogur a la ensalada de frutas y mezcle hasta que las frutas estén cubiertas uniformemente.4-Sirva la ensalada en un plato y espolvoree hojas frescas de hierbas por encima, si lo desea.', 
  Calorias: 200, Carbohidratos: 40, Proteinas: 10, Grasas: 4, Fibra: 8
  }},
  
  // Miercoles
  
  
  Miercoles:{Desayuno:{Titulo:'Tostadas de pan integral con aguacate',
  Ingredientes:'Pan integral: 2 rebanadas. Aguacate: 1/2 unidad. Limón: 1/2. Sal: 1/8 cucharadita',
  Preparacion:'1-Caliente el horno a 350 grados F (175 grados C). 2-Colocar 2 rebanadas de pan integral en una bandeja para hornear. 3-Hornee el pan durante 10 minutos o hasta que esté dorado. 4-Mientras tanto, corte 1/2 aguacate en cubos pequeños y exprimir 1/2 limón y poner un poco de sal. 5-Una vez que el pan esté listo, retire del horno y coloque el aguacate sobre el pan. 6-Espolvoree con el jugo de limón y la sal. 7-Sirva caliente o a temperatura ambiente.', 
  Calorias: 264, Carbohidratos: 34, Proteinas: 8, Grasas: 14, Fibra: 9
  },
  
  Almuerzo:{Titulo:'Huevos revueltos con champiñones y tocino',
  Ingredientes:'Huevos: 2 unidades. Champiñones: 1/2 taza. Tocino: 2 rebanadas. Aceite de Oliva: 1 cucharada. Sal: 1/8 cucharadita. Pimienta negra: 1/8 cucharadita',
  Preparacion:'1-Caliente una sartén a fuego medio y agregue 1 cucharada de aceite de oliva. 2-Agregue los champiñones y cocine durante 3-4 minutos, o hasta que estén suaves. 3-Añada el tocino y cocine durante 2 minutos más. 4-Batir los huevos en un tazón con una pizca de sal y pimienta negra. 5-Agregue los huevos batidos a la sartén con champiñones y tocino. 6-Revuelva constantemente hasta que los huevos estén cocidos a su gusto. 7-Sirva caliente.', 
  Calorias: 378, Carbohidratos: 2, Proteinas: 20, Grasas: 35, Fibra: 0
  },
  
  Cena:{Titulo:'Arroz Integral con pollo y espinacas',
  Ingredientes:'Arroz integral: 1 taza. Pollo (pechuga): 4 onzas. Aceite de Oliva: 1 cucharada. Espinacas: 2 tazas. Ajo: 1 diente. Sal: 1/8 cucharadita. Pimienta negra: 1/8 cucharadita',
  Preparacion:'1-Cocer el arroz integral según las instrucciones del paquete. 2-Caliente una sartén a fuego medio y agregue 1 cucharada de aceite de oliva. 3-Agregue el pollo y cocine durante 6-8 minutos, o hasta que esté cocido. 4-Añada el ajo y cocine durante 1 minuto más. 5-Agregue las espinacas y cocine durante 2-3 minutos, o hasta que se hayan ablandado. 6-Mezcle el arroz cocido con el pollo y las espinacas en un tazón. 7-Sazonar con sal y pimienta negra al gusto. 8-Sirva caliente.', 
  Calorias: 418, Carbohidratos: 43, Proteinas: 43, Grasas: 19, Fibra: 3
  }},
  
  // Jueves
  
  Jueves:{Desayuno:{Titulo:'Omelette de queso y espinacas',
  Ingredientes:'Huevo: 2 unidades. Queso rallado: 2 cucharadas. Espinacas: 2 tazas. Aceite de Oliva: 1 cucharada. Sal: 1/8 cucharadita. Pimienta negra: 1/8 cucharadita',
  Preparacion:'1-Batir los huevos en un tazón pequeño. 2-Agregue las espinacas, el queso rallado, sal y pimienta negra. 3-Mezclar bien. 4-Caliente una sartén antiadherente a fuego medio y agregue 1 cucharada de aceite de oliva. 5-Vierta la mezcla de huevo en la sartén. 6-Cocinar a fuego medio durante 3-4 minutos o hasta que la parte superior esté cocida. 7-Dar la vuelta a la tortilla y cocinar durante 1 minuto más o hasta que el queso se haya derretido. 8-Servir caliente.', 
  Calorias: 394, Carbohidratos: 3, Proteinas: 21, Grasas: 34, Fibra: 1
  },
  
  Almuerzo:{Titulo:'Hamburguesa de pollo a la parrilla con ensalada verde y aguacate',
  Ingredientes:'Carne de pollo molido: 4 onzas, Pan rallado: 1/4 taza, Huevo: 1 unidad, Aceite vegetal: 1 cucharada, Ensalada verde: 2 tazas, Aguacate: 1/2 unidad, Vinagreta baja en grasa: 2 cucharadas, Sal y pimienta: al gusto',
  Preparacion:'1-En un tazón grande, mezcle la carne de pollo molida, el pan rallado, el huevo, la sal y la pimienta. 2-Forme en 4 hamburguesas. 3-Caliente una parrilla a fuego medio y engrase con la cucharada de aceite vegetal. 4-Cocine las hamburguesas durante 4-5 minutos por cada lado o hasta que estén cocidas. 5-Mientras tanto, mezclar la ensalada verde con el vinagreta y agregue el aguacate cortado en trozos. 6-Sirva la hamburguesa con la ensalada verde y aguacate al lado.', 
  Calorias: 735, Carbohidratos: 29, Proteinas: 37, Grasas: 45, Fibra: 10
  },
  
  Cena:{Titulo:'Lasaña de verduras con salsa baja en grasa',
  Ingredientes:'Hojas de lasaña: 8 unidades. Verduras (espinacas, pimientos, cebolla, champiñones): 4 taza. Salsa de tomate baja en grasa: 1 taza. Queso rallado mozzarella bajo en grasa: 1/2 taza. Hierbas frescas (orégano, albahaca): al gusto. Sal y pimienta: al gusto',
  Preparacion:'1-Cocer las hojas de lasaña según las instrucciones del paquete. 2-Cocer las verduras hasta que estén suaves. 3-Mezclar el queso ricotta con las hierbas frescas, la sal y la pimienta. 4-En una cacerola, mezclar la salsa de tomate con las verduras cocidas. 5-En un refractario para horno, colocar una capa de hojas de lasaña, luego una capa de queso ricotta, una capa de verduras con salsa de tomate y una capa de queso rallado mozzarella. 6-Repetir las capas hasta que se terminen los ingredientes. 7-Cubrir con papel aluminio y cocinar durante 25 minutos a 375 grados F. 8-Retirar el papel aluminio y cocinar durante otros 25 minutos hasta que el queso esté dorado.', 
  Calorias: 970, Carbohidratos: 126, Proteinas: 57, Grasas: 24, Fibra: 14
  }},
  
  // Viernes
  Viernes:{Desayuno:{Titulo:'Tostadas de pan integral con queso y jamón',
  Ingredientes:'Pan integral: 2 rebanadas. Queso: 2 rebanadas. Jamón cocido: 2 lonjas',
  Preparacion:'1-Calienta una tostadora o una sartén a fuego medio. 2-Coloca las rebanadas de pan integral en la tostadora o sartén y tosta hasta que estén doradas. 3-Retira del calor y coloca una rebanada de queso en cada rebanada de pan. 4-Coloca las lonchas de jamón encima del queso. 5-Vuelve a colocar las tostadas en la tostadora o sartén y cocina hasta que el queso se haya derretido. 6-Sirve y disfruta.', 
  Calorias: 300, Carbohidratos: 18, Proteinas: 32, Grasas: 12, Fibra: 3
  },
  
  Almuerzo:{Titulo:'Ensalada de salmón a la parrilla con vegetales y vinagreta baja en grasa',
  Ingredientes:'Salmón: 4 porciones. Lechuga:2 tazas. Vegetales de elección: 2 tazas',
  Preparacion:'1-Calienta una parrilla a fuego medio-alto. 2-Coloca las porciones de salmón en la parrilla y cocina aproximadamente durante 4-5 minutos por cada lado o hasta que estén cocidos a tu gusto. 3-Mientras tanto, prepara una ensalada mezclando la lechuga y los vegetales de tu elección. 4-En un tazón pequeño, mezcla la vinagreta baja en grasa. 5-Una vez que el salmón esté cocido, colócalo encima de la ensalada. 6-Sirve y disfruta.', 
  Calorias: 220, Carbohidratos: 32, Proteinas: 3, Grasas: 12, Fibra: 2
  },
  
  Cena:{Titulo:'Curry de verduras con arroz integral.',
  Ingredientes:'Aceite de cocina: 1 cucharada, Cebolla: 1 unidad, Ajo: 2 dientes, Curry en polvo: 1 cucharada, Verduras de elección: 2 tazas, Leche de coco: 1/2 taza, Arroz integral: 1 taza, Sal y pimienta: al gusto',
  Preparacion:'1-Calienta el aceite en una cacerola grande a fuego medio-alto. 2-Agrega la cebolla y el ajo y cocina hasta que estén suaves. 3-Agrega el curry en polvo y cocina durante unos minutos más. 4-Agrega las verduras de tu elección y cocina hasta que estén tiernas. 5-Vierte la leche de coco y mezcla bien. 6-Cocina a fuego medio-bajo durante unos minutos más. 7-Mientras tanto, cocina el arroz integral según las instrucciones del paquete. 8-Sirve el curry de verduras sobre el arroz integral. 9-Agrega sal y pimienta al gusto.', 
  Calorias: 412, Carbohidratos: 7, Proteinas: 48, Grasas: 11, Fibra: 4
  }},
  
  // Sabado
  Sabado:{Desayuno:{Titulo:'Pan integral con queso fresco y salmón ahumado.',
  Ingredientes:'Pan integral: 2 rebanadas, Queso fresco: 2 rebanadas, Salmón ahumado: 2 rebanadas, Aceite de oliva: 1 cucharada, hierbas frescas: al gusto',
  Preparacion:'1-Tostar las rebanadas de pan integral en una tostadora o en el horno durante unos minutos hasta que estén doradas. 2-Mientras tanto, corta el queso fresco y el salmón ahumado en rebanadas delgadas. 3-Retira el pan integral del horno o de la tostadora y extiende una cucharada de aceite de oliva sobre cada rebanada. 4-Coloca las rebanadas de queso fresco y el salmón ahumado sobre cada rebanada de pan. 5-Agrega hierbas frescas al gusto y sirve.', 
  Calorias: 520, Carbohidratos: 27, Proteinas: 31, Grasas: 36, Fibra: 3
  },
  
  Almuerzo:{Titulo:'Ensalada de atún  con vegetales',
  Ingredientes: 'Atún enlatado: 60 g, Lechuga picada: 1 taza, Tomate cherry cortado en cuartos: 1/2 taza, zanahoria rallada: 1/4 taza, Cebolla picada: 1/4 taza, Vinagre balsámico: 1 cucharada, Aceite de oliva: 1 cucharada, Sal y pimienta al gusto', 
  Preparacion:'1-En un tazón grande, mezcle el atún o, lechuga, tomate cherry, zanahoria, cebolla y vinagre balsámico. 2-Agregue el aceite de oliva y sazone con sal y pimienta. 3-Mezcle todos los ingredientes hasta que estén bien combinados. 4-Sirva la ensalada en un plato y disfrute.', 
  Calorias: 250, Carbohidratos: 12, Proteinas: 25, Grasas: 14, Fibra:3 
  },
  
  Cena:{Titulo:'Pollo a la parrilla con verduras al vapor',
        Ingredientes:'Pechugas de pollo : 2, Verduras: 1 taza',
        Calorias: 212, Carbohidratos: 3, Proteinas: 41, Grasas: 4, Fibra: 1,
        Preparacion: '1-Tempere las pechugas de pollo con sal y pimienta a gusto. 2-Caliente una parrilla a fuego medio-alto y coloque las pechugas de pollo. 3-Cocine durante 4-5 minutos por lado, o hasta que estén cocidas por completo. 4-Mientras tanto, prepare una olla con agua y coloque las verduras al vapor (por ejemplo, brócoli, zanahorias, etc) hasta que estén suaves. 5-Sirva las pechugas de pollo con las verduras al vapor y disfrute.'
  }},
  
  //  Domingo
  Domingo:{Desayuno:{Titulo:'Tostadas de pan integral con hummus y verduras',
  Ingredientes:'Pan integral: 2 rebanadas. Hummus: 2 cucharadas. Verduras (ej: pepino, tomate, cebolla): 1 taza. Aceite de oliva: 1 cucharada. Vinagre de manzana: 1 cucharada',
  Preparacion:'1-Calentar el pan integral en un tostador o en un sartén a fuego medio. 2-Extender el hummus en las rebanadas de pan tostado. 3-Picar las verduras y colocarlas encima del hummus. 4-Espolvorear con un poco de aceite de oliva y vinagre de manzana para mejorar el sabor. 5-Servir caliente y disfrutar.', 
  Calorias: 454, Carbohidratos: 56, Proteinas: 11, Grasas: 25, Fibra: 10
  },
  
  Almuerzo:{Titulo:'Sandwich de Pollo y Lechuga con Pan Integral',
  Ingredientes:'Pan integran: 2 rebanadas. Pollo asado cortado en tiras: 4 oz. Lechuga: 2 hojas. Tomate cortado en rebanadas: 1/4. Mayonesa: 2 cucharadas. Sal y pimienta: al gusto ',
  Preparacion:'1-Calentar el pan integral en una sartén o tostadora hasta que esté dorado. 2-Mezclar la mayonesa con una pizca de sal y pimienta. 3-Colocar una capa de pollo sobre una rebanada de pan. 4-Agregar la lechuga, el tomate, el aguacate y la mezcla de mayonesa sobre el pollo. 5-Cubrir con la segunda rebanada de pan. 6-Cortar el sandwich por la mitad y servir inmediatamente.',
  Calorias: 400, Carbohidratos: 40, Proteinas: 25, Grasas: 20, Fibra: 10
  },
  
  Cena:{Titulo:'Fajitas de pollo con arroz integral',
  Ingredientes:'Pollo: 100g, Tortilla de arroz integral : 1, Arroz integral cocido: 60 g, Aceite de oliva: 1 cucharadita, Clavo de ajo: 1, Agua: 1/4 taza, Salsa de tomate: 1/4, Queso rallado (opcional): 1/4 taza ',
  Preparacion:'1-Cortar el pollo en tiras finas. 2-Calentar el aceite de oliva en una sartén a fuego medio y añadir el pollo y el ajo picado. 3-Cocinar hasta que estén dorados. 4-Agregar 1/4 taza de agua y la salsa de tomate. 5-Cocinar por unos minutos hasta que la salsa esté caliente. 6-Colocar una tortilla de trigo integral en un plato y agregar una porción de arroz integral. 7-Añadir la mezcla de pollo y salsa sobre el arroz. 8-Enrollar la tortilla y añadir queso rallado al gusto.', 
  Calorias: 400, Carbohidratos: 60, Proteinas: 25, Grasas: 12, Fibra: 6
  }},
  
  }],
  
  // Semana Cuatro
  
  SemanaCuatro: [
  {Lunes:{Desayuno:{Titulo:'Sandwitch de tofu de finas hierbas',
  Ingredientes:'2 rebanadas de pan integral.80 gramos de tofu de finas hierbas.1/2 aguacate.1/4 de cebolla morada en rodajas finas.1 hoja de lechuga.1 cucharada de mayonesa vegana.Sal y pimienta al gusto',
  Preparacion:'1-Tostar las rebanadas de pan integral en una tostadora o en una sartén.2-Untar una de las rebanadas de pan con la mayonesa vegana.3-Colocar la hoja de lechuga sobre la mayonesa.4-Cortar el tofu en rodajas finas y colocarlas encima de la lechuga. 5-Cortar el aguacate en rodajas y colocarlas encima del tofu.6-Agregar la cebolla morada en rodajas finas encima del aguacate.7-Agregar sal y pimienta al gusto.8-Colocar la otra rebanada de pan encima y servir.', 
  Calorias: 300, Carbohidratos: 26, Proteinas: 11, Grasas: 17, Fibra: 9
  }, 
  
  Almuerzo:{Titulo:'Ensalada asiática de pollo',
  Ingredientes:'100 g de pollo a la plancha. 1 taza de lechuga picada. 1/2 taza de repollo rojo picado. 1/4 taza de zanahoria rallada. 1/4 taza de cebolla picada. 1/4 taza de arándanos secos. 1 cucharada de semillas de sésamo. 2 cucharadas de aderezo de ensalada de tu elección',
  Preparacion: '1-Cocina el pollo a la plancha hasta que esté completamente cocido y corta en tiras. 2-Mezcla en un tazón la lechuga, el repollo rojo, la zanahoria rallada, la cebolla y los arándanos secos. 3-Agrega el pollo a la mezcla de verduras.4-Rociar las semillas de sésamo sobre la ensalada.5-Sirve con el aderezo de ensalada de tu elección.',
  Calorias: 400, Carbohidratos: 46, Proteinas: 37, Grasas: 13, Fibra: 10
  },  
  
  Cena:{Titulo:'Ensalada Cesar con pollo o tofu',
  Ingredientes:'Lechuga romana: 4 tazas, Pollo o Tofu cocido: 1 taza, Pan rallado: 1/4 taza, Queso parmesano rallado: 1/4 taza, Aceite de oliva: 2 cucharadas, Jugo de limón: 1 cucharada, Ajo: 2 dientes, Mostaza dijon: 1 cucharada, Sal y pimienta: al gusto',
  Preparacion:'1-Picar la lechuga romana en trozos pequeños. 2-Picar el pollo o el tofu cocido en trozos pequeños. 3-Mezclar la lechuga, el pollo o el tofu, el pan rallado y el queso parmesano rallado en un tazón grande. 4-En un tazón pequeño, mezclar el aceite de oliva, el jugo de limón, el ajo picado, la mostaza dijon, la sal y la pimienta. 5-Verter la mezcla de aderezo sobre la ensalada y mezclar bien. 6-Servir inmediatamente y disfrutar.', 
  Calorias: 660, Carbohidratos: 20, Proteinas: 51, Grasas: 46, Fibra: 2
  }},
  
  // Martes
  Martes:{Desayuno:{Titulo:'Avena con yogur y frutos rojos',
  Ingredientes:'1/2 taza de avena en hojuelas. 1 taza de yogur natural.1/2 taza de frutos rojos (fresas, arándanos, moras, etc).1 cucharada de miel (opcional)',
  Preparacion:'1-En un recipiente, mezcla la avena con el yogur hasta que queden bien integrados.2-Agrega los frutos rojos y mezcla suavemente.3-Si deseas endulzar, agrega una cucharada de miel y mezcla de nuevo.4-Deja reposar en el refrigerador durante al menos 30 minutos antes de servir.', 
  Calorias: 250, Carbohidratos: 40, Proteinas: 14, Grasas: 4, Fibra: 8
  },
  Almuerzo:{Titulo:'Ensalada de garbanzos y pollo',
  Ingredientes:'85 g de pechuga de pollo a la parrilla. 85 g de garbanzos cocidos.1/4 de taza de zanahoria rallada.1/4 de taza de pepino en rodajas.1/4 de taza de tomate en cubos.1/4 de taza de cebolla en rodajas.1 cucharadita de aceite de oliva.Sal y pimienta al gusto',
  Preparacion:'1-Corta la pechuga de pollo en cubos pequeños y colócala en un tazón.2-Agrega los garbanzos cocidos, la zanahoria rallada, el pepino, el tomate y la cebolla al tazón con el pollo.3-Agrega el aceite de oliva, la sal y la pimienta al tazón y mezcla bien todos los ingredientes.4-Sirve la ensalada en un plato y disfruta.', 
  Calorias: 333, Carbohidratos: 37, Proteinas: 32, Grasas: 8, Fibra: 10
  },
  
  Cena:{Titulo:'Tallarines con pollo y verduras',
  Ingredientes:'100g de tallarines.100g de pechuga de pollo.1/2 cebolla.1/2 pimiento rojo.1/2 pimiento verde.1/2 zanahoria.1 diente de ajo.Aceite de oliva.Sal y pimienta',
  Preparacion:'1-Cocer los tallarines en agua con sal siguiendo las instrucciones del paquete. Una vez listos, escurrirlos y reservar.2-Cortar el pollo en trozos pequeños y sazonar con sal y pimienta. En una sartén con aceite de oliva caliente, cocinar el pollo hasta que esté dorado por ambos lados. Retirar y reservar.3-En la misma sartén, añadir un poco más de aceite y saltear la cebolla, los pimientos y la zanahoria, todo previamente picado en juliana, junto con el ajo picado. Cocinar hasta que estén tiernos.4-Agregar el pollo cocido a las verduras y mezclar todo junto.5-Servir los tallarines en un plato y añadir la mezcla de pollo y verduras por encima.', 
  Calorias: 400, Carbohidratos: 50, Proteinas: 30, Grasas: 8, Fibra: 6
  }},
  
  // Miercoles
  
  
  Miercoles:{Desayuno:{Titulo:'Pan de centeno con queso cottage y frutas',
  Ingredientes:'Pan de centeno: 2 rebanadas. Queso cottage: 2 oz, Frutas (ej: fresas, plátano, manzana): 1 taza. Miel: 1 cucharada',
  Preparacion:'1-Calentar el pan de centeno en un tostador o en un sartén a fuego medio. 2-Colocar el queso cottage en las rebanadas de pan tostado. 3-Picar las frutas y colocarlas encima del queso cottage. 4-Espolvorear con miel si deseas. 5-Servir caliente y disfrutar.', 
  Calorias: 374, Carbohidratos: 61, Proteinas: 23, Grasas: 6, Fibra: 5
  },
  
  Almuerzo:{Titulo:'Pescado a la plancha con pisto',
  Ingredientes:'1 filete de pescado (tilapia, lenguado, etc.) de aproximadamente 120 g.1/4 taza de pisto (mezcla de tomate, pimiento, cebolla y calabacín).1 cucharadita de aceite de oliva.Sal y pimienta al gusto.Limón para servir (opcional)',
  Preparacion:'1-Calentar una plancha o sartén antiadherente a fuego medio-alto.2-Limpiar y secar el filete de pescado con papel de cocina.3-Añadir una cucharadita de aceite de oliva a la plancha o sartén caliente.4-Colocar el filete de pescado en la plancha o sartén y sazonar con sal y pimienta al gusto. Cocinar por 4 a 5 minutos de cada lado hasta que esté dorado y cocido a través.5-Mientras se cocina el pescado, calentar el pisto en una sartén separada hasta que esté tibio.5-Servir el filete de pescado con una porción de pisto y un poco de limón al lado (opcional).', 
  Calorias: 250, Carbohidratos: 8, Proteinas: 30, Grasas: 11, Fibra: 2
  },
  
  Cena:{Titulo:'Muslos de pollo al horno al limón',
  Ingredientes:'2 muslos de pollo.1 limón.2 dientes de ajo.Aceite de oliva.Sal y pimienta',
  Preparacion:'1-Precalentar el horno a 200°C.2-Colocar los muslos de pollo en una fuente de horno y sazonar con sal y pimienta al gusto.3-Pelar y picar los dientes de ajo y distribuirlos sobre los muslos de pollo.4-Cortar el limón en rodajas y colocarlas sobre el pollo.5-Rociar con aceite de oliva.6-Hornear durante 35-40 minutos, o hasta que el pollo esté dorado y cocido por completo.7-Servir caliente.', 
  Calorias: 200, Carbohidratos: 5, Proteinas: 22, Grasas: 11, Fibra: 1
  }},
  
  // Jueves
  
  Jueves:{Desayuno:{Titulo:'Pan integral con mantequilla de maní y frutas',
  Ingredientes:'Pan integral: 2 rebanadas. Mantequilla de maní: 2 cucharadas. Frutas (ej: fresas, plátano): 1 taza',
  Preparacion:'1-Calentar el pan integral en un tostador o en una sartén. 2-Aplicar la mantequilla de maní sobre el pan caliente. 3-Picar las frutas en trozos pequeños y colocarlas sobre la mantequilla de maní. 4-Servir y disfrutar.', 
  Calorias: 410, Carbohidratos: 55, Proteinas: 14, Grasas: 18, Fibra: 8
  },
  
  Almuerzo:{Titulo:'Tiras de pollo con sandia y melon',
  Ingredientes:'4 tiras de pollo sin piel.Sal y pimienta al gusto.1 taza de sandía cortada en cubos.1 taza de melón cortado en cubos.Aceite de oliva.Hierbas frescas (opcional)',
  Preparacion:'1-Sazonar las tiras de pollo con sal y pimienta.2-Calentar una plancha o sartén con un poco de aceite de oliva.3-Cocinar las tiras de pollo en la plancha hasta que estén doradas y bien cocidas, aproximadamente 5 minutos de cada lado.4-Mientras se cocinan las tiras de pollo, mezclar los cubos de sandía y melón.5-Servir las tiras de pollo acompañadas de la mezcla de sandía y melón.6-Opcional: añadir hierbas frescas picadas al gusto.', 
  Calorias: 200, Carbohidratos: 8, Proteinas: 27, Grasas: 4, Fibra: 1
  },
  
  Cena:{Titulo:'Cuscús con pollo y verduras',
  Ingredientes:'1 pechuga de pollo cortada en cubos.1 taza de cuscús.1 taza de agua caliente.1/2 cebolla picada.1 pimiento rojo picado.1 zanahoria pelada y cortada en cubos.1/2 calabacín cortado en cubos.1 diente de ajo picado.1 cucharada de aceite de oliva.Sal y pimienta negra molida al gusto.Perejil fresco picado para decorar',
  Preparacion:'1-Precalentar el horno a 200 °C.2-Colocar los cubos de pollo en un recipiente y rociar con jugo de limón. Dejar marinar mientras se prepara el cuscús y las verduras.3-En un bol, colocar el cuscús y verter el agua caliente. Cubrir el bol y dejar reposar durante unos 5 minutos, hasta que el cuscús absorba todo el líquido.4-Mientras tanto, en una sartén grande, calentar el aceite de oliva a fuego medio. Añadir la cebolla, el pimiento, la zanahoria y el calabacín. Sofreír durante unos 5 minutos, hasta que las verduras estén tiernas.5-Añadir el ajo picado y el pollo a la sartén. Cocinar durante unos 5-7 minutos, hasta que el pollo esté dorado y cocido por completo.6-Mezclar el cuscús con las verduras y el pollo. Salpimentar al gusto.7-Colocar la mezcla de cuscús en una bandeja para horno y hornear durante unos 10-15 minutos, hasta que esté caliente y dorado.8-Servir caliente y decorar con perejil fresco picado.', 
  Calorias: 380, Carbohidratos: 45, Proteinas: 31, Grasas: 9, Fibra: 6
  }},
  
  // Viernes
  Viernes:{Desayuno:{Titulo:'Sandwich de pavo, manzana y rucula',
  Ingredientes:'2 rebanadas de pan integral.2-3 rebanadas de pechuga de pavo.1/2 manzana verde, en rodajas finas.Un puñado de hojas de rúcula.1 cucharadita de mostaza.1 cucharadita de miel.1 cucharadita de vinagre de manzana',
  Preparacion:'1-Mezcla la mostaza, miel y vinagre de manzana en un tazón pequeño para hacer la salsa. 2-Coloca las rebanadas de pan en una tabla de cortar y úntalas con la salsa.3-Agrega las hojas de rúcula en la parte inferior del pan.4-Añade las rebanadas de pechuga de pavo en la parte superior de las hojas de rúcula.5-Agrega las rodajas de manzana encima del pavo.6-Cubre con la otra rebanada de pan y corta el sándwich por la mitad.7-Sirve y disfruta', 
  Calorias: 290, Carbohidratos: 45, Proteinas: 18, Grasas: 4, Fibra: 8
  },
  
  Almuerzo:{Titulo:'Pescado al horno con verduras al vapor y arroz integral',
  Ingredientes:'Pescado (tilapia, salmón, etc): 4 oz. Verduras (espinacas, brócoli, etc: 1 taza. Arroz integral: 1/2 taza. Aceite de oliva: 1 cucharada. Limon: 1/2 unidad',
  Preparacion:'1-Precalentar el horno a 375 grados. 2-Lavar y cortar las verduras en trozos pequeños. 3-Cocinar el arroz según las instrucciones del paquete. 4-Colocar el pescado en una bandeja para hornear y sazonar con sal, pimienta y el zumo de medio limón. 5-Colocar las verduras alrededor del pescado y regar con una cucharada de aceite de oliva. 6-Hornear durante 15-20 minutos o hasta que el pescado esté cocido y las verduras estén suaves. 7-Servir el pescado con las verduras y el arroz integral.',
  Calorias: 350, Carbohidratos: 26, Proteinas: 46, Grasas: 22, Fibra: 4
  },
  
  Cena:{Titulo:'Habitas con huevos de codorniz',
  Ingredientes:'1/2 taza de habas (frescas o congeladas).2 huevos de codorniz.1/4 de cebolla, picada.1 diente de ajo, picado.1 tomate, picado.Sal y pimienta al gusto.Aceite de oliva.Queso rallado para gratinar (opcional)',
  Preparacion:'1-Cocinar las habas en agua con sal hasta que estén suaves (alrededor de 5-7 minutos).2-Escurrir y reservar.3-En una sartén, calentar un poco de aceite de oliva a fuego medio y añadir la cebolla, ajo y tomate. Saltear hasta que estén suaves.4-Agregar las habas y saltear por unos minutos más.5-Batir los huevos de codorniz y agregarlos a la sartén con las habas y las verduras. Cocinar hasta que los huevos estén seteados.6-Agregar sal y pimienta al gusto.7-Opcionalmente, gratinar con queso rallado antes de servir.', 
  Calorias: 200, Carbohidratos: 14, Proteinas: 14, Grasas: 10, Fibra: 5
  }},
  
  // Sabado
  Sabado:{Desayuno:{Titulo:'Tostadas de pan integral con queso cottage y frutas',
  Ingredientes:'Pan integral: 2 rebanadas. Queso cottage: 1/4 taza. Frutas (ej: fresas, plátano, kiwi): 1 taza',
  Preparacion:'1-Tostar las rebanadas de pan integral hasta que estén doradas. 2-Colocar el queso cottage en las rebanadas de pan integral tostado. 3-Picar las frutas y colocarlas encima del queso cottage. 4-Servir y disfrutar.', 
  Calorias: 300, Carbohidratos: 47, Proteinas: 15, Grasas: 8, Fibra: 7
  },
  
  Almuerzo:{Titulo:'Pescado enchilado con verduras al horno',
  Ingredientes:'1 filete de pescado (tilapia, merluza, etc.).1/2 taza de verduras (pimiento, cebolla, zucchini, etc).1 cucharadita de aceite de oliva.1/2 cucharadita de sal.1/4 cucharadita de pimienta negra.1/4 taza de salsa de enchilada.1/4 taza de queso rallado',
  Preparacion:'1-Precalentar el horno a 200°C.2-Cortar las verduras en trozos pequeños y colocarlas en una bandeja para horno.3-Tempere el filete de pescado con sal, pimienta y aceite de oliva.4-Colocar el filete de pescado sobre las verduras en la bandeja.5-Verter la salsa de enchilada sobre el pescado y las verduras.6-Espolvorear el queso rallado sobre la salsa.7-Hornear por 20-25 minutos, hasta que el pescado esté cocido y el queso esté dorado.8-Servir caliente.', 
  Calorias: 400, Carbohidratos: 17, Proteinas: 35, Grasas: 20, Fibra: 2
  },
  
  Cena:{Titulo:'Bocadillo de pavo con jamon y verduras',
  Ingredientes:'Pan integral: 2 rebanadas. Pavo cocido: 3 onzas. jamon: 2 rebanadas. Verduras (ej: lechuga, tomate, pepino): 1 taza. Mostaza: 1 cucharada',
  Preparacion:'1-Calentar el pan integral en un tostador o en una sartén. 2-Picar las verduras en trozos pequeños. 3-Colocar el pavo cocido, las rebanadas de jamon y las verduras en el pan integral caliente. 4-Agregar mostaza al gusto. 5-Servir y disfrutar.', 
  Calorias: 345, Carbohidratos: 30, Proteinas: 41, Grasas: 8, Fibra: 4
  }},
  
  //  Domingo
  Domingo:{Desayuno:{Titulo:'Tostadas de pan integral con queso y jamón',
  Ingredientes:'Pan integral: 2 rebanadas. Queso: 2 rebanadas. Jamón cocido: 2 lonjas',
  Preparacion:'1-Calienta una tostadora o una sartén a fuego medio. 2-Coloca las rebanadas de pan integral en la tostadora o sartén y tosta hasta que estén doradas. 3-Retira del calor y coloca una rebanada de queso en cada rebanada de pan. 4-Coloca las lonchas de jamón encima del queso. 5-Vuelve a colocar las tostadas en la tostadora o sartén y cocina hasta que el queso se haya derretido. 6-Sirve y disfruta.', 
  Calorias: 300, Carbohidratos: 18, Proteinas: 32, Grasas: 12, Fibra: 3
  },
  
  Almuerzo:{Titulo:'Sopa de lentejas con verduras',
  Ingredientes:'Lentejas cocidas: 1 taza. Verduras (ej: zanahorias, papa, cebolla): 1 taza. Caldo de pollo/vegetal: 4 taza. Aceite de oliva: 1 cucharada',
  Preparacion:'1-Caliente el aceite de oliva en una olla a fuego medio y añada las verduras picadas.2-Sofría por unos minutos hasta que estén suaves. 3-Agregue el caldo de pollo o vegetal y las lentejas cocidas y deje que hierva. 4-Reduzca el fuego y deje cocinar durante unos 15 minutos más hasta que las verduras estén suaves. 5-Sirva caliente y disfrute.', 
  Calorias: 440, Carbohidratos: 54, Proteinas: 24, Grasas: 15, Fibra: 18 
  },
  
  Cena:{Titulo:'Tortilla de patatas',
  Ingredientes:'2 huevos. 100 gramos de patatas peladas y cortadas en rodajas finas.1/4 de cebolla cortada en rodajas finas.Aceite de oliva.Sal al gusto',
  Preparacion:'1-Calienta una sartén antiadherente con un poco de aceite de oliva a fuego medio-alto.2-Agrega las patatas y la cebolla a la sartén y fríe hasta que estén doradas y tiernas, aproximadamente 8-10 minutos.3-Mientras tanto, batir los huevos en un tazón con una pizca de sal.4-Agrega las patatas y la cebolla a los huevos batidos y mezcla bien.5-Vierte la mezcla de huevo y patatas de vuelta a la sartén y cocina a fuego medio-bajo hasta que esté dorado por debajo, aproximadamente 5-7 minutos.6-Dale la vuelta a la tortilla con ayuda de un plato y termina de cocinar por el otro lado hasta que esté bien dorado, aproximadamente 3-5 minutos más.7-Sirve la tortilla de patatas caliente.', 
  Calorias: 350, Carbohidratos: 30, Proteinas: 13, Grasas: 20, Fibra: 2
  }},
  
  }],
  
  CardUno:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  CardDos:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  CardTres:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card4:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card5:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card6:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card7:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card8:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card9:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card10:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card11:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card12:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card13:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card14:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card15:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card16:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],

  Card17:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card18:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
 
  Card19:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card20:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card21:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card22:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card23:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card24:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card25:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card26:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card27:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card28:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card29:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card30:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card31:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card32:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card33:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card34:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card35:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card36:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card37:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card38:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card39:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card40:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card41:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card42:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card43:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card44:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card45:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card46:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card47:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card48:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card49:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card50:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card51:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card52:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card53:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card54:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card55:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card56:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card57:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card58:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card59:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card60:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card61:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card62:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card63:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card64:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card65:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card66:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card67:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card68:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card69:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card70:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card71:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card72:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card73:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card74:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card75:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card76:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card77:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card78:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card79:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card80:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card81:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card82:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card83:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  Card84:[{
    completed: 'completed',
    incompleted: 'incompleted'
  }],
  calorias :0,
  carbohidratos: 0,
  grasas: 0,
  comidasCompletadas : 0,
  fibra: 0,
  proteinas: 0,
  btnRecetas : 'listo',
  
    }, {
        withCredentials: true
    })
  }



const getTodos = async () => {
    const { data } = await axios.get('/api/recetas', {
        withCredentials: true
    })
    console.log(data);
if (divcontenedor.innerText === '') {
  divcontenedor.innerHTML = `<div id="div-btn-recetas" class= "text-center">
  <p>Aun no tienes tu receta mensual,para obtenerla</p>
  <div class="flex justify-center">
  <button  type="button" id="btn-recetas" class="bg-green-500 hover:bg-green-600 p-2 rounded-lg">Presiona aqui</button>
  </div>
</div>
  </div> `
  console.log('EL IF');
  console.log(divcontenedor.children[0].children[1].children[0]);
  const botonRecetas = divcontenedor.children[0].children[1].children[0]


  botonRecetas.addEventListener('click', async e => {
   addRecetas();
    location.reload();
  })
}

   divcontenedor.innerHTML=`  <h3 class="mt-4 text-center font-bold" style="font-size: 24px;">Semana N°1</h3>
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Lunes</h3>

      <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card"  class="h-96 w-72 relative m-4 1">

        <div class="face front">
          <img src="//assets.kraftfoods.com/recipe_images/opendeploy/197047_640x428.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Lunes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Lunes.Desayuno.Titulo}</h3>
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Lunes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Lunes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Lunes.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>
                ${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Lunes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Lunes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Lunes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Lunes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Lunes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].CardUno[0].completed}">Listo</button>
            <button class="${data[0].CardUno[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
      </div>







      <div id="card" class="h-96 w-72 relative m-4 2">
        <div class="face front">
          <img src="https://previews.123rf.com/images/plutagoraphotos/plutagoraphotos1503/plutagoraphotos150300029/38083521-pechuga-de-pollo-a-la-parrilla-brócoli-al-vapor-y-las-zanahorias-al-vapor-dispuestos-en-un-plato-com.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Lunes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Lunes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Lunes.Almuerzo.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaUno[0].Lunes.Almuerzo.Ingredientes.split(',')[1]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Lunes.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaUno[0].Lunes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Lunes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Lunes.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Lunes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].CardDos[0].completed}">Listo</button>
            <button class="${data[0].CardDos[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div> 
      </div>


      <div id="card" class="h-96 w-72 relative m-4 3">

        <div class="face front">
          <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/03/ensalada-de-aguacate-con-pollo-y-nuez-de-la-india.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Lunes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Lunes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[0]}.</li>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[1]}.</li>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[2]}.</li>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[3]}.</li>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[4]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Lunes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Lunes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Lunes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Lunes.Cena.Preparacion.split('.')[3]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Lunes.Cena.Calorias} </li>
              <li>Proteinas: ${data[0].SemanaUno[0].Lunes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Lunes.Cena.Carbohidratos} </li>
              <li>Grasas: ${data[0].SemanaUno[0].Lunes.Cena.Grasas}6g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Lunes.Cena.Fibra}5g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].CardTres[0].completed}">Listo</button>
            <button class="${data[0].CardTres[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
      </div>



    </div>





    <h3 class="mt-4 font-bold " style="font-size: 24px;">Martes</h3>

    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 4">

        <div class="face front">
          <img src="https://cdn.pixabay.com/photo/2016/11/18/19/00/bread-1836411_640.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Martes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Martes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Martes.Desayuno.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaUno[0].Martes.Desayuno.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaUno[0].Martes.Desayuno.Ingredientes.split(',')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[0]}.
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[6]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Martes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Martes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Martes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Martes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Martes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card4[0].completed}">Listo</button>
            <button class="${data[0].Card4[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 5">

        <div class="face front">
          <img src="https://www.recetasmundo.com/wp-content/uploads/2022/11/Wraps-de-tortilla-con-salmon-lechuga-y-pimientos.jpg.webp" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Martes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Martes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Martes.Almuerzo.Ingredientes.split('.')[0]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Almuerzo.Ingredientes.split('.')[1]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Almuerzo.Ingredientes.split('.')[2]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Almuerzo.Ingredientes.split('.')[3]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Martes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Martes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Martes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Martes.Almuerzo.Preparacion.split('.')[3]}. 
               </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Martes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Martes.Almuerzo.Proteinas}</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Martes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Martes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Martes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card5[0].completed}">Listo</button>
            <button class="${data[0].Card5[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 6">
        <div class="face front">
          <img src="https://assets.unileversolutions.com/recipes-v2/117229.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Martes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Martes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Martes.Cena.Ingredientes.split('.')[0]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Cena.Ingredientes.split('.')[1]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Cena.Ingredientes.split('.')[2]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Cena.Ingredientes.split('.')[3]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Martes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Martes.Cena.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Martes.Cena.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Martes.Cena.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Martes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card6[0].completed}">Listo</button>
            <button class="${data[0].Card6[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Miercoles</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 7">

        <div class="face front">
          <img src="https://deliciaskitchen.com/wp-content/uploads/2021/11/gachas-de-avena-porridge.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Miercoles.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Miercoles.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Miercoles.Desayuno.Ingredientes.split(',')[0]}.</li>
              <li>${data[0].SemanaUno[0].Miercoles.Desayuno.Ingredientes.split(',')[1]}.</li>
              <li>${data[0].SemanaUno[0].Miercoles.Desayuno.Ingredientes.split(',')[2]}.</li>
              <li>${data[0].SemanaUno[0].Miercoles.Desayuno.Ingredientes.split(',')[3]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Miercoles.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Miercoles.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Miercoles.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Miercoles.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Miercoles.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card7[0].completed}">Listo</button>
            <button class="${data[0].Card7[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 8">

        <div class="face front">
          <img src="https://t1.uc.ltmcdn.com/es/posts/3/8/3/como_hacer_lentejas_con_verduras_34383_orig.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Miercoles.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Miercoles.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Miercoles.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Almuerzo.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias:${data[0].SemanaUno[0].Miercoles.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Miercoles.Almuerzo.Proteinas}</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Miercoles.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Miercoles.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Miercoles.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card8[0].completed}">Listo</button>
            <button class="${data[0].Card8[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 9">

        <div class="face front">
          <img src="https://thumbs.dreamstime.com/b/salmón-al-horno-o-frito-y-ensalada-paleo-keto-fodmap-dieta-comida-mediterránea-con-pescado-vapor-plato-asiático-de-teriyaki-209299279.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Miercoles.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Miercoles.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Miercoles.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Cena.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[4]}. 
               </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Miercoles.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Miercoles.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Miercoles.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Miercoles.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Miercoles.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card9[0].completed}">Listo</button>
            <button class="${data[0].Card9[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>

    <h3 class="mt-4 font-bold " style="font-size: 24px;">Jueves</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 10">

        <div class="face front">
          <img src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostada-de-aguacate-y-huevo-frito/900/tostada-de-aguacate-y-huevo-frito.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Jueves.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Jueves.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Jueves.Desayuno.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Desayuno.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Desayuno.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Desayuno.Ingredientes.split(',')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Jueves.Desayuno.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaUno[0].Jueves.Desayuno.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Jueves.Desayuno.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Jueves.Desayuno.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Jueves.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card10[0].completed}">Listo</button>
            <button class="${data[0].Card10[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 11">

        <div class="face front">
          <img src="https://images.hola.com/imagenes/cocina/recetas/20200312162929/receta-arroz-pollo-menestra-verduras/1-39-435/arroz-adobe-t.jpg?tx=w_680" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Jueves.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Jueves.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Jueves.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Almuerzo.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Jueves.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Jueves.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Jueves.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Jueves.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Jueves.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card11[0].completed}">Listo</button>
            <button class="${data[0].Card11[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 12">

        <div class="face front">
          <img src="https://elikaeskola.com/wp-content/uploads/me-siento-culpable-por-comer.png" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Jueves.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Jueves.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[0]}.</li>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[1]}.</li>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[2]}.</li>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[3]}.</li>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[4]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[6]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Jueves.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Jueves.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Jueves.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Jueves.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Jueves.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card12[0].completed}">Listo</button>
            <button class="${data[0].Card12[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Viernes</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 13">

        <div class="face front">
          <img src="https://www.recetasnestlecam.com/sites/default/files/srh_recipes/84cd4a5713e4036ca0b3b796400fda1b.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Viernes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Viernes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[2]}
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[3]}
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[4]} 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[5]} 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[6]} 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[7]} 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[8]}   
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Viernes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Viernes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Viernes.Desayuno.Carbohidratos}40g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Viernes.Desayuno.Grasas}6g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Viernes.Desayuno.Fibra}5g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card13[0].completed}">Listo</button>
            <button class="${data[0].Card13[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 14">

        <div class="face front">
          <img src="https://cdn.optipic.io/site-102199/wp-content/uploads/2022/08/Lasana-Espinaca-Ricotta--500x450.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Viernes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Viernes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[0]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[1]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[2]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[3]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[4]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[5]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[7]}.
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[8]}
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Viernes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Viernes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Viernes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Viernes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Viernes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card14[0].completed}">Listo</button>
            <button class="${data[0].Card14[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 15">

        <div class="face front">
          <img src="https://unareceta.com/wp-content/uploads/2018/03/receta-de-ensalada-de-atun-con-verduras.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Viernes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Viernes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Viernes.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Cena.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[0]}. 
                <br> ${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[1]}. 
                <br> ${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[2]}. 
                <br> ${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[3]}. 
                <br> ${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[4]}
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Viernes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Viernes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Viernes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Viernes.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Viernes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card15[0].completed}">Listo</button>
            <button class="${data[0].Card15[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Sabado</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 16">

        <div class="face front">
          <img src="https://www.cucute.com/blog/wp-content/uploads/2020/08/huevos-con-espinacas-champinones-jamon-menta-1.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Sabado.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Sabado.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Sabado.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Sabado.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Sabado.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Sabado.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Sabado.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card16[0].completed}">Listo</button>
            <button class="${data[0].Card16[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 17">

        <div class="face front">
          <img src="https://cdn0.recetasgratis.net/es/posts/7/6/4/ensalada_de_garbanzos_y_pollo_61467_600.jpg"" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Sabado.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Sabado.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[7]}.
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Sabado.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaUno[0].Sabado.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Sabado.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Sabado.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Sabado.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card17[0].completed}">Listo</button>
            <button class="${data[0].Card17[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 18">

        <div class="face front">
          <img src="https://mejorconsalud.as.com/wp-content/uploads/2022/02/ensalada-quinoa-pollo-768x512.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Sabado.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Sabado.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Sabado.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Cena.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[4]}.
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[6]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[7]}
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Sabado.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Sabado.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Sabado.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Sabado.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Sabado.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card18[0].completed}">Listo</button>
            <button class="${data[0].Card18[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Domingo</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 19">

        <div class="face front">
          <img src="https://media.istockphoto.com/id/1068756476/es/foto/casero-tostadas-de-centeno-con-queso-cottage-y-pi%C3%B1a-en-tablero-de-madera-blanco.jpg?s=170667a&w=0&k=20&c=SRY8HMiZmMq2ioCG7GyymGr1wyvkI8JzhFScu2lJ3tY=" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Domingo.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Domingo.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Domingo.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Domingo.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Domingo.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Domingo.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Domingo.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Domingo.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card19[0].completed}">Listo</button>
            <button class="${data[0].Card19[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 20">

        <div class="face front">
          <img src="https://img.freepik.com/fotos-premium/brocheta-pollo-calabaza-setas-brochetas_75924-22681.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Domingo.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Domingo.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Domingo.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Almuerzo.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Domingo.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaUno[0].Domingo.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Domingo.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Domingo.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Domingo.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card20[0].completed}">Listo</button>
            <button class="${data[0].Card20[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 21">

        <div class="face front">
          <img src="https://okdiario.com/img/2018/05/19/nuggets-de-pollo.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Domingo.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Domingo.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[6]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[0]}.${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[1]}
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[2]}.${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[3]}  
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[4]}.${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[5]}     
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[7]}.
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[8]}.             
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Domingo.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Domingo.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Domingo.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Domingo.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Domingo.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card21[0].completed}">Listo</button>
            <button class="${data[0].Card21[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
      </div>
    </div>
 `
 select.addEventListener('input', e => {
    
  if (e.target.value === 'SemanaUno') {
    divcontenedor.innerHTML=`  <h3 class="mt-4 text-center font-bold" style="font-size: 24px;">Semana N°1</h3>
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Lunes</h3>

      <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card"  class="h-96 w-72 relative m-4 1">

        <div class="face front">
          <img src="//assets.kraftfoods.com/recipe_images/opendeploy/197047_640x428.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Lunes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Lunes.Desayuno.Titulo}</h3>
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Lunes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Lunes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Lunes.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>
                ${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Lunes.Desayuno.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Lunes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Lunes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Lunes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Lunes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Lunes.Desayuno.Fibra}g</li>
            </ul>
            </div>
             <button id="btn-cheked-card"  class="${data[0].CardUno[0].completed}">Listo</button>
              <button class="${data[0].CardUno[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
      </div>







      <div id="card" class="h-96 w-72 relative m-4 2">
        <div class="face front">
          <img src="https://previews.123rf.com/images/plutagoraphotos/plutagoraphotos1503/plutagoraphotos150300029/38083521-pechuga-de-pollo-a-la-parrilla-brócoli-al-vapor-y-las-zanahorias-al-vapor-dispuestos-en-un-plato-com.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Lunes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Lunes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Lunes.Almuerzo.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaUno[0].Lunes.Almuerzo.Ingredientes.split(',')[1]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Lunes.Almuerzo.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Lunes.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaUno[0].Lunes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Lunes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Lunes.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Lunes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].CardDos[0].completed}">Listo</button>
            <button class="${data[0].CardDos[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div> 
      </div>


      <div id="card" class="h-96 w-72 relative m-4 3">

        <div class="face front">
          <img src="https://dam.cocinafacil.com.mx/wp-content/uploads/2018/03/ensalada-de-aguacate-con-pollo-y-nuez-de-la-india.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Lunes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Lunes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[0]}.</li>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[1]}.</li>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[2]}.</li>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[3]}.</li>
              <li>${data[0].SemanaUno[0].Lunes.Cena.Ingredientes.split(',')[4]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Lunes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Lunes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Lunes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Lunes.Cena.Preparacion.split('.')[3]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Lunes.Cena.Calorias} </li>
              <li>Proteinas: ${data[0].SemanaUno[0].Lunes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Lunes.Cena.Carbohidratos} </li>
              <li>Grasas: ${data[0].SemanaUno[0].Lunes.Cena.Grasas}6g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Lunes.Cena.Fibra}5g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].CardTres[0].completed}">Listo</button>
            <button class="${data[0].CardTres[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
      </div>



    </div>





    <h3 class="mt-4 font-bold " style="font-size: 24px;">Martes</h3>

    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 4">

        <div class="face front">
          <img src="https://cdn.pixabay.com/photo/2016/11/18/19/00/bread-1836411_640.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Martes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Martes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Martes.Desayuno.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaUno[0].Martes.Desayuno.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaUno[0].Martes.Desayuno.Ingredientes.split(',')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[0]}.
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaUno[0].Martes.Desayuno.Preparacion.split('.')[6]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Martes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Martes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Martes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Martes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Martes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card4[0].completed}">Listo</button>
            <button class="${data[0].Card4[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 5">

        <div class="face front">
          <img src="https://www.recetasmundo.com/wp-content/uploads/2022/11/Wraps-de-tortilla-con-salmon-lechuga-y-pimientos.jpg.webp" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Martes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Martes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Martes.Almuerzo.Ingredientes.split('.')[0]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Almuerzo.Ingredientes.split('.')[1]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Almuerzo.Ingredientes.split('.')[2]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Almuerzo.Ingredientes.split('.')[3]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Martes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Martes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Martes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Martes.Almuerzo.Preparacion.split('.')[3]}. 
               </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Martes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Martes.Almuerzo.Proteinas}</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Martes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Martes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Martes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card5[0].completed}">Listo</button>
            <button class="${data[0].Card5[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 6">
        <div class="face front">
          <img src="https://assets.unileversolutions.com/recipes-v2/117229.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Martes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Martes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Martes.Cena.Ingredientes.split('.')[0]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Cena.Ingredientes.split('.')[1]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Cena.Ingredientes.split('.')[2]}.</li>
              <li>${data[0].SemanaUno[0].Martes.Cena.Ingredientes.split('.')[3]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Martes.Cena.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Martes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Martes.Cena.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Martes.Cena.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Martes.Cena.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Martes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card6[0].completed}">Listo</button>
            <button class="${data[0].Card6[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Miercoles</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 7">

        <div class="face front">
          <img src="https://deliciaskitchen.com/wp-content/uploads/2021/11/gachas-de-avena-porridge.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Miercoles.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Miercoles.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Miercoles.Desayuno.Ingredientes.split(',')[0]}.</li>
              <li>${data[0].SemanaUno[0].Miercoles.Desayuno.Ingredientes.split(',')[1]}.</li>
              <li>${data[0].SemanaUno[0].Miercoles.Desayuno.Ingredientes.split(',')[2]}.</li>
              <li>${data[0].SemanaUno[0].Miercoles.Desayuno.Ingredientes.split(',')[3]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Desayuno.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Miercoles.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Miercoles.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Miercoles.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Miercoles.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Miercoles.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card7[0].completed}">Listo</button>
            <button class="${data[0].Card7[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 8">

        <div class="face front">
          <img src="https://t1.uc.ltmcdn.com/es/posts/3/8/3/como_hacer_lentejas_con_verduras_34383_orig.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Miercoles.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Miercoles.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Miercoles.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Almuerzo.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Almuerzo.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias:${data[0].SemanaUno[0].Miercoles.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Miercoles.Almuerzo.Proteinas}</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Miercoles.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Miercoles.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Miercoles.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card8[0].completed}">Listo</button>
            <button class="${data[0].Card8[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 9">

        <div class="face front">
          <img src="https://thumbs.dreamstime.com/b/salmón-al-horno-o-frito-y-ensalada-paleo-keto-fodmap-dieta-comida-mediterránea-con-pescado-vapor-plato-asiático-de-teriyaki-209299279.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Miercoles.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Miercoles.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Miercoles.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Miercoles.Cena.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Miercoles.Cena.Preparacion.split('.')[4]}. 
               </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Miercoles.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Miercoles.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Miercoles.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Miercoles.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Miercoles.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card9[0].completed}">Listo</button>
            <button class="${data[0].Card9[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>

    <h3 class="mt-4 font-bold " style="font-size: 24px;">Jueves</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 10">

        <div class="face front">
          <img src="https://d36fw6y2wq3bat.cloudfront.net/recipes/tostada-de-aguacate-y-huevo-frito/900/tostada-de-aguacate-y-huevo-frito.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Jueves.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Jueves.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Jueves.Desayuno.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Desayuno.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Desayuno.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Desayuno.Ingredientes.split(',')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Jueves.Desayuno.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Jueves.Desayuno.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaUno[0].Jueves.Desayuno.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Jueves.Desayuno.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Jueves.Desayuno.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Jueves.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card10[0].completed}">Listo</button>
            <button class="${data[0].Card10[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 11">

        <div class="face front">
          <img src="https://images.hola.com/imagenes/cocina/recetas/20200312162929/receta-arroz-pollo-menestra-verduras/1-39-435/arroz-adobe-t.jpg?tx=w_680" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Jueves.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Jueves.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Jueves.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Jueves.Almuerzo.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Jueves.Almuerzo.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Jueves.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Jueves.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Jueves.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Jueves.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Jueves.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card11[0].completed}">Listo</button>
            <button class="${data[0].Card11[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 12">

        <div class="face front">
          <img src="https://elikaeskola.com/wp-content/uploads/me-siento-culpable-por-comer.png" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Jueves.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Jueves.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[0]}.</li>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[1]}.</li>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[2]}.</li>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[3]}.</li>
              <li>${data[0].SemanaUno[0].Jueves.Cena.Ingredientes.split('.')[4]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaUno[0].Jueves.Cena.Preparacion.split('.')[6]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Jueves.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Jueves.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Jueves.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Jueves.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Jueves.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card12[0].completed}">Listo</button>
            <button class="${data[0].Card12[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Viernes</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 13">

        <div class="face front">
          <img src="https://www.recetasnestlecam.com/sites/default/files/srh_recipes/84cd4a5713e4036ca0b3b796400fda1b.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Viernes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Viernes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Desayuno.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[2]}
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[3]}
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[4]} 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[5]} 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[6]} 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[7]} 
                <br>${data[0].SemanaUno[0].Viernes.Desayuno.Preparacion.split('.')[8]}   
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Viernes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Viernes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Viernes.Desayuno.Carbohidratos}40g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Viernes.Desayuno.Grasas}6g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Viernes.Desayuno.Fibra}5g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card13[0].completed}">Listo</button>
            <button class="${data[0].Card13[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 14">

        <div class="face front">
          <img src="https://cdn.optipic.io/site-102199/wp-content/uploads/2022/08/Lasana-Espinaca-Ricotta--500x450.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Viernes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Viernes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[0]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[1]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[2]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[3]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[4]}.</li>
              <li>${data[0].SemanaUno[0].Viernes.Almuerzo.Ingredientes.split('.')[5]}.</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[7]}.
                <br>${data[0].SemanaUno[0].Viernes.Almuerzo.Preparacion.split('.')[8]}
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Viernes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Viernes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Viernes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Viernes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Viernes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card14[0].completed}">Listo</button>
            <button class="${data[0].Card14[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 15">

        <div class="face front">
          <img src="https://unareceta.com/wp-content/uploads/2018/03/receta-de-ensalada-de-atun-con-verduras.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Viernes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Viernes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Viernes.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Viernes.Cena.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[0]}. 
                <br> ${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[1]}. 
                <br> ${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[2]}. 
                <br> ${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[3]}. 
                <br> ${data[0].SemanaUno[0].Viernes.Cena.Preparacion.split('.')[4]}
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Viernes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Viernes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Viernes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Viernes.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Viernes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card15[0].completed}">Listo</button>
            <button class="${data[0].Card15[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Sabado</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 16">

        <div class="face front">
          <img src="https://www.cucute.com/blog/wp-content/uploads/2020/08/huevos-con-espinacas-champinones-jamon-menta-1.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Sabado.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Sabado.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Desayuno.Ingredientes.split(',')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Sabado.Desayuno.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Sabado.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Sabado.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Sabado.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Sabado.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Sabado.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card16[0].completed}">Listo</button>
            <button class="${data[0].Card16[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 17">

        <div class="face front">
          <img src="https://cdn0.recetasgratis.net/es/posts/7/6/4/ensalada_de_garbanzos_y_pollo_61467_600.jpg"" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Sabado.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Sabado.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Almuerzo.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaUno[0].Sabado.Almuerzo.Preparacion.split('.')[7]}.
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Sabado.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaUno[0].Sabado.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Sabado.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Sabado.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Sabado.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card17[0].completed}">Listo</button>
            <button class="${data[0].Card17[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 18">

        <div class="face front">
          <img src="https://mejorconsalud.as.com/wp-content/uploads/2022/02/ensalada-quinoa-pollo-768x512.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Sabado.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Sabado.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Sabado.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Sabado.Cena.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[4]}.
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[6]}. 
                <br>${data[0].SemanaUno[0].Sabado.Cena.Preparacion.split('.')[7]}
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Sabado.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Sabado.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Sabado.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Sabado.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Sabado.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card18[0].completed}">Listo</button>
            <button class="${data[0].Card18[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Domingo</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 19">

        <div class="face front">
          <img src="https://media.istockphoto.com/id/1068756476/es/foto/casero-tostadas-de-centeno-con-queso-cottage-y-pi%C3%B1a-en-tablero-de-madera-blanco.jpg?s=170667a&w=0&k=20&c=SRY8HMiZmMq2ioCG7GyymGr1wyvkI8JzhFScu2lJ3tY=" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Domingo.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Domingo.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Domingo.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Domingo.Desayuno.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Domingo.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Domingo.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Domingo.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Domingo.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Domingo.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card19[0].completed}">Listo</button>
            <button class="${data[0].Card19[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 20">

        <div class="face front">
          <img src="https://img.freepik.com/fotos-premium/brocheta-pollo-calabaza-setas-brochetas_75924-22681.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Domingo.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Domingo.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Domingo.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Almuerzo.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaUno[0].Domingo.Almuerzo.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Domingo.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaUno[0].Domingo.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaUno[0].Domingo.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaUno[0].Domingo.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaUno[0].Domingo.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card20[0].completed}">Listo</button>
            <button class="${data[0].Card20[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 21">

        <div class="face front">
          <img src="https://okdiario.com/img/2018/05/19/nuggets-de-pollo.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaUno[0].Domingo.Cena.Titulo}</h3>
        </div>

       <div class="face back">
        <div class="flex justify-end">
        <button class="" id="return-card">❌</button>
        </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaUno[0].Domingo.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaUno[0].Domingo.Cena.Ingredientes.split('.')[6]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[0]}.${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[1]}
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[2]}.${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[3]}  
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[4]}.${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[5]}     
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[7]}.
                <br>${data[0].SemanaUno[0].Domingo.Cena.Preparacion.split('.')[8]}.             
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaUno[0].Domingo.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaUno[0].Domingo.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaUno[0].Domingo.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaUno[0].Domingo.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaUno[0].Domingo.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card21[0].completed}">Listo</button>
            <button class="${data[0].Card21[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
      </div>
    </div>
 `

FuncionesCarta();
  }

  else if (e.target.value === 'SemanaDos') {

    divcontenedor.innerHTML=`<h3 class="mt-4 text-center font-bold" style="font-size: 24px;">Semana N°2</h3>
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Lunes</h3>

      <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 22">

        <div class="face front">
          <img src="https://storage.googleapis.com/avena-recipes/2019/10/1571780272665.jpeg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Lunes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Lunes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Lunes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Desayuno.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Desayuno.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Lunes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Lunes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Lunes.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Lunes.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Lunes.Desayuno.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Lunes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Lunes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Lunes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Lunes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Lunes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card22[0].completed}">Listo</button>
            <button class="${data[0].Card22[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 23">

        <div class="face front">
          <img src="https://images.aws.nestle.recipes/original/b20ee479682a5f0dfe7e11db0529d309_ARROZ_FRITO_CON_CAMARONES.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Lunes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Lunes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Lunes.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Almuerzo.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Lunes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Lunes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Lunes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Lunes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Lunes.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaDos[0].Lunes.Almuerzo.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Lunes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Lunes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Lunes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Lunes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Lunes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card23[0].completed}">Listo</button>
            <button class="${data[0].Card23[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 24">

        <div class="face front">
          <img src="https://www.deliciosi.com/images/1100/1161/ensalada-de-pollo-con-manzana.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Lunes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Lunes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Lunes.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Cena.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaDos[0].Lunes.Cena.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Lunes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Lunes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Lunes.Cena.Preparacion.split('.')[2]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Lunes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Lunes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Lunes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Lunes.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Lunes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card24[0].completed}">Listo</button>
            <button class="${data[0].Card24[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>

    <h3 class="mt-4 font-bold " style="font-size: 24px;">Martes</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 25">

        <div class="face front">
          <img src="https://cdn.pixabay.com/photo/2016/11/18/19/00/bread-1836411_640.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Martes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Martes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Martes.Desayuno.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaDos[0].Martes.Desayuno.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaDos[0].Martes.Desayuno.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaDos[0].Martes.Desayuno.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaDos[0].Martes.Desayuno.Ingredientes.split(',')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Martes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Martes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Martes.Desayuno.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaDos[0].Martes.Desayuno.Preparacion.split('.')[3]}.
                <br>${data[0].SemanaDos[0].Martes.Desayuno.Preparacion.split('.')[4]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Martes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Martes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Martes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Martes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Martes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card25[0].completed}">Listo</button>
            <button class="${data[0].Card25[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 26">

        <div class="face front">
          <img src="https://1.bp.blogspot.com/-te9Krjz7_8Q/WiJaxxJSUcI/AAAAAAAAB9Q/1f5f7CO1BPsyr4kPoEqpEdO4DhoubC84QCLcBGAs/s1600/Salm%25C3%25B3n%2Basi%25C3%25A1tico%2Bcon%2Bverduras%2By%2Barroz%2Bintegral%2B-%2Breceta.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Martes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Martes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Martes.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Martes.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Martes.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Martes.Almuerzo.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Martes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Martes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Martes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Martes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Martes.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaDos[0].Martes.Almuerzo.Preparacion.split('.')[5]}. 
               
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Martes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Martes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Martes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:${data[0].SemanaDos[0].Martes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Martes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card26[0].completed}">Listo</button>
            <button class="${data[0].Card26[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 27">

        <div class="face front">
          <img src="https://style.shockvisual.net/wp-content/uploads/2020/01/bowl-of-cesar-salad-VUPQEAL.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Martes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Martes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Martes.Cena.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaDos[0].Martes.Cena.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaDos[0].Martes.Cena.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaDos[0].Martes.Cena.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaDos[0].Martes.Cena.Ingredientes.split(',')[4]}</li>
              <li>${data[0].SemanaDos[0].Martes.Cena.Ingredientes.split(',')[5]}</li>
              <li>${data[0].SemanaDos[0].Martes.Cena.Ingredientes.split(',')[6]}</li>
              <li>${data[0].SemanaDos[0].Martes.Cena.Ingredientes.split(',')[7]}</li>
              <li>${data[0].SemanaDos[0].Martes.Cena.Ingredientes.split(',')[8]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Martes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Martes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Martes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Martes.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Martes.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaDos[0].Martes.Cena.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias:  ${data[0].SemanaDos[0].Martes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Martes.Cena.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaDos[0].Martes.Cena.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaDos[0].Martes.Cena.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaDos[0].Martes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card27[0].completed}">Listo</button>
            <button class="${data[0].Card27[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Miercoles</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 28">

        <div class="face front">
          <img src="https://images.hola.com/imagenes/cocina/recetas/20210318186319/bowl-yogur-natural-fruta-muesli/0-932-147/bowl-yogur-fruta-m.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Miercoles.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Miercoles.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Miercoles.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Desayuno.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Miercoles.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Miercoles.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Miercoles.Desayuno.Preparacion.split('.')[2]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Miercoles.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Miercoles.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Miercoles.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Miercoles.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Miercoles.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card28[0].completed}">Listo</button>
            <button class="${data[0].Card28[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 29">

        <div class="face front">
          <img src="https://mui.kitchen/__export/1661875313666/sites/muikitchen/img/2022/08/30/istockphoto-661236878-170667a_x1x.jpg_1301049368.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Miercoles.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Miercoles.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Miercoles.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Almuerzo.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Almuerzo.Ingredientes.split('.')[6]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Almuerzo.Ingredientes.split('.')[7]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Almuerzo.Ingredientes.split('.')[8]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Miercoles.Almuerzo.Preparacion.split('.')[0]}.
                <br>${data[0].SemanaDos[0].Miercoles.Almuerzo.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaDos[0].Miercoles.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Miercoles.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Miercoles.Almuerzo.Preparacion.split('.')[4]}.  
                <br>${data[0].SemanaDos[0].Miercoles.Almuerzo.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaDos[0].Miercoles.Almuerzo.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaDos[0].Miercoles.Almuerzo.Preparacion.split('.')[7]}.
                <br>${data[0].SemanaDos[0].Miercoles.Almuerzo.Preparacion.split('.')[8]}.
             </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Miercoles.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Miercoles.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Miercoles.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Miercoles.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Miercoles.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card29[0].completed}">Listo</button>
            <button class="${data[0].Card29[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 30">

        <div class="face front">
          <img src="https://thumbs.dreamstime.com/b/huevos-revueltos-con-verduras-y-pan-en-un-plato-tomates-de-pepino-rebanados-tostados-vaso-zumo-naranja-natural-blanco-sobre-una-211573201.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Miercoles.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Miercoles.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Miercoles.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Miercoles.Cena.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Miercoles.Cena.Preparacion.split('.')[0]}.
                <br>${data[0].SemanaDos[0].Miercoles.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Miercoles.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Miercoles.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Miercoles.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaDos[0].Miercoles.Cena.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Miercoles.Cena.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaDos[0].Miercoles.Cena.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaDos[0].Miercoles.Cena.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaDos[0].Miercoles.Cena.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaDos[0].Miercoles.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card30[0].completed}">Listo</button>
            <button class="${data[0].Card30[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>

    <h3 class="mt-4 font-bold " style="font-size: 24px;">Jueves</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 31">

        <div class="face front">
          <img src="https://www.gastrolabweb.com/u/fotografias/m/2022/7/30/f850x638-32729_110218_5050.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Jueves.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Jueves.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Jueves.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Jueves.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Jueves.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Jueves.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Jueves.Desayuno.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaDos[0].Jueves.Desayuno.Preparacion.split('.')[2]}.  
                <br>${data[0].SemanaDos[0].Jueves.Desayuno.Preparacion.split('.')[3]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Jueves.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Jueves.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Jueves.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Jueves.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Jueves.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card31[0].completed}">Listo</button>
            <button class="${data[0].Card31[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 32">

        <div class="face front">
          <img src="https://www.demoslavueltaaldia.com/sites/default/files/tortilla-de-verduras-gratinada-con-queso.jpg.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Jueves.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Jueves.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Jueves.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Jueves.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Jueves.Almuerzo.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Jueves.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Jueves.Almuerzo.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaDos[0].Jueves.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Jueves.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Jueves.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaDos[0].Jueves.Almuerzo.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaDos[0].Jueves.Almuerzo.Preparacion.split('.')[6]}.    
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Jueves.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Jueves.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Jueves.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Jueves.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Jueves.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card32[0].completed}">Listo</button>
            <button class="${data[0].Card32[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 33">

        <div class="face front">
          <img src="https://goodhealthyrecipe.com/wp-content/uploads/2020/03/camarones-mango-verde-aguacate-360x360.jpeg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Jueves.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Jueves.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Jueves.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Jueves.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Jueves.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Jueves.Cena.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Jueves.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Jueves.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Jueves.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Jueves.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Jueves.Cena.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Jueves.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Jueves.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Jueves.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Jueves.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Jueves.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card33[0].completed}">Listo</button>
            <button class="${data[0].Card33[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Viernes</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 34">

        <div class="face front">
          <img src="https://img.freepik.com/fotos-premium/tostada-integral-huevos-revueltos-champinones-requeson-desayuno-o-brunch-saludable-menu-restaurante-dieta-receta-libro-cocina_114941-453.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Viernes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Viernes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Viernes.Desayuno.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Desayuno.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Desayuno.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Desayuno.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Desayuno.Ingredientes.split(',')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Viernes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Viernes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Viernes.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Viernes.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Viernes.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaDos[0].Viernes.Desayuno.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaDos[0].Viernes.Desayuno.Preparacion.split('.')[6]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Viernes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Viernes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Viernes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Viernes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Viernes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card34[0].completed}">Listo</button>
            <button class="${data[0].Card34[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 35">

        <div class="face front">
          <img src="https://myfreshfood.es/wp-content/uploads/2021/07/hamburguesa-de-lentejas-y-arroz-integral.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Viernes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Viernes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Viernes.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Almuerzo.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Almuerzo.Ingredientes.split('.')[6]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Almuerzo.Ingredientes.split('.')[7]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Viernes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Viernes.Almuerzo.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaDos[0].Viernes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Viernes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Viernes.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaDos[0].Viernes.Almuerzo.Preparacion.split('.')[5]}.  
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Viernes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Viernes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Viernes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Viernes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Viernes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card35[0].completed}">Listo</button>
            <button class="${data[0].Card35[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 36">

        <div class="face front">
          <img src="https://recetaland.com/wp-content/uploads/2020/10/Sandwich-de-Pavo-y-Queso-1.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Viernes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Viernes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Viernes.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaDos[0].Viernes.Cena.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Viernes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Viernes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Viernes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Viernes.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Viernes.Cena.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Viernes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Viernes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Viernes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Viernes.Cena.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaDos[0].Viernes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card36[0].completed}">Listo</button>
            <button class="${data[0].Card36[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Sabado</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 37">

        <div class="face front">
          <img src="https://mui.kitchen/__export/1661129451077/sites/muikitchen/img/2022/08/21/consiente_a_tus_nixos_con_esta_deliciosa_y_nutritiva_ensalada_de_frutas_con_yogurt_1.jpg_1194119626.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Sabado.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Sabado.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Sabado.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Sabado.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Sabado.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Sabado.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Sabado.Desayuno.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaDos[0].Sabado.Desayuno.Preparacion.split('.')[2]}.  
                <br>${data[0].SemanaDos[0].Sabado.Desayuno.Preparacion.split('.')[3]}.    
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Sabado.Desayuno.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaDos[0].Sabado.Desayuno.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaDos[0].Sabado.Desayuno.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaDos[0].Sabado.Desayuno.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaDos[0].Sabado.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card37[0].completed}">Listo</button>
            <button class="${data[0].Card37[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 38">

        <div class="face front">
          <img src="https://bachoco.com.mx/descubre/wp-content/uploads/2022/09/slider_1000x565-4.png" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Sabado.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Sabado.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
            <li>${data[0].SemanaDos[0].Sabado.Almuerzo.Ingredientes.split(',')[0]}</li>
            <li>${data[0].SemanaDos[0].Sabado.Almuerzo.Ingredientes.split(',')[1]}</li>
            <li>${data[0].SemanaDos[0].Sabado.Almuerzo.Ingredientes.split(',')[2]}</li>
            <li>${data[0].SemanaDos[0].Sabado.Almuerzo.Ingredientes.split(',')[3]}</li>
            <li>${data[0].SemanaDos[0].Sabado.Almuerzo.Ingredientes.split(',')[4]}</li>
            <li>${data[0].SemanaDos[0].Sabado.Almuerzo.Ingredientes.split(',')[5]}</li>  
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Sabado.Almuerzo.Preparacion.split('.')[0]}. 
              <br>${data[0].SemanaDos[0].Sabado.Almuerzo.Preparacion.split('.')[1]}. 
              <br>${data[0].SemanaDos[0].Sabado.Almuerzo.Preparacion.split('.')[2]}. 
              <br>${data[0].SemanaDos[0].Sabado.Almuerzo.Preparacion.split('.')[3]}. 
              <br>${data[0].SemanaDos[0].Sabado.Almuerzo.Preparacion.split('.')[4]}. 
              <br>${data[0].SemanaDos[0].Sabado.Almuerzo.Preparacion.split('.')[5]}. 
              <br>${data[0].SemanaDos[0].Sabado.Almuerzo.Preparacion.split('.')[6]}. 
              <br>${data[0].SemanaDos[0].Sabado.Almuerzo.Preparacion.split('.')[7]}. 
              </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Sabado.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaDos[0].Sabado.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaDos[0].Sabado.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaDos[0].Sabado.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaDos[0].Sabado.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card38[0].completed}">Listo</button>
            <button class="${data[0].Card38[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 39">

        <div class="face front">
          <img src="https://www.cardamomo.news/__export/1608237046685/sites/debate/img/2020/12/17/ensalada_fresca_de_fresasx_espinacas_y_queso_de_cabra_crop1608236925366.jpeg_242310155.jpeg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Sabado.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Sabado.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Sabado.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Sabado.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Sabado.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Sabado.Cena.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Sabado.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Sabado.Cena.Preparacion.split('.')[0]}.
                <br>${data[0].SemanaDos[0].Sabado.Cena.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaDos[0].Sabado.Cena.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaDos[0].Sabado.Cena.Preparacion.split('.')[3]}.
                <br>${data[0].SemanaDos[0].Sabado.Cena.Preparacion.split('.')[4]}.
                <br>${data[0].SemanaDos[0].Sabado.Cena.Preparacion.split('.')[5]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Sabado.Cena.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaDos[0].Sabado.Cena.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaDos[0].Sabado.Cena.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaDos[0].Sabado.Cena.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaDos[0].Sabado.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card39[0].completed}">Listo</button>
            <button class="${data[0].Card39[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div> 
      </div>
    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Domingo</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 40">

        <div class="face front">
          <img src="https://previews.123rf.com/images/whiteboxmedia/whiteboxmedia1706/whiteboxmedia170600018/79394454-mantequilla-de-pl%C3%A1tano-y-man%C3%AD-en-rodajas-en-pan-integral-sobre-un-fondo-verde.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Domingo.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Domingo.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Domingo.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Domingo.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Domingo.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Domingo.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Domingo.Desayuno.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaDos[0].Domingo.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaDos[0].Domingo.Desayuno.Preparacion.split('.')[3]}.  
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Domingo.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Domingo.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Domingo.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Domingo.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Domingo.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card40[0].completed}">Listo</button>
            <button class="${data[0].Card40[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 41">

        <div class="face front">
          <img src="https://benfumat.com/wp-content/uploads/2017/04/ensalada-de-patata-y-salmon-b.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Domingo.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Domingo.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Domingo.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Domingo.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Domingo.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Domingo.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaDos[0].Domingo.Almuerzo.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Domingo.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Domingo.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Domingo.Almuerzo.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaDos[0].Domingo.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaDos[0].Domingo.Almuerzo.Preparacion.split('.')[4]}.  
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Domingo.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Domingo.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Domingo.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Domingo.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Domingo.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card41[0].completed}">Listo</button>
            <button class="${data[0].Card41[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 42">

        <div class="face front">
          <img src="https://www.demoslavueltaaldia.com/sites/default/files/tortilla-de-verduras-gratinada-con-queso.jpg.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaDos[0].Domingo.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaDos[0].Domingo.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaDos[0].Domingo.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaDos[0].Domingo.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaDos[0].Domingo.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaDos[0].Domingo.Cena.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaDos[0].Domingo.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaDos[0].Domingo.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaDos[0].Domingo.Cena.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaDos[0].Domingo.Cena.Preparacion.split('.')[3]}.
                <br>${data[0].SemanaDos[0].Domingo.Cena.Preparacion.split('.')[4]}.
                <br>${data[0].SemanaDos[0].Domingo.Cena.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaDos[0].Domingo.Cena.Preparacion.split('.')[6]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaDos[0].Domingo.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaDos[0].Domingo.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaDos[0].Domingo.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaDos[0].Domingo.Cena.Carbohidratos}g</li>
              <li>Fibra: ${data[0].SemanaDos[0].Domingo.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card42[0].completed}">Listo</button>
            <button class="${data[0].Card42[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

    </div>
`
FuncionesCarta();
  }

  else if (e.target.value === 'SemanaTres') {
    divcontenedor.innerHTML=`  <h3 class="mt-4 text-center font-bold" style="font-size: 24px;">Semana N°3</h3>
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Lunes</h3>

      <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 43">

        <div class="face front">
          <img src="https://www.recetasjudias.com/wp-content/uploads/2016/06/Perico.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Lunes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Lunes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[2]}.
                <br>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[3]}.
                <br>${data[0].SemanaTres[0].Lunes.Desayuno.Ingredientes.split('.')[4]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Lunes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Lunes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Lunes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Lunes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Lunes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card43[0].completed}">Listo</button>
            <button class="${data[0].Card43[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 44">

        <div class="face front">
          <img src="https://unareceta.com/wp-content/uploads/2018/03/receta-de-ensalada-de-atun-con-lechuga.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Lunes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Lunes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Lunes.Almuerzo.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Almuerzo.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Almuerzo.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Almuerzo.Ingredientes.split(',')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Lunes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Lunes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Lunes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Lunes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Lunes.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Lunes.Almuerzo.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Lunes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Lunes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Lunes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Lunes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Lunes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card44[0].completed}">Listo</button>
            <button class="${data[0].Card44[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 45">

        <div class="face front">
          <img src="https://cdn1.cocina-familiar.com/recetas/salmon-a-la-plancha-con-arroz-y-verduras-al-vapor.JPG" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Lunes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Lunes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Lunes.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Lunes.Cena.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Lunes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Lunes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Lunes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Lunes.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Lunes.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Lunes.Cena.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaTres[0].Lunes.Cena.Preparacion.split('.')[6]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Lunes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Lunes.Cena.Proteinas}</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Lunes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Lunes.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Lunes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card45[0].completed}">Listo</button>
            <button class="${data[0].Card45[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>

    <h3 class="mt-4 font-bold " style="font-size: 24px;">Martes</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 46">

        <div class="face front">
          <img src="https://images.hola.com/imagenes/cocina/recetas/20210318186319/bowl-yogur-natural-fruta-muesli/0-932-147/bowl-yogur-fruta-m.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Martes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Martes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Martes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Martes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Martes.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Martes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Martes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Martes.Desayuno.Preparacion.split('.')[2]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Martes.Desayuno.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaTres[0].Martes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaTres[0].Martes.Desayuno.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaTres[0].Martes.Desayuno.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaTres[0].Martes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card46[0].completed}">Listo</button>
            <button class="${data[0].Card46[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 47">

        <div class="face front">
          <img src="https://www.cardamomo.news/__export/1608400772614/sites/debate/img/2020/12/19/ensalada_griega_con_pollo_a_la_parrilla_y_vinagreta_a_la_hierba_crop1608400698420.jpeg_1187729725.jpeg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Martes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Martes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Martes.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Martes.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Martes.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Martes.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Martes.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaTres[0].Martes.Almuerzo.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Martes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Martes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Martes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Martes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Martes.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Martes.Almuerzo.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Martes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Martes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Martes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Martes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Martes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card47[0].completed}">Listo</button>
            <button class="${data[0].Card47[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 48">

        <div class="face front">
          <img src="https://chefeel.com/chefgeneralfiles/2022/12/mixed-and-assorted-fruits-scaled.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Martes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Martes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Martes.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Martes.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Martes.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Martes.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Martes.Cena.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Martes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Martes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Martes.Cena.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaTres[0].Martes.Cena.Preparacion.split('.')[3]}.  
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Martes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Martes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Martes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Martes.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Martes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card48[0].completed}">Listo</button>
            <button class="${data[0].Card48[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Miercoles</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 49">

        <div class="face front">
          <img src="https://img.freepik.com/fotos-premium/tostada-aguacate-sobre-pan-integral-sandwich_386185-5962.jpg?w=2000" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Miercoles.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Miercoles.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Miercoles.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Desayuno.Ingredientes.split('.')[3]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Miercoles.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Miercoles.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Miercoles.Desayuno.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaTres[0].Miercoles.Desayuno.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaTres[0].Miercoles.Desayuno.Preparacion.split('.')[3]}.
                <br>${data[0].SemanaTres[0].Miercoles.Desayuno.Preparacion.split('.')[4]}.
                <br>${data[0].SemanaTres[0].Miercoles.Desayuno.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaTres[0].Miercoles.Desayuno.Preparacion.split('.')[6]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Miercoles.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Miercoles.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Miercoles.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Miercoles.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Miercoles.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card49[0].completed}">Listo</button>
            <button class="${data[0].Card49[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 50">

        <div class="face front">
          <img src="https://img-global.cpcdn.com/recipes/fa5a1f4cff92fe28/680x482cq70/huevos-revueltos-con-champinones-y-tocino-foto-principal.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Miercoles.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Miercoles.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Miercoles.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Almuerzo.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Miercoles.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Miercoles.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Miercoles.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Miercoles.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Miercoles.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Miercoles.Almuerzo.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaTres[0].Miercoles.Almuerzo.Preparacion.split('.')[6]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Miercoles.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Miercoles.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Miercoles.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Miercoles.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Miercoles.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card50[0].completed}">Listo</button>
            <button class="${data[0].Card50[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 51">

        <div class="face front">
          <img src="https://scontent-mia3-1.xx.fbcdn.net/v/t1.18169-9/17309140_1210551712398400_1890769323716943521_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=1tMDWXMIxYwAX_Dbas6&_nc_ht=scontent-mia3-1.xx&oh=00_AfCRWESOlv-ZzkcRZ47mF02uvN60MDAFNG7epxl7gqBORA&oe=640AD23D" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Miercoles.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Miercoles.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Miercoles.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Cena.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Cena.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaTres[0].Miercoles.Cena.Ingredientes.split('.')[6]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Miercoles.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Miercoles.Cena.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaTres[0].Miercoles.Cena.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaTres[0].Miercoles.Cena.Preparacion.split('.')[3]}.
                <br>${data[0].SemanaTres[0].Miercoles.Cena.Preparacion.split('.')[4]}.
                <br>${data[0].SemanaTres[0].Miercoles.Cena.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaTres[0].Miercoles.Cena.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaTres[0].Miercoles.Cena.Preparacion.split('.')[7]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Miercoles.Cena.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaTres[0].Miercoles.Cena.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaTres[0].Miercoles.Cena.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaTres[0].Miercoles.Cena.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaTres[0].Miercoles.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card51[0].completed}">Listo</button>
            <button class="${data[0].Card51[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>

    <h3 class="mt-4 font-bold " style="font-size: 24px;">Jueves</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 52">

        <div class="face front">
          <img src="https://www.vidactual.com/rcpmaker/wp-content/uploads/2018/10/Omelet-espinaca.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Jueves.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Jueves.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Jueves.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Desayuno.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Desayuno.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Desayuno.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Jueves.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Jueves.Desayuno.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaTres[0].Jueves.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Jueves.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Jueves.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Jueves.Desayuno.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaTres[0].Jueves.Desayuno.Preparacion.split('.')[6]}. 
                <br>${data[0].SemanaTres[0].Jueves.Desayuno.Preparacion.split('.')[7]}.  
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Jueves.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Jueves.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Jueves.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Jueves.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Jueves.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card52[0].completed}">Listo</button>
            <button class="${data[0].Card52[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 53">

        <div class="face front">
          <img src="https://thumbs.dreamstime.com/b/hamburguesas-de-pollo-la-parrilla-aguacate-y-ensalada-verduras-frescas-con-tomate-r%C3%BAcula-vista-superior-217533690.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Jueves.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Jueves.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Jueves.Almuerzo.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Almuerzo.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Almuerzo.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Almuerzo.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Almuerzo.Ingredientes.split(',')[4]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Almuerzo.Ingredientes.split(',')[5]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Almuerzo.Ingredientes.split(',')[6]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Almuerzo.Ingredientes.split(',')[7]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Jueves.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Jueves.Almuerzo.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaTres[0].Jueves.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Jueves.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Jueves.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Jueves.Almuerzo.Preparacion.split('.')[5]}.  
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Jueves.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaTres[0].Jueves.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaTres[0].Jueves.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaTres[0].Jueves.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaTres[0].Jueves.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card53[0].completed}">Listo</button>
            <button class="${data[0].Card53[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 54">

        <div class="face front">
          <img src="http://4.bp.blogspot.com/-gkNhEPegHwQ/VLF0aD_ocOI/AAAAAAAAGss/kcf9ga3A0wQ/s1600/lasa%C3%B1a%2Bde%2Bberenjenas%2Bcon%2Bespinacas%2By%2Breques%C3%B3n-3.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Jueves.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Jueves.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Jueves.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Cena.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaTres[0].Jueves.Cena.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Jueves.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Jueves.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Jueves.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Jueves.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Jueves.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Jueves.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Jueves.Cena.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaTres[0].Jueves.Cena.Preparacion.split('.')[6]}. 
                <br>${data[0].SemanaTres[0].Jueves.Cena.Preparacion.split('.')[7]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Jueves.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Jueves.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Jueves.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Jueves.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Jueves.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card54[0].completed}">Listo</button>
            <button class="${data[0].Card54[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Viernes</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 55">

        <div class="face front">
          <img src="https://media.istockphoto.com/id/516929970/es/foto/tostado-jam%C3%B3n-y-queso-s%C3%A1ndwiches-de-pan-blanco-y-integral.jpg?s=612x612&w=0&k=20&c=7fKr89gNbVRVhZFdIFvjjz4loWQZ6ryCNQxujkVHgqU=" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Viernes.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Viernes.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Viernes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Viernes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Viernes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Viernes.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Viernes.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Viernes.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Viernes.Desayuno.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Viernes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Viernes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Viernes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Viernes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Viernes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card55[0].completed}">Listo</button>
            <button class="${data[0].Card55[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 56">

        <div class="face front">
          <img src="https://previews.123rf.com/images/lenyvavsha/lenyvavsha1706/lenyvavsha170600103/79676054-comida-saludable-filetes-de-salm%C3%B3n-a-la-parrilla-con-ensalada-de-verduras-y-r%C3%BAcula-en-la-mesa-horizo.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Viernes.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Viernes.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Viernes.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Almuerzo.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Viernes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Viernes.Almuerzo.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaTres[0].Viernes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Viernes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Viernes.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Viernes.Almuerzo.Preparacion.split('.')[5]}.  
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Viernes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Viernes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Viernes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Viernes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Viernes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card56[0].completed}">Listo</button>
            <button class="${data[0].Card56[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 57">

        <div class="face front">
          <img src="https://www.gourmet.cl/wp-content/uploads/2012/07/curry-de-verduras.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Viernes.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Viernes.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Viernes.Cena.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Cena.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Cena.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Cena.Ingredientes.split(',')[4]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Cena.Ingredientes.split(',')[5]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Cena.Ingredientes.split(',')[6]}</li>
              <li>${data[0].SemanaTres[0].Viernes.Cena.Ingredientes.split(',')[7]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Viernes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Viernes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Viernes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Viernes.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Viernes.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Viernes.Cena.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaTres[0].Viernes.Cena.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaTres[0].Viernes.Cena.Preparacion.split('.')[7]}. 
                <br>${data[0].SemanaTres[0].Viernes.Cena.Preparacion.split('.')[8]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Viernes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Viernes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Viernes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Viernes.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Viernes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card57[0].completed}">Listo</button>
            <button class="${data[0].Card57[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Sabado</h3>

    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 58">

        <div class="face front">
          <img src="https://www.mexirecetas.com/recetas-de-navidad/img600/tosta-de-salmon.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Sabado.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Sabado.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Sabado.Desayuno.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Desayuno.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Desayuno.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Desayuno.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Desayuno.Ingredientes.split(',')[4]}</li>
              
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>1-Cocer la pasta de lasaña según las instrucciones del paquete. 
                <br>${data[0].SemanaTres[0].Sabado.Desayuno.Preparacion.split('.')[0]}.
                <br>${data[0].SemanaTres[0].Sabado.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Sabado.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Sabado.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Sabado.Desayuno.Preparacion.split('.')[4]}.  
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Sabado.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Sabado.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Sabado.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Sabado.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Sabado.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card58[0].completed}">Listo</button>
            <button class="${data[0].Card58[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 59">

        <div class="face front">
          <img src="https://unareceta.com/wp-content/uploads/2018/03/receta-de-ensalada-de-atun-con-lechuga.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Sabado.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Sabado.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Sabado.Almuerzo.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Almuerzo.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Almuerzo.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Almuerzo.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Almuerzo.Ingredientes.split(',')[4]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Almuerzo.Ingredientes.split(',')[5]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Almuerzo.Ingredientes.split(',')[6]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Almuerzo.Ingredientes.split(',')[7]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Sabado.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Sabado.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Sabado.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Sabado.Almuerzo.Preparacion.split('.')[3]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Sabado.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Sabado.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Sabado.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Sabado.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Sabado.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card59[0].completed}">Listo</button>
            <button class="${data[0].Card59[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 60">

        <div class="face front">
          <img src="https://previews.123rf.com/images/plutagoraphotos/plutagoraphotos1503/plutagoraphotos150300029/38083521-pechuga-de-pollo-a-la-parrilla-brócoli-al-vapor-y-las-zanahorias-al-vapor-dispuestos-en-un-plato-com.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Sabado.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Sabado.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Sabado.Cena.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaTres[0].Sabado.Cena.Ingredientes.split(',')[1]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Sabado.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Sabado.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Sabado.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Sabado.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Sabado.Cena.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Sabado.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Sabado.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Sabado.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Sabado.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Sabado.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card60[0].completed}">Listo</button>
            <button class="${data[0].Card60[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>



    </div>



    <h3 class="mt-4 font-bold " style="font-size: 24px;">Domingo</h3>

      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">

      <div id="card" class="h-96 w-72 relative m-4 61">

        <div class="face front">
          <img src="https://storage.googleapis.com/avena-recipes/2019/10/1571780272665.jpeg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Domingo.Desayuno.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Domingo.Desayuno.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Domingo.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Desayuno.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Desayuno.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Domingo.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Domingo.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Domingo.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Domingo.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Domingo.Desayuno.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Domingo.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Domingo.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Domingo.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Domingo.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Domingo.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card61[0].completed}">Listo</button>
            <button class="${data[0].Card61[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>

      <div id="card" class="h-96 w-72 relative m-4 62">

        <div class="face front">
          <img src="https://d320djwtwnl5uo.cloudfront.net/recetas/cover/s-ndw_AfsS859PRoHcJpKwd6r4Me0FUBDtCg.png" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Domingo.Almuerzo.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Domingo.Almuerzo.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Domingo.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Almuerzo.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Domingo.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Domingo.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Domingo.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Domingo.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Domingo.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Domingo.Almuerzo.Preparacion.split('.')[5]}.       
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Domingo.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaTres[0].Domingo.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaTres[0].Domingo.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaTres[0].Domingo.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaTres[0].Domingo.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card62[0].completed}">Listo</button>
            <button class="${data[0].Card62[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>


      <div id="card" class="h-96 w-72 relative m-4 63">

        <div class="face front">
          <img src="https://bachoco.com.mx/descubre/wp-content/uploads/2022/09/slider_1000x565-4.png" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaTres[0].Domingo.Cena.Titulo}</h3>
        </div>

       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaTres[0].Domingo.Cena.Titulo}</h3>

          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaTres[0].Domingo.Cena.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Cena.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Cena.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Cena.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Cena.Ingredientes.split(',')[4]}</li>
              <li>${data[0].SemanaTres[0].Domingo.Cena.Ingredientes.split(',')[5]}</li>  
          </ul>
          </div>

            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaTres[0].Domingo.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaTres[0].Domingo.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaTres[0].Domingo.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaTres[0].Domingo.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaTres[0].Domingo.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaTres[0].Domingo.Cena.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaTres[0].Domingo.Cena.Preparacion.split('.')[6]}. 
                <br>${data[0].SemanaTres[0].Domingo.Cena.Preparacion.split('.')[7]}. 
              
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaTres[0].Domingo.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaTres[0].Domingo.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaTres[0].Domingo.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaTres[0].Domingo.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaTres[0].Domingo.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card63[0].completed}">Listo</button>
            <button class="${data[0].Card63[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
      </div>
    </div>
`
FuncionesCarta();
  }

  else if (e.target.value === 'SemanaCuatro') {
    divcontenedor.innerHTML=`  <h3 class="mt-4 text-center font-bold" style="font-size: 24px;">Semana N°4</h3>
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Lunes</h3>
    
      <div class="flex flex-wrap justify-center" id="contenedor-recetas">
    
      <div id="card" class="h-96 w-72 relative m-4 64">
    
        <div class="face front">
          <img src="https://www.cuerpomente.com/medio/2016/04/27/sandwich-de-tofu_d77116d1.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Lunes.Desayuno.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Lunes.Desayuno.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Lunes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Desayuno.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Desayuno.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Desayuno.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Desayuno.Ingredientes.split('.')[6]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Lunes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Desayuno.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaCuatro[0].Lunes.Desayuno.Preparacion.split('.')[3]}.
                <br>${data[0].SemanaCuatro[0].Lunes.Desayuno.Preparacion.split('.')[4]}.
                <br>${data[0].SemanaCuatro[0].Lunes.Desayuno.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaCuatro[0].Lunes.Desayuno.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaCuatro[0].Lunes.Desayuno.Preparacion.split('.')[7]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Lunes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Lunes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Lunes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Lunes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Lunes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card64[0].completed}">Listo</button>
            <button class="${data[0].Card64[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
      <div id="card" class="h-96 w-72 relative m-4 65">
    
        <div class="face front">
          <img src="https://i.pinimg.com/736x/ca/43/46/ca43468e562cc84ee23797d945ba12c5--pollo-picante-tans.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Lunes.Almuerzo.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Lunes.Almuerzo.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Ingredientes.split('.')[6]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Almuerzo.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Lunes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Lunes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Lunes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Lunes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Lunes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card65[0].completed}">Listo</button>
            <button class="${data[0].Card65[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
      <div id="card" class="h-96 w-72 relative m-4 66">
    
        <div class="face front">
          <img src="https://style.shockvisual.net/wp-content/uploads/2020/01/bowl-of-cesar-salad-VUPQEAL.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Lunes.Cena.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Lunes.Cena.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Lunes.Cena.Ingredientes.split(',')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Cena.Ingredientes.split(',')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Cena.Ingredientes.split(',')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Cena.Ingredientes.split(',')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Cena.Ingredientes.split(',')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Cena.Ingredientes.split(',')[5]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Cena.Ingredientes.split(',')[6]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Cena.Ingredientes.split(',')[7]}</li>
              <li>${data[0].SemanaCuatro[0].Lunes.Cena.Ingredientes.split(',')[8]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Lunes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Lunes.Cena.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Lunes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Lunes.Cena.Proteinas}</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Lunes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Lunes.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Lunes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card66[0].completed}">Listo</button>
            <button class="${data[0].Card66[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
    
    </div>
    
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Martes</h3>
    
    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">
    
      <div id="card" class="h-96 w-72 relative m-4 67">
    
        <div class="face front">
          <img src="https://www.lasrecetasdelaura.com/wp-content/uploads/2022/03/IMG_0769-1.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Martes.Desayuno.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Martes.Desayuno.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Martes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Desayuno.Ingredientes.split('.')[3]}</li>
          
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Martes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Desayuno.Preparacion.split('.')[3]}. 
               
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Martes.Desayuno.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaCuatro[0].Martes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaCuatro[0].Martes.Desayuno.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaCuatro[0].Martes.Desayuno.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaCuatro[0].Martes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card67[0].completed}">Listo</button>
            <button class="${data[0].Card67[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
      <div id="card" class="h-96 w-72 relative m-4 68">
    
        <div class="face front">
          <img src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2021/01/ensalada-de-garbanzo-con-pollo.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Martes.Almuerzo.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Martes.Almuerzo.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Martes.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Almuerzo.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Almuerzo.Ingredientes.split('.')[6]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Almuerzo.Ingredientes.split('.')[7]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Martes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Almuerzo.Preparacion.split('.')[3]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Martes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Martes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Martes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Martes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Martes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card68[0].completed}">Listo</button>
            <button class="${data[0].Card68[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
      <div id="card" class="h-96 w-72 relative m-4 69">
    
        <div class="face front">
          <img src="https://www.deliciosi.com/images/2600/2621/pasta-con-verduras-y-pollo.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Martes.Cena.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Martes.Cena.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Martes.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Cena.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Cena.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Cena.Ingredientes.split('.')[6]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Cena.Ingredientes.split('.')[7]}</li>
              <li>${data[0].SemanaCuatro[0].Martes.Cena.Ingredientes.split('.')[8]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Martes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Cena.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaCuatro[0].Martes.Cena.Preparacion.split('.')[3]}.  
                <br>${data[0].SemanaCuatro[0].Martes.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Cena.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaCuatro[0].Martes.Cena.Preparacion.split('.')[6]}.  
                <br>${data[0].SemanaCuatro[0].Martes.Cena.Preparacion.split('.')[7]}. 
                <br>${data[0].SemanaCuatro[0].Martes.Cena.Preparacion.split('.')[8]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Martes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Martes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Martes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Martes.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Martes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card69[0].completed}">Listo</button>
            <button class="${data[0].Card69[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
    
    </div>
    
    
    
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Miercoles</h3>
    
      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">
    
      <div id="card" class="h-96 w-72 relative m-4 70">
    
        <div class="face front">
          <img src="https://media.istockphoto.com/id/1068756476/es/foto/casero-tostadas-de-centeno-con-queso-cottage-y-pi%C3%B1a-en-tablero-de-madera-blanco.jpg?s=170667a&w=0&k=20&c=SRY8HMiZmMq2ioCG7GyymGr1wyvkI8JzhFScu2lJ3tY=" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Miercoles.Desayuno.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Miercoles.Desayuno.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Miercoles.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Miercoles.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Miercoles.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Miercoles.Desayuno.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaCuatro[0].Miercoles.Desayuno.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaCuatro[0].Miercoles.Desayuno.Preparacion.split('.')[3]}.
                <br>${data[0].SemanaCuatro[0].Miercoles.Desayuno.Preparacion.split('.')[4]}.
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Miercoles.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Miercoles.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Miercoles.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Miercoles.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Miercoles.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card70[0].completed}">Listo</button>
            <button class="${data[0].Card70[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
      <div id="card" class="h-96 w-72 relative m-4 71">
    
        <div class="face front">
          <img src="https://www.cocinacaserayfacil.net/wp-content/uploads/2019/04/lubina-a-la-plancha-con-verduras-632x356.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Preparacion.split('.')[6]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Miercoles.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card71[0].completed}">Listo</button>
            <button class="${data[0].Card71[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
      <div id="card" class="h-96 w-72 relative m-4 72">
    
        <div class="face front">
          <img src="https://www.recetasderechupete.com/wp-content/uploads/2019/06/Pollo-asado-al-lim%C3%B3n.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Miercoles.Cena.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Miercoles.Cena.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Miercoles.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Miercoles.Cena.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Miercoles.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Miercoles.Cena.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaCuatro[0].Miercoles.Cena.Preparacion.split('.')[2]}.
                <br>${data[0].SemanaCuatro[0].Miercoles.Cena.Preparacion.split('.')[3]}.
                <br>${data[0].SemanaCuatro[0].Miercoles.Cena.Preparacion.split('.')[4]}.
                <br>${data[0].SemanaCuatro[0].Miercoles.Cena.Preparacion.split('.')[5]}.
                <br>${data[0].SemanaCuatro[0].Miercoles.Cena.Preparacion.split('.')[6]}.
            
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Miercoles.Cena.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaCuatro[0].Miercoles.Cena.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaCuatro[0].Miercoles.Cena.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaCuatro[0].Miercoles.Cena.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaCuatro[0].Miercoles.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card72[0].completed}">Listo</button>
            <button class="${data[0].Card72[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
    
    </div>
    
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Jueves</h3>
    
    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">
    
      <div id="card" class="h-96 w-72 relative m-4 73">
    
        <div class="face front">
          <img src="https://previews.123rf.com/images/whiteboxmedia/whiteboxmedia1706/whiteboxmedia170600018/79394454-mantequilla-de-pl%C3%A1tano-y-man%C3%AD-en-rodajas-en-pan-integral-sobre-un-fondo-verde.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Jueves.Desayuno.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Jueves.Desayuno.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Jueves.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Desayuno.Ingredientes.split('.')[2]}</li>
              
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Jueves.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Desayuno.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaCuatro[0].Jueves.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Desayuno.Preparacion.split('.')[3]}. 
    
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Jueves.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Jueves.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Jueves.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Jueves.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Jueves.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card73[0].completed}">Listo</button>
            <button class="${data[0].Card73[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
      <div id="card" class="h-96 w-72 relative m-4 74">
    
        <div class="face front">
          <img src="https://www.clara.es/medio/2018/03/27/tiras-de-pollo-con-melon-y-sandia__600x900.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Jueves.Almuerzo.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Jueves.Almuerzo.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Almuerzo.Preparacion.split('.')[5]}.  
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Jueves.Almuerzo.Calorias}</li>
              <li>Proteinas:  ${data[0].SemanaCuatro[0].Jueves.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos:  ${data[0].SemanaCuatro[0].Jueves.Almuerzo.Carbohidratos}g</li>
              <li>Grasas:  ${data[0].SemanaCuatro[0].Jueves.Almuerzo.Grasas}g</li>
              <li>Fibra:  ${data[0].SemanaCuatro[0].Jueves.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card74[0].completed}">Listo</button>
            <button class="${data[0].Card74[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
      <div id="card" class="h-96 w-72 relative m-4 75">
    
        <div class="face front">
          <img src="https://www.cucute.com/blog/wp-content/uploads/2019/11/cuscus-con-pollo-y-verduras-3.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Jueves.Cena.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Jueves.Cena.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[6]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[7]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[8]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[9]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[10]}</li>
              <li>${data[0].SemanaCuatro[0].Jueves.Cena.Ingredientes.split('.')[11]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[6]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[7]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[8]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[9]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[10]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[11]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[12]}. 
                <br>${data[0].SemanaCuatro[0].Jueves.Cena.Preparacion.split('.')[13]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Jueves.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Jueves.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Jueves.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Jueves.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Jueves.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card75[0].completed}">Listo</button>
            <button class="${data[0].Card75[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
    
    </div>
    
    
    
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Viernes</h3>
    
      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">
    
      <div id="card" class="h-96 w-72 relative m-4 76">
    
        <div class="face front">
          <img src="https://d36fw6y2wq3bat.cloudfront.net/recipes/sandwich-de-pavo-queso-y-manzana/900/sandwich-de-pavo-queso-y-manzana_version_1653031846.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Viernes.Desayuno.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Viernes.Desayuno.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Viernes.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Desayuno.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Desayuno.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Desayuno.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Desayuno.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Desayuno.Ingredientes.split('.')[6]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Viernes.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Desayuno.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Desayuno.Preparacion.split('.')[6]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Viernes.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Viernes.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Viernes.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Viernes.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Viernes.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card76[0].completed}">Listo</button>
            <button class="${data[0].Card76[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
      <div id="card" class="h-96 w-72 relative m-4 77">
    
        <div class="face front">
          <img src="https://1.bp.blogspot.com/-EJ48tXL5u-M/WiJax9_qZGI/AAAAAAAAB9I/7lD7FI6oGHQYUXG0tQWKON_FpXxxtj7HgCLcBGAs/s1600/Salm%25C3%25B3n%2Basi%25C3%25A1tico%2Bcon%2Bverduras%2By%2Barroz%2Bintegral%2B-%2Bblog%2Bde%2Brecetas.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Viernes.Almuerzo.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Viernes.Almuerzo.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Preparacion.split('.')[1]}.
                <br>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Preparacion.split('.')[5]}.  
                <br>${data[0].SemanaCuatro[0].Viernes.Almuerzo.Preparacion.split('.')[6]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Viernes.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Viernes.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Viernes.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Viernes.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Viernes.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card77[0].completed}">Listo</button>
            <button class="${data[0].Card77[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
      <div id="card" class="h-96 w-72 relative m-4 78">
    
        <div class="face front">
          <img src="https://archeinthekitchen.com/wp-content/uploads/2017/09/IMG_0503-1080x720.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Viernes.Cena.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Viernes.Cena.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Viernes.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Cena.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Cena.Ingredientes.split('.')[5]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Cena.Ingredientes.split('.')[6]}</li>
              <li>${data[0].SemanaCuatro[0].Viernes.Cena.Ingredientes.split('.')[7]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[6]}.
                <br>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[7]}. 
                <br>${data[0].SemanaCuatro[0].Viernes.Cena.Preparacion.split('.')[8]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Viernes.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Viernes.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Viernes.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Viernes.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Viernes.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card78[0].completed}">Listo</button>
            <button class="${data[0].Card78[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
    
    </div>
    
    
    
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Sabado</h3>
    
    
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">
    
      <div id="card" class="h-96 w-72 relative m-4 79">
    
        <div class="face front">
          <img src="https://www.gastrolabweb.com/u/fotografias/m/2022/7/30/f850x638-32729_110218_5050.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Sabado.Desayuno.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Sabado.Desayuno.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Sabado.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Desayuno.Ingredientes.split('.')[2]}</li>
              
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>1-Cocer la pasta de lasaña según las instrucciones del paquete. 
                <br>${data[0].SemanaCuatro[0].Sabado.Desayuno.Preparacion.split('.')[0]}.
                <br>${data[0].SemanaCuatro[0].Sabado.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Desayuno.Preparacion.split('.')[3]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Sabado.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Sabado.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Sabado.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Sabado.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Sabado.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card79[0].completed}">Listo</button>
            <button class="${data[0].Card79[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
      <div id="card" class="h-96 w-72 relative m-4 80">
    
        <div class="face front">
          <img src="https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2020/01/receta-salsa-para-pescado-la-talla.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Sabado.Almuerzo.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Sabado.Almuerzo.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Ingredientes.split('.')[4]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Ingredientes.split('.')[5]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Preparacion.split('.')[6]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Almuerzo.Preparacion.split('.')[7]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Sabado.Almuerzo.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Sabado.Almuerzo.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Sabado.Almuerzo.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Sabado.Almuerzo.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Sabado.Almuerzo.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card80[0].completed}">Listo</button>
            <button class="${data[0].Card80[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
      <div id="card" class="h-96 w-72 relative m-4 81">
    
        <div class="face front">
          <img src="https://recetaland.com/wp-content/uploads/2020/10/Sandwich-de-Pavo-y-Queso-1.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Sabado.Cena.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Sabado.Cena.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Sabado.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Sabado.Cena.Ingredientes.split('.')[4]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Sabado.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Sabado.Cena.Preparacion.split('.')[4]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Sabado.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Sabado.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Sabado.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Sabado.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Sabado.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card81[0].completed}">Listo</button>
            <button class="${data[0].Card81[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
    
    </div>
    
    
    
    <h3 class="mt-4 font-bold " style="font-size: 24px;">Domingo</h3>
    
      
    <div class="flex flex-wrap justify-center" id="contenedor-recetas">
    
      <div id="card" class="h-96 w-72 relative m-4 82">
    
        <div class="face front">
          <img src="https://media.istockphoto.com/id/516929970/es/foto/tostado-jam%C3%B3n-y-queso-s%C3%A1ndwiches-de-pan-blanco-y-integral.jpg?s=612x612&w=0&k=20&c=7fKr89gNbVRVhZFdIFvjjz4loWQZ6ryCNQxujkVHgqU=" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Desayuno</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px;  color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Domingo.Desayuno.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Domingo.Desayuno.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Domingo.Desayuno.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Domingo.Desayuno.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Domingo.Desayuno.Ingredientes.split('.')[2]}</li>
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Domingo.Desayuno.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Desayuno.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Desayuno.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Desayuno.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Desayuno.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Desayuno.Preparacion.split('.')[5]}. 
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card82[0].completed}">Listo</button>
            <button class="${data[0].Card82[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
      <div id="card" class="h-96 w-72 relative m-4 83">
    
        <div class="face front">
          <img src="https://t1.uc.ltmcdn.com/es/posts/3/8/3/como_hacer_lentejas_con_verduras_34383_orig.jpg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Almuerzo</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Domingo.Almuerzo.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Domingo.Almuerzo.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Domingo.Almuerzo.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Domingo.Almuerzo.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Domingo.Almuerzo.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Domingo.Almuerzo.Ingredientes.split('.')[3]}</li>
    
            </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Domingo.Almuerzo.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Almuerzo.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Almuerzo.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Almuerzo.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Almuerzo.Preparacion.split('.')[4]}. 
    
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Domingo.Desayuno.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card83[0].completed}">Listo</button>
            <button class="${data[0].Card83[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
        
      </div>
    
    
      <div id="card" class="h-96 w-72 relative m-4 84">
    
        <div class="face front">
          <img src="https://static2.abc.es/media/bienestar/2020/05/22/tortilla-patatas-k9tF--1200x630@abc.jpeg" style="position: absolute; width: 100%;height: 100%; object-fit: cover;">
          <h3 class="font-bold" style="position: absolute; top: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">Cena</h3>
          <h3 class="font-bold" style="position: absolute; bottom: 0; width: 100%; height: 45px; line-height: 45px; color: #fff; background: rgba(0,0,0,.4); text-align: center;">${data[0].SemanaCuatro[0].Domingo.Cena.Titulo}</h3>
        </div>
    
       <div class="face back">
  <div class="flex justify-end">
  <button class="" id="return-card">❌</button>
  </div>
          <h3 class="font-bold text-center" style="font-size: 20px;">${data[0].SemanaCuatro[0].Domingo.Cena.Titulo}</h3>
    
          <div id="Contenedor-ingredientes">
            <p class="text-center mt-4 font-bold">Ingredientes</p>
            <ul>
              <li>${data[0].SemanaCuatro[0].Domingo.Cena.Ingredientes.split('.')[0]}</li>
              <li>${data[0].SemanaCuatro[0].Domingo.Cena.Ingredientes.split('.')[1]}</li>
              <li>${data[0].SemanaCuatro[0].Domingo.Cena.Ingredientes.split('.')[2]}</li>
              <li>${data[0].SemanaCuatro[0].Domingo.Cena.Ingredientes.split('.')[3]}</li>
              <li>${data[0].SemanaCuatro[0].Domingo.Cena.Ingredientes.split('.')[4]}</li>
          </ul>
          </div>
    
            <div id="Contenedor-preparacion">
              <h3 class="text-center mt-4 font-bold">Preparacion</h3>
              <p>${data[0].SemanaCuatro[0].Domingo.Cena.Preparacion.split('.')[0]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Cena.Preparacion.split('.')[1]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Cena.Preparacion.split('.')[2]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Cena.Preparacion.split('.')[3]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Cena.Preparacion.split('.')[4]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Cena.Preparacion.split('.')[5]}. 
                <br>${data[0].SemanaCuatro[0].Domingo.Cena.Preparacion.split('.')[6]}. 
              
                </p>
            </div>
        
            <div id="Valores-nutricionales">
            <h3 class="mt-4 text-center font-bold">Valores nutricionales</h3>
            <ul>
              <li>Calorias: ${data[0].SemanaCuatro[0].Domingo.Cena.Calorias}</li>
              <li>Proteinas: ${data[0].SemanaCuatro[0].Domingo.Cena.Proteinas}g</li>
              <li>Carbohidratos: ${data[0].SemanaCuatro[0].Domingo.Cena.Carbohidratos}g</li>
              <li>Grasas: ${data[0].SemanaCuatro[0].Domingo.Cena.Grasas}g</li>
              <li>Fibra: ${data[0].SemanaCuatro[0].Domingo.Cena.Fibra}g</li>
            </ul>
            </div>
            <button id="btn-cheked-card"  class="${data[0].Card84[0].completed}">Listo</button>
            <button class="${data[0].Card84[0].incompleted}" id="btn-edit-card"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" id="svg-check" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.393 7.5l-5.643 5.784-2.644-2.506-1.856 1.858 4.5 4.364 7.5-7.643-1.857-1.857z"/></svg></button>
        </div>
      </div>
    </div>
    `
    FuncionesCarta();
     
  }

})

let resultado = data[0].calorias
let proteinas = data[0].proteinas
let carbohidratos = data[0].carbohidratos
let grasas = data[0].grasas
let fibra = data[0].fibra
console.log(resultado);
let comidasCompletadas  = data[0].comidasCompletadas


const FuncionesCarta = async () => {
  divSelect.classList.remove('hidden')
 const returnCard = document.querySelectorAll('#return-card')
 const cardFront = document.querySelectorAll('.front')
 const btnChekedCard = document.querySelectorAll('#btn-cheked-card')
 const btnEditCard = document.querySelectorAll('#svg-check')

 btnChekedCard.forEach(element => {
  element.addEventListener('click', async e =>{
    let calorias = e.target.parentElement.children[4].children[1].children[0].innerText.split(':')[1];
    let proteinasCard = e.target.parentElement.children[4].children[1].children[1].innerText.split(':')[1];
    let carbohidratosCard = e.target.parentElement.children[4].children[1].children[2].innerText.split(':')[1];
    let grasasCard = e.target.parentElement.children[4].children[1].children[3].innerText.split(':')[1];
    let fibraCard = e.target.parentElement.children[4].children[1].children[4].innerText.split(':')[1];
    resultado = resultado + parseInt(calorias)
    proteinas = proteinas + parseInt(proteinasCard)
    carbohidratos = carbohidratos + parseInt(carbohidratosCard)
    grasas = grasas + parseInt(grasasCard)
    fibra = fibra + parseInt(fibraCard)
    const btnCard = e.target.parentElement.children[6];
    e.target.classList.toggle("incompleted");
    btnCard.classList.toggle("incompleted");
    btnCard.classList.toggle("completed");
    const idcard = (e.target.parentElement.parentElement.classList[4]);
    const id = data[0].id;
    comidasCompletadas = comidasCompletadas + 1
    console.log(comidasCompletadas);
  
    console.log(grasas, fibra);
    console.log(proteinas);
    console.log(carbohidratos,grasas,fibra);
    await axios.patch(`/api/recetas/${id}`,{
      comidasCompletadas: comidasCompletadas,
      proteinas: proteinas,
      grasas: grasas,
      fibra: fibra,
      carbohidratos: carbohidratos
    })

    if (idcard === '1') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     CardUno:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };
    
    if (idcard === '2') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    CardDos:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '3') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    CardTres:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '4') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card4:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '5') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card5:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '6') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card6:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '7') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card7:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '8') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card8:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '9') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card9:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '10') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card10:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };
    
    if (idcard === '11') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card11:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '12') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card12:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '13') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card13:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '14') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card14:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '15') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card15:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '16') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card16:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '17') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card17:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '18') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card18:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '19') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card19:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '20') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card20:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '21') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card21:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '22') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card22:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };
    
    if (idcard === '23') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card23:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '24') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card24:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };


    if (idcard === '25') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card25:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '26') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card26:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '27') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card27:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '28') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card28:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '29') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card29:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '30') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card30:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '31') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card31:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '32') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card32:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '33') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card33:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '34') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card34:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };
    
    if (idcard === '35') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card35:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '36') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card36:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

     if (idcard === '37') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card37:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '38') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card38:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '39') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card39:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '40') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card40:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '41') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card41:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '42') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card42:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '43') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card43:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '44') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card44:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '45') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card45:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '46') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card46:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };
    
    if (idcard === '47') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card47:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '48') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card48:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '49') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card49:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '50') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card50:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '51') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card51:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '52') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card52:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '53') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card53:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '54') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card54:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '55') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card55:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '56') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card56:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '57') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card57:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '58') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card58:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };
    
    if (idcard === '59') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card59:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '60') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card60:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };


    if (idcard === '61') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card61:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '62') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card62:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '63') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card63:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '64') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card64:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '65') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card65:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '66') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card66:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '67') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card67:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '68') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card68:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '69') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card69:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '70') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card70:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };
    
    if (idcard === '71') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card71:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '72') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card72:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

     if (idcard === '73') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card73:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '74') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card74:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '75') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card75:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '76') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card76:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '77') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card77:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '78') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card78:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '79') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card79:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };

    if (idcard === '80') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card80:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '81') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card81:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '82') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
     Card82:[{
      completed: 'incompleted',
      incompleted: 'completed',
     }]
  });       
    };
    
    if (idcard === '83') {
  await axios.patch(`/api/recetas/${id}`,{
    calorias: resultado,
    Card83:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

    if (idcard === '84') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
    Card84:[{
      completed: 'incompleted',
      incompleted: 'completed'
     }]
});       
    };

  })
 })  

 btnEditCard.forEach(element => {
  element.addEventListener('click', async e => {
    let calorias = e.target.parentElement.parentElement.children[4].children[1].children[0].innerText.split(':')[1];
    let proteinasCard =  e.target.parentElement.parentElement.children[4].children[1].children[1].innerText.split(':')[1];
    let carbohidratosCard = e.target.parentElement.parentElement.children[4].children[1].children[2].innerText.split(':')[1];
    let grasasCard = e.target.parentElement.parentElement.children[4].children[1].children[3].innerText.split(':')[1];
    let fibraCard = e.target.parentElement.parentElement.children[4].children[1].children[4].innerText.split(':')[1];
    resultado = resultado - parseInt(calorias)
    proteinas = proteinas - parseInt(proteinasCard)
    carbohidratos = carbohidratos - parseInt(carbohidratosCard)
    grasas = grasas - parseInt(grasasCard)
    fibra = fibra - parseInt(fibraCard)
    const btnCard = e.target.parentElement.parentElement.children[5];
    e.target.parentElement.classList.toggle("incompleted");
    btnCard.classList.toggle("incompleted");
    btnCard.classList.toggle("completed");
    const idcard = e.target.parentElement.parentElement.parentElement.classList[4];
    const id = data[0].id
    console.log(id);
    console.log(idcard);
    comidasCompletadas = comidasCompletadas - 1
    console.log(comidasCompletadas);
    console.log(resultado, proteinas,fibra,grasas,carbohidratos);

    await axios.patch(`/api/recetas/${id}`,{
      comidasCompletadas: comidasCompletadas,
      proteinas: proteinas,
      grasas: grasas,
      fibra: fibra,
      carbohidratos: carbohidratos
    })

    if (idcard === '1') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      CardUno:[{
        completed: 'completed',
        incompleted: 'incompleted',
       }]
    });       
      }

    if (idcard === '2') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      CardDos:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }
  
    if (idcard === '3') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      CardTres:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }

    if (idcard === '4') {
        await axios.patch(`/api/recetas/${id}`,{
        calorias: resultado,
        Card4:[{
          completed: 'completed',
          incompleted: 'incompleted'
         }]
    });  
        }

    if (idcard === '5') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card5:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }
    if (idcard === '6') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card6:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          } 
    if (idcard === '7') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card7:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }          
    if (idcard === '8') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card8:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }     
    if (idcard === '9') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card9:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }    
    if (idcard === '10') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card10:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          } 
          
    if (idcard === '11') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card11:[{
        completed: 'completed',
        incompleted: 'incompleted',
       }]
    });       
      }

    if (idcard === '12') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card12:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }
  
    if (idcard === '13') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card13:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }

    if (idcard === '14') {
        await axios.patch(`/api/recetas/${id}`,{
        calorias: resultado,
        Card14:[{
          completed: 'completed',
          incompleted: 'incompleted'
         }]
    });  
        }

    if (idcard === '15') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card15:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }
    if (idcard === '16') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card16:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          } 
    if (idcard === '17') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card17:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }          
    if (idcard === '18') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card18:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }     
    if (idcard === '19') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card19:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }    
    if (idcard === '20') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card20:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }                       
            if (idcard === '21') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card21:[{
        completed: 'completed',
        incompleted: 'incompleted',
       }]
    });       
      }

    if (idcard === '22') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card22:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }
  
    if (idcard === '23') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card23:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }

    if (idcard === '24') {
        await axios.patch(`/api/recetas/${id}`,{
        calorias: resultado,
        Card24:[{
          completed: 'completed',
          incompleted: 'incompleted'
         }]
    });  
        }

    if (idcard === '25') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card25:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }
    if (idcard === '26') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card26:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          } 
    if (idcard === '27') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card27:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }          
    if (idcard === '28') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card28:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }     
    if (idcard === '29') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card29:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }    
    if (idcard === '30') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card30:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }                       
            if (idcard === '31') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card31:[{
        completed: 'completed',
        incompleted: 'incompleted',
       }]
    });       
      }

    if (idcard === '32') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card32:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }
  
    if (idcard === '33') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card33:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }

    if (idcard === '34') {
        await axios.patch(`/api/recetas/${id}`,{
        calorias: resultado,
        Card34:[{
          completed: 'completed',
          incompleted: 'incompleted'
         }]
    });  
        }

    if (idcard === '35') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card35:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }
    if (idcard === '36') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card36:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          } 
    if (idcard === '37') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card37:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }          
    if (idcard === '38') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card38:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }     
    if (idcard === '39') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card9:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }    
    if (idcard === '40') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card40:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }                       
            if (idcard === '41') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card41:[{
        completed: 'completed',
        incompleted: 'incompleted',
       }]
    });       
      }

    if (idcard === '42') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card42:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }
  
    if (idcard === '43') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card43:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }

    if (idcard === '44') {
        await axios.patch(`/api/recetas/${id}`,{
        calorias: resultado,
        Card44:[{
          completed: 'completed',
          incompleted: 'incompleted'
         }]
    });  
        }

    if (idcard === '45') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card45:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }
    if (idcard === '46') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card46:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          } 
    if (idcard === '47') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card47:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }          
    if (idcard === '48') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card48:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }     
    if (idcard === '49') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card49:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }    
    if (idcard === '50') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card50:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }                       
            if (idcard === '61') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card61:[{
        completed: 'completed',
        incompleted: 'incompleted',
       }]
    });       
      }

    if (idcard === '62') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card62:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }
  
    if (idcard === '63') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card63:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }

    if (idcard === '64') {
        await axios.patch(`/api/recetas/${id}`,{
        calorias: resultado,
        Card64:[{
          completed: 'completed',
          incompleted: 'incompleted'
         }]
    });  
        }

    if (idcard === '65') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card65:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }
    if (idcard === '66') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card66:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          } 
    if (idcard === '67') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card67:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }          
    if (idcard === '68') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card8:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }     
    if (idcard === '69') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card69:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }    
    if (idcard === '70') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card70:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }                       
            if (idcard === '71') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card71:[{
        completed: 'completed',
        incompleted: 'incompleted',
       }]
    });       
      }

    if (idcard === '72') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card72:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }
  
    if (idcard === '73') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card73:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }

    if (idcard === '74') {
        await axios.patch(`/api/recetas/${id}`,{
        calorias: resultado,
        Card74:[{
          completed: 'completed',
          incompleted: 'incompleted'
         }]
    });  
        }

    if (idcard === '75') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card75:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }
    if (idcard === '76') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card76:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          } 
    if (idcard === '77') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card77:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }          
    if (idcard === '78') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card78:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }     
    if (idcard === '79') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card79:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }    
    if (idcard === '80') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card80:[{
      completed: 'completed',
      incompleted: 'incompleted'
      }]
      });  
          }                       
            if (idcard === '81') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card81:[{
        completed: 'completed',
        incompleted: 'incompleted',
       }]
    });       
      }

    if (idcard === '82') {
    await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card82:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }
  
    if (idcard === '83') {
      await axios.patch(`/api/recetas/${id}`,{
      calorias: resultado,
      Card83:[{
        completed: 'completed',
        incompleted: 'incompleted'
       }]
  });       
      }
        console.log('se');
          
  })
  
 });

returnCard.forEach(element => {
  element.addEventListener('click', e => {
  const faceFront = element.parentElement.parentElement.parentElement.children[0];
  const faceBack = element.parentElement.parentElement.parentElement.children[1];
  faceFront.style.transform = "rotateY(360deg)";
  faceBack.style.transform = "rotateY(180deg)";
  faceBack.classList.remove('back-overflow')
    })
});

 cardFront.forEach(element => {
  element.addEventListener('click', async e => {
  const cardFront = element.parentElement.children[0]
  const cardBack = element.parentElement.children[1]
    cardFront.style.transform = "rotateY(180deg)";
    cardBack.style.transform = "rotateY(360deg)";  
    cardBack.classList.add('back-overflow')
  })
  });
}
FuncionesCarta();



}


getTodos();
