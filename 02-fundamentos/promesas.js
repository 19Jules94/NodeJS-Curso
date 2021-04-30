const empleados = [
    {
        id: 1,
        nombre: 'Jules'
    },
    {
        id: 2,
        nombre: 'Sara'
    },
    {
        id: 3,
        nombre: 'David'
    }
];

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 1200
    },

];

const getEmpleado = (id) => {
    const empleado = empleados.find(e => e.id === id)?.nombre;

    return new Promise((resolve, reject) => {
        (empleado) ? resolve(empleado) : reject(`No existe el empleado con id ${id}`);
    });


}
const getSalario = (id) => {
    const salario = salarios.find(s => s.id === id)?.salario;
    return new Promise((resolve, reject) => {
        (salario) ? resolve(salario) : reject(`No existe el salario del empleado con id ${id}`)
    });
}
const id = 4;
// getEmpleado(id)
//     .then(empleado => console.log(empleado))
//     .catch(err => console.log(err));

// getSalario(id)
//     .then(salario => console.log(salario))
//     .catch(err => console.log(err));

// getEmpleado(id)
//     .then(empleado => {
//         getSalario(id)
//             .then(salario => {
//                 console.log('El empleado: ', empleado, 'tiene de salario: ', salario);
//             })
//             .catch(err => console.log(err))
//     })
//     .catch(err => console.log(err))


//PROMESAS EN CADENA

let nombre;
getEmpleado(id)
    .then(empleado => { 
        nombre = empleado;
        return getSalario(id) 
    })
    .then(salario => console.log())
    .catch(err => console.log(err));