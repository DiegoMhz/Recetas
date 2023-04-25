const progresoRouter = require('express').Router();
const User = require('../models/user');
const Progreso = require('../models/progreso');

progresoRouter.post('/', async (request, response) => {
    const { user } = request;
    if (!user) {
        return response.sendStatus(401);
    }
    const { calorias } = request.body;

    console.log(request.body);

    const newProgreso = new Progreso({
        calorias,
        user: user._id
    });
    const savedProgreso = await newProgreso.save();
    response.status(201).json(savedProgreso);
});

progresoRouter.get('/', async (request, response) => {
    const { user } = request;
    if (!user) {
        return response.sendStatus(401);
    }
    const progreso = await Progreso.find({ user: user._id });
    response.status(200).json(progreso);
});

progresoRouter.delete('/:id', async (request, response) => {
    const { user } = request;
    console.log(request.params.id);
    if (!user) {
        return response.sendStatus(401);
    }
    await Progreso.findByIdAndDelete(request.params.id);
    response.status(204);
});

progresoRouter.patch('/:id', async (request, response) => {
    const { user } = request;
    console.log(user);
    
    if (!user) {
        return response.sendStatus(401);
    }
    console.log(request.body);
    const { calorias } = request.body;
    console.log(request.body);
    await Progreso.findByIdAndUpdate(request.params.id, {
       calorias: calorias
    });
    response.sendStatus(200);

});


// progresoRouter.patch('/:id', async (request, response) => {
//     const { user } = request;
//     console.log(user);
//     if (!user) {
//         return response.sendStatus(401);
//     }
//     const { calorias } = request.body;
//     console.log(request.params.id);
//     await Progreso.findByIdAndUpdate(request.params.id, {
//         calorias,
//     });
//     response.sendStatus(200);

// });

module.exports = progresoRouter;