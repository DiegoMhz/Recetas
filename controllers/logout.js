const logoutRouter = require('express').Router();

logoutRouter.get('/', async(request, response)=>{
    console.log('SISISIISSISISI lO estaa');
    const cookies = request.cookies

    if (!cookies.acessToken) return response.sendStatus (401);
    response.clearCookie('acessToken', {
        secure: process.env.NODE_ENV === 'production',
        httpOnly: true
    })
    response.sendStatus(201);
})

module.exports = logoutRouter;