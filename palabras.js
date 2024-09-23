const verificarPalindromo = () => {
    // Capturamos el valor del input
    let frase = document.getElementById("frase").value;
    
    // Convertimos la frase a minúsculas y eliminamos los espacios en blanco y signos de puntuación
    let fraseLimpiada = "";
    for (let i = 0; i < frase.length; i++) {
        let caracter = frase[i].toLowerCase();
        if (caracter >= 'a' && caracter <= 'z' || caracter >= '0' && caracter <= '9') {
            fraseLimpiada += caracter;
        }
    }

    // Comparamos la frase con su reverso
    let esPalindromo = true;
    for (let i = 0; i < fraseLimpiada.length; i++) {
        if (fraseLimpiada[i] !== fraseLimpiada[fraseLimpiada.length - 1 - i]) {
            esPalindromo = false;
            break;
        }
    }

    // Mostramos el resultado
    let resultadoDiv = document.getElementById("resultado");
    if (esPalindromo && fraseLimpiada.length > 0) {
        resultadoDiv.textContent = "¡Es un palíndromo!";
        resultadoDiv.style.color = "green";
    } else {
        resultadoDiv.textContent = "No es un palíndromo.";
        resultadoDiv.style.color = "red";
    }
};
