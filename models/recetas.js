const mongoose = require('mongoose');

const todosSchema = new mongoose.Schema({ 
    SemanaUno: Array,
    SemanaDos: Array,
    SemanaTres: Array,
    SemanaCuatro: Array,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

todosSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString();
        delete returnedObject._id;
        delete returnedObject.__v;
    }
});

const Recetas = mongoose.model('Recetas', todosSchema);

module.exports = Recetas;