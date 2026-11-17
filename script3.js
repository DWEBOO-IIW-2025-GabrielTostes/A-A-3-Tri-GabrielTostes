let ano = Number(prompt("Digite um ano"));

let bisexto = (ano%4 === 0 && ano%100 !== 0 && ano%400 === 0);

document.write("O ano de"+ ano + (bisexto? " é bisexto" : "Nao é bisexto"))