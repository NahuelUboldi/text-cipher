import cipher from './assets/js/cipher.js';
import cipherKeys from './assets/js/keys.js';

const inputText = document.querySelector('.user-text textarea');
const resultText = document.querySelector('.result-text div');
const encryptBtn = document.querySelector('.btn-encrypt');
const decryptBtn = document.querySelector('.btn-decrypt');
const copyTextBtnCode =
  '<button class="btn btn-secondary btn-copy-text">Copiar</button>';

function isValidText(text) {
  const onlyLowerAndCharacters = /[^a-z]/;
  return !onlyLowerAndCharacters.test(text);
}

function handleEncrypt() {
  if (!isValidText(inputText.value)) {
    alert('Solo se aceptan letras minúsculas y sin acentos');
    return;
  }
  const encryptedText = cipher(inputText.value, cipherKeys, 'encrypt');
  resultText.innerHTML = `
  <span>${encryptedText}</span>  ${copyTextBtnCode}
  `;
  const copyTextBtn = document.querySelector('.btn-copy-text');
  copyTextBtn.addEventListener('click', handleCopy);
}
function handleDecrypt() {
  if (!isValidText(inputText.value)) {
    alert('Solo se aceptan letras minúsculas y sin acentos');
    return;
  }
  const decryptedText = cipher(inputText.value, cipherKeys, 'decrypt');
  resultText.innerHTML = `
  <span>${decryptedText}</span>  ${copyTextBtnCode}
  `;

  const copyTextBtn = document.querySelector('.btn-copy-text');
  copyTextBtn.addEventListener('click', handleCopy);
}

function handleCopy() {
  const textToCopy = document.querySelector('.result-text div span');
  console.log(textToCopy.textContent);
  navigator.clipboard.writeText(textToCopy.textContent);
}

encryptBtn.addEventListener('click', handleEncrypt);
decryptBtn.addEventListener('click', handleDecrypt);
