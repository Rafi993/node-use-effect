const readline = require('readline');
const useEffect = require('./useEffect');

// This has to be object because you can't create proxy of primitive types
const user = { input: '' };

let proxiedUser = useEffect(() => {
  if (proxiedUser.input && parseInt(proxiedUser.input, 10) % 2 === 0) {
    console.log(`${proxiedUser.input} is even`);
  } else {
    console.log(`${proxiedUser.input} is odd`);
  }
}, user);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter number? ', (answer) => {
  proxiedUser.input = answer;
  rl.close();
});
