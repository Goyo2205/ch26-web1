console.log("mensaje de log");

function changeGretting(){
    const clientName = getNameOfClient();
    //obtener referencia de label h1
    const grettingReference = getReferenceOfIdGrettings();
    grettingReference.innerHTML = "Hola " + clientName;
}

function getNameOfClient(){
    const clientName = prompt("Escribe tu nombre");
    return clientName;
}
function getReferenceOfIdGrettings(){
    return document.getElementById("Gretting");
}