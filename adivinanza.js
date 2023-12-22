const nroRandom = () => {
    return Math.floor(Math.random() * 100) + 1;
};

const verificar = (nroSecreto, nroAdivinado) => {
    if (nroAdivinado === nroSecreto) {
    console.log('¡Felicitaciones! ¡Adivinaste el número secreto!');
    } else if (nroAdivinado > nroSecreto) {
    console.log('El número secreto es menor. ¡Sigue intentando!');
    } else {
    console.log('El número secreto es mayor. ¡Sigue intentando!');
    }
};

module.exports = {
    nroRandom,
    verificar
};
