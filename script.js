function encriptar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    
    document.getElementById("outputText").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("inputText").value.toLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    
    document.getElementById("outputText").value = textoDesencriptado;
}

function copiarTexto() {
    let textoCopiado = document.getElementById("outputText");
    textoCopiado.select();
    document.execCommand("copy");
    alert("Texto copiado al portapapeles");
}