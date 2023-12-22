const readlineSync = require('readline-sync');

const {nroRandom, verificar} = require('./adivinanza');

const nroUsuario = () => {
    const input = readlineSync.question('Ingresa un numero: ');
    return parseInt(input, 10);
};

const juegoAdivinanza = () => {
    const nroSecreto = nroRandom();
    let nroAdivinado = 0;

    console.log('¡Bienvenido a Adivina el número secreto!');
    console.log('Intenta adivinar el número del 1 al 100.\n');

    while (nroAdivinado !== nroSecreto) {
        nroAdivinado = nroUsuario();
        verificar(nroSecreto, nroAdivinado);
    }
};

juegoAdivinanza();