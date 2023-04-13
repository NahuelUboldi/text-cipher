import cipher from './assets/js/cipher.js';
import cipherKeys from './assets/js/keys.js';

const encryptBtn = document.querySelector('.btn-encrypt');
const decryptBtn = document.querySelector('.btn-decrypt');

function isValidText(text) {
  const onlyLowerAndCharacters = /[^a-z]/;
  return !onlyLowerAndCharacters.test(text);
}

function writeOutputText(encryptedText) {
  const resultText = document.querySelector('.result-text div');
  const copyTextBtnCode =
    '<button class="btn btn-secondary btn-copy-text">Copiar</button>';
  resultText.innerHTML = `
  <span>${encryptedText}</span>  ${copyTextBtnCode}
  `;
  const copyTextBtn = document.querySelector('.btn-copy-text');
  copyTextBtn.addEventListener('click', handleCopy);
}

function handleClick(action) {
  const inputText = document.querySelector('.user-text textarea');
  if (!isValidText(inputText.value)) {
    alert('Solo se aceptan letras minúsculas y sin acentos');
    return;
  }
  const encryptedText = cipher(inputText.value, cipherKeys, action);
  writeOutputText(encryptedText);
}

function showCopyAlert() {
  const alert = document.querySelector('.alert');
  alert.classList.remove('hidden');
  setTimeout(() => {
    alert.classList.add('hidden');
  }, 1500);
}
function handleCopy() {
  const textToCopy = document.querySelector('.result-text div span');
  navigator.clipboard.writeText(textToCopy.textContent);
  showCopyAlert();
}

encryptBtn.addEventListener('click', () => handleClick('encrypt'));
decryptBtn.addEventListener('click', () => handleClick('decrypt'));
