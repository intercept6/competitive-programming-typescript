import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const firstLine = data[0].split(' ');
  const secondLine = data[1];

  const c = parseInt(firstLine[0]) + parseInt(firstLine[1]);

  console.log(c + ' ' + secondLine);
}

Main(readFileSync('/dev/stdin', 'utf8'));
