/*10 pontos
5 - Leia um conjunto de 5 notas e mostre a maior, a menor e a média.
Nome Aluno: beatriz amaral
*/

let teclado = require('prompt-sync')();
let maior: number = 0;
let menor: number = 100;
let somaNotas: number = 0;

let i:number = 0;

while (i <= 5) {
    let nota = parseFloat(teclado(`Digite a nota ${i}: `));
    somaNotas += nota;

    if (nota > maior) {
        maior = nota;
    }

    if (nota < menor) {
        menor = nota;
    }
    i++;
}

let media = somaNotas / 5;

console.log(`Maior nota: ${maior}`);
console.log(`Menor nota: ${menor}`);
console.log(`Média das notas: ${(2)}`);