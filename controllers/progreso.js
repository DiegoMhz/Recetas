const progresoRouter = require('express').Router();
const User = require('../models/user');
const Progreso = require('../models/progreso');

progresoRouter.post('/', async (request, response) => {
    const { user } = request;
    if (!user) {
        return response.sendStatus(401);
    }
    const { newDate } = request.body;
    const { Enero } = request.body;
    const { pesoActualEnero } = request.body;
    const { pesoInicialEnero } = request.body;
    const { Febrero } = request.body;
    const { pesoActualFebrero } = request.body;
    const { pesoInicialFebrero } = request.body;
    const { Marzo } = request.body;
    const { pesoActualMarzo } = request.body;
    const { pesoInicialMarzo } = request.body;
    const { Abril } = request.body;
    const { pesoActualAbril } = request.body;
    const { pesoInicialAbril } = request.body;
    const { Mayo } = request.body;
    const { pesoActualMayo } = request.body;
    const { pesoInicialMayo } = request.body;
    const { Junio } = request.body;
    const { pesoActualJunio } = request.body;
    const { pesoInicialJunio } = request.body;
    const { Julio } = request.body;
    const { pesoActualJulio } = request.body;
    const { pesoInicialJulio } = request.body;
    const { Agosto } = request.body;
    const { pesoActualAgosto } = request.body;
    const { pesoInicialAgosto } = request.body;
    const { Septiembre } = request.body;
    const { pesoActualSeptiembre } = request.body;
    const { pesoInicialSeptiembre } = request.body;
    const { Octubre } = request.body;
    const { pesoActualOctubre } = request.body;
    const { pesoInicialOctubre } = request.body;
    const { Noviembre } = request.body;
    const { pesoActualNoviembre } = request.body;
    const { pesoInicialNoviembre } = request.body;
    const { Diciembre } = request.body;
    const { pesoActualDiciembre } = request.body;
    const { pesoInicialDiciembre } = request.body;

    console.log(request.body);

    const newProgreso = new Progreso({
        newDate,
        Enero,
        pesoActualEnero,
        pesoInicialEnero,
        Febrero,
        pesoActualFebrero,
        pesoInicialFebrero,
        Marzo,
        pesoActualMarzo,
        pesoInicialMarzo,
        Abril,
        pesoActualAbril,
        pesoInicialAbril,
        Mayo,
        pesoActualMayo,
        pesoInicialMayo,
        Junio,
        pesoActualJunio,
        pesoInicialJunio,
        Julio,
        pesoActualJulio,
        pesoInicialJulio,
        Agosto,
        pesoActualAgosto,
        pesoInicialAgosto,
        Septiembre,
        pesoActualSeptiembre,
        pesoInicialSeptiembre,
        Octubre,
        pesoActualOctubre,
        pesoInicialOctubre,
        Noviembre,
        pesoActualNoviembre,
        pesoInicialNoviembre,
        Diciembre,
        pesoActualDiciembre,
        pesoInicialDiciembre,
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
    console.log(request.params);
    if (!user) {
        return response.sendStatus(401);
    }
    console.log(request.body);
    const { pesoinicial } = request.body;
    const { pesoActual } = request.body;
    console.log(pesoinicial);
    console.log(pesoActual);
    await Progreso.findByIdAndUpdate(request.params.id, {
        Enero: [{
        mes: 'Enero',
        pesoinicial : pesoinicial,
        pesoActual : pesoActual,
                  }],
    });
    response.sendStatus(200);

});

module.exports = progresoRouter;