const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');


usersRouter.post('/', async (request, response) => {
    const PASSWORD_REGEX =  /^(?=.*\d)(?=.*[a-z]).{5,}$/;
    const { name, email, password } = request.body;
    const userExist = await User.findOne({ email });

    if (userExist) {
        return response.status(400).json({ error: 'El email ya existe' });
    } else if (!PASSWORD_REGEX.test(password)) {
        return response.status(400).json({ error: 'La contraseña es erronea' })
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
        name,
        email,
        passwordHash
    });

    console.log(user, passwordHash);

   const savedUser = await user.save();
    let transporter = nodemailer.createTransport({
        host: process.env.GOOGLE_HOST,
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.GOOGLE_USER, // generated ethereal user
          pass: process.env.GOOGLE_PASS, // generated ethereal password
        },
      });

      const userForToken = {
        id: savedUser._id,
        email: savedUser.email
    }
    console.log(savedUser.id);

    const emailToken = jwt.sign(userForToken, process.env.ACCESS_TOKEN, { expiresIn: '1d' })

    
      // send mail with defined transport object
       await transporter.sendMail({
        from: process.env.GOOGLE_USER, // sender address
        to: email, // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<p>Verificar</p> <a href="https://recetas-cfpp.onrender.com/verificar/${savedUser.id}/">Verificate</a>` , // html body``
      });

    response.sendStatus(201);
});


usersRouter.patch('/:id', async (request, response) => {
    await User.findByIdAndUpdate(request.params.id, {
        verificar:true
    });
    return response.status(200).json(true);
});

usersRouter.put('/:id', async (request, response) => {
  await User.findByIdAndUpdate(request.params.id, {
      newUser : false
  });
  return response.sendStatus(200);
});


module.exports = usersRouter;
