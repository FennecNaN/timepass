const obtenerHora = (req, res, next) => {
    const now = new Date();
    const hours = now.getHours();
    let minutes = now.getMinutes();
    if (minutes >= 0 && minutes <= 9) {
        minutes = '0' + minutes;
    }
    req.horaActual = `${hours}:${minutes}`
    next();
};

module.exports = obtenerHora;