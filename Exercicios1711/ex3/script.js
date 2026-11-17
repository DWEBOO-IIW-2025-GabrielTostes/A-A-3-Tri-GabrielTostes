let ano = Number(prompt("Digite um ano:"));

let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);

console.log(bissexto);