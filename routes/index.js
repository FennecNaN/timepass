const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>Bienvenido</h1>
        <p>Hora actual: ${req.horaActual}</p>
        <a href="/endroute">
        <button>Entrar</button>
        </a>   
    `);
});

module.exports = router;