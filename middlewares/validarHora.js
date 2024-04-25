const validarHora = (req, res, next) => {
    if (req.horaActual >= "12:00" && req.horaActual <= "24:00") {
        next();
    } else {
        res.send(`
            <h1>Bienvenido</h1>
            <p>Hora actual: ${req.horaActual}</p>
            <span>Aún no son las 12 de la mañana</span>
            <a href="/endroute">
            <button>Entrar</button>
            </a>
    `);
    }
};

module.exports = validarHora;

