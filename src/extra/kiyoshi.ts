function getZunDoko() {
  const num = Math.round(Math.random());

  if (num) {
    return 'ズン';
  }
  return 'ドコ';
}

function getZunDokoKiyoshi(array: string[]): string {
  const len = array.length;

  if (len < 4) {
    getZunDokoKiyoshi([...array, getZunDoko()]);
  }

  if (
    JSON.stringify(['ズン', 'ズン', 'ズン', 'ドコ']) ===
    JSON.stringify(array.slice(-4))
  ) {
    return array.join('・') + '・キヨシ！';
  } else {
    return getZunDokoKiyoshi([...array, getZunDoko()]);
  }
}

const msg = getZunDokoKiyoshi([]);
console.log(msg);
