import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const firstLine = data[0].split(' ').map(Number);
  const beans = firstLine[0] * firstLine[1];
  // const families = parseInt(firstLine[2]);

  const secondLine = data[1].split(' ').map(Number);
  const reducer = (accumulator: number, currentValue: number) => {
    return accumulator + currentValue;
  };
  const ages = secondLine.reduce(reducer);

  const res = beans - ages;

  if (res < 0) {
    console.log(-1);
  } else {
    console.log(res);
  }
}

Main(readFileSync('/dev/stdin', 'utf8'));
