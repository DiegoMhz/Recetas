const recetasRouter = require('express').Router();
const User = require('../models/user');
const Recetas = require('../models/recetas');

recetasRouter.post('/', async (request, response) => {
    const { user } = request;
    if (!user) {
        return response.sendStatus(401);
    }
   const {carbohidratos} = request.body
   const {grasas} = request.body
   const  {proteinas} = request.body
    const {fibra} = request.body
    const {btnRecetas} = request.body
   const {comidasCompletadas} = request.body
    const { SemanaUno } = request.body;
    const { SemanaDos } = request.body;
    const { SemanaTres } = request.body;
    const { SemanaCuatro } = request.body;
    const { calorias } = request.body;
    const  { CardUno } = request.body;
    const  { CardDos } = request.body;
    const  { CardTres } = request.body;
    const { Card4 } = request.body;
   const { Card5} = request.body;
   const { Card6} = request.body;
   const { Card7} = request.body;
   const { Card8} = request.body;
   const { Card9} = request.body;
   const { Card10} = request.body;
   const { Card11} = request.body;
   const { Card12} = request.body;
   const { Card13} = request.body;
   const { Card14} = request.body;
   const { Card15} = request.body;
   const { Card16} = request.body;
   const { Card17} = request.body;
   const { Card18} = request.body;
   const { Card19} = request.body;
   const { Card20} = request.body;
   const { Card21} = request.body;
   const { Card22} = request.body;
   const { Card23} = request.body;
   const { Card24} = request.body;
   const { Card25} = request.body;
   const { Card26} = request.body;
   const { Card27} = request.body;
   const { Card28} = request.body;
   const { Card29} = request.body;
   const { Card30} = request.body;
   const { Card31} = request.body;
   const { Card32} = request.body;
   const { Card33} = request.body;
   const { Card34} = request.body;
   const { Card35} = request.body;
   const { Card36} = request.body;
   const { Card37} = request.body;
   const { Card38} = request.body;
   const { Card39} = request.body;
   const { Card40} = request.body;
   const { Card41} = request.body;
   const { Card42} = request.body;
   const { Card43} = request.body;
   const { Card44} = request.body;
   const { Card45} = request.body;
   const { Card46} = request.body;
   const { Card47} = request.body;
   const { Card48} = request.body;
   const { Card49} = request.body;
   const { Card50} = request.body;
   const { Card51} = request.body;
   const { Card52} = request.body;
   const { Card53} = request.body;
   const { Card54} = request.body;
   const { Card55} = request.body;
   const { Card56} = request.body;
   const { Card57} = request.body;
   const { Card58} = request.body;
   const { Card59} = request.body;
   const { Card60} = request.body;
   const { Card61} = request.body;
   const { Card62} = request.body;
   const { Card63} = request.body;
   const { Card64} = request.body;
   const { Card65} = request.body;
   const { Card66} = request.body;
   const { Card67} = request.body;
   const { Card68} = request.body;
   const { Card69} = request.body;
   const { Card70} = request.body;
   const { Card71} = request.body;
   const { Card72} = request.body;
   const { Card73} = request.body;
   const { Card74} = request.body;
   const { Card75} = request.body;
   const { Card76} = request.body;
   const { Card77} = request.body;
   const { Card78} = request.body;
   const { Card79} = request.body;
   const { Card80} = request.body;
   const { Card81} = request.body;
   const { Card82} = request.body;
   const { Card83} = request.body;
   const { Card84} = request.body;
  

    const newRecetas = new Recetas({
        carbohidratos,
        fibra,
        grasas,
        proteinas,
        btnRecetas,
        comidasCompletadas,
        calorias,
        SemanaUno,
        SemanaDos,
        SemanaTres,
        SemanaCuatro,
       CardUno,
       CardDos,
       CardTres,
       Card4,
       Card5,
       Card6,
       Card7,
       Card8,
       Card9,
       Card10,
       Card11,
       Card12,
       Card13,
       Card14,
       Card15,
       Card16,
       Card17,
       Card18,
       Card19,
       Card20,
       Card21,
       Card22,
       Card23,
       Card24,
       Card25,
       Card26,
       Card27,
       Card28,
       Card29,
       Card30,
       Card31,
       Card32,
       Card33,
       Card34,
       Card35,
       Card36,
       Card37,
       Card38,
       Card39,
       Card40,
       Card41,
       Card42,
       Card43,
       Card44,
       Card45,
       Card46,
       Card47,
       Card48,
       Card49,
       Card50,
       Card51,
       Card52,
       Card53,
       Card54,
       Card55,
       Card56,
       Card57,
       Card58,
       Card59,
       Card60,
       Card61,
       Card62,
       Card63,
       Card64,
       Card65,
       Card66,
       Card67,
       Card68,
       Card69,
       Card70,
       Card71,
       Card72,
       Card73,
       Card74,
       Card75,
       Card76,
       Card77,
       Card78,
       Card79,
       Card80,
       Card81,
       Card82,
       Card83,
       Card84,
        user: user._id
    });
    const savedRecetas = await newRecetas.save();
    response.status(201).json(savedRecetas);
});

