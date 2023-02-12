function validaData() {
    if (document.formulario.data.value == "" ||
        document.formulario.data.value.length != 10) {
            alert("Preencha o campo DATA corretamente");
            document.formulario.data.focus();
            return false;        
    } 
    
    expReg = /^((0[1-9]|[12]\d)\/(0[1-9]|1[0-2])|30\/(0[13-9]|1[0-2])|31\/(0[13578]|1[02]))\/\d{4}$/;
    
    if (document.formulario.data.value.match(expReg) &&
        document.formulario.data.value != '') {
            alert("Data válida");
            return true;
        
    }
    else {
        alert("Formato inválido de data");
        document.formulario.data.focus();
        return false;
    }
}