function avaliaParidade(limiteSuperior) {
  for (let i = 0; i < limiteSuperior; i++) {
    if (i % 2 === 1) {
      console.log(i + " é um numero impar");
    } else {
      console.log(i + " é um número par");
    }
  }
}

console.log("Hello World!");
console.log("Fundamentos de computação e algoritmo");
avaliaParidade(10);
