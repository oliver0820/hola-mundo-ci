// index.test.js

const holaMundo = require('./index');

test('retorna "Hola, Mundo!, estan listos para programar?"', () => {
    expect(holaMundo()).toBe("Hola, Mundo!, estan listos para programar?");
});
