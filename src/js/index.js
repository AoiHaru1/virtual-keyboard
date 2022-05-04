import '../assets/css/style.css';
import ContainerTemplateCreator from './modules/containersTemplate';
import KeysCreator from './modules/keysCreator';
import languageAndCapitalaizeSwitch from './modules/languageAndCapitalaizeSwitch';

const data = require('./data/keysData.json');

ContainerTemplateCreator();

new KeysCreator(document.querySelector('.keyboard'), data).render();

const textInput = document.querySelector('.text-input');
const keyboard = document.querySelector('.keyboard');
const listOfKeys = document.querySelectorAll('.key');
let currentLanguage = 'ru';
let capsState = false;

const activeListener = (e, keyState) => {
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
};

document.addEventListener('keydown', (e) => activeListener(e, true));

document.addEventListener('keyup', (e) => activeListener(e, false));

document.addEventListener('keydown', (e) => {
  e.preventDefault();
  if (e.shiftKey && e.altKey) {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  }

  languageAndCapitalaizeSwitch(e, listOfKeys, currentLanguage, capsState);

  if (e.code === 'CapsLock') {
    capsState = !capsState;
  }
});

// console.log(textInput.selectionStart);
