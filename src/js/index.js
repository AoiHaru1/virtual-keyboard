import '../assets/css/style.css';
import ContainerTemplateCreator from './modules/containersTemplate';
import KeysCreator from './modules/keysCreator';
import languageAndCapitalaizeSwitch from './modules/languageAndCapitalaizeSwitch';
import activeListener from './modules/physic-keyboard-listener';

const data = require('./data/keysData.json');

if (!localStorage.getItem('lang')) {
  localStorage.setItem('lang', 'ru');
}

let currentLanguage = localStorage.getItem('lang');

ContainerTemplateCreator();

new KeysCreator(document.querySelector('.keyboard'), data, currentLanguage).render();

const textInput = document.querySelector('.text-input');
const listOfKeys = document.querySelectorAll('.key');
let capsState = false;

document.addEventListener('keydown', (e) => activeListener(e, true, textInput));

document.addEventListener('keyup', (e) => {
  const code = e.code;
  const container = document.querySelector(`[data-event_code = ${code}]`);
  if (!container) return;
  container.classList.remove('active');
});

document.addEventListener('keydown', (e) => {
  if (e.code === 'CapsLock') {
    capsState = !capsState;
  }

  if (e.shiftKey && e.altKey) {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  }

  languageAndCapitalaizeSwitch(e, listOfKeys, currentLanguage, capsState);
});

document.addEventListener('keydown', (e) => {
  if (e.shiftKey) {
    if (currentLanguage === 'ru' && !capsState) {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.ru_upper;
      });
    }

    if (currentLanguage === 'ru' && capsState) {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.ru_lower;
      });
      listOfKeys.forEach(x => {
        const item = x;
        if (item.classList.contains('caps-inactive-ru')) {
          item.innerHTML = x.dataset.ru_upper;
        }
      });
    }

    if (currentLanguage === 'en' && !capsState) {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.en_upper;
      });
    }

    if (currentLanguage === 'en' && capsState) {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.en_lower;
      });
      listOfKeys.forEach(x => {
        const item = x;
        if (item.classList.contains('caps-inactive-en')) {
          item.innerHTML = x.dataset.en_upper;
        }
      });
    }
  }
});

document.addEventListener('keyup', (e) => {
  if (e.code === 'ShiftRight' || e.code === 'ShiftLeft') {
    if (currentLanguage === 'ru' && !capsState) {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.ru_lower;
      });
    }
    if (currentLanguage === 'ru' && capsState) {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.ru_upper;
      });
      listOfKeys.forEach(x => {
        const item = x;
        if (item.classList.contains('caps-inactive-ru')) {
          item.innerHTML = x.dataset.ru_lower;
        }
      });
    }

    if (currentLanguage === 'en' && !capsState) {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.en_lower;
      });
    }
    if (currentLanguage === 'en' && capsState) {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.en_upper;
      });
      listOfKeys.forEach(x => {
        const item = x;
        if (item.classList.contains('caps-inactive-en')) {
          item.innerHTML = x.dataset.en_lower;
        }
      });
    }
  }
});
