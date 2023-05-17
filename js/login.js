let listaDeUsuarios = [
  {
    nomeCompleto: "Denden da Silva",
    nomeUsuario: "denden",
    senhaUsuario: "123456",
  },
  {
    nomeCompleto: "Gersu da Silva",
    nomeUsuario: "gege",
    senhaUsuario: "123456",
  },
  {
    nomeCompleto: "José da Silva",
    nomeUsuario: "jose",
    senhaUsuario: "123456",
  },
  {
    nomeCompleto: "Paulo das Couves",
    nomeUsuario: "paulo",
    senhaUsuario: "123456",
  },
  {
    nomeCompleto: "Mary Help",
    nomeUsuario: "mary",
    senhaUsuario: "123456",
  },
  {
    nomeCompleto: "Pedro Silva",
    nomeUsuario: "pedro",
    senhaUsuario: "123456",
  },
];

//GUARDAR A LISTA DE OBJETOS NO LOCAL STORAGE
localStorage.setItem("listaUsers", JSON.stringify(listaDeUsuarios));

addEventListener("click", (evt) => {
  const inputUser = document.querySelector("#idUser");
  const inputPass = document.querySelector("#idPass");
  const iconEye = document.querySelector("#iconEye");

  if (evt.target.id == "btnSubmit") {
    try {
      //RECUPERAR A LISTA DE USUÁRIOS DO LOCAL STORAGE

      let listaDeUsuarios = JSON.parse(localStorage.getItem("listaUsers"));

      listaDeUsuarios.forEach((usuario) => {
        if (
          inputUser.value == usuario.nomeUsuario &&
          inputPass.value == usuario.senhaUsuario
        ) {
          throw "VALIDADO";
        }
      });

      throw "NÃO VALIDADO";
    } catch (msg) {
      const msgError = document.querySelector("#msgError");

      if (msg == "VALIDADO") {
        msgError.setAttribute("style", "color:#00ff00");
        msgError.innerHTML =
          "<span><strong>Login bem-sucedido!</strong></span>";
          setTimeout(function (){
              window.location.href = "../pages/sucesso.html"
          },2500);
        return;
      }
      msgError.setAttribute("style", "color:#ff0000");
      msgError.innerHTML =
        "<span><strong>Usuário e/ou senha inválido(s)!</strong></span>";
    }
  } else if (evt.target.id == "iconEye") {
    if (inputPass.getAttribute("type") == "password") {
      inputPass.setAttribute("type", "text");
      iconEye.setAttribute("class", "fa fa-eye-slash");
    } else {
      inputPass.setAttribute("type", "password");
      iconEye.setAttribute("class", "fa fa-eye");
    }
  }
});
