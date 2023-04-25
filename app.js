require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const todosRouter = require('./controllers/todos');
const recetasRouter = require('./controllers/recetas');
const progresoRouter = require('./controllers/progreso');
const auth = require('./middleware/auth');
const cookieParser = require('cookie-parser');
const logoutRouter = require('./controllers/logout');
const morgan = require('morgan');
(async () => {

    try {
        await mongoose.connect(process.env.MONGO_URI_TEST);
        console.log('Conectado a Mongo DB');
    } catch (error) {
        console.log(error);
    }

})();

// MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use(morgan('tiny'));
app.use(cookieParser());

// Routes backend
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/todos', auth, todosRouter);
app.use('/api/recetas', auth, recetasRouter);
app.use('/api/progreso', auth, progresoRouter);
app.use('/api/logout', logoutRouter);
// FRONT END
app.use('/', express.static(path.join(__dirname, 'views', 'home')));
app.use('/signup', express.static(path.join(__dirname, 'views', 'registro')));
app.use('/app/:id', express.static(path.join(__dirname, 'views', 'app')));
app.use('/login', express.static(path.join(__dirname, 'views', 'login')));
app.use('/principal/:id', express.static(path.join(__dirname, 'views', 'principal')));
app.use('/recetas/:id', express.static(path.join(__dirname, 'views', 'receta')));
app.use('/verificar/:id', express.static(path.join(__dirname, 'views', 'verificar')));
app.use('/progreso/:id', express.static(path.join(__dirname, 'views', 'progreso')));
app.use('/perfil/:id', express.static(path.join(__dirname, 'views', 'perfil')));
app.use('*', express.static(path.join(__dirname, 'views', '404')));







module.exports = app;
