//setTimeout(()=>{
//  console.log("Hola mundu");
//},2000)

const getUSuarioByID = (id, callback) => {
    const user = {
        id,
        nombre: 'Jules'
    }
    setTimeout(() => {
        callback(user)
    }, 1500)
};

getUSuarioByID(10,(usuario)=>{
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
});