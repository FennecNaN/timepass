const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <h1>End Route</h1>
        <p>Bienvenido a la ruta final</p>
        <a href="/">
        <button>Home</button>
        </a>
    `);
});

module.exports = router;