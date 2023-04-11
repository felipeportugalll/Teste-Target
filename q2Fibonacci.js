const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Digite um número: ', (numero) => {
  numero = parseInt(numero);

  let fib1 = 0;
  let fib2 = 1;

  while (fib2 < numero) {
    let fib3 = fib1 + fib2;
    fib1 = fib2;
    fib2 = fib3;
  }

  if (fib2 === numero) {
    console.log(numero + ' pertence à sequência de Fibonacci.');
  } else {
    console.log(numero + ' não pertence à sequência de Fibonacci.');
  }

  rl.close();
});
