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

const getEmpleado = (id, callback) => {
    const empleado = empleados.find(e => e.id === id)

    if (empleado) {
        callback(null,empleado);
    } else {
        callback(`El empleado con id ${id} no existe`);
    }

}

getEmpleado(5, (err, empleado) => {
    if (err) {
        console.log("ERROR!!")
        return console.log(err);
    }
    console.log("EMPLEADO!!")
    console.log(empleado);

});