
const fs = require('fs');


const crearArchivoTabla = async (base = 5) => {


    try {

        let salida = '';
        console.log("=======================")
        console.log('    TABLA DEL', base)
        console.log("=======================")
        for (let i = 1; i <= 10; i++) {
            let result = base * i;
            salida += (`${base} x ${i} = ${result}\n`)
        }

        console.log(salida)

        fs.writeFileSync(`tabla_${base}.txt`, salida);
        return `tabla-${base}.txt`
    } catch (err) {
        throw err;
    }
};



module.exports = {
    crearArchivoTabla
}