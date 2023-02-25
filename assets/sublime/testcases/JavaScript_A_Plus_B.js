const readline = require('readline');

function read() {
  return new Promise((resolve) => {
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });
    reader.question('', (answer) => {
      reader.close();
      resolve(answer.trim());
    });
  });
}

read().then((line) =>
  console.log(
    line
      .split(' ')
      .map((x) => parseInt(x))
      .reduce((a, b) => a + b, 0)
  )
);
