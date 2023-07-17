//console.log() serve para mostrar na tela algo
console.log("hello world, no arquivo js!");

//concatenação
console.log( 1 + "1")
//JS entendeu que era uma subtração mesmo sendo uma string e um tipo numerico
console.log( 1 - "1")

//declaração de variavel com a palavra reservada VAR
var x = 10
//declaração de variavel com a palavra reservada LET
let y = 11

var x = 11
//let y = 11

//typeof retorna o tipo do dado (string, numerico, objeto, array...)
console.log(typeof(x))

//alguns casos o JS não ocnsegue calcular string com numerico
//retornando um NAN (não é um numero)
console.log("aula" * 2)

//JS não necessita colocar um tipo do dado 
//mas caso queira, usamos o tipo number para numericos (int ou float/double)
let numero = Number("50")
//Tipo String para char e string
let numeroString = String(50)
let casasDecimais = 10.9988

console.log(typeof(numero))
console.log(typeof(numeroString))
//exemplo onde o typeof retorna tipo NUMBER para um numero com casas decimais
console.log(typeof(casasDecimais))

//biblioteca MATH para fazer a potencia do número
console.log(Math.pow(2, 2))

//random, para entregar numero aleatorio
console.log(Math.random())

//a multiplicação serve para o numero maximo que 
//se deseja mostra o numero aleatorio, 
//o parseInt converte o numero random para inteiro

console.log(parseInt(Math.random() * 20))

/*document.querySelector('h1').innerHTML = "Meu titulo no JS"
document.getElementById('tituloId').innerHTML = "titulo do id no js"
document.querySelector('.tituloClass').innerHTML = "alterado pela classe"
*/
//document.getElementsByClassName('tituloClass').innerHTML = "h1 alterado pelo class"

//vetor em javascript, segue mesmo padrão java
//os dados tem que ser do mesmo tipo..
var vetorNumerico = [1, 2 , 3, 4, 5]

//recupera o indice do vetor e retorna o valor no indice 
console.log(vetorNumerico[0])

//parecido com o void la do java
function multiplicar(a, b){
    console.log(a * b)
}
//chama a função para ser executada
multiplicar(10, 10)

//função com retorno tipo numerico
function funcaoComRetorno(x, y){
    return x * y
}

console.log(funcaoComRetorno(10, 5))

//ArrowFunction
var mensagemOla = () => {
    return "Olá novamente"
}

console.log(mensagemOla());

document.getElementById('recebeuFoco').onfocus = 
function(){
    focado()
}

function focado(){
    document.getElementById('recebeuFoco').style.background = "green"
}

function valorDigitado(){
    let recebido = document.getElementById('recebeuFoco').value;
    alert("valor recebido via input: " + recebido);
}