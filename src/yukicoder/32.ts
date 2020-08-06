import { readFileSync } from 'fs';

const getQuotientAndRemainder = ({
  dividend,
  divisor,
}: {
  dividend: number;
  divisor: number;
}): { quotient: number; remainder: number } => {
  return {
    quotient: Math.floor(dividend / divisor),
    remainder: dividend % divisor,
  };
};

function Main(input: string) {
  const data = input.split('\n');

  const beforeHundred = parseInt(data[0]);
  const beforeQuoter = parseInt(data[1]);
  const beforeOne = parseInt(data[2]);

  const sum = beforeOne + beforeQuoter * 25 + beforeHundred * 100;

  const { quotient: afterThousand } = getQuotientAndRemainder({
    dividend: sum,
    divisor: 1000,
  });
  const { quotient: afterHundred } = getQuotientAndRemainder({
    dividend: sum - afterThousand * 1000,
    divisor: 100,
  });
  const {
    quotient: afterQuoter,
    remainder: afterOne,
  } = getQuotientAndRemainder({
    dividend: sum - afterThousand * 1000 - afterHundred * 100,
    divisor: 25,
  });

  console.log(afterHundred + afterQuoter + afterOne);
}

Main(readFileSync('/dev/stdin', 'utf8'));
