const mongoose = require('mongoose');

const progresoSchema = new mongoose.Schema({
    calorias: Number,
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