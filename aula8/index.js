require("./mensagem");



const ola = require("./saudacao");

ola("João");


const verificarIdade = require("./idade");

verificarIdade(18)


const calc = require("./calculadora")

calc.somar(5, 6)
calc.multiplicar(2, 5)

const mostrarHora = require('./modulo/hora');

mostrarHora();


const area = require('./areatriangulo')

area(6, 5 ) 


const gerarNumero = require('./gerarNumero')
gerarNumero (1, 100)


const celsiusParaFahrenheit = require('./temperatura')
celsiusParaFahrenheit(25)