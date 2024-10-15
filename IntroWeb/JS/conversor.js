let euro = 10;
document.write(`${euro} Euros son  ${euro*1.08} Dolares <br>`);
document.write(`${euro} Euros son ${euro*133.75} Yen`); 

function copUS()
{
    let dolar = 4100;
    let cop1 = document.getElementById("cop").value;
    // alert(`Cop: ${cop1}`);
    document.getElementById("copUs").value = (cop1 / dolar).toFixed(2);
    


}

function copMXp()
{
    let mxp = 215.49;
    let cop1 = document.getElementById("cop").value;
    // alert(`Cop: ${cop1}`);
    document.getElementById("copMxp").value = (cop1 / mxp).toFixed(2);

}