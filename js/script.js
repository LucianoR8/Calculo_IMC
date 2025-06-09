let peso;
let altura;


document.addEventListener("DOMContentLoaded", function (){
    const botao = document.querySelector(".btn");

    botao.addEventListener("click", function (evento){
        evento.preventDefault();

        const peso = parseFloat(document.getElementById("peso").value.replace(",", "."));
        const altura = parseFloat(document.getElementById("altura").value.replace(",", "."));

        if (isNaN(peso) || isNaN(altura) || altura === 0 ) {
            alert("Informe peso e altura válidos!");
            return; 
        }

        const imc = peso / (altura * altura);
        let grau = "";

        if (imc < 18.5){
            grau = "Abaixo do peso";
        } else if (imc < 24.9){
            grau = "Peso ideal";
        } else if (imc < 29.9){
            grau = "Sobrepeso";
        } else if (imc < 34.9){
            grau = "Obesidade I";
        } else if ( imc < 39.9){
            grau = "Obesidade II";
        } else {
            grau = "Obesidade III";
        }

        const resultado = document.querySelector(".container-imc");
        resultado.innerHTML = `
        <p>Seu IMC é: ${imc.toFixed(2)}</p>
        <p>Grau: ${grau}</p>
        `;
    });

});

