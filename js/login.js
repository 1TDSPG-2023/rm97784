//Gerando um token com Math.
let tokenGerado = Math.random().toString(16).substring(2);
console.log(tokenGerado);

//Declarando objetos
const usuario1 = {
    nomeUsuario: "denden",
    senhaUsuario: "12345",
    gravaDados: true,
    token: tokenGerado
}

addEventListener("click", (evt) => {
    if(evt.target.id == "btnSubmit") {
        const inputUser = document.querySelector("#idUser");
        const inputPass = document.querySelector("#idPass");

        if (inputUser.value == "pf0670" && inputPass.value == "12345") {
            console.log("VALIDADO");
        } else {
            console.log("NÃO VALIDADO");
        }
    }
})