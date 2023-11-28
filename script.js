// Script JS de ejercicio 1
function añadirP(){
    const info = document.querySelector("#input-text").value
    var elemento = document.createElement("p");
    elemento.innerHTML=info;
 

    const contenedor = document.querySelector("#resultado")
    contenedor.appendChild(elemento)
}

