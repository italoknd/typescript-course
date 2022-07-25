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
    nome: 'Italo',
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
    nome: 'Camisa gola V',
    tamanho: Size.M
};
const cueca = {
    nome: 'Cueca Lupo',
    tamanho: Size.G
};
console.log(camisa);
//literal types - com ele é possível declarar um valor como um tipo
let algumaCoisa;
algumaCoisa = 'um_valor';
// algumaCoisa = "outro_valor" <<< não seria aceito pois o valor não bate com o valor do tipo
console.log('valor de algumaCoisa >>>', algumaCoisa);
//porém não é possível modificar o valor dessa variável que não seja o mesmo valor do seu tipo
// FUNÇÕES
function sum(a, b) {
    return a + b;
}
console.log('resultado da soma >>>', sum(12, 3));
//tipando retorno de função
function sayHelloTo(user) {
    return `Olá, ${user}`;
}
console.log(sayHelloTo('Italo'));
//Tipando função sem retorno
function logger(msg) {
    console.log(msg);
}
logger('TESTE!');
//valores opcionais - quando se quer explicitar um valor que não é obrigatório, usamos o "?"
function greeting(user, greet) {
    if (greet) {
        console.log(`Olá! ${user}, ${greet}`);
    }
    else {
        console.log(`Olá ${user}!`);
    }
}
greeting('Italo');
greeting('Italo', 'Seja bem vindo(a)! ');
function sumNumbers(nums) {
    return nums.n1 + nums.n2;
}
console.log('resultado da soma >>> ', sumNumbers({ n1: 2, n2: 5 }));
function multiplyNumbers(nums) {
    return nums.n1 * nums.n2;
}
console.log('resultado da multiplicação >>>', multiplyNumbers({ n1: 3, n2: 5 }));
// tipando variáveis com interfaces:
const someNumbers = {
    n1: 5,
    n2: 5
};
console.log('resultado da segunda multiplicação >>>', multiplyNumbers(someNumbers));
//narrowing
function checkType(narrowingTeste) {
    if (typeof narrowingTeste === 'number' ||
        typeof narrowingTeste === 'string') {
        console.log(`A variável é do tipo ${typeof narrowingTeste} e seu valor é: ${narrowingTeste}`);
    }
    else {
        console.log('O valor informado não é de nenhum dos tipos permitidos!');
    }
}
checkType(2);
checkType('dois');
// checkType(false); <<<--- causa um erro
//generics
function showArraysItems(arr) {
    arr.forEach(item => {
        console.log(`Item: ${item}`);
    });
}
showArraysItems([1, 2, 3]);
showArraysItems(['a', 'b', 'c']);
showArraysItems([1, '2', false]);
//classes
class User {
    constructor(name, role, isApproved) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved;
    }
    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
    showUserRole(canShow) {
        if (canShow) {
            console.log(`A função desse usuário é: ${this.role}`);
        }
        else {
            console.log('Acesso restrito a essa informação');
        }
    }
}
const zeca = new User('zeca', 'admin', false);
zeca.showUserName();
zeca.showUserRole(false);
class Car {
    constructor(brand, wheels) {
        this.brand = brand;
        this.wheels = wheels;
    }
    showBrand() {
        console.log(`O nome da marca é: ${this.brand} e ele possui ${this.wheels} rodas.`);
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();
//herança
class SuperCar extends Car {
    constructor(brand, wheels, engine) {
        super(brand, wheels);
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();
