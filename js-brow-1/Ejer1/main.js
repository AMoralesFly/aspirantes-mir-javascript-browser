const input = document.getElementById('texto');
        const boton = document.getElementById('btn');
        const resultado = document.getElementById('resultado');
        const btnResultado = document.getElementById('btnresultado')

        input.addEventListener('input', function () {
            const texto = input.value.toUpperCase();
            resultado.textContent = texto;
        });

        boton.addEventListener('click', function () {
            const textoN = input.value.toUpperCase();
            btnResultado.innerHTML = textoN;
        });