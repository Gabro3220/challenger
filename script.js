function encodeText() {
    let inputText = document.getElementById('inputText').value;
    let encodedText = btoa(inputText); 
    document.getElementById('outputText').value = encodedText;
}

function decodeText() {
    let encodedText = document.getElementById('inputText').value;
    try {
        let decodedText = atob(encodedText); 
        document.getElementById('outputText').value = decodedText;
    } catch (e) {
        document.getElementById('outputText').value = "Erro: Texto inválido para decodificação.";
    }
}

function copyToClipboard() {
    let outputText = document.getElementById('outputText');
    outputText.select(); 
    outputText.setSelectionRange(0, 99999); 

    document.execCommand("copy");


    alert("Texto copiado para a área de transferência!");
}
