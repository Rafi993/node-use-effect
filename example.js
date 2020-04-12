const readline = require('readline');
const useEffect = require('./useEffect');

// This has to be object because you can't create proxy of primitive types
const user = { input: '' };

const proxiedUser = useEffect(() => {
  if (user.input && parseInt(user.input, 10) % 2 === 0) {
    console.log('Number is even');
  } else {
    console.log('Number is odd');
  }
}, user);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Enter number? ', (answer) => {
  proxiedUser.userInput = answer;
  rl.close();
});
