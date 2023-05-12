function insereValorNoVisor(botao, visor) {
    visor.value += botao.value
}

const resultadoDaOperacao = (visor) => {
    visor.value = eval(visor.value)
}