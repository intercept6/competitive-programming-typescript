import { readFileSync } from 'fs';

function Main(input: string) {
  const data = input.split('\n');

  const line = data[0].split('').map((value) => {
    const num = parseInt(value);
    if (isNaN(num)) {
      return 0;
    } else {
      return num;
    }
  });
  function reducer(accumulator: number, currentValue: number) {
    return accumulator + currentValue;
  }
  console.log(line.reduce(reducer));
}

Main(readFileSync('/dev/stdin', 'utf8'));
