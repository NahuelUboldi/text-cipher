const keys = {
  e: 'enter',
  i: 'imes',
  a: 'ai',
  o: 'ober',
  u: 'ufat',
};

const secretMessage =
  'fenterlimescimesdaidenters poberr enternfrenterntair enterstenter dentersaifimesober y haibenterrlober cobernclufatimesdober cobern enterximestober!';
const encryptedText = 'enterimesaioberufat';
const plainText = 'eiaou';

function cipher(text, keys, action) {
  let resultText = text;
  Object.keys(keys).forEach((key) => {
    const value = keys[key];
    if (action === 'decrypt') {
      const regex = new RegExp(value, 'g');
      resultText = resultText.replace(regex, key);
    } else if (action === 'encrypt') {
      const regex = new RegExp(key, 'g');
      resultText = resultText.replace(regex, value);
    } else {
      throw new Error(
        'no action or wrong action selected -it must be decrypt or encrypt-'
      );
    }
  });
  return resultText;
}
// console.log(cipher(secretMessage, cipherKeys, 'decrypt'));
console.log(cipher(plainText, cipherKeys, 'encryasdfpt'));
