const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function findGcf(num1, num2) {
  if (num1 === 0)
    return num2;
  if (num2 === 0)
    return num1;

  while (num2 !== 0) {
    [num1, num2] = [num2, num1 % num2];
  }
  return num1;
}

rl.question('Enter the first number: ', (num1Str) => {
  const num1 = Number(num1Str);
  rl.question('Enter the second number: ', (num2Str) => {
    const num2 = Number(num2Str);
    const gcf = findGcf(num1, num2);
    console.log(`The GCF of ${num1} and ${num2} is ${gcf}`);
    rl.close();
  });
});