"use strict";
let numero = 20;
console.log('número >>>', numero);
//tipos básicos
let nome = 'Italo';
let age = 22;
let isAdmin = true;
//tipando array
let lista1 = [1, 2, 3, 4, 5]; //tipagem para array de números
let lista2 = ['A', 'B', 'C']; //tipagem para array de strings
let lista3 = [
    {
        nome: 'Italo',
        idade: 23
    },
    {
        nome: 'random',
        idade: 9999999
    }
]; //tipando um array de objetos
let list4 = [
    1,
    'Italo',
    true,
    2,
    { nome: 'Italo', idade: 23 },
    'Pedroza'
]; //tipando uma tupla
//definição de tupla: uma sequência ordenada e finita de elementos
//tipando obj
const data = {
    nome: "Italo",
    idade: 22,
    sexo: 'M',
    altura: 1.75
};
//union type: permite atribuir mais de um tipo a um variável
let id = 10;
let idade = '10';
let id2 = '10';
let idade2 = 10;
//enum: permite setar valores que podem se repetir no decorrer do sistema para facilitar o acessso ao mesmos e deixando o código menos verboso
var Size;
(function (Size) {
    Size["P"] = "Pequeno";
    Size["M"] = "M\u00E9dio";
    Size["G"] = "Grande";
})(Size || (Size = {}));
const camisa = {
    nome: "Camisa gola V",
    tamanho: Size.M
};
const cueca = {
    nome: "Cueca Lupo",
    tamanho: Size.G
};
console.log(camisa);
//literal types - com ele é possível declarar um valor como um tipo
let algumaCoisa;
algumaCoisa = "um_valor";
// algumaCoisa = "outro_valor" <<< não seria aceito pois o valor não bate com o valor do tipo
console.log("valor de algumaCoisa >>>", algumaCoisa);
//porém não é possível modificar o valor dessa variável que não seja o mesmo valor do seu tipo
// FUNÇÕES
function sum(a, b) {
    return a + b;
}
console.log("resultado da soma >>>", sum(12, 3));
//tipando retorno de função
function sayHelloTo(user) {
    return `Olá, ${user}`;
}
console.log(sayHelloTo("Italo"));
//Tipando função sem retorno
function logger(msg) {
    console.log(msg);
}
logger("TESTE!");
//valores opcionais - quando se quer explicitar um valor que não é obrigatório, usamos o "?"
function greeting(user, greet) {
    if (greet) {
        console.log(`Olá! ${user}, ${greet}`);
    }
    else {
        console.log(`Olá ${user}!`);
    }
}
greeting("Italo");
