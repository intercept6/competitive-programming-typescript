import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const firstLine = data[0].split(' ').map(Number);

  const price = firstLine[0];
  const taxRate = firstLine[1];
  const tax = Math.floor((price * taxRate) / 100);
  console.log(price + tax);
}

Main(readFileSync('/dev/stdin', 'utf8'));
