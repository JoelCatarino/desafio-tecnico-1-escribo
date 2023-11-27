function questionOne(n) {
  let soma = 0;
  for (let i = 0; i < n; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      soma += i;
    }
  }
  return soma;
}

function testarFuncao() {
  let number = document.getElementById("number").value;
  let reslt = questionOne(number);
  alert(
    "A soma dos números menores que " +
      number +
      " que são divisíveis por 3 ou 5 é: " +
      reslt
  );
}