// https://yukicoder.me/problems/43
import { readFileSync } from 'fs';

function Main(input: string) {
  // inputにはすべての入力の文字列が与えられるので必要に応じて input.split("\n") などで分割する。

  const data = input.split('\n');

  const firstLine = data[0].split(' ');

  const a = Number(firstLine[0]);
  const b = Number(firstLine[1]);

  const res = Math.ceil(b / a);

  console.log(res);
}

Main(readFileSync('/dev/stdin', 'utf8'));
