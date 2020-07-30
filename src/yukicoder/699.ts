import { readFileSync } from 'fs';

function Main(input: string): void {
  const data = input.split('\n');

  const firstLine = data[0].split(' ');

  const player1 = parseInt(firstLine[0]);
  const player2 = parseInt(firstLine[1]);

  if (player1 === player2) {
    console.log('Drew');
    return;
  }

  if (
    (player1 === 0 && player2 === 1) || // グー vs チョキ
    (player1 === 1 && player2 === 2) || // チョキ vs パー
    (player1 === 2 && player2 === 0) // パー vs グー
  ) {
    console.log('Won');
    return;
  }

  console.log('Lost');
}

Main(readFileSync('/dev/stdin', 'utf8'));
