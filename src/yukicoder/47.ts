import { readFileSync } from 'fs';

// Nはユキさんが度寝することを示します。
// Hはアラームが最初に鳴る時刻の、24時間制における時の値です。
// Mはアラームが最初に鳴る時刻の、分の値です。
// Tは最初にアラームが鳴った後、アラームが繰り返される間隔の、分単位の値です。

function Main(input: string) {
  const data = input.split('\n');
  const firstLine = data[0].split(' ').map(Number);

  const N = firstLine[0];
  const H = firstLine[1];
  const M = firstLine[2];
  const T = firstLine[3];

  const delayMinutes = (N - 1) * T;

  const addHours = Math.floor(delayMinutes / 60);
  const addMinutes = delayMinutes % 60;

  let getUpHour = (H + addHours) % 24;
  let getUpMinutes = M + addMinutes;

  if (getUpMinutes >= 60) {
    getUpHour++;
    getUpMinutes = getUpMinutes % 60;
  }

  if (getUpHour === 24) {
    getUpHour = 0;
  }

  console.log(getUpHour);
  console.log(getUpMinutes);
}

Main(readFileSync('/dev/stdin', 'utf8'));
