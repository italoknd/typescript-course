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
const data: {nome: string, idade: number, sexo: string, altura: number} = {
  nome: "Italo", 
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
  P = "Pequeno",
  M = "Médio",
  G = "Grande"
}

const camisa = {
  nome: "Camisa gola V",
  tamanho: Size.M
} 

const cueca = {
  nome: "Cueca Lupo",
  tamanho: Size.G
}

console.log(camisa);
