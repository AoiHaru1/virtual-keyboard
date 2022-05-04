import '../assets/css/style.css';
import ContainerTemplateCreator from './modules/containersTemplate';
import KeysCreator from './modules/keysCreator';
import languageAndCapitalaizeSwitch from './modules/languageAndCapitalaizeSwitch';

const data = require('./data/keysData.json');

if (!localStorage.getItem('lang')) {
  console.log(1)
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

  if (keyState && container.innerHTML !== 'capslock') {
    container.classList.add('active');
  }

  if (!keyState) {
    container.classList.remove('active');
  }

  if (container.innerHTML === 'tab') {
    e.preventDefault();
    textInput.focus();
    textInput.value += "   ";
  }
};

document.addEventListener('keydown', (e) => activeListener(e, true));

document.addEventListener('keyup', () => listOfKeys.forEach(x => x.classList.remove('active')));

document.addEventListener('keydown', (e) => {
  if (e.shiftKey && e.altKey) {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  }

  languageAndCapitalaizeSwitch(e, listOfKeys, currentLanguage, capsState);

  if (e.code === 'CapsLock') {
    capsState = !capsState;
  }
});

listOfKeys[14].addEventListener('click', () => {
  textInput.focus();
  textInput.value += "   ";
});

// console.log(textInput.selectionStart);
