let numero: number = 20

console.log('número >>>', numero)

//tipos básicos
let nome: string = 'Italo'
let age: number = 22
let isAdmin: boolean = true

//tipando array
let lista1: number[] = [1, 2, 3, 4, 5] //tipagem para array de números
let lista2: string[] = ['A', 'B', 'C'] //tipagem para array de strings
let lista3: object[] = [
  {
    nome: 'Italo',
    idade: 23
  },
  {
    nome: 'random',
    idade: 9999999
  }
] //tipando um array de objetos
let list4: [number, string, boolean, number, object, string] = [
  1,
  'Italo',
  true,
  2,
  { nome: 'Italo', idade: 23 },
  'Pedroza'
] //tipando uma tupla

//definição de tupla: uma sequência ordenada e finita de elementos

//tipando obj
const data: { nome: string; idade: number; sexo: string; altura: number } = {
  nome: 'Italo',
  idade: 22,
  sexo: 'M',
  altura: 1.75
}

//union type: permite atribuir mais de um tipo a um variável
let id: number | string = 10
let idade: number | string = '10'

//type alias: permitir criar um tipo de variável para receber vários outro tipos nativos do ts
type myType = number | string
let id2: myType = '10'
let idade2: myType = 10

//enum: permite setar valores que podem se repetir no decorrer do sistema para facilitar o acessso ao mesmos e deixando o código menos verboso
enum Size {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande'
}

const camisa = {
  nome: 'Camisa gola V',
  tamanho: Size.M
}

const cueca = {
  nome: 'Cueca Lupo',
  tamanho: Size.G
}

console.log(camisa)

//literal types - com ele é possível declarar um valor como um tipo
let algumaCoisa: 'um_valor'
algumaCoisa = 'um_valor'
// algumaCoisa = "outro_valor" <<< não seria aceito pois o valor não bate com o valor do tipo

console.log('valor de algumaCoisa >>>', algumaCoisa)

//porém não é possível modificar o valor dessa variável que não seja o mesmo valor do seu tipo

// FUNÇÕES
function sum(a: number, b: number) {
  return a + b
}

console.log('resultado da soma >>>', sum(12, 3))

//tipando retorno de função
function sayHelloTo(user: string): string {
  return `Olá, ${user}`
}

console.log(sayHelloTo('Italo'))

//Tipando função sem retorno
function logger(msg: string): void {
  console.log(msg)
}

logger('TESTE!')

//valores opcionais - quando se quer explicitar um valor que não é obrigatório, usamos o "?"
function greeting(user: string, greet?: string) {
  if (greet) {
    console.log(`Olá! ${user}, ${greet}`)
  } else {
    console.log(`Olá ${user}!`)
  }
}

greeting('Italo')
greeting('Italo', 'Seja bem vindo(a)! ')

//interfaces - são coisas que seguem padrões que podem ser reutilizados em vários lugares posteriormente
interface MathFunctionsaParams {
  n1: number
  n2: number
}

function sumNumbers(nums: MathFunctionsaParams) {
  return nums.n1 + nums.n2
}

console.log('resultado da soma >>> ', sumNumbers({ n1: 2, n2: 5 }))

function multiplyNumbers(nums: MathFunctionsaParams) {
  return nums.n1 * nums.n2
}

console.log('resultado da multiplicação >>>', multiplyNumbers({ n1: 3, n2: 5 }))

// tipando variáveis com interfaces:
const someNumbers: MathFunctionsaParams = {
  n1: 5,
  n2: 5
}

console.log(
  'resultado da segunda multiplicação >>>',
  multiplyNumbers(someNumbers)
)

//narrowing
function checkType(narrowingTeste: number | string) {
  if (
    typeof narrowingTeste === 'number' ||
    typeof narrowingTeste === 'string'
  ) {
    console.log(
      `A variável é do tipo ${typeof narrowingTeste} e seu valor é: ${narrowingTeste}`
    )
  } else {
    console.log('O valor informado não é de nenhum dos tipos permitidos!')
  }
}

checkType(2)
checkType('dois')
// checkType(false); <<<--- causa um erro

//generics
function showArraysItems<T>(arr: T[]) {
  arr.forEach(item => {
    console.log(`Item: ${item}`)
  })
}

showArraysItems([1, 2, 3])
showArraysItems(['a', 'b', 'c'])
showArraysItems([1, '2', false])

//classes

class User {
  name
  role
  isApproved

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name
    this.role = role
    this.isApproved = isApproved
  }

  showUserName() {
    console.log(`O nome do usuário é ${this.name}`)
  }

  showUserRole(canShow: boolean) {
    if (canShow) {
      console.log(`A função desse usuário é: ${this.role}`)
    } else {
      console.log('Acesso restrito a essa informação')
    }
  }
}

const zeca = new User('zeca', 'admin', false)

zeca.showUserName()
zeca.showUserRole(false)

//interfaces em classes

interface IVehicle {
  brand: string
  showBrand(): void
}

class Car implements IVehicle{
  brand
  wheels

  constructor(brand: string, wheels: number){
    this.brand = brand
    this.wheels = wheels
  }

  showBrand(): void {
      console.log(`O nome da marca é: ${this.brand} e ele possui ${this.wheels} rodas.`);      
  }
}

const fusca = new Car("VW", 4)

fusca.showBrand();

//herança
class SuperCar extends Car{
  engine

  constructor(brand: string, wheels: number, engine: number){
    super(brand, wheels);
    this.engine = engine;
  }
}

const a4 = new SuperCar("Audi", 4, 2.0)

console.log(a4);
a4.showBrand()

//decorators
//1 - todo decorator é uma função
//2 - todo decorator retorna uma função que contém os dados que vão ser alterados na classe base

//constructor decorator
function BaseParameters(){
  return function<T extends {new (...args: any[]): {}}>(constructor: T){
    return class extends constructor{
      id = Math.random()
      createdAt = new Date()
    }
  }
}

@BaseParameters() //o decorator é executado dessa forma
class Person {
  name

  constructor(name: string){
    this.name = name
  }
}

const Italo = new Person("Italo")
console.log(Italo);
