let personas = [];

function agregar()
{
    let identificacion = document.getElementById("identificacion").value;
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let tel = document.getElementById("tel").value;

    let persona = new Persona(identificacion, nombre, apellido, edad, tel);
    personas.push(persona);



}
function buscarMayor()
{
    
}

class Persona {
    constructor(identificacion, nombre, apellido, edad, tel) {
        this.identificacion = identificacion;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.tel = tel;
    }
}