function urlify(str, trueLength) {
  let index = 0;
  let spaceCount = 0;

  str = Array.from(str);

  for (let i = 0; i < trueLength; i++) {
    if (str[i] == ' ') {
      spaceCount++;
    }
  }

  index = trueLength + spaceCount * 2;
  // IDK wtf this means but ok
  if (trueLength < str.length) str[trueLength] = '\0';
  for (let i = trueLength - 1; i >= 0; i--) {
    if (str[i] == ' ') {
      str[index - 1] = '0';
      str[index - 2] = '2';
      str[index - 3] = '%';
      index = index - 3;
    } else {
      str[index - 1] = str[i];
      index--;
    }
  }
  return `'${str.join('')}'`;
}

let str = 'Mr John Smith    ';

console.log(urlify('Mr John Smith    ', 13), 'Mr%20John%20Smith');
console.log(urlify('Mr John Smith    ', 14));

// console.log(urlify('  Tupac    ', 4));

// console.log(urlify('   hi', 7));
// console.log(urlify('   hi'));

// console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx');
// console.log(urlify('pop XX  '));
