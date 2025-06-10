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
        let obs = "";

        if (imc < 18.5){
            grau = "Abaixo do peso";
            obs = "Algumas pessoas possuem um baixo peso por características do seu organismo. Outras podem estar enfrentando problemas, como a desnutrição. Procure um médico para saber qual é o caso.";
        } else if (imc < 24.9){
            grau = "Peso ideal";
            obs = "O melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação saudável.";
        } else if (imc < 29.9){
            grau = "Sobrepeso";
            obs = "Pré-obesidade muitas pessoas nessa faixa de peso já apresentam doenças associadas, como diabetes e hipertensão. Reveja seus hábitos e busque ajuda antes de entrar na faixa da obesidade.";
        } else if (imc < 34.9){
            grau = "Obesidade I";
            obs = "Alerta! Chegou na hora de se cuidar. Vamos dar início a mudanças hoje! Cuide de sua alimentação e se exercite. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.";
        } else if ( imc < 39.9){
            grau = "Obesidade II";
            obs = "Inicie mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.";
        } else {
            grau = "Obesidade III";
            obs = "Sinal vermelho, com forte probabilidade de já existirem doenças muito graves associadas. busque por um tratamento urgentemente.";
        }

        const resultado = document.querySelector(".container-imc");
        resultado.innerHTML = `
        <p>Seu IMC é: ${imc.toFixed(2)}</p>
        <p>Grau: ${grau}</p>
        <p>Observação: ${obs}</p>
        `;
    });

});

