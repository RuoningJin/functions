const args = process.argv.slice(2);

const string = args.reduce((pre, cur) => {
  return pre + cur.split('').join('');
});

const obfuscate = function(input) {
  let password = '';
  for (let character of input) {
    if (character === 'a') {
      password += '4';
    } else if (character === 'e') {
      password += '3';
    } else if (character === 'o') {
      password += '0';
    } else if (character === 'l') {
      password += '1';
    } else {
      password += character;
    }
  }
  return password;
};
console.log(obfuscate(string));