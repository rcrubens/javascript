function valida() {
    if (document.formulario.busca.value == "") {
        alert("Preencha o campo BUSCA corretamente");
        document.formulario.busca.focus();
        return false;
    }
    return false;
}