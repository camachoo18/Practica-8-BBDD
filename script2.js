function lanzaDados(){
    const data = document.querySelector("#input-text").value
    const tirada = data.split("d")
    const mis_dados =[]
    for( let i = 0; i < tirada[0]; i++){
        const resultado = Math.floor(Math.random() * tirada[1]) + 1
        mis_dados.push(resultado)
    }
    return mis_dados

}




