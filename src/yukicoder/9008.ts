import { readFileSync } from 'fs';

function Main(input: string) {
  // inputにはすべての入力の文字列が与えられるので必要に応じて input.split("\n") などで分割する。

  const data = input.split('\n');

  const array = data[1].split(' ');

  const reducer = (accumulator: string, currentValue: string) => {
    return String(BigInt(accumulator) + BigInt(currentValue));
  };

  console.log(array.reduce(reducer));
}

Main(readFileSync('/dev/stdin', 'utf8'));
