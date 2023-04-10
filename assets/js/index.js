console.log("mensaje de log");

function changeGretting(){
    const clientName = getNameOfClient();
    console.log("mmm");
}

function getNameOfClient(){
    const clientName = prompt("Escribe tu nombre");
    return clientName;
}