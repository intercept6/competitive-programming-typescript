import { readFileSync } from 'fs';

function isOddNumber(num: number): boolean {
  return num % 2 !== 0;
}

function Main(input: string) {
  const data = input.split('\n');

  const num = parseInt(data[0]);
  const sequence = data[1].split(' ').map(Number);
  sequence.sort((a: number, b: number) => a - b);

  if (isOddNumber(num)) {
    console.log(sequence[Math.floor(num / 2)]);
  } else {
    const a = sequence[num / 2];
    const b = sequence[num / 2 - 1];
    console.log((a + b) / 2);
  }
}

Main(readFileSync('/dev/stdin', 'utf8'));
