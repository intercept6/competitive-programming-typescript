import { readFileSync } from 'fs';

function reducer(accumulator: number, currentValue: number) {
  return accumulator + currentValue;
}

function Main(input: string) {
  const data = input.split('\n');

  const expectedNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const numbers = data[0].split(' ').map(Number);

  const expectedSum = expectedNumbers.reduce(reducer);
  const sum = numbers.reduce(reducer);

  console.log(expectedSum - sum);
}

Main(readFileSync('/dev/stdin', 'utf8'));
