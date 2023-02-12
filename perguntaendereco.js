function perguntaEndereco() {
    do {
        endereco = prompt("Qual seu endereço?");
        confirma = confirm("Seu endereço é: " + endereco + " ?");
    }
    while (!confirma);
    alert("A página será alterada...");
    document.write("Seu endereço é " + endereco);
}