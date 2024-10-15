function pruebaJs()
{
    num = 20;
    let B = num >> 1;
    let M = num << 1;
    alert( `Numero: ${B}`);
}
function autoIncrement()
{
    //pre:
    num = 20;
    x = 10;
    alert(`Pre: ${(++num)-x}`);
    //post:
    num = 20;
    x = 10;
    alert(`Post: ${(num++)-x}`);
}
function ternario()
{
    //Ternario: condicional abreviado/en linea
    let num = 10;
    num < 10 ? ++num : --num;
    alert(num);
}
