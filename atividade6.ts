/*10 pontos
6 - Leia 10 números inteiros e informe, ao final:
 A quantidade de números pares digitados e quais foram eles;
 A quantidade de números ímpares digitados e quais foram eles.
Nome aluno: beatriz amaral
*/

let teclado = require('prompt-sync')();
let cont: number = 0;
let contpar: number = 0;
let contimpar: number = 0;

while (cont <= 10) {
    let numero = parseInt(teclado(`Digite o ${contador}º número inteiro:`));

    if (numero % 2 === 0) {
        pares++;
    } else {
        impares++;
    }

    contador++;
}

console.log(`Quantidade de números pares: ${pares}`);
console.log(`Quantidade de números ímpares: ${impares}`);