import { readFileSync } from 'fs';

function reducer(accumulator: number, currentValue: number) {
  return accumulator + currentValue;
}

function Main(input: string) {
  const data = input.split('\n');

  const boxWidth = data[0].split(' ').map(Number)[0];
  const blockNumber = data[1].split(' ').map(Number)[0];
  const blocks = data[2]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  for (let i = 0; i <= blockNumber; i++) {
    const current = blocks.slice(0, i);
    if (current.length === 0) {
      continue;
    }

    const sum = current.reduce(reducer);
    if (sum === boxWidth) {
      console.log(i);
      return;
    } else if (sum > boxWidth) {
      console.log(i - 1);
      return;
    }
  }

  console.log(blockNumber);
}

Main(readFileSync('/dev/stdin', 'utf8'));
