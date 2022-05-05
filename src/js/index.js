import '../assets/css/style.css';
import ContainerTemplateCreator from './modules/containersTemplate';
import KeysCreator from './modules/keysCreator';
import languageAndCapitalaizeSwitch from './modules/languageAndCapitalaizeSwitch';

const data = require('./data/keysData.json');

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'ru');
}

let currentLanguage = localStorage.getItem('lang');

ContainerTemplateCreator();

new KeysCreator(document.querySelector('.keyboard'), data, currentLanguage).render();

const textInput = document.querySelector('.text-input');
const keyboard = document.querySelector('.keyboard');
const listOfKeys = document.querySelectorAll('.key');
let capsState = false;

const activeListener = (e, keyState) => {
  textInput.focus();
  const code = e.code;
  const container = document.querySelector(`[data-event_code = ${code}]`);

  if (!container) {
    return;
  }

  if (e.ctrlKey || e.altKey || e.shiftKey) {
    container.classList.add('active');
    return;
  }

  if (keyState && container.innerHTML !== 'capslock') {
    container.classList.add('active');
  }

  if (container.dataset.is_uniq === 'false') {
    // ctrl alt + any key default ????
    e.preventDefault();
    textInput.setRangeText(container.innerHTML, textInput.selectionStart, textInput.selectionEnd);
    textInput.setSelectionRange(textInput.selectionStart + 1, textInput.selectionStart + 1);
  }

  if (container.innerHTML === 'tab') {
    e.preventDefault();
    textInput.value += '   ';
  }
};

document.addEventListener('keydown', (e) => activeListener(e, true));

document.addEventListener('keyup', (e) => {
  const code = e.code;
  const container = document.querySelector(`[data-event_code = ${code}]`);
  if (!container) {
    return;
  }
  container.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.altKey) {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  }

  languageAndCapitalaizeSwitch(e, listOfKeys, currentLanguage, capsState);

  if (e.code === 'CapsLock') {
    capsState = !capsState;
  }
});

// console.log(textInput.selectionStart);
// if (container.innerHTML === '←') {
//   e.preventDefault();
//   textInput.setSelectionRange(selectionPos - 1, selectionPos - 1);
//   selectionPos -= 1;
// }

// let selectionPos = 0;

// textInput.addEventListener('click', () => {
//   selectionPos = textInput.selectionStart;
// });
