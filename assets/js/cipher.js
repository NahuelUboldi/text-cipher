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

export default cipher;
