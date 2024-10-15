function mostrar()
{
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    let genero = document.getElementById("genero").value;

    let persona = nombre + "," + apellido + "," + edad + "," +  genero + ";\n"

    document.getElementById("personas").value += persona;
}
  