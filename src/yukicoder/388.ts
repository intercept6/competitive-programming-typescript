import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const firstLine = data[0].split(' ');
  const s = Number(firstLine[0]);
  const f = Number(firstLine[1]);

  console.log(Math.floor(s / f) + 1);
}

Main(readFileSync('/dev/stdin', 'utf8'));
