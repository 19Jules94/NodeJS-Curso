

const { crearArchivoTabla } = require('./helpers/multiplicar')
const argv = require('yargs')
                .option('b',{
                    alias:'base',
                    type:'number',
                    demandOption:true
                })
                .check((argv,options)=>{
                    if(isNaN(argv.b)){
                        throw 'La base tiene que ser un numero'
                    }
                    return true;
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    op

                })
                .argv;
                
console.clear();

console.log(argv);


// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

crearArchivoTabla(argv.b)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));

