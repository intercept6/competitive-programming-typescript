import { readFileSync } from 'fs';

const codeA = 'A'.charCodeAt(0);
const codeZ = 'Z'.charCodeAt(0);

function isUpperCase(character: string): boolean {
  // if (character.length !== 1) {
  //   throw new Error(`${character}は1文字ではありません。`);
  // }
  const characterCode = character.charCodeAt(0);
  return codeA <= characterCode && characterCode <= codeZ;
}

function Main(input: string) {
  const data = input.split('\n');

  const passowrd = data[0];

  for (let i = 0; i < passowrd.length; i++) {
    const character = passowrd.charAt(i);
    if (isUpperCase(character)) {
      process.stdout.write(character.toLowerCase());
    } else {
      process.stdout.write(character.toUpperCase());
    }
  }
  console.log('');
}

Main(readFileSync('/dev/stdin', 'utf8'));
