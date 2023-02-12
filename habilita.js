function habilitarCampo(opcao) {
    if (opcao) {
        document.formulario.nome.disabled = false;
    } else {
        document.formulario.nome.value = "";
        document.formulario.nome.disabled = true;
    }
}