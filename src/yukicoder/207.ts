import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const firstLine = data[0].split(' ');

  const start = parseInt(firstLine[0]);
  const end = parseInt(firstLine[1]);

  for (let i = start; i <= end; i++) {
    if (i % 3 === 0) {
      console.log(i);
      continue;
    }

    if (String(i).match(/3/)) {
      console.log(i);
    }
  }
}

Main(readFileSync('/dev/stdin', 'utf8'));
