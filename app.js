const { crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
require('colors')
// var colors = require('colors/safe'); Solo si quieres utilizar el colors


console.clear();

// console.log(process.argv);
// console.log('base:yargs',argv.b);
// const [,,arg3 = 'base=5'] = process.argv;
// const [,base = 5]=arg3.split('=');
// console.log(base) 
// const base = 5;

crearArchivo(argv.b,argv.l,argv.h)
.then(nombreArchivo => console.log(nombreArchivo.rainbow,'creado'))
.catch(err=> console.log(err));




