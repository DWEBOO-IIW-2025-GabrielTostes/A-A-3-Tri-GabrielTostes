const nome = "Gabriel";
const nascimento = 2010;
const cidade = "Assis Chateaubriand";
const anoatual = 2026;
const idade = anoatual - nascimento;

document.getElementById("saida").textContent = `Você mora em ${cidade} e tem ${idade} anos`;

