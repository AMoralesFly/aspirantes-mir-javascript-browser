const input = document.getElementById('texto');
const boton = document.getElementById('btn');
const resultado = document.getElementById('resultado');

boton.addEventListener('click', function () {
    const texto = input.value.replace(/ +/g, "")
    const textoInvertido = input.value.replace(/ +/g, "").split("").reverse().join("");
    if (texto === textoInvertido) {
        resultado.innerHTML = "Es un palindromo";
    } else {
        resultado.innerHTML = "Lo siento, no es un palindromo";
    }

});



