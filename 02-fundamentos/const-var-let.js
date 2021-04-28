/*
    let y const crean variables a nivel de scope mientras que var lo hace de manera global
*/
var nombre = 'Wolverine';

if(true){
    let nombre = 'Magneto';
    console.log(nombre);
}

console.log(nombre)