const mongoose = require('mongoose');

const recetasSchema = new mongoose.Schema({
    nombre: String,
    actividad: String,
    newDate : String,
    meta: String,
    altura: Number,
    peso: Number,
    edad: Number,
    pesoEdit : Number,
    Enero: Array,
    Febrero: Array,
    Marzo: Array,
    Abril: Array,
    Mayo: Array,
    Junio: Array,
    Julio: Array,
    Agosto: Array,
    Septiembre: Array,
    Octubre: Array,
    Noviembre: Array,
    Diciembre:Array,
    masculino: Boolean,
    femenino: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

recetasSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Todo = mongoose.model('Todo', recetasSchema);

module.exports = Todo;