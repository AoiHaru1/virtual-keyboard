import '../assets/css/style.css';
import ContainerTemplateCreator from './modules/containersTemplate';
import KeysCreator from './modules/keysCreator';

const data = require('./data/keysData.json');

ContainerTemplateCreator();

const keyboard = document.querySelector('.keyboard');

new KeysCreator(keyboard, data).render();
