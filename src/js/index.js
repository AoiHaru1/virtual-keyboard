import '../assets/css/style.css';
import ContainerTemplateCreator from './modules/containersTemplate';
import KeysCreator from './modules/keysCreator';

const data = require('./data/keysData.json');

ContainerTemplateCreator();

new KeysCreator(document.querySelector('.keyboard'), data).render();

document.addEventListener('keydown', (e) => {
  const code = e.code;
  const container = document.querySelector(`[data-event_code = ${code}]`);
  if (container) {
    container.style.backgroundColor = 'red';
  }
});

document.addEventListener('keyup', (e) => {
  const code = e.code;
  const container = document.querySelector(`[data-event_code = ${code}]`);
  if (container) {
    container.style.backgroundColor = 'white';
  }
});
