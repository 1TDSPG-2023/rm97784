const botao_background = document.querySelector("#botao_background");
const botao_enviar = document.querySelector("#enviar_input_texto");
const botao_abrir = document.querySelector('#botao_presente');
const botao_exibir_mensagem = document.querySelector('#botao_exibir_mensagem');
const botao_ocultar = document.querySelector("#botao_ocultar");
const imagem = document.querySelector("#imagem_animada");

let inputUsuario;

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

    if (imagem.getAttribute("src") == "./img/presente.png") {
        imagem.setAttribute("src", "./img/Ale.jfif");
        botao_abrir.textContent = "Clique aqui para embalar novamente o Alê!"
        return;
    }
    botao_abrir.textContent = "Clique aqui para abrir seu presente!"
    imagem.setAttribute("src", "./img/presente.png");
})

botao_exibir_mensagem.addEventListener("click", () => {
    let paragrafo = document.querySelector("#elemento_a_exibir");

    paragrafo.textContent = "“E aqueles que foram vistos dançando foram julgados insanos por aqueles que não podiam escutar a música”";
    paragrafo.setAttribute("style", "font-size:2rem");
})

botao_ocultar.addEventListener("click", () => {
    let estilo_imagem = getComputedStyle(imagem);
    console.log(estilo_imagem.display);

    if (estilo_imagem.display == "none") {
        imagem.setAttribute("style", "display: block");
        botao_ocultar.textContent = "Clique aqui para ocultar a imagem"
        return;
    }
    botao_ocultar.textContent = "Clique aqui para exibir a imagem"
    imagem.setAttribute("style", "display: none");
})