const botao_background = document.querySelector("#botao_background");
const botao_enviar = document.querySelector("#enviar_input_texto");
let inputUsuario


botao_background.addEventListener("click", () => {
    document.querySelector("body").setAttribute("style", "background-color:pink");
})

botao_enviar.addEventListener("click", () => {
    lista = document.querySelector("body").innerHTML += "<ul id='lista'></ul>"
    const newItem = document.createElement("li");  
    // inputUsuario = document.querySelector("#input__usuario").value;
    // newItem.appendChild(inputUsuario);
    lista.appendChild(newItem);

    console.log();
})


