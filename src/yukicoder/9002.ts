import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const c = parseInt(data[0]);

  for (let i = 1; i <= c; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

Main(readFileSync('/dev/stdin', 'utf8'));
