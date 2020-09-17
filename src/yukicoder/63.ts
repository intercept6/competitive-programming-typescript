import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const firstLine = data[0].split(' ').map(Number);
  const pockeyLength = firstLine[0];
  const oneBite = firstLine[1];

  // 一口も食べない
  // if (pockeyLength <= oneBite * 2) {
  //   console.log(0);
  //   return;
  // }

  console.log(Math.floor((pockeyLength - 1) / (oneBite * 2)) * oneBite);
}

Main(readFileSync('/dev/stdin', 'utf8'));
