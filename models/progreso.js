const mongoose = require('mongoose');

const progresoSchema = new mongoose.Schema({
    newDate:String,
    Enero: Array,
    pesoActualEnero: Number,
    pesoInicialEnero: Number,
    Febrero:Array,
    pesoActualFebrero: Number,
    pesoInicialFebrero: Number,
    Marzo:Array,
    pesoActualMarzo: Number,
    pesoInicialMarzo: Number,
    Abril:Array,
    pesoActualAbril: Number,
    pesoInicialAbril: Number,
    Mayo:Array,
    pesoActualMayo: Number,
    pesoInicialMayo: Number,
    Junio:Array,
    pesoActualJunio: Number,
    pesoInicialJunio: Number,
    Julio:Array,
    pesoActualJulio: Number,
    pesoInicialJulio: Number,
    Agosto:Array,
    pesoActualAgosto: Number,
    pesoInicialAgosto: Number,
    Septiembre:Array,
    pesoActualSeptiembre: Number,
    pesoInicialSeptiembre: Number,
    Octubre:Array,
    pesoActualOctubre: Number,
    pesoInicialOctubre: Number,
    Noviembre:Array,
    pesoActualNoviembre: Number,
    pesoInicialNoviembre: Number,
    Diciembre:Array,
    pesoActualDiciembre: Number,
    pesoInicialDiciembre: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

progresoSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Progreso = mongoose.model('Progreso', progresoSchema);

module.exports = Progreso;