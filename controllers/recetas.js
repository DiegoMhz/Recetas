const recetasRouter = require('express').Router();
const User = require('../models/user');
const Recetas = require('../models/Recetas');

recetasRouter.post('/', async (request, response) => {
    const { user } = request;
    if (!user) {
        return response.sendStatus(401);
    }
    // const { text } = request.body;
    // const {telefono}=request.body;
    // console.log(telefono);
    // Lunes
   
    const { SemanaUno } = request.body;
    const { SemanaDos } = request.body;
    const { SemanaTres } = request.body;
    const { SemanaCuatro } = request.body;
   


    const newRecetas = new Recetas({
        SemanaUno,
        SemanaDos,
        SemanaTres,
        SemanaCuatro,
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
    const { telefono } = request.body;
    const { text } = request.body;
    await Recetas.findByIdAndUpdate(request.params.id, {
        text: text,
        telefono: telefono
    });
    response.sendStatus(200);
    console.log(telefono, text);

});

module.exports = recetasRouter;
