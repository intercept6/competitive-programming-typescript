import { readFileSync } from 'fs';

function Main(input: string) {
  // inputにはすべての入力の文字列が与えられるので必要に応じて input.split("\n") などで分割する。

  const data = input.split('\n');

  const num = Number(data[0].split(' '));

  let res = 0n;
  for (let i = 0; i < num; i++) {
    res += BigInt(data[i + 1]);
  }

  console.log(String(res));
}

Main(readFileSync('/dev/stdin', 'utf8'));
