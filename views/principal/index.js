const divcontenedor = document.querySelector('#contenedor')
const select = document.querySelector('#select-semanas')
const btnRecetas = document.querySelector('#btn-recetas')
const btnCerrarSesion = document.querySelector('#btn-cerrar')
const btnCerrarSesionMobile = document.querySelector('#btn-cerrar-mobil')
const btnProgreso = document.querySelector('#btn-progreso')
const labelProgreso = document.querySelector('#label-progreso')
const btnPerfil = document.querySelector('#btn-perfil')
const svgRecetas = document.querySelector('#svg-recetas')
const cardFront = document.querySelectorAll('.front')
const cardBack = document.querySelectorAll('.back')
const btnMenuMobile = document.querySelector('.btn-mobil')
const menuMobile = document.querySelector('.menu-mobil')
const btnPerfilMobile = document.querySelector('#btn-perfil-mobil')
const svgRecetasMobile = document.querySelector('#svg-recetas-mobil')
const btnProgresoMobile = document.querySelector('#btn-progreso-mobil')


btnMenuMobile.addEventListener('click', e =>{
  menuMobile.classList.toggle('top-20')
})

cardFront.forEach(element => {
element.addEventListener('click', e => {
const cardFront = element.parentElement.children[0]
const cardBack = element.parentElement.children[1]
  cardFront.style.transform = "rotateY(180deg)";
  cardBack.style.transform = "rotateY(360deg)";
})
});

cardBack.forEach(element => {
  element.addEventListener('click', e => {
  const cardFront = element.parentElement.children[0]
  const cardBack = element.parentElement.children[1]
    cardFront.style.transform = "rotateY(360deg)";
    cardBack.style.transform = "rotateY(180deg)";
  })
  });

svgRecetas.addEventListener('click', e => {
const id = window.location.pathname.split('/')[2]
window.location.pathname = `/recetas/${id}`;
})



