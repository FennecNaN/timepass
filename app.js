const express = require('express');
const obtenerMiddleware = require('./middlewares/horaMiddleware');
const validarMiddleware = require('./middlewares/validarHora');
const indexRouter = require('./routes/index');
const endrouteRouter = require('./routes/endroute');
const app = express();
app.use(obtenerMiddleware);

app.get('/', indexRouter);
app.use('/endroute', validarMiddleware, endrouteRouter);


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});