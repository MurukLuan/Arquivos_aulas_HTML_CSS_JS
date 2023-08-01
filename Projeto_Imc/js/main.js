const form = document.querySelector('#form');

form.addEventListener('submit', function(e){
    //previne o recarregamento da página
    e.preventDefault();
    console.log('evento previnido');

    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    if(!peso){
        inserirResultado('Peso inválido', false);
        return;
    }

    if(!altura){
        inserirResultado('Altura inválida', false);
        return;
    }

    const imc = obterImc(peso, altura);
    const classificaIMC = classificacaoImc(imc);

    const mensagemResultado = `Seu IMC é ${imc}, 
    classificado como: ${classificaIMC}`;

    inserirResultado(mensagemResultado, true);

})

function classificacaoImc(imc){
    const classificacao = ['Abaixo do peso',
                            'Peso normal',
                            'Sobrepeso',
                            'Obesidade grau I',
                            'Obesidade grau II',
                            'Obesidade grau III'
                            ];
    if(imc >= 40) return classificacao[5];
    if(imc >= 35) return classificacao[4];
    if(imc >= 30) return classificacao[3];
    if(imc >= 25) return classificacao[2];
    if(imc >= 18.5) return classificacao[1];
    if(imc < 18.5) return classificacao[0];
}

function obterImc(x,y){
    return (x / y ** 2).toFixed(2);
}

function criarSpan(){
    const span = document.createElement('span');
    return span;
}

function inserirResultado(msg, valido){
    const resultado = document.querySelector('#resultado');

    resultado.innerHTML = '';

    const span = criarSpan();

    if(valido == true){
        document.getElementById('resultado').style.background = '#198754'
    }else{
        document.getElementById('resultado').style.background = '#dc3545'
    }

    span.innerHTML = msg;
    resultado.appendChild(span);
}