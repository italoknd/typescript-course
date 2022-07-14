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
