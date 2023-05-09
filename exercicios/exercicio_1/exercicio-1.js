const botao_background = document.querySelector("#botao_background");
const botao_enviar = document.querySelector("#enviar_input_texto");
const botao_abrir = document.querySelector('#botao_presente');

let inputUsuario


botao_background.addEventListener("click", () => {
    if (document.querySelector("body").style.backgroundColor == "pink") {
        document.querySelector("body").setAttribute("style", "background-color:white");
        return;
    }
    document.querySelector("body").setAttribute("style", "background-color:pink");
})

// botao_enviar.addEventListener("click", () => {
//     lista = document.querySelector("body").innerHTML += "<ul id='lista'></ul>"
//     const newItem = document.createElement("li");  
//     // inputUsuario = document.querySelector("#input__usuario").value;
//     // newItem.appendChild(inputUsuario);
//     lista.appendChild(newItem);

//     console.log();
// })

botao_abrir.addEventListener("click", () => {
    let imagem = document.querySelector("#imagem_animada");

    if (imagem.getAttribute("src") == "./img/presente.jpg") {
        imagem.setAttribute("src", "./img/Ale.jfif");
        botao_abrir.textContent = "Clique aqui para embalar novamente o Alê!"
        return;
    }
    imagem.setAttribute("src", "./img/presente.jpg");
})