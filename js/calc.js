function insereValorNoVisor(botao, visor) {
    if(botao.value === "+" || botao.value === "-" || botao.value === "*" || botao.value === "/"){   
        if(visor.value[visor.value.length - 1] != "+" && visor.value[visor.value.length - 1] != "-" && visor.value[visor.value.length - 1] != "*" && visor.value[visor.value.length - 1] != "/") {
            visor.value += botao.value;
        }
    } else {
        visor.value += botao.value;
    }
}

const resultadoDaOperacao = (visor) => {
    visor.value = eval(visor.value)
}