import '../assets/css/style.css';
import ContainerTemplateCreator from './modules/containersTemplate';
import KeysCreator from './modules/keysCreator';
import languageAndCapitalaizeSwitch from './modules/languageAndCapitalaizeSwitch';
import activeListener from './modules/physic-keyboard-listener';
import shiftSwitch from './modules/shiftSwitch';

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

  languageAndCapitalaizeSwitch(e, listOfKeys, currentLanguage, capsState, false);
});

document.addEventListener('keydown', (e) => {
  shiftSwitch(e, true, listOfKeys, currentLanguage, capsState, false);
});

document.addEventListener('keyup', (e) => {
  shiftSwitch(e, false, listOfKeys, currentLanguage, capsState, false);
});

// mouse

let mouseShift = false;
const keyboard = document.querySelector('.keyboard');

document.querySelectorAll('.shift').forEach(x => {
  x.addEventListener('click', (e) => {
    mouseShift = !mouseShift;
    if (mouseShift) {
      document.querySelectorAll('.shift').forEach(y => y.classList.remove('active'));
      x.classList.add('active');
    } else {
      document.querySelectorAll('.shift').forEach(y => y.classList.remove('active'));
      x.classList.remove('active');
    }
    shiftSwitch(e, mouseShift, listOfKeys, currentLanguage, capsState, true);
  });
});

document.querySelector('.capslock').addEventListener('click', (e) => {
  capsState = !capsState;

  if (e.shiftKey && e.altKey) {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
  }

  languageAndCapitalaizeSwitch(e, listOfKeys, currentLanguage, capsState, true);
  if (mouseShift) {
    shiftSwitch(e, mouseShift, listOfKeys, currentLanguage, capsState, true);
  }
});

keyboard.addEventListener('click', (e) => {
  textInput.focus();
  if (e.target.dataset.is_uniq === 'false') {
    textInput.setRangeText(e.target.innerHTML, textInput.selectionStart, textInput.selectionEnd);
    textInput.setSelectionRange(textInput.selectionStart + 1, textInput.selectionStart + 1);
  }
  if (mouseShift && e.target.dataset.is_uniq === 'false') {
    mouseShift = !mouseShift;
    shiftSwitch(e, mouseShift, listOfKeys, currentLanguage, capsState, true);
    document.querySelectorAll('.shift').forEach(x => x.classList.remove('active'));
  }
});

document.querySelector('.tab').addEventListener('click', () => {
  textInput.setRangeText('        ', textInput.selectionStart, textInput.selectionEnd);
  textInput.setSelectionRange(textInput.selectionStart + 8, textInput.selectionStart + 8);
});

document.querySelector('.space').addEventListener('click', () => {
  textInput.setRangeText(' ', textInput.selectionStart, textInput.selectionEnd);
  textInput.setSelectionRange(textInput.selectionStart + 8, textInput.selectionStart + 8);
});

document.querySelector('.alt').addEventListener('click', (e) => {
  if (document.querySelector('.shift').classList.contains('active')) {
    currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
    languageAndCapitalaizeSwitch(e, listOfKeys, currentLanguage, capsState, false, true);
    document.querySelector('.shift').classList.remove('active');
    mouseShift = !mouseShift;
  }
});

document.querySelector('.backspace').addEventListener('click', () => {
  if (textInput.selectionStart === 0 && textInput.selectionEnd === 0) {
    return;
  }
  if (textInput.selectionStart !== textInput.selectionEnd) {
    textInput.setRangeText('', textInput.selectionStart, textInput.selectionEnd);
    textInput.setSelectionRange(textInput.selectionStart, textInput.selectionStart);
  } else {
    textInput.setRangeText('', textInput.selectionStart - 1, textInput.selectionEnd);
    textInput.setSelectionRange(textInput.selectionStart, textInput.selectionStart);
  }
});

document.querySelector('.enter').addEventListener('click', () => {
  textInput.setRangeText('\n', textInput.selectionStart, textInput.selectionEnd);
  textInput.setSelectionRange(textInput.selectionStart, textInput.selectionStart);
  document.querySelector('.key-right').click('');
});

document.querySelector('.del').addEventListener('click', () => {
  textInput.setRangeText('', textInput.selectionStart, textInput.selectionEnd + 1);
  textInput.setSelectionRange(textInput.selectionStart, textInput.selectionStart);
});

document.querySelector('.key-left').addEventListener('click', () => {
  if (textInput.selectionStart === 0) {
    if (!document.querySelectorAll('.shift')[0].classList.contains('active')
      && !document.querySelectorAll('.shift')[1].classList.contains('active')) {
      textInput.setSelectionRange(0, 0);
    }
    return;
  }
  if (document.querySelectorAll('.shift')[0].classList.contains('active')
    || document.querySelectorAll('.shift')[1].classList.contains('active')) {
    let start = textInput.selectionEnd;
    textInput.setSelectionRange(textInput.selectionStart - 1, start);
    return;
  }
  textInput.setSelectionRange(textInput.selectionStart - 1, textInput.selectionStart - 1);
});

document.querySelector('.key-down').addEventListener('click', () => {
  if (textInput.selectionStart === textInput.value.length) {
    if (!document.querySelectorAll('.shift')[0].classList.contains('active')
      && !document.querySelectorAll('.shift')[1].classList.contains('active')) {
      textInput.setSelectionRange(textInput.value.length, textInput.value.length);
    }
    return;
  }
  if (document.querySelectorAll('.shift')[0].classList.contains('active')
    || document.querySelectorAll('.shift')[1].classList.contains('active')) {
    textInput.setSelectionRange(textInput.selectionStart, textInput.value.length);
    return;
  }
  textInput.setSelectionRange(textInput.value.length, textInput.value.length);
});

document.querySelector('.key-right').addEventListener('click', () => {
  if (textInput.selectionStart === textInput.value.length) {
    return;
  }
  let start = textInput.selectionStart;
  if (textInput.selectionStart === textInput.value.length) {
    if (!document.querySelectorAll('.shift')[0].classList.contains('active')
      && !document.querySelectorAll('.shift')[1].classList.contains('active')) {
      textInput.setSelectionRange(textInput.value.length, textInput.value.length);
    }
    return;
  }
  if (document.querySelectorAll('.shift')[0].classList.contains('active')
    || document.querySelectorAll('.shift')[1].classList.contains('active')) {
    textInput.setSelectionRange(start, textInput.selectionEnd + 1);
    return;
  }
  textInput.setSelectionRange(textInput.selectionStart + 1, textInput.selectionStart + 1);
});

document.querySelector('.key-up').addEventListener('click', () => {
  if (textInput.selectionStart === 0) {
    if (!document.querySelectorAll('.shift')[0].classList.contains('active')
      && !document.querySelectorAll('.shift')[1].classList.contains('active')) {
      textInput.setSelectionRange(0, 0);
    }
    return;
  }
  if (document.querySelectorAll('.shift')[0].classList.contains('active')
    || document.querySelectorAll('.shift')[1].classList.contains('active')) {
    let start = textInput.selectionEnd;
    textInput.setSelectionRange(0, start);
    return;
  }
  textInput.setSelectionRange(0, 0);
});