recetasRouter.get('/', async (request, response) => {
    const { user } = request;
    if (!user) {
        return response.sendStatus(401);
    }
    const Recetass = await Recetas.find({ user: user._id });
    response.status(200).json(Recetass);
});

recetasRouter.delete('/:id', async (request, response) => {
    const { user } = request;
    console.log(request.params.id);
    if (!user) {
        return response.sendStatus(401);
    }
    await Recetas.findByIdAndDelete(request.params.id);
    response.status(204);
});

recetasRouter.patch('/:id', async (request, response) => {
    const { user } = request;
    if (!user) {
        return response.sendStatus(401);
    }
    console.log(request.body);
    const {carbohidratos} = request.body
    const {grasas} = request.body
    const  {proteinas} = request.body
    const {fibra} = request.body
    const {comidasCompletadas} = request.body
    const { CardUno } = request.body;
    const  { CardDos } = request.body;
    const  { CardTres } = request.body;
    const  { calorias } = request.body;
    const   { Card4 } = request.body;
    const { Card5} = request.body;
    const { Card6} = request.body;
    const { Card7} = request.body;
    const { Card8} = request.body;
    const { Card9} = request.body;
    const { Card10} = request.body;
    const { Card11} = request.body;
    const { Card12} = request.body;
    const { Card13} = request.body;
    const { Card14} = request.body;
    const { Card15} = request.body;
    const { Card16} = request.body;
    const { Card17} = request.body;
    const { Card18} = request.body;
    const { Card19} = request.body;
    const { Card20} = request.body;
    const { Card21} = request.body;
    const { Card22} = request.body;
    const { Card23} = request.body;
    const { Card24} = request.body;
    const { Card25} = request.body;
    const { Card26} = request.body;
    const { Card27} = request.body;
    const { Card28} = request.body;
    const { Card29} = request.body;
    const { Card30} = request.body;
    const { Card31} = request.body;
    const { Card32} = request.body;
    const { Card33} = request.body;
    const { Card34} = request.body;
    const { Card35} = request.body;
    const { Card36} = request.body;
    const { Card37} = request.body;
    const { Card38} = request.body;
    const { Card39} = request.body;
    const { Card40} = request.body;
    const { Card41} = request.body;
    const { Card42} = request.body;
    const { Card43} = request.body;
    const { Card44} = request.body;
    const { Card45} = request.body;
    const { Card46} = request.body;
    const { Card47} = request.body;
    const { Card48} = request.body;
    const { Card49} = request.body;
    const { Card50} = request.body;
    const { Card51} = request.body;
    const { Card52} = request.body;
    const { Card53} = request.body;
    const { Card54} = request.body;
    const { Card55} = request.body;
    const { Card56} = request.body;
    const { Card57} = request.body;
    const { Card58} = request.body;
    const { Card59} = request.body;
    const { Card60} = request.body;
    const { Card61} = request.body;
    const { Card62} = request.body;
    const { Card63} = request.body;
    const { Card64} = request.body;
    const { Card65} = request.body;
    const { Card66} = request.body;
    const { Card67} = request.body;
    const { Card68} = request.body;
    const { Card69} = request.body;
    const { Card70} = request.body;
    const { Card71} = request.body;
    const { Card72} = request.body;
    const { Card73} = request.body;
    const { Card74} = request.body;
    const { Card75} = request.body;
    const { Card76} = request.body;
    const { Card77} = request.body;
    const { Card78} = request.body;
    const { Card79} = request.body;
    const { Card80} = request.body;
    const { Card81} = request.body;
    const { Card82} = request.body;
    const { Card83} = request.body;
    const { Card84} = request.body;
    await Recetas.findByIdAndUpdate(request.params.id, {
      CardUno: CardUno,
      CardDos:CardDos,
      CardTres:CardTres,
      Card4:Card4,
       Card5,
       Card6,
       Card7,
       Card8,
       Card9,
       Card10,
       Card11,
       Card12,
       Card13,
       Card14,
       Card15,
       Card16,
       Card17,
       Card18,
       Card19,
       Card20,
       Card21,
       Card22,
       Card23,
       Card24,
       Card25,
       Card26,
       Card27,
       Card28,
       Card29,
       Card30,
       Card31,
       Card32,
       Card33,
       Card34,
       Card35,
       Card36,
       Card37,
       Card38,
       Card39,
       Card40,
       Card41,
       Card42,
       Card43,
       Card44,
       Card45,
       Card46,
       Card47,
       Card48,
       Card49,
       Card50,
       Card51,
       Card52,
       Card53,
       Card54,
       Card55,
       Card56,
       Card57,
       Card58,
       Card59,
       Card60,
       Card61,
       Card62,
       Card63,
       Card64,
       Card65,
       Card66,
       Card67,
       Card68,
       Card69,
       Card70,
       Card71,
       Card72,
       Card73,
       Card74,
       Card75,
       Card76,
       Card77,
       Card78,
       Card79,
       Card80,
       Card81,
       Card82,
       Card83,
       Card84,
      calorias:calorias,
      comidasCompletadas: comidasCompletadas,
      carbohidratos: carbohidratos,
      fibra: fibra,
      grasas: grasas,
      proteinas: proteinas
    });
    response.sendStatus(200);
});

module.exports = recetasRouter;