btnRecetas.addEventListener('click', e => {
  const addTodo = async () => {
    const { data } = await axios.post('/api/recetas', {
  
      SemanaUno: [
        {Lunes:{Desayuno:{Titulo:'Tostadas de pan integral con queso fresco y frutas',
        Ingredientes:'Pan integral: 2 rebanadas. Queso fresco: 2 cucharadas. Frutas frescas: 1/2 taza.',
        Calorias: 300, Carbohidratos: 55, Proteinas: 14, Grasas: 3, Fibra: 8,
        Preparacion:'1-Calienta un sart??n a fuego medio. 2-Coloca las rebanadas de pan integral en el sart??n y tosta hasta que est??n doradas. 3-Retira del sart??n y coloca el queso fresco sobre cada rebanada de pan. 4-Coloca las frutas frescas encima del queso fresco. 5-Sirve inmediatamente y disfruta.', 
      }, 
  
        Almuerzo:{Titulo:'Pollo a la parrilla con verduras al vapor',
        Ingredientes:'Pechugas de pollo : 2, Verduras: 1 taza',
        Calorias: 212, Carbohidratos: 3, Proteinas: 41, Grasas: 4, Fibra: 1,
        Preparacion: '1-Tempere las pechugas de pollo con sal y pimienta a gusto. 2-Caliente una parrilla a fuego medio-alto y coloque las pechugas de pollo. 3-Cocine durante 4-5 minutos por lado, o hasta que est??n cocidas por completo. 4-Mientras tanto, prepare una olla con agua y coloque las verduras al vapor (por ejemplo, br??coli, zanahorias, etc) hasta que est??n suaves. 5-Sirva las pechugas de pollo con las verduras al vapor y disfrute.'
      },  
  
        Cena:{Titulo:'Ensalada de pollo con aguacate y nueces',
        Ingredientes:'Pechuga de pollo cocida: 2 tazas, Aguacate: 1, Nueces: 1/4 taza, Lechuga: 2 taza, Aderezo de ensalada: 2 cucharadas',
        Calorias: 738, Carbohidratos: 22, Proteinas: 47, Grasas: 54, Fibra: 14,
        Preparacion: '1-En un bol grande, mezcle la lechuga picada con la pechuga de pollo cocida. 2-Agregue el aguacate y las nueces picadas. 3-Sirva con el aderezo de ensalada por encima. 4-Sirva inmediatamente y disfrute.'
      }},
  
        // Martes
        Martes:{Desayuno:{Titulo:'Pan integral con huevo y tomate',
        Ingredientes:'Pan integral: 2 rebanadas, Huevo: 1, Tomate: 1',
        Preparacion:'1-Calienta una sart??n a fuego medio. 2-Agregue un poco de aceite de oliva o mantequilla. 3-Coloque el huevo en la sart??n y cocine hasta que la yema est?? cocida a su gusto. 4-Mientras tanto, tostar el pan en un tostador o en el horno. 5-Corta el tomate en rodajas y col??calos sobre el pan tostado. 6-Coloca el huevo cocido encima del tomate y el pan. 7-Sirve inmediatamente y disfruta.', 
        Calorias: 290, Carbohidratos: 44, Proteinas: 15, Grasas: 8, Fibra: 7
      },
  
        Almuerzo:{Titulo:'Wrap de salm??n con ensalada de verduras',
        Ingredientes:'Wrap integral: 1 unidad. Salm??n cocido: 4oz. Verduras (ej: lechuga, tomate, pimiento): 1 taza. Yogurt bajo en grasa: 1 cucharada',
        Preparacion:'1-Caliente el wrap en una sart??n o en el horno para que quede suave. 2-Agregue el salm??n cocido en el centro del wrap, junto con las verduras picadas. 3-Enr??llelo y sirva con el yogur bajo en grasa como aderezo. 4-Sirva inmediatamente y disfrute.', 
        Calorias: 355, Carbohidratos: 32, Proteinas: 30, Grasas: 11, Fibra: 6
      },
  
      Cena:{Titulo:'Sopa de verduras y pollo',
        Ingredientes:'Verduras (ej: zanahorias, papa, cebolla): 1 taza. Pollo cocido: 3 oz. Caldo de pollo : 4 taza. Aceite de oliva: 1 cucharada',
        Preparacion:'1-Caliente el aceite de oliva en una olla a fuego medio y a??ada las verduras picadas. 2-Sofr??a por unos minutos hasta que est??n suaves. 3-Agregue el caldo de pollo y el pollo cocido y deje que hierva. 4-Reduzca el fuego y deje cocinar durante unos 15 minutos m??s hasta que las verduras est??n suaves. 5-Sirva caliente y disfrute.', 
        Calorias: 290, Carbohidratos: 14, Proteinas: 28, Grasas: 16, Fibra: 3
      }},
  
      // Miercoles
  
  
      Miercoles:{Desayuno:{Titulo:'Avena con leche y frutas',
      Ingredientes:'Avena: 1/2 taza, Leche: 1 taza, Frutas frescas o congeladas: 1/2 taza, Miel (opcional): 1 cucharadita',
      Preparacion:'1-Calentar la leche en una olla mediana a fuego medio. 2-Agregar la avena y mezclar bien. 3-Cocinar la mezcla durante unos 3-5 minutos, revolviendo ocasionalmente, hasta que la avena est?? suave. 4-Retirar del fuego y dejar reposar por unos minutos. 5-Agregar las frutas y la miel (si se desea) y mezclar bien. 6-Servir caliente.', 
      Calorias: 300, Carbohidratos: 42, Proteinas: 14, Grasas: 8, Fibra: 6
    },
  
      Almuerzo:{Titulo:'Sopa de lentejas con verduras',
      Ingredientes:'Lentejas cocidas: 1 taza. Verduras (ej: zanahorias, papa, cebolla): 1 taza. Caldo de pollo/vegetal: 4 taza. Aceite de oliva: 1 cucharada',
      Preparacion:'1-Caliente el aceite de oliva en una olla a fuego medio y a??ada las verduras picadas.2-Sofr??a por unos minutos hasta que est??n suaves. 3-Agregue el caldo de pollo o vegetal y las lentejas cocidas y deje que hierva. 4-Reduzca el fuego y deje cocinar durante unos 15 minutos m??s hasta que las verduras est??n suaves. 5-Sirva caliente y disfrute.', 
      Calorias: 440, Carbohidratos: 54, Proteinas: 24, Grasas: 15, Fibra: 18
    },
  
    Cena:{Titulo:'Pescado al horno con ensalada de verduras',
      Ingredientes:'Pescado blanco (ej: tilapia, lenguado): 4 onzas. Aceite de oliva: 1 cucharada. Verduras (ej: lechuga, tomate, pimiento: 1 taza. Vinagreta: 2 cucharadas',
      Preparacion:'1-Precaliente el horno a 425 grados F (220 grados C). 2-Colocar el pescado en una bandeja para hornear y rociar con aceite de oliva. 3-Cocinar durante 15-20 minutos, o hasta que el pescado est?? cocido a su gusto. 4-Mientras tanto, mezclar las verduras en un bol grande. 5-Sirva el pescado con las verduras y aderezar con una vinagreta ligera.', 
      Calorias: 325, Carbohidratos: 7, Proteinas: 27, Grasas: 21, Fibra: 2
    }},
  
    // Jueves
  
    Jueves:{Desayuno:{Titulo:'Tostadas de aguacate con huevo',
    Ingredientes:'Tostadas integrales: 2 unidades, Aguacate maduro: 1 unidad, Huevo cocido: 1 unidad, Pimienta negra: 1 cucharadita',
    Preparacion:'1-Caliente una sart??n a fuego medio y fr??a los huevos hasta que est??n cocidos. 2-Mientras tanto, coloque las tostadas integrales en el tostador. 3-En un bol, mezcle el aguacate con un tenedor y sazone con pimienta negra. 4-Coloque el aguacate sobre las tostadas integrales y agregue el huevo cocido encima. 5-Sirva inmediatamente y disfrute.', 
    Calorias: 521, Carbohidratos: 53, Proteinas: 18, Grasas: 30, Fibra: 18
  },
  
    Almuerzo:{Titulo:'Arroz integral con pollo y verduras con huevo',
    Ingredientes:'Arroz integral: 1 taza. Pollo cocido: 4oz. Verduras (ej: zanahorias, pimientos, cebolla): 1taza. Huevo cocido: 1unidad. Aceite de oliva: 1 cucharada ',
    Preparacion:'1-Cocer el arroz integral seg??n las instrucciones del paquete. 2-Caliente una sart??n a fuego medio y fr??a las verduras y el pollo cocido en el aceite de oliva hasta que est??n cocidos. 3-En la misma sart??n, fr??a el huevo cocido. 4-Mezclar el arroz cocido con las verduras, pollo y huevo cocido. 5-Sirva caliente y disfrute.', 
    Calorias: 689, Carbohidratos: 50, Proteinas: 33, Grasas: 25, Fibra: 5
  },
  
  Cena:{Titulo:'Tortilla de patatas',
    Ingredientes:'2 huevos. 100 gramos de patatas peladas y cortadas en rodajas finas.1/4 de cebolla cortada en rodajas finas.Aceite de oliva.Sal al gusto',
    Preparacion:'1-Calienta una sart??n antiadherente con un poco de aceite de oliva a fuego medio-alto.2-Agrega las patatas y la cebolla a la sart??n y fr??e hasta que est??n doradas y tiernas, aproximadamente 8-10 minutos.3-Mientras tanto, batir los huevos en un taz??n con una pizca de sal.4-Agrega las patatas y la cebolla a los huevos batidos y mezcla bien.5-Vierte la mezcla de huevo y patatas de vuelta a la sart??n y cocina a fuego medio-bajo hasta que est?? dorado por debajo, aproximadamente 5-7 minutos.6-Dale la vuelta a la tortilla con ayuda de un plato y termina de cocinar por el otro lado hasta que est?? bien dorado, aproximadamente 3-5 minutos m??s.7-Sirve la tortilla de patatas caliente.', 
    Calorias: 350, Carbohidratos: 30, Proteinas: 13, Grasas: 20, Fibra: 2
  }},
  
  // Viernes
  Viernes:{Desayuno:{Titulo:'Pancake de avena',
  Ingredientes:'1/2 taza de harina de avena.1 cucharadita de levadura en polvo.1 huevo.1/4 taza de leche.1/2 pl??tano maduro.Aceite de coco o mantequilla para engrasar la sart??n',
  Preparacion:'1-En un taz??n mediano, mezcla la harina de avena, la levadura y una pizca de sal hasta combinarlos.2-En otro taz??n peque??o, bate el huevo y agrega la leche.3-A??ade los ingredientes h??medos a los ingredientes secos y mezcla hasta obtener una mezcla homog??nea.4-A??ade el pl??tano maduro aplastado y mezcla hasta incorporar.5-Engrasa una sart??n peque??a con aceite de coco o mantequilla y cali??ntala a fuego medio.6-Vierte una cucharada de la mezcla de pancake en la sart??n y cocina hasta que comience a formarse burbujas en la superficie.7-Da vuelta el pancake y cocina hasta que est?? dorado por ambos lados.8-Repite con la mezcla restante hasta formar tres o cuatro pancakes.9-Sirve caliente con un poco de miel o mermelada si lo deseas.', 
  Calorias: 300, Carbohidratos: 50, Proteinas: 10, Grasas: 6, Fibra: 4
  },
  
  Almuerzo:{Titulo:'Lasa??a de verduras con queso ricotta',
  Ingredientes:'Pasta de lasa??a: 8oz. Verduras (ej: pimientos, cebolla, berenjena, champi??ones: 1taza. Tomate picado: 1taza. Queso ricotta: 1/2 taza. Queso mozzarella: 1/4 taza. Aceite de oliva: 1 cucharada ',
  Preparacion:'1-Cocer la pasta de lasa??a seg??n las instrucciones del paquete.2-Escurrir y dejar enfriar. 3-Calentar el aceite de oliva en una sart??n a fuego medio y a??adir las verduras picadas.4-Sofr??a por unos minutos hasta que est??n suaves.5-Agregue el tomate picado y cocine durante unos minutos m??s.6-En un refractario para hornear, colocar una capa de pasta de lasa??a, seguida de una capa de verduras, una capa de queso ricotta y una capa de queso mozzarella. 7-Repetir estas capas hasta terminar con una capa de queso mozzarella en la parte superior. 8-Hornear a 180??C durante 25 minutos o hasta que el queso est?? dorado. 9-Dejar enfriar antes de servir.', 
  Calorias: 855, Carbohidratos: 88, Proteinas: 37, Grasas: 38, Fibra: 5
  },
  
  Cena:{Titulo:'Ensalada de at??n con verduras',
  Ingredientes:'At??n en lata: 1taza. Verduras (ej: lechuga, tomate, cebolla): 1taza. Aceite de oliva: 1 cucharada. Vinagre bals??mico: 1 cucharada',
  Preparacion:'1-En un bol grande, mezclar el at??n desmenuzado con las verduras picadas. 2-En un taz??n peque??o, mezclar el aceite de oliva y el vinagre bals??mico. 3-Verter la mezcla de vinagre sobre la ensalada y mezclar bien. 4-Servir fr??o y disfrutar.', 
  Calorias: 359, Carbohidratos: 8, Proteinas: 42, Grasas: 20, Fibra: 2
  }},
  
  // Sabado
  Sabado:{Desayuno:{Titulo:'Huevos revueltos con espinacas y champi??ones',
  Ingredientes:'Huevo: 2 unidades, Champi??ones: 1/2 taza, Espinacas: 1/2 taza, Queso rallado 1/4 taza, Aceite de oliva 1 cucharada',
  Preparacion:'1-Calentar el aceite de oliva en una sart??n a fuego medio. 2-Agregar los champi??ones y las espinacas a la sart??n y cocinar hasta que est??n suaves. 3-Batir los huevos en un taz??n y agregar a la sart??n con las verduras.4-Revolver hasta que los huevos est??n cocidos. 5-Agregar el queso rallado y mezclar hasta que se derrita. 6-Servir caliente y disfrutar.', 
  Calorias: 415, Carbohidratos: 5, Proteinas: 22, Grasas: 35, Fibra: 2
  },
  
  Almuerzo:{Titulo:'Salteado de garbanzos con pollo y verduras',
  Ingredientes:'85 g de pechuga de pollo cortada en tiras.100 g de garbanzos cocidos.60 g de verduras mixtas (puedes usar zanahoria, pimiento, cebolla, etc).1 cucharada de aceite de oliva.Sal y pimienta al gusto',
  Preparacion:'1-Calienta el aceite de oliva en una sart??n a fuego medio-alto.2-Agrega las tiras de pollo y fr??elas hasta que est??n doradas.3-Retira del fuego y reserva.4-En la misma sart??n, agrega las verduras cortadas en rodajas y fr??elas hasta que est??n tiernas.5-Agrega los garbanzos cocidos y mezcla con las verduras.6-Vuelve a agregar el pollo y contin??a saltear hasta que todo est?? bien caliente.7-Ajusta la saz??n con sal y pimienta al gusto.8-Sirve caliente.', 
  Calorias: 380, Carbohidratos: 37, Proteinas: 28, Grasas: 15, Fibra: 8
  },
  
  Cena:{Titulo:'Ensalada de quinoa con pollo y verduras',
  Ingredientes:'Quinoa: 1 taza, Pechuga de pollo: 1 taza. Verduras (ej: pimientos, cebolla, zanahorias, espinacas): 1 taza. Aceite de oliva: 1 cucharada. Vinagre bals??mico: 1 cucharada',
  Preparacion:'1-Cocer la quinoa siguiendo las instrucciones del paquete.2-Escurrir y dejar enfriar. 3-Cocer la pechuga de pollo y cortarla en cubos. 4-Picar las verduras en cubos de tama??o similar. 5-En un taz??n grande, mezclar la quinoa, el pollo, las verduras, el aceite de oliva y el vinagre bals??mico. 6-Mezclar bien, probar y ajustar la saz??n si es necesario. 7-Servir fr??o o a temperatura ambiente.', 
  Calorias: 696, Carbohidratos: 53, Proteinas: 52, Grasas: 23, Fibra: 8
  }},
  
  //  Domingo
  Domingo:{Desayuno:{Titulo:'Pan de centeno con queso cottage y frutas',
  Ingredientes:'Pan de centeno: 2 rebanadas. Queso cottage: 2 oz, Frutas (ej: fresas, pl??tano, manzana): 1 taza. Miel: 1 cucharada',
  Preparacion:'1-Calentar el pan de centeno en un tostador o en un sart??n a fuego medio. 2-Colocar el queso cottage en las rebanadas de pan tostado. 3-Picar las frutas y colocarlas encima del queso cottage. 4-Espolvorear con miel si deseas. 5-Servir caliente y disfrutar.', 
  Calorias: 374, Carbohidratos: 61, Proteinas: 23, Grasas: 6, Fibra: 5
  },
  
  Almuerzo:{Titulo:'Brochetas de pollo con calabaza',
  Ingredientes:'1 pechuga de pollo cortada en cubos.1/2 taza de calabaza cortada en cubos.Sal y pimienta al gusto.1 cucharadita de aceite de oliva',
  Preparacion:'1-Precalentar el horno a 200??C.2-Cortar la pechuga de pollo en cubos y la calabaza en cubos.3-En un taz??n, mezclar los cubos de pollo y calabaza con una cucharadita de aceite de oliva, sal y pimienta.4-Colocar los cubos de pollo y calabaza en brochetas alternados.5-Colocar las brochetas en una bandeja para horno y llevarlas al horno durante 15-20 minutos hasta que est??n dorados y cocidos.', 
  Calorias: 250, Carbohidratos: 6, Proteinas: 28, Grasas: 10, Fibra: 2
  },
  
  Cena:{Titulo:'Nuggets de pollo con espinacas',
  Ingredientes:'2 pechugas de pollo, picadas.1 taza de espinacas frescas,picadas.1 huevo.2 cucharadas de harina de avena.1/4 taza de pan rallado.Sal y pimienta al gusto.Aceite de oliva',
  Preparacion:'1-Picar las pechugas de pollo y las espinacas. Reservar.2-Batir el huevo en un taz??n peque??o. Reservar.3-Mezclar la harina de avena, el pan rallado, la sal y la pimienta en un taz??n separado. Reservar.4-Formar los nuggets de pollo: Sumergir cada porci??n de pollo picado en la mezcla de huevo, luego en la mezcla de harina de avena y pan rallado, asegur??ndose de cubrirlos completamente.5-Calentar una sart??n con un poco de aceite de oliva a fuego medio-alto.6-Cocinar los nuggets de pollo hasta que est??n dorados y cocidos, aproximadamente 5 a 7 minutos.6-En la misma sart??n, agregar las espinacas y cocinar hasta que est??n tiernas, aproximadamente 2 minutos.7-Servir los nuggets de pollo junto con las espinacas calientes.', 
  Calorias: 350, Carbohidratos: 30, Proteinas: 35, Grasas: 11, Fibra: 4
  }},
  }],
  
  
  // SemanaDos
  
  // Lunes
  SemanaDos: [
  {Lunes:{Desayuno:{Titulo:'Tostadas de pan integral con hummus y verduras',
  Ingredientes:'Pan integra: 2 rebanadas. Hummus: 2 cucharadas. Verduras (ej: pepino, tomate, cebolla): 1 taza. Aceite de oliva: 1 cucharada. Vinagre de manzana: 1 cucharada',
  Preparacion:'1-Calentar el pan integral en un tostador o en un sart??n a fuego medio. 2-Extender el hummus en las rebanadas de pan tostado. 3-Picar las verduras y colocarlas encima del hummus. 4-Espolvorear con un poco de aceite de oliva y vinagre de manzana para mejorar el sabor. 5-Servir caliente y disfrutar.', 
  Calorias: 454, Carbohidratos: 56, Proteinas: 11, Grasas: 25, Fibra: 10
  }, 
  
  Almuerzo:{Titulo:'Arroz integral con camarones y verduras',
  Ingredientes:'Arroz integral: 1 taza. Camarones cocidos: 1 taza. Verduras (ej: zanahoria, br??coli, pimiento): 1 taza, Aceite de oliva: 1 cucharada. Jugo de lim??n: 1 cucharada',
  Preparacion: '1-Cocer el arroz integral seg??n las instrucciones del paquete. 2-Calentar el aceite de oliva en una sart??n a fuego medio. 3-Agregar las verduras y saltearlas durante unos 5 minutos o hasta que est??n cocidas. 4-Agregar los camarones y saltearlos durante 2 minutos o hasta que est??n cocidos. 5-Agregar el arroz cocido y el jugo de lim??n a la sart??n y mezclar bien. 6-Servir caliente y disfrutar.',
  Calorias: 666, Carbohidratos: 51, Proteinas: 46, Grasas: 18, Fibra: 4
  },  
  
  Cena:{Titulo:'Ensalada de pollo con frutas y nueces',
  Ingredientes:'Pechuga de pollo cocida y cortada en cubos: 2 taza. Frutas (ej: fresas, kiwi, pl??tano): 1 taza. Nueces: 1/4 taza. Lechuga: 2 taza. Vinagre bals??mico: 1 cucharada. Aceite de oliva: 1 cucharada',
  Preparacion:'1-En un taz??n grande, mezclar el pollo, las frutas picadas, las nueces picadas, la lechuga picada y el vinagre bals??mico y el aceite de oliva. 2-Mezclar bien, probar y ajustar la saz??n si es necesario. 3-Servir fr??o o a temperatura ambiente.',
  Calorias: 832, Carbohidratos: 34, Proteinas: 90, Grasas: 48, Fibra: 6
  }},
  
  // Martes
  Martes:{Desayuno:{Titulo:'Tostadas de pan integral con huevo y tomate',
  Ingredientes:'Pan integral: 2 rebanadas, Huevo cocido: 1, Tomate: 2 rebanadas, Aceite de oliva: 1 cucharada, Sal y pimienta: al gusto',
  Preparacion:'1-Calentar una sart??n a fuego medio con una cucharada de aceite de oliva. 2-Colocar el huevo cocido y los tomates en la sart??n y cocinar durante unos minutos, hasta que est??n calientes. 3-Calentar el pan en el tostador. 4-Colocar el huevo cocido y los tomates sobre el pan tostado y sazonar con sal y pimienta al gusto. 5-Servir caliente y disfrutar.', 
  Calorias: 406, Carbohidratos: 42, Proteinas: 15, Grasas: 21, Fibra: 5
  },
  Almuerzo:{Titulo:'Arroz integral con salm??n y verduras',
  Ingredientes:'Arroz integral: 1 taza. Salmon: 4oz. Verduras (ej: zanahorias, br??coli, pimientos): 1 taza. Aceite de oliva: 1 cucharada',
  Preparacion:'1-Cocer el arroz seg??n las instrucciones del paquete y dejarlo enfriar. 2-Calentar una sart??n con un poco de aceite de oliva. 3-A??adir las verduras a la sart??n y cocinar a fuego medio hasta que est??n tiernas. 4-A??adir el salm??n a la sart??n y cocinar durante 3-5 minutos por lado, hasta que est?? cocido. 5-Mezclar el arroz con las verduras y el salm??n. 6-Servir y disfrutar.', 
  Calorias: 646, Carbohidratos: 50, Proteinas: 32, Grasas: 25, Fibra: 4
  },
  
  Cena:{Titulo:'Ensalada Cesar con pollo o tofu',
  Ingredientes:'Lechuga romana: 4 tazas, Pollo o Tofu cocido: 1 taza, Pan rallado: 1/4 taza, Queso parmesano rallado: 1/4 taza, Aceite de oliva: 2 cucharadas, Jugo de lim??n: 1 cucharada, Ajo: 2 dientes, Mostaza dijon: 1 cucharada, Sal y pimienta: al gusto',
  Preparacion:'1-Picar la lechuga romana en trozos peque??os. 2-Picar el pollo o el tofu cocido en trozos peque??os. 3-Mezclar la lechuga, el pollo o el tofu, el pan rallado y el queso parmesano rallado en un taz??n grande. 4-En un taz??n peque??o, mezclar el aceite de oliva, el jugo de lim??n, el ajo picado, la mostaza dijon, la sal y la pimienta. 5-Verter la mezcla de aderezo sobre la ensalada y mezclar bien. 6-Servir inmediatamente y disfrutar.', 
  Calorias: 660, Carbohidratos: 20, Proteinas: 51, Grasas: 46, Fibra: 2
  }},
  
  // Miercoles
  
  
  Miercoles:{Desayuno:{Titulo:'Yogurt con frutas y nueces',
  Ingredientes:'Yogurt natural: 1 taza. Frutas (ej: fresas, kiwi, manzana): 1 taza. Nueces(opcional): 2 cucharadas. Miel(opcional): 1 cucharada',
  Preparacion:'1-En un taz??n grande, mezclar el yogurt natural, las frutas picadas y las nueces picadas. 2-Si desea, agregar miel al gusto. 3-Mezclar bien y servir.', 
  Calorias: 394, Carbohidratos: 38, Proteinas: 15, Grasas: 21, Fibra: 4
  },
  
  Almuerzo:{Titulo:'Pasta con salsa de aguacate',
  Ingredientes:'60 g de pasta integral.1 aguacate maduro.1/2 lim??n.1 diente de ajo.1/4 taza de cilantro fresco.Sal y pimienta al gusto.2 cucharadas de aceite de oliva.1/2 taza de cherry tomatoes.1/4 taza de queso rallado',
  Preparacion:'1-Cocine la pasta de acuerdo a las instrucciones del paquete hasta que est?? al dente.2-Mientras tanto, haga la salsa de aguacate: corte el aguacate por la mitad y retire el hueso.3-Despu??s, retire la pulpa y coloque en un taz??n.4-Agregue el jugo de medio lim??n, el ajo picado, el cilantro fresco, la sal y la pimienta y mezcle todo con un tenedor hasta obtener una salsa uniforme.5-Caliente el aceite de oliva en una sart??n a fuego medio y agregue los cherry tomatoes cortados por la mitad.6-Cocine por 3-4 minutos o hasta que est??n ligeramente blandos.5-Agregue la pasta cocida a la sart??n con los cherry tomatoes y mezcle bien.7-Agregue la salsa de aguacate y mezcle hasta que la pasta quede bien cubierta.8-Sirva la pasta en un plato y espolvoree queso rallado por encima.', 
  Calorias: 500, Carbohidratos: 49, Proteinas: 15, Grasas: 31, Fibra: 11
  },
  
  Cena:{Titulo:'Huevos revueltos con verduras y un trozo de pan integral.',
  Ingredientes:'Huevo: 2. Verduras (ej: espinacas, champi??ones, pimiento): 1 taza. Aceite de oliva: 1 cucharada. Pan integral: 1 rebanada',
  Preparacion:'1-Picar las verduras en trozos peque??os. 2-Calentar una sart??n con una cucharada de aceite de oliva a fuego medio-alto. 3-A??adir las verduras y saltearlas durante unos minutos, hasta que est??n cocidas pero a??n crujientes. 4-Batir los huevos en un taz??n y verterlos en la sart??n con las verduras. 5-Saltear los huevos y las verduras durante unos minutos hasta que los huevos est??n cocidos. 6-Servir los huevos revueltos con verduras junto con un trozo de pan integral tostado.', 
  Calorias: 344, Carbohidratos: 20, Proteinas: 18, Grasas: 25, Fibra: 3
  }},
  
  // Jueves
  
  Jueves:{Desayuno:{Titulo:'Tostadas de pan integral con queso cottage y frutas',
  Ingredientes:'Pan integral: 2 rebanadas. Queso cottage: 1/4 taza. Frutas (ej: fresas, pl??tano, kiwi): 1 taza',
  Preparacion:'1-Tostar las rebanadas de pan integral hasta que est??n doradas. 2-Colocar el queso cottage en las rebanadas de pan integral tostado. 3-Picar las frutas y colocarlas encima del queso cottage. 4-Servir y disfrutar.', 
  Calorias: 300, Carbohidratos: 47, Proteinas: 15, Grasas: 8, Fibra: 7
  },
  
  Almuerzo:{Titulo:'Tortilla de huevo con verduras y queso feta',
  Ingredientes:'Huevo: 4. Verduras (ej: espinacas, champi??ones, pimiento): 1 taza. Queso feta: 1/4, Aceite de oliva: 1 cucharada',
  Preparacion:'1-Picar las verduras en trozos peque??os. 2-Calentar una sart??n con una cucharada de aceite de oliva a fuego medio-alto. 3-A??adir las verduras y saltearlas durante unos minutos, hasta que est??n cocidas pero a??n crujientes. 4-Batir los huevos en un taz??n y verterlos en la sart??n con las verduras. 5-Saltear los huevos y las verduras durante unos minutos hasta que los huevos est??n cocidos. 6-Agregar el queso feta rallado en la parte superior de la tortilla y dejar que se derrita durante unos minutos. 7-Servir y disfrutar.', 
  Calorias: 600, Carbohidratos: 7, Proteinas: 32, Grasas: 44, Fibra: 1
  },
  
  Cena:{Titulo:'Ensalada de camarones con frutas y nueces',
  Ingredientes:'Camarones cocidos: 1/2 taza. Frutas (ej: fresas, pl??tano, kiwi): 1 taza. Nueces (almendras, nueces, macadamias): 1/4 taza. Vinagreta: 2 cucharadas',
  Preparacion:'1-Picar las frutas y las nueces en trozos peque??os. 2-Mezclar las frutas, las nueces y los camarones en un taz??n. 3-Mezclar la vinagreta en un taz??n separado. 4-Agregar la vinagreta a la ensalada y mezclar bien. 5-Servir y disfrutar.', 
  Calorias: 440, Carbohidratos: 23, Proteinas: 29, Grasas: 28, Fibra: 6
  }},
  
  // Viernes
  Viernes:{Desayuno:{Titulo:'Tostadas de pan integral con huevo y champi??ones',
  Ingredientes:'Pan integral: 2 rebanadas, Huevo: 1, Champi??ones: 1 taza, Aceite de oliva: 1 cucharada, Queso rallado (opcional): 1 cucharada',
  Preparacion:'1-Calentar una sart??n con una cucharada de aceite de oliva a fuego medio-alto. 2-Picar los champi??ones en trozos peque??os y saltearlos en la sart??n hasta que est??n cocidos. 3-Batir el huevo en un taz??n y verterlo en la sart??n con los champi??ones. 4-Saltear los huevos y los champi??ones durante unos minutos hasta que los huevos est??n cocidos. 5-Calentar las tostadas de pan integral en un tostador o en una sart??n. 6-Colocar la mezcla de huevo y champi??ones en las tostadas. 7-Agregar el queso rallado encima (opcional) 8-Servir y disfrutar.', 
  Calorias: 345, Carbohidratos: 28, Proteinas: 14, Grasas: 23, Fibra: 4
  },
  
  Almuerzo:{Titulo:'Hamburguesa de lentejas con arroz integral y verduras.',
  Ingredientes:'Lentejas cocidas: 1 taza. Pan rallado de aveja: 1/4 taza. Cebolla picada: 1/4 taza. Ajo picado: 1 diente. Huevo: 1. Aceite de oliva: 1 cucharada. Arroz integral: 1 taza. Verduras (ej: zanahoria, pimiento, cebolla): 1 taza',
  Preparacion:'1-Mezclar las lentejas cocidas, el pan rallado, la cebolla picada, el ajo picado y el huevo en un taz??n grande. 2-Formar las mezclas en 4 hamburguesas. 3-Calentar el aceite de oliva en una sart??n a fuego medio-alto y cocinar las hamburguesas durante 4-5 minutos por cada lado, hasta que est??n doradas y cocidas a trav??s. 4-Mientras tanto, cocer el arroz integral de acuerdo a las instrucciones del paquete. 5-Cocer las verduras al vapor o saltearlas en una sart??n con un poco de aceite de oliva hasta que est??n cocidas pero a??n crujientes. 6-Servir la hamburguesa de lentejas con una porci??n de arroz integral y verduras al lado.', 
  Calorias: 785, Carbohidratos: 116, Proteinas: 30, Grasas: 25, Fibra: 16
  },
  
  Cena:{Titulo:'Bocadillo de pavo con jamon y verduras',
  Ingredientes:'Pan integral: 2 rebanadas. Pavo cocido: 3 onzas. jamon: 2 rebanadas. Verduras (ej: lechuga, tomate, pepino): 1 taza. Mostaza: 1 cucharada',
  Preparacion:'1-Calentar el pan integral en un tostador o en una sart??n. 2-Picar las verduras en trozos peque??os. 3-Colocar el pavo cocido, las rebanadas de jamon y las verduras en el pan integral caliente. 4-Agregar mostaza al gusto. 5-Servir y disfrutar.', 
  Calorias: 345, Carbohidratos: 30, Proteinas: 41, Grasas: 8, Fibra: 4
  }},
  
  // Sabado
  Sabado:{Desayuno:{Titulo:'Ensalada de frutas con yogur natural',
  Ingredientes:'Yogur natural: 1 taza. Frutas (ej: fresas, pl??tano, kiwi): 2 tazas. Nueces: 1/4 taza',
  Preparacion:'1-Picar las frutas en trozos peque??os. 2-Mezclar las frutas con el yogur natural. 3-Agregar las nueces picadas. 4-Servir y disfrutar.', 
  Calorias: 470, Carbohidratos: 48, Proteinas: 16, Grasas: 24, Fibra: 6
  },
  
  Almuerzo:{Titulo:'Fajitas de pollo con arroz integral',
  Ingredientes:'Pollo: 100g, Tortilla de arroz integral : 1, Arroz integral cocido: 60 g, Aceite de oliva: 1 cucharadita, Clavo de ajo: 1, Agua: 1/4 taza, Salsa de tomate: 1/4, Queso rallado (opcional): 1/4 taza ',
  Preparacion:'1-Cortar el pollo en tiras finas. 2-Calentar el aceite de oliva en una sart??n a fuego medio y a??adir el pollo y el ajo picado. 3-Cocinar hasta que est??n dorados. 4-Agregar 1/4 taza de agua y la salsa de tomate. 5-Cocinar por unos minutos hasta que la salsa est?? caliente. 6-Colocar una tortilla de trigo integral en un plato y agregar una porci??n de arroz integral. 7-A??adir la mezcla de pollo y salsa sobre el arroz. 8-Enrollar la tortilla y a??adir queso rallado al gusto.', 
  Calorias: 400, Carbohidratos: 60, Proteinas: 25, Grasas: 12, Fibra: 6
  },
  
  Cena:{Titulo:'Ensalada de espinacas con frutas y queso de cabra',
  Ingredientes:'Espinacas frescas: 4 taza. Frutas (ej: fresas, kiwi): 2 tazas. Queso de cabra: 2 oz. Vinagreta de mostaza: 2 cucharadas',
  Preparacion:'1-Picar las frutas en trozos peque??os. 2-Mezclar las espinacas con frutas. 3-Agregar el queso de cabra rallado. 4-Mezclar la vinagreta de mostaza con un poco de vinagre y aceite de oliva. 5-Ali??ar la ensalada con la vinagreta de mostaza. 6-Servir y disfrutar.', 
  Calorias: 380, Carbohidratos: 39, Proteinas: 15, Grasas: 20, Fibra: 7
  }},
  
  //  Domingo
  Domingo:{Desayuno:{Titulo:'Pan integral con mantequilla de man?? y frutas',
  Ingredientes:'Pan integral: 2 rebanadas. Mantequilla de man??: 2 cucharadas. Frutas (ej: fresas, pl??tano): 1 taza',
  Preparacion:'1-Calentar el pan integral en un tostador o en una sart??n. 2-Aplicar la mantequilla de man?? sobre el pan caliente. 3-Picar las frutas en trozos peque??os y colocarlas sobre la mantequilla de man??. 4-Servir y disfrutar.', 
  Calorias: 410, Carbohidratos: 55, Proteinas: 14, Grasas: 18, Fibra: 8
  },
  
  Almuerzo:{Titulo:'Ensalada de verduras con salm??n ahumado',
  Ingredientes:'Verduras (ej: espinacas, zanahorias, tomates, pimientos): 2 tazas. Salm??n ahumado: 4 onzas. Aceite de oliva: 2 cucharadas. Vinagre bals??mico: 2 cucharadas. Mostaza Dijon: 1 cucharada',
  Preparacion:'1-Picar las verduras en trozos peque??os. 2-Mezclar las verduras en un taz??n grande. 3-Agregar el salm??n ahumado, el aceite de oliva, el vinagre bals??mico y la mostaza Dijon. 4-Mezclar bien. 5-Servir y disfrutar.',
  Calorias: 555, Carbohidratos: 12, Proteinas: 37, Grasas: 42, Fibra: 2
  },
  
  Cena:{Titulo:'Tortilla de huevo con verduras y queso feta',
  Ingredientes:'Huevo: 4. Verduras (ej: espinacas, champi??ones, pimiento): 1 taza. Queso feta: 1/4 taza. Aceite de oliva: 1 cucharada',
  Preparacion:'1-Picar las verduras en trozos peque??os. 2-Calentar una sart??n con una cucharada de aceite de oliva a fuego medio-alto. 3-A??adir las verduras y saltearlas durante unos minutos, hasta que est??n cocidas pero a??n crujientes. 4-Batir los huevos en un taz??n y verterlos en la sart??n con las verduras. 5-Saltear los huevos y las verduras durante unos minutos hasta que los huevos est??n cocidos. 6-Agregar el queso feta rallado en la parte superior de la tortilla y dejar que se derrita durante unos minutos. 7-Servir y disfrutar.', 
  Calorias: 600, Carbohidratos: 7, Proteinas: 32, Grasas: 44, Fibra: 1
  }},
  
  // FALTAN 2 En sabado y miercoles
  }],
  
  
  // Semana Tres
  
  SemanaTres: [
  {Lunes:{Desayuno:{Titulo:'Huevos revueltos con verduras y tomate',
  Ingredientes:'Huevo: 2 unidades. Tomate: 2 unidades. Verduras (ej: espinacas, champi??ones): 1 taza. Aceite de oliva: 1 cucharada. Sal: al gusto',
  Preparacion:'1-Calentar una sart??n con un poco de aceite de oliva. 2-A??adir las verduras a la sart??n y cocinar a fuego medio hasta que est??n tiernas. 3-Batir los huevos en un taz??n con una pizca de sal y a??adir a la sart??n junto con las verduras. 4-Cocinar los huevos revueltos hasta que est??n cocidos. 5-Servir y disfrutar.', 
  Calorias: 293, Carbohidratos: 8, Proteinas: 15, Grasas: 25, Fibra: 2
  }, 
  
  Almuerzo:{Titulo:'At??n en lata con ensalada verde y tomate',
  Ingredientes:'At??n en lata: 1 lata, Lechuga: 1 taza, Tomate: 1 unidad, Aceite de oliva: 1 cucharada, Vinagre bals??mico: 1 cucharada ',
  Preparacion: '1-Escurrir el at??n en lata y escurrir el aceite. 2-Cortar los tomates y la lechuga en trozos peque??os. 3-Mezclar el vinagre bals??mico con el aceite de oliva en un taz??n peque??o. 4-Agregar el at??n, los tomates y la lechuga en un taz??n grande y mezclar. 5-Verter la mezcla de vinagre y aceite sobre la ensalada y mezclar. 6-Servir y disfrutar.',
  Calorias: 281, Carbohidratos: 9, Proteinas: 26, Grasas: 16, Fibra: 2
  },  
  
  Cena:{Titulo:'Pescado al horno con verduras al vapor y arroz integral',
  Ingredientes:'Pescado (tilapia, salm??n, etc): 4 oz. Verduras (espinacas, br??coli, etc: 1 taza. Arroz integral: 1/2 taza. Aceite de oliva: 1 cucharada. Limon: 1/2 unidad',
  Preparacion:'1-Precalentar el horno a 375 grados. 2-Lavar y cortar las verduras en trozos peque??os. 3-Cocinar el arroz seg??n las instrucciones del paquete. 4-Colocar el pescado en una bandeja para hornear y sazonar con sal, pimienta y el zumo de medio lim??n. 5-Colocar las verduras alrededor del pescado y regar con una cucharada de aceite de oliva. 6-Hornear durante 15-20 minutos o hasta que el pescado est?? cocido y las verduras est??n suaves. 7-Servir el pescado con las verduras y el arroz integral.',
  Calorias: 350, Carbohidratos: 26, Proteinas: 46, Grasas: 22, Fibra: 4
  }},
  
  // Martes
  Martes:{Desayuno:{Titulo:'Yogurt con frutas y granola sin az??car a??adida',
  Ingredientes:'Yogurt natural: 1 taza. Frutas (fresas, kiwi, etc): 1 taza. Granola (sin az??car a??adida): 1/4 taza',
  Preparacion:'1-En un bol, mezclar 1 taza de yogurt natural con 1 taza de frutas cortadas en trozos peque??os. 2-Agregar 1/4 taza de granola sin az??car a??adida. 3-Mezclar bien y disfrutar.', 
  Calorias: 330, Carbohidratos: 43, Proteinas: 17, Grasas: 12, Fibra: 5
  },
  Almuerzo:{Titulo:'Ensalada de pollo a la parrilla con vegetales y vinagreta baja en grasa',
  Ingredientes:'Pechuga de pollo a la parrilla: 4 oz. Lechuga romana: 2 taza. Tomate: 1/2 taza. Pepino: 1/2 taza. Cebolla: 1/4 taza. Vinagreta baja en grasa (aceite de oliva, vinagre bals??mico, mostaza, ajo, hierbas: 2 cucharadas',
  Preparacion:'1-A la parrilla o cocina la pechuga de pollo hasta que est?? cocida. 2-Mientras tanto, en un bol grande, mezclar 2 tazas de lechuga romana, 1/2 taza de tomate, 1/2 taza de pepino, y 1/4 taza de cebolla picada. 3-En una jarra peque??a, mezclar 2 cucharadas de vinagreta baja en grasa hecha con aceite de oliva, vinagre bals??mico, mostaza, ajo y hierbas frescas. 4-Cortar la pechuga de pollo en trozos y agregar a la ensalada. 5-Verter la vinagreta sobre la ensalada y mezclar bien. 6-Sirva inmediatamente o refrigere hasta que est?? listo para servir.', 
  Calorias: 252, Carbohidratos: 8, Proteinas: 39, Grasas: 9, Fibra: 3
  },
  
  Cena:{Titulo:'Ensalada de frutas',
  Ingredientes:'1 taza de frutas frescas (manzana, pl??tano, fresas, uvas, etc) cortadas en cubos.1 pocillo de yogur natural.1 cucharadita de miel.1 pizca de canela en polvo.Hojas frescas de hierbas (opcional)',
  Preparacion:'1-Corte las frutas frescas en cubos y col??quelas en un taz??n.2-En un taz??n peque??o, mezcle el yogur, la miel y la canela.3-Agregue la mezcla de yogur a la ensalada de frutas y mezcle hasta que las frutas est??n cubiertas uniformemente.4-Sirva la ensalada en un plato y espolvoree hojas frescas de hierbas por encima, si lo desea.', 
  Calorias: 200, Carbohidratos: 40, Proteinas: 10, Grasas: 4, Fibra: 8
  }},
  
  // Miercoles
  
  
  Miercoles:{Desayuno:{Titulo:'Tostadas de pan integral con aguacate',
  Ingredientes:'Pan integral: 2 rebanadas. Aguacate: 1/2 unidad. Lim??n: 1/2. Sal: 1/8 cucharadita',
  Preparacion:'1-Caliente el horno a 350 grados F (175 grados C). 2-Colocar 2 rebanadas de pan integral en una bandeja para hornear. 3-Hornee el pan durante 10 minutos o hasta que est?? dorado. 4-Mientras tanto, corte 1/2 aguacate en cubos peque??os y exprimir 1/2 lim??n y poner un poco de sal. 5-Una vez que el pan est?? listo, retire del horno y coloque el aguacate sobre el pan. 6-Espolvoree con el jugo de lim??n y la sal. 7-Sirva caliente o a temperatura ambiente.', 
  Calorias: 264, Carbohidratos: 34, Proteinas: 8, Grasas: 14, Fibra: 9
  },
  
  Almuerzo:{Titulo:'Huevos revueltos con champi??ones y tocino',
  Ingredientes:'Huevos: 2 unidades. Champi??ones: 1/2 taza. Tocino: 2 rebanadas. Aceite de Oliva: 1 cucharada. Sal: 1/8 cucharadita. Pimienta negra: 1/8 cucharadita',
  Preparacion:'1-Caliente una sart??n a fuego medio y agregue 1 cucharada de aceite de oliva. 2-Agregue los champi??ones y cocine durante 3-4 minutos, o hasta que est??n suaves. 3-A??ada el tocino y cocine durante 2 minutos m??s. 4-Batir los huevos en un taz??n con una pizca de sal y pimienta negra. 5-Agregue los huevos batidos a la sart??n con champi??ones y tocino. 6-Revuelva constantemente hasta que los huevos est??n cocidos a su gusto. 7-Sirva caliente.', 
  Calorias: 378, Carbohidratos: 2, Proteinas: 20, Grasas: 35, Fibra: 0
  },
  
  Cena:{Titulo:'Arroz Integral con pollo y espinacas',
  Ingredientes:'Arroz integral: 1 taza. Pollo (pechuga): 4 onzas. Aceite de Oliva: 1 cucharada. Espinacas: 2 tazas. Ajo: 1 diente. Sal: 1/8 cucharadita. Pimienta negra: 1/8 cucharadita',
  Preparacion:'1-Cocer el arroz integral seg??n las instrucciones del paquete. 2-Caliente una sart??n a fuego medio y agregue 1 cucharada de aceite de oliva. 3-Agregue el pollo y cocine durante 6-8 minutos, o hasta que est?? cocido. 4-A??ada el ajo y cocine durante 1 minuto m??s. 5-Agregue las espinacas y cocine durante 2-3 minutos, o hasta que se hayan ablandado. 6-Mezcle el arroz cocido con el pollo y las espinacas en un taz??n. 7-Sazonar con sal y pimienta negra al gusto. 8-Sirva caliente.', 
  Calorias: 418, Carbohidratos: 43, Proteinas: 43, Grasas: 19, Fibra: 3
  }},
  
  // Jueves
  
  Jueves:{Desayuno:{Titulo:'Omelette de queso y espinacas',
  Ingredientes:'Huevo: 2 unidades. Queso rallado: 2 cucharadas. Espinacas: 2 tazas. Aceite de Oliva: 1 cucharada. Sal: 1/8 cucharadita. Pimienta negra: 1/8 cucharadita',
  Preparacion:'1-Batir los huevos en un taz??n peque??o. 2-Agregue las espinacas, el queso rallado, sal y pimienta negra. 3-Mezclar bien. 4-Caliente una sart??n antiadherente a fuego medio y agregue 1 cucharada de aceite de oliva. 5-Vierta la mezcla de huevo en la sart??n. 6-Cocinar a fuego medio durante 3-4 minutos o hasta que la parte superior est?? cocida. 7-Dar la vuelta a la tortilla y cocinar durante 1 minuto m??s o hasta que el queso se haya derretido. 8-Servir caliente.', 
  Calorias: 394, Carbohidratos: 3, Proteinas: 21, Grasas: 34, Fibra: 1
  },
  
  Almuerzo:{Titulo:'Hamburguesa de pollo a la parrilla con ensalada verde y aguacate',
  Ingredientes:'Carne de pollo molido: 4 onzas, Pan rallado: 1/4 taza, Huevo: 1 unidad, Aceite vegetal: 1 cucharada, Ensalada verde: 2 tazas, Aguacate: 1/2 unidad, Vinagreta baja en grasa: 2 cucharadas, Sal y pimienta: al gusto',
  Preparacion:'1-En un taz??n grande, mezcle la carne de pollo molida, el pan rallado, el huevo, la sal y la pimienta. 2-Forme en 4 hamburguesas. 3-Caliente una parrilla a fuego medio y engrase con la cucharada de aceite vegetal. 4-Cocine las hamburguesas durante 4-5 minutos por cada lado o hasta que est??n cocidas. 5-Mientras tanto, mezclar la ensalada verde con el vinagreta y agregue el aguacate cortado en trozos. 6-Sirva la hamburguesa con la ensalada verde y aguacate al lado.', 
  Calorias: 735, Carbohidratos: 29, Proteinas: 37, Grasas: 45, Fibra: 10
  },
  
  Cena:{Titulo:'Lasa??a de verduras con salsa baja en grasa',
  Ingredientes:'Hojas de lasa??a: 8 unidades. Verduras (espinacas, pimientos, cebolla, champi??ones): 4 taza. Salsa de tomate baja en grasa: 1 taza. Queso rallado mozzarella bajo en grasa: 1/2 taza. Hierbas frescas (or??gano, albahaca): al gusto. Sal y pimienta: al gusto',
  Preparacion:'1-Cocer las hojas de lasa??a seg??n las instrucciones del paquete. 2-Cocer las verduras hasta que est??n suaves. 3-Mezclar el queso ricotta con las hierbas frescas, la sal y la pimienta. 4-En una cacerola, mezclar la salsa de tomate con las verduras cocidas. 5-En un refractario para horno, colocar una capa de hojas de lasa??a, luego una capa de queso ricotta, una capa de verduras con salsa de tomate y una capa de queso rallado mozzarella. 6-Repetir las capas hasta que se terminen los ingredientes. 7-Cubrir con papel aluminio y cocinar durante 25 minutos a 375 grados F. 8-Retirar el papel aluminio y cocinar durante otros 25 minutos hasta que el queso est?? dorado.', 
  Calorias: 970, Carbohidratos: 126, Proteinas: 57, Grasas: 24, Fibra: 14
  }},
  
  // Viernes
  Viernes:{Desayuno:{Titulo:'Tostadas de pan integral con queso y jam??n',
  Ingredientes:'Pan integral: 2 rebanadas. Queso: 2 rebanadas. Jam??n cocido: 2 lonjas',
  Preparacion:'1-Calienta una tostadora o una sart??n a fuego medio. 2-Coloca las rebanadas de pan integral en la tostadora o sart??n y tosta hasta que est??n doradas. 3-Retira del calor y coloca una rebanada de queso en cada rebanada de pan. 4-Coloca las lonchas de jam??n encima del queso. 5-Vuelve a colocar las tostadas en la tostadora o sart??n y cocina hasta que el queso se haya derretido. 6-Sirve y disfruta.', 
  Calorias: 300, Carbohidratos: 18, Proteinas: 32, Grasas: 12, Fibra: 3
  },
  
  Almuerzo:{Titulo:'Ensalada de salm??n a la parrilla con vegetales y vinagreta baja en grasa',
  Ingredientes:'Salm??n: 4 porciones. Lechuga:2 tazas. Vegetales de elecci??n: 2 tazas',
  Preparacion:'1-Calienta una parrilla a fuego medio-alto. 2-Coloca las porciones de salm??n en la parrilla y cocina aproximadamente durante 4-5 minutos por cada lado o hasta que est??n cocidos a tu gusto. 3-Mientras tanto, prepara una ensalada mezclando la lechuga y los vegetales de tu elecci??n. 4-En un taz??n peque??o, mezcla la vinagreta baja en grasa. 5-Una vez que el salm??n est?? cocido, col??calo encima de la ensalada. 6-Sirve y disfruta.', 
  Calorias: 220, Carbohidratos: 32, Proteinas: 3, Grasas: 12, Fibra: 2
  },
  
  Cena:{Titulo:'Curry de verduras con arroz integral.',
  Ingredientes:'Aceite de cocina: 1 cucharada, Cebolla: 1 unidad, Ajo: 2 dientes, Curry en polvo: 1 cucharada, Verduras de elecci??n: 2 tazas, Leche de coco: 1/2 taza, Arroz integral: 1 taza, Sal y pimienta: al gusto',
  Preparacion:'1-Calienta el aceite en una cacerola grande a fuego medio-alto. 2-Agrega la cebolla y el ajo y cocina hasta que est??n suaves. 3-Agrega el curry en polvo y cocina durante unos minutos m??s. 4-Agrega las verduras de tu elecci??n y cocina hasta que est??n tiernas. 5-Vierte la leche de coco y mezcla bien. 6-Cocina a fuego medio-bajo durante unos minutos m??s. 7-Mientras tanto, cocina el arroz integral seg??n las instrucciones del paquete. 8-Sirve el curry de verduras sobre el arroz integral. 9-Agrega sal y pimienta al gusto.', 
  Calorias: 412, Carbohidratos: 7, Proteinas: 48, Grasas: 11, Fibra: 4
  }},
  
  // Sabado
  Sabado:{Desayuno:{Titulo:'Pan integral con queso fresco y salm??n ahumado.',
  Ingredientes:'Pan integral: 2 rebanadas, Queso fresco: 2 rebanadas, Salm??n ahumado: 2 rebanadas, Aceite de oliva: 1 cucharada, hierbas frescas: al gusto',
  Preparacion:'1-Tostar las rebanadas de pan integral en una tostadora o en el horno durante unos minutos hasta que est??n doradas. 2-Mientras tanto, corta el queso fresco y el salm??n ahumado en rebanadas delgadas. 3-Retira el pan integral del horno o de la tostadora y extiende una cucharada de aceite de oliva sobre cada rebanada. 4-Coloca las rebanadas de queso fresco y el salm??n ahumado sobre cada rebanada de pan. 5-Agrega hierbas frescas al gusto y sirve.', 
  Calorias: 520, Carbohidratos: 27, Proteinas: 31, Grasas: 36, Fibra: 3
  },
  
  Almuerzo:{Titulo:'Ensalada de at??n  con vegetales',
  Ingredientes: 'At??n enlatado: 60 g, Lechuga picada: 1 taza, Tomate cherry cortado en cuartos: 1/2 taza, zanahoria rallada: 1/4 taza, Cebolla picada: 1/4 taza, Vinagre bals??mico: 1 cucharada, Aceite de oliva: 1 cucharada, Sal y pimienta al gusto', 
  Preparacion:'1-En un taz??n grande, mezcle el at??n o, lechuga, tomate cherry, zanahoria, cebolla y vinagre bals??mico. 2-Agregue el aceite de oliva y sazone con sal y pimienta. 3-Mezcle todos los ingredientes hasta que est??n bien combinados. 4-Sirva la ensalada en un plato y disfrute.', 
  Calorias: 250, Carbohidratos: 12, Proteinas: 25, Grasas: 14, Fibra:3 
  },
  
  Cena:{Titulo:'Pollo a la parrilla con verduras al vapor',
        Ingredientes:'Pechugas de pollo : 2, Verduras: 1 taza',
        Calorias: 212, Carbohidratos: 3, Proteinas: 41, Grasas: 4, Fibra: 1,
        Preparacion: '1-Tempere las pechugas de pollo con sal y pimienta a gusto. 2-Caliente una parrilla a fuego medio-alto y coloque las pechugas de pollo. 3-Cocine durante 4-5 minutos por lado, o hasta que est??n cocidas por completo. 4-Mientras tanto, prepare una olla con agua y coloque las verduras al vapor (por ejemplo, br??coli, zanahorias, etc) hasta que est??n suaves. 5-Sirva las pechugas de pollo con las verduras al vapor y disfrute.'
  }},
  
  //  Domingo
  Domingo:{Desayuno:{Titulo:'Tostadas de pan integral con hummus y verduras',
  Ingredientes:'Pan integral: 2 rebanadas. Hummus: 2 cucharadas. Verduras (ej: pepino, tomate, cebolla): 1 taza. Aceite de oliva: 1 cucharada. Vinagre de manzana: 1 cucharada',
  Preparacion:'1-Calentar el pan integral en un tostador o en un sart??n a fuego medio. 2-Extender el hummus en las rebanadas de pan tostado. 3-Picar las verduras y colocarlas encima del hummus. 4-Espolvorear con un poco de aceite de oliva y vinagre de manzana para mejorar el sabor. 5-Servir caliente y disfrutar.', 
  Calorias: 454, Carbohidratos: 56, Proteinas: 11, Grasas: 25, Fibra: 10
  },
  
  Almuerzo:{Titulo:'Sandwich de Pollo y Lechuga con Pan Integral',
  Ingredientes:'Pan integran: 2 rebanadas. Pollo asado cortado en tiras: 4 oz. Lechuga: 2 hojas. Tomate cortado en rebanadas: 1/4. Mayonesa: 2 cucharadas. Sal y pimienta: al gusto ',
  Preparacion:'1-Calentar el pan integral en una sart??n o tostadora hasta que est?? dorado. 2-Mezclar la mayonesa con una pizca de sal y pimienta. 3-Colocar una capa de pollo sobre una rebanada de pan. 4-Agregar la lechuga, el tomate, el aguacate y la mezcla de mayonesa sobre el pollo. 5-Cubrir con la segunda rebanada de pan. 6-Cortar el sandwich por la mitad y servir inmediatamente.',
  Calorias: 400, Carbohidratos: 40, Proteinas: 25, Grasas: 20, Fibra: 10
  },
  
  Cena:{Titulo:'Fajitas de pollo con arroz integral',
  Ingredientes:'Pollo: 100g, Tortilla de arroz integral : 1, Arroz integral cocido: 60 g, Aceite de oliva: 1 cucharadita, Clavo de ajo: 1, Agua: 1/4 taza, Salsa de tomate: 1/4, Queso rallado (opcional): 1/4 taza ',
  Preparacion:'1-Cortar el pollo en tiras finas. 2-Calentar el aceite de oliva en una sart??n a fuego medio y a??adir el pollo y el ajo picado. 3-Cocinar hasta que est??n dorados. 4-Agregar 1/4 taza de agua y la salsa de tomate. 5-Cocinar por unos minutos hasta que la salsa est?? caliente. 6-Colocar una tortilla de trigo integral en un plato y agregar una porci??n de arroz integral. 7-A??adir la mezcla de pollo y salsa sobre el arroz. 8-Enrollar la tortilla y a??adir queso rallado al gusto.', 
  Calorias: 400, Carbohidratos: 60, Proteinas: 25, Grasas: 12, Fibra: 6
  }},
  
  }],
  
  // Semana Cuatro
  
  SemanaCuatro: [
  {Lunes:{Desayuno:{Titulo:'Sandwitch de tofu de finas hierbas',
  Ingredientes:'2 rebanadas de pan integral.80 gramos de tofu de finas hierbas.1/2 aguacate.1/4 de cebolla morada en rodajas finas.1 hoja de lechuga.1 cucharada de mayonesa vegana.Sal y pimienta al gusto',
  Preparacion:'1-Tostar las rebanadas de pan integral en una tostadora o en una sart??n.2-Untar una de las rebanadas de pan con la mayonesa vegana.3-Colocar la hoja de lechuga sobre la mayonesa.4-Cortar el tofu en rodajas finas y colocarlas encima de la lechuga. 5-Cortar el aguacate en rodajas y colocarlas encima del tofu.6-Agregar la cebolla morada en rodajas finas encima del aguacate.7-Agregar sal y pimienta al gusto.8-Colocar la otra rebanada de pan encima y servir.', 
  Calorias: 300, Carbohidratos: 26, Proteinas: 11, Grasas: 17, Fibra: 9
  }, 
  
  Almuerzo:{Titulo:'Ensalada asi??tica de pollo',
  Ingredientes:'100 g de pollo a la plancha. 1 taza de lechuga picada. 1/2 taza de repollo rojo picado. 1/4 taza de zanahoria rallada. 1/4 taza de cebolla picada. 1/4 taza de ar??ndanos secos. 1 cucharada de semillas de s??samo. 2 cucharadas de aderezo de ensalada de tu elecci??n',
  Preparacion: '1-Cocina el pollo a la plancha hasta que est?? completamente cocido y corta en tiras. 2-Mezcla en un taz??n la lechuga, el repollo rojo, la zanahoria rallada, la cebolla y los ar??ndanos secos. 3-Agrega el pollo a la mezcla de verduras.4-Rociar las semillas de s??samo sobre la ensalada.5-Sirve con el aderezo de ensalada de tu elecci??n.',
  Calorias: 400, Carbohidratos: 46, Proteinas: 37, Grasas: 13, Fibra: 10
  },  
  
  Cena:{Titulo:'Ensalada Cesar con pollo o tofu',
  Ingredientes:'Lechuga romana: 4 tazas, Pollo o Tofu cocido: 1 taza, Pan rallado: 1/4 taza, Queso parmesano rallado: 1/4 taza, Aceite de oliva: 2 cucharadas, Jugo de lim??n: 1 cucharada, Ajo: 2 dientes, Mostaza dijon: 1 cucharada, Sal y pimienta: al gusto',
  Preparacion:'1-Picar la lechuga romana en trozos peque??os. 2-Picar el pollo o el tofu cocido en trozos peque??os. 3-Mezclar la lechuga, el pollo o el tofu, el pan rallado y el queso parmesano rallado en un taz??n grande. 4-En un taz??n peque??o, mezclar el aceite de oliva, el jugo de lim??n, el ajo picado, la mostaza dijon, la sal y la pimienta. 5-Verter la mezcla de aderezo sobre la ensalada y mezclar bien. 6-Servir inmediatamente y disfrutar.', 
  Calorias: 660, Carbohidratos: 20, Proteinas: 51, Grasas: 46, Fibra: 2
  }},
  
  // Martes
  Martes:{Desayuno:{Titulo:'Avena con yogur y frutos rojos',
  Ingredientes:'1/2 taza de avena en hojuelas. 1 taza de yogur natural.1/2 taza de frutos rojos (fresas, ar??ndanos, moras, etc).1 cucharada de miel (opcional)',
  Preparacion:'1-En un recipiente, mezcla la avena con el yogur hasta que queden bien integrados.2-Agrega los frutos rojos y mezcla suavemente.3-Si deseas endulzar, agrega una cucharada de miel y mezcla de nuevo.4-Deja reposar en el refrigerador durante al menos 30 minutos antes de servir.', 
  Calorias: 250, Carbohidratos: 40, Proteinas: 14, Grasas: 4, Fibra: 8
  },
  Almuerzo:{Titulo:'Ensalada de garbanzos y pollo',
  Ingredientes:'85 g de pechuga de pollo a la parrilla. 85 g de garbanzos cocidos.1/4 de taza de zanahoria rallada.1/4 de taza de pepino en rodajas.1/4 de taza de tomate en cubos.1/4 de taza de cebolla en rodajas.1 cucharadita de aceite de oliva.Sal y pimienta al gusto',
  Preparacion:'1-Corta la pechuga de pollo en cubos peque??os y col??cala en un taz??n.2-Agrega los garbanzos cocidos, la zanahoria rallada, el pepino, el tomate y la cebolla al taz??n con el pollo.3-Agrega el aceite de oliva, la sal y la pimienta al taz??n y mezcla bien todos los ingredientes.4-Sirve la ensalada en un plato y disfruta.', 
  Calorias: 333, Carbohidratos: 37, Proteinas: 32, Grasas: 8, Fibra: 10
  },
  
  Cena:{Titulo:'Tallarines con pollo y verduras',
  Ingredientes:'100g de tallarines.100g de pechuga de pollo.1/2 cebolla.1/2 pimiento rojo.1/2 pimiento verde.1/2 zanahoria.1 diente de ajo.Aceite de oliva.Sal y pimienta',
  Preparacion:'1-Cocer los tallarines en agua con sal siguiendo las instrucciones del paquete. Una vez listos, escurrirlos y reservar.2-Cortar el pollo en trozos peque??os y sazonar con sal y pimienta. En una sart??n con aceite de oliva caliente, cocinar el pollo hasta que est?? dorado por ambos lados. Retirar y reservar.3-En la misma sart??n, a??adir un poco m??s de aceite y saltear la cebolla, los pimientos y la zanahoria, todo previamente picado en juliana, junto con el ajo picado. Cocinar hasta que est??n tiernos.4-Agregar el pollo cocido a las verduras y mezclar todo junto.5-Servir los tallarines en un plato y a??adir la mezcla de pollo y verduras por encima.', 
  Calorias: 400, Carbohidratos: 50, Proteinas: 30, Grasas: 8, Fibra: 6
  }},
  
  // Miercoles
  
  
  Miercoles:{Desayuno:{Titulo:'Pan de centeno con queso cottage y frutas',
  Ingredientes:'Pan de centeno: 2 rebanadas. Queso cottage: 2 oz, Frutas (ej: fresas, pl??tano, manzana): 1 taza. Miel: 1 cucharada',
  Preparacion:'1-Calentar el pan de centeno en un tostador o en un sart??n a fuego medio. 2-Colocar el queso cottage en las rebanadas de pan tostado. 3-Picar las frutas y colocarlas encima del queso cottage. 4-Espolvorear con miel si deseas. 5-Servir caliente y disfrutar.', 
  Calorias: 374, Carbohidratos: 61, Proteinas: 23, Grasas: 6, Fibra: 5
  },
  
  Almuerzo:{Titulo:'Pescado a la plancha con pisto',
  Ingredientes:'1 filete de pescado (tilapia, lenguado, etc.) de aproximadamente 120 g.1/4 taza de pisto (mezcla de tomate, pimiento, cebolla y calabac??n).1 cucharadita de aceite de oliva.Sal y pimienta al gusto.Lim??n para servir (opcional)',
  Preparacion:'1-Calentar una plancha o sart??n antiadherente a fuego medio-alto.2-Limpiar y secar el filete de pescado con papel de cocina.3-A??adir una cucharadita de aceite de oliva a la plancha o sart??n caliente.4-Colocar el filete de pescado en la plancha o sart??n y sazonar con sal y pimienta al gusto. Cocinar por 4 a 5 minutos de cada lado hasta que est?? dorado y cocido a trav??s.5-Mientras se cocina el pescado, calentar el pisto en una sart??n separada hasta que est?? tibio.5-Servir el filete de pescado con una porci??n de pisto y un poco de lim??n al lado (opcional).', 
  Calorias: 250, Carbohidratos: 8, Proteinas: 30, Grasas: 11, Fibra: 2
  },
  
  Cena:{Titulo:'Muslos de pollo al horno al lim??n',
  Ingredientes:'2 muslos de pollo.1 lim??n.2 dientes de ajo.Aceite de oliva.Sal y pimienta',
  Preparacion:'1-Precalentar el horno a 200??C.2-Colocar los muslos de pollo en una fuente de horno y sazonar con sal y pimienta al gusto.3-Pelar y picar los dientes de ajo y distribuirlos sobre los muslos de pollo.4-Cortar el lim??n en rodajas y colocarlas sobre el pollo.5-Rociar con aceite de oliva.6-Hornear durante 35-40 minutos, o hasta que el pollo est?? dorado y cocido por completo.7-Servir caliente.', 
  Calorias: 200, Carbohidratos: 5, Proteinas: 22, Grasas: 11, Fibra: 1
  }},
  
  // Jueves
  
  Jueves:{Desayuno:{Titulo:'Pan integral con mantequilla de man?? y frutas',
  Ingredientes:'Pan integral: 2 rebanadas. Mantequilla de man??: 2 cucharadas. Frutas (ej: fresas, pl??tano): 1 taza',
  Preparacion:'1-Calentar el pan integral en un tostador o en una sart??n. 2-Aplicar la mantequilla de man?? sobre el pan caliente. 3-Picar las frutas en trozos peque??os y colocarlas sobre la mantequilla de man??. 4-Servir y disfrutar.', 
  Calorias: 410, Carbohidratos: 55, Proteinas: 14, Grasas: 18, Fibra: 8
  },
  
  Almuerzo:{Titulo:'Tiras de pollo con sandia y melon',
  Ingredientes:'4 tiras de pollo sin piel.Sal y pimienta al gusto.1 taza de sand??a cortada en cubos.1 taza de mel??n cortado en cubos.Aceite de oliva.Hierbas frescas (opcional)',
  Preparacion:'1-Sazonar las tiras de pollo con sal y pimienta.2-Calentar una plancha o sart??n con un poco de aceite de oliva.3-Cocinar las tiras de pollo en la plancha hasta que est??n doradas y bien cocidas, aproximadamente 5 minutos de cada lado.4-Mientras se cocinan las tiras de pollo, mezclar los cubos de sand??a y mel??n.5-Servir las tiras de pollo acompa??adas de la mezcla de sand??a y mel??n.6-Opcional: a??adir hierbas frescas picadas al gusto.', 
  Calorias: 200, Carbohidratos: 8, Proteinas: 27, Grasas: 4, Fibra: 1
  },
  
  Cena:{Titulo:'Cusc??s con pollo y verduras',
  Ingredientes:'1 pechuga de pollo cortada en cubos.1 taza de cusc??s.1 taza de agua caliente.1/2 cebolla picada.1 pimiento rojo picado.1 zanahoria pelada y cortada en cubos.1/2 calabac??n cortado en cubos.1 diente de ajo picado.1 cucharada de aceite de oliva.Sal y pimienta negra molida al gusto.Perejil fresco picado para decorar',
  Preparacion:'1-Precalentar el horno a 200 ??C.2-Colocar los cubos de pollo en un recipiente y rociar con jugo de lim??n. Dejar marinar mientras se prepara el cusc??s y las verduras.3-En un bol, colocar el cusc??s y verter el agua caliente. Cubrir el bol y dejar reposar durante unos 5 minutos, hasta que el cusc??s absorba todo el l??quido.4-Mientras tanto, en una sart??n grande, calentar el aceite de oliva a fuego medio. A??adir la cebolla, el pimiento, la zanahoria y el calabac??n. Sofre??r durante unos 5 minutos, hasta que las verduras est??n tiernas.5-A??adir el ajo picado y el pollo a la sart??n. Cocinar durante unos 5-7 minutos, hasta que el pollo est?? dorado y cocido por completo.6-Mezclar el cusc??s con las verduras y el pollo. Salpimentar al gusto.7-Colocar la mezcla de cusc??s en una bandeja para horno y hornear durante unos 10-15 minutos, hasta que est?? caliente y dorado.8-Servir caliente y decorar con perejil fresco picado.', 
  Calorias: 380, Carbohidratos: 45, Proteinas: 31, Grasas: 9, Fibra: 6
  }},
  
  // Viernes
  Viernes:{Desayuno:{Titulo:'Sandwich de pavo, manzana y rucula',
  Ingredientes:'2 rebanadas de pan integral.2-3 rebanadas de pechuga de pavo.1/2 manzana verde, en rodajas finas.Un pu??ado de hojas de r??cula.1 cucharadita de mostaza.1 cucharadita de miel.1 cucharadita de vinagre de manzana',
  Preparacion:'1-Mezcla la mostaza, miel y vinagre de manzana en un taz??n peque??o para hacer la salsa. 2-Coloca las rebanadas de pan en una tabla de cortar y ??ntalas con la salsa.3-Agrega las hojas de r??cula en la parte inferior del pan.4-A??ade las rebanadas de pechuga de pavo en la parte superior de las hojas de r??cula.5-Agrega las rodajas de manzana encima del pavo.6-Cubre con la otra rebanada de pan y corta el s??ndwich por la mitad.7-Sirve y disfruta', 
  Calorias: 290, Carbohidratos: 45, Proteinas: 18, Grasas: 4, Fibra: 8
  },
  
  Almuerzo:{Titulo:'Pescado al horno con verduras al vapor y arroz integral',
  Ingredientes:'Pescado (tilapia, salm??n, etc): 4 oz. Verduras (espinacas, br??coli, etc: 1 taza. Arroz integral: 1/2 taza. Aceite de oliva: 1 cucharada. Limon: 1/2 unidad',
  Preparacion:'1-Precalentar el horno a 375 grados. 2-Lavar y cortar las verduras en trozos peque??os. 3-Cocinar el arroz seg??n las instrucciones del paquete. 4-Colocar el pescado en una bandeja para hornear y sazonar con sal, pimienta y el zumo de medio lim??n. 5-Colocar las verduras alrededor del pescado y regar con una cucharada de aceite de oliva. 6-Hornear durante 15-20 minutos o hasta que el pescado est?? cocido y las verduras est??n suaves. 7-Servir el pescado con las verduras y el arroz integral.',
  Calorias: 350, Carbohidratos: 26, Proteinas: 46, Grasas: 22, Fibra: 4
  },
  
  Cena:{Titulo:'Habitas con huevos de codorniz',
  Ingredientes:'1/2 taza de habas (frescas o congeladas).2 huevos de codorniz.1/4 de cebolla, picada.1 diente de ajo, picado.1 tomate, picado.Sal y pimienta al gusto.Aceite de oliva.Queso rallado para gratinar (opcional)',
  Preparacion:'1-Cocinar las habas en agua con sal hasta que est??n suaves (alrededor de 5-7 minutos).2-Escurrir y reservar.3-En una sart??n, calentar un poco de aceite de oliva a fuego medio y a??adir la cebolla, ajo y tomate. Saltear hasta que est??n suaves.4-Agregar las habas y saltear por unos minutos m??s.5-Batir los huevos de codorniz y agregarlos a la sart??n con las habas y las verduras. Cocinar hasta que los huevos est??n seteados.6-Agregar sal y pimienta al gusto.7-Opcionalmente, gratinar con queso rallado antes de servir.', 
  Calorias: 200, Carbohidratos: 14, Proteinas: 14, Grasas: 10, Fibra: 5
  }},
  
  // Sabado
  Sabado:{Desayuno:{Titulo:'Tostadas de pan integral con queso cottage y frutas',
  Ingredientes:'Pan integral: 2 rebanadas. Queso cottage: 1/4 taza. Frutas (ej: fresas, pl??tano, kiwi): 1 taza',
  Preparacion:'1-Tostar las rebanadas de pan integral hasta que est??n doradas. 2-Colocar el queso cottage en las rebanadas de pan integral tostado. 3-Picar las frutas y colocarlas encima del queso cottage. 4-Servir y disfrutar.', 
  Calorias: 300, Carbohidratos: 47, Proteinas: 15, Grasas: 8, Fibra: 7
  },
  
  Almuerzo:{Titulo:'Pescado enchilado con verduras al horno',
  Ingredientes:'1 filete de pescado (tilapia, merluza, etc.).1/2 taza de verduras (pimiento, cebolla, zucchini, etc).1 cucharadita de aceite de oliva.1/2 cucharadita de sal.1/4 cucharadita de pimienta negra.1/4 taza de salsa de enchilada.1/4 taza de queso rallado',
  Preparacion:'1-Precalentar el horno a 200??C.2-Cortar las verduras en trozos peque??os y colocarlas en una bandeja para horno.3-Tempere el filete de pescado con sal, pimienta y aceite de oliva.4-Colocar el filete de pescado sobre las verduras en la bandeja.5-Verter la salsa de enchilada sobre el pescado y las verduras.6-Espolvorear el queso rallado sobre la salsa.7-Hornear por 20-25 minutos, hasta que el pescado est?? cocido y el queso est?? dorado.8-Servir caliente.', 
  Calorias: 400, Carbohidratos: 17, Proteinas: 35, Grasas: 20, Fibra: 2
  },
  
  Cena:{Titulo:'Bocadillo de pavo con jamon y verduras',
  Ingredientes:'Pan integral: 2 rebanadas. Pavo cocido: 3 onzas. jamon: 2 rebanadas. Verduras (ej: lechuga, tomate, pepino): 1 taza. Mostaza: 1 cucharada',
  Preparacion:'1-Calentar el pan integral en un tostador o en una sart??n. 2-Picar las verduras en trozos peque??os. 3-Colocar el pavo cocido, las rebanadas de jamon y las verduras en el pan integral caliente. 4-Agregar mostaza al gusto. 5-Servir y disfrutar.', 
  Calorias: 345, Carbohidratos: 30, Proteinas: 41, Grasas: 8, Fibra: 4
  }},
  
  //  Domingo
  Domingo:{Desayuno:{Titulo:'Tostadas de pan integral con queso y jam??n',
  Ingredientes:'Pan integral: 2 rebanadas. Queso: 2 rebanadas. Jam??n cocido: 2 lonjas',
  Preparacion:'1-Calienta una tostadora o una sart??n a fuego medio. 2-Coloca las rebanadas de pan integral en la tostadora o sart??n y tosta hasta que est??n doradas. 3-Retira del calor y coloca una rebanada de queso en cada rebanada de pan. 4-Coloca las lonchas de jam??n encima del queso. 5-Vuelve a colocar las tostadas en la tostadora o sart??n y cocina hasta que el queso se haya derretido. 6-Sirve y disfruta.', 
  Calorias: 300, Carbohidratos: 18, Proteinas: 32, Grasas: 12, Fibra: 3
  },
  
  Almuerzo:{Titulo:'Sopa de lentejas con verduras',
  Ingredientes:'Lentejas cocidas: 1 taza. Verduras (ej: zanahorias, papa, cebolla): 1 taza. Caldo de pollo/vegetal: 4 taza. Aceite de oliva: 1 cucharada',
  Preparacion:'1-Caliente el aceite de oliva en una olla a fuego medio y a??ada las verduras picadas.2-Sofr??a por unos minutos hasta que est??n suaves. 3-Agregue el caldo de pollo o vegetal y las lentejas cocidas y deje que hierva. 4-Reduzca el fuego y deje cocinar durante unos 15 minutos m??s hasta que las verduras est??n suaves. 5-Sirva caliente y disfrute.', 
  Calorias: 440, Carbohidratos: 54, Proteinas: 24, Grasas: 15, Fibra: 18 
  },
  
  Cena:{Titulo:'Tortilla de patatas',
  Ingredientes:'2 huevos. 100 gramos de patatas peladas y cortadas en rodajas finas.1/4 de cebolla cortada en rodajas finas.Aceite de oliva.Sal al gusto',
  Preparacion:'1-Calienta una sart??n antiadherente con un poco de aceite de oliva a fuego medio-alto.2-Agrega las patatas y la cebolla a la sart??n y fr??e hasta que est??n doradas y tiernas, aproximadamente 8-10 minutos.3-Mientras tanto, batir los huevos en un taz??n con una pizca de sal.4-Agrega las patatas y la cebolla a los huevos batidos y mezcla bien.5-Vierte la mezcla de huevo y patatas de vuelta a la sart??n y cocina a fuego medio-bajo hasta que est?? dorado por debajo, aproximadamente 5-7 minutos.6-Dale la vuelta a la tortilla con ayuda de un plato y termina de cocinar por el otro lado hasta que est?? bien dorado, aproximadamente 3-5 minutos m??s.7-Sirve la tortilla de patatas caliente.', 
  Calorias: 350, Carbohidratos: 30, Proteinas: 13, Grasas: 20, Fibra: 2
  }},
  
  }],
  
  
  
  
    }, {
        withCredentials: true
    })
    console.log(data);
    
  }
addTodo();
const id = window.location.pathname.split('/')[2]
window.location.pathname = `/recetas/${id}`;
})


btnCerrarSesion.addEventListener('click', e =>{
  window.location.pathname =  '/signup/'
})


btnProgreso.addEventListener('click', e =>{
  const id = window.location.pathname.split('/')[2];
  window.location.pathname = `progreso/${id}`
})



labelProgreso.addEventListener('click', e =>{
  const id = window.location.pathname.split('/')[2];
  window.location.pathname = `progreso/:${id}`
})

btnPerfil.addEventListener('click', e =>{
  const id = window.location.pathname.split('/')[2];
  window.location.pathname = `perfil/${id}`
})

// Telefono
btnPerfilMobile.addEventListener('click', e =>{
  const id = window.location.pathname.split('/')[2];
  window.location.pathname = `perfil/${id}`
})
btnProgresoMobile.addEventListener('click', e =>{
  const id = window.location.pathname.split('/')[2];
  window.location.pathname = `progreso/${id}`
})


svgRecetasMobile.addEventListener('click', e => {
  const id = window.location.pathname.split('/')[2]
  window.location.pathname = `/recetas/${id}`;
  })

  btnCerrarSesionMobile.addEventListener('click', e =>{
    window.location.pathname =  '/signup/'
  })




