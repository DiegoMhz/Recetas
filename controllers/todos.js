const todosRouter = require('express').Router();
const User = require('../models/user');
const Todo = require('../models/todo');

todosRouter.post('/', async (request, response) => {
    const { user } = request;
    if (!user) {
        return response.sendStatus(401);
    }
    const { actividad } = request.body;
    const { meta } = request.body;
    const { altura } = request.body;
    const { peso } = request.body;
    const { masculino } = request.body;
    const { femenino } = request.body;
    const { edad } = request.body;
    const { Enero } = request.body;
    const { Febrero } = request.body;
    const { Marzo } = request.body;
    const { Abril } = request.body;
    const { Mayo } = request.body;
    const { Junio } = request.body;
    const { Julio } = request.body;
    const { Agosto } = request.body;
    const { Septiembre } = request.body;
    const { Octubre } = request.body;
    const { Noviembre } = request.body;
    const { Diciembre } = request.body;
    const {pesoEdit} = request.body
    const {newDate} = request.body
    console.log(request.body);

    const newTodo = new Todo({
        newDate,
        Enero,
        Febrero,
        Marzo,
        Abril,
        Mayo,
        Junio,
        Julio,
        Agosto,
        Septiembre,
        Octubre,
        Noviembre,
        Diciembre,
        actividad,
        pesoEdit,
        meta,
        altura,
        peso,
        edad,
        masculino,
        femenino,
        user: user._id
    });
    const savedTodo = await newTodo.save();
    response.status(201).json(savedTodo);
});

todosRouter.get('/', async (request, response) => {
    const { user } = request;
    if (!user) {
        return response.sendStatus(401);
    }
    const todos = await Todo.find({ user: user._id });
    response.status(200).json(todos);
});

todosRouter.delete('/:id', async (request, response) => {
    const { user } = request;
    console.log(request.params.id);
    if (!user) {
        return response.sendStatus(401);
    }
    await Todo.findByIdAndDelete(request.params.id);
    response.status(204);
});


todosRouter.patch('/:id', async (request, response) => {
    const { user } = request;
    console.log(user);
    
    if (!user) {
        return response.sendStatus(401);
    }
    console.log(request.body);
    const { peso } = request.body;
    const { edad } = request.body;
    const { meta } = request.body;
    const { Marzo } = request.body;
    const { Abril } = request.body;
    const { Mayo } = request.body;
    const { Junio } = request.body;
    const { Julio } = request.body;
    const { Agosto } = request.body;
    const { Septiembre } = request.body;
    const { Octubre } = request.body;
    const { Noviembre } = request.body;
    const { Diciembre } = request.body;
    const { Enero } = request.body;
    const { Febrero } = request.body;
    const { pesoEdit } = request.body;
    console.log(Enero);
    await Todo.findByIdAndUpdate(request.params.id, {
        Marzo: Marzo,
        Abril : Abril,
        Mayo: Mayo,
        Julio: Julio,
        Junio: Junio,
        Agosto: Agosto,
        Septiembre: Septiembre,
        Octubre: Octubre,
        Noviembre: Noviembre,
        Diciembre: Diciembre,
        pesoEdit: pesoEdit,
        Febrero: Febrero,
        Enero: Enero,
        peso: peso,
        edad: edad,
        meta:meta

    });
    response.sendStatus(200);

});

module.exports = todosRouter;
