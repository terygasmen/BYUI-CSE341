const express = require('express');
const bodyParser : BodyParser = require('body-parser');

const professionalRoutes : Router = require('./routes/professional');

const app : Express = express();

app.use(bodyParser.json());

app.use((req : Request<ParamsDictionary, a..., res : Response<any, Record<string..., next : NextFunction) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

app.use('/professional', professionalRoutes);

app.listen(8080);