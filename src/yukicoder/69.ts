import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const A = data[0].split('').sort().toString();
  const B = data[1].split('').sort().toString();

  if (A === B) {
    console.log('YES');
  } else {
    console.log('NO');
  }
}

Main(readFileSync('/dev/stdin', 'utf8'));
