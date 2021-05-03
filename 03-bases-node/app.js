

const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('yargs').argv
console.clear();

console.log(process.argv);

const [, , arg3 = 'base=5'] = process.argv;
const [, base = 5] = arg3.split('=');

crearArchivoTabla(base)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

