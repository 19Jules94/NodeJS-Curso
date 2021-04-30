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

const getInfoUsuario = async (id) => {
    try {
        const empleado = await (getEmpleado(id));
        const salario = await (getSalario(id));
        return `El empleado: ${empleado} tiene de salario:  ${salario}`;
    } catch (error) {
        throw error;
    }
}

const id = 3;

getInfoUsuario(id)
    .then(msg => console.log(msg))
    .catch(err => console.log(err));

