import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const positionX = parseInt(data[0]);
  const positionY = parseInt(data[1]);
  const distance = parseInt(data[2]);

  const distanceX = Math.ceil(Math.abs(positionX) / distance);
  const distanceY = Math.ceil(Math.abs(positionY) / distance);
  const turn = positionY < 0 ? 2 : positionX !== 0 ? 1 : 0;

  console.log(distanceX + distanceY + turn);
}

Main(readFileSync('/dev/stdin', 'utf8'));
