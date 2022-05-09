const ContainerTemplateCreator = () => {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.classList.add('container');
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  const textArea = document.createElement('textarea');
  textArea.cols = '100';
  textArea.rows = '15';
  textArea.autofocus = true;
  textArea.classList.add('text-input');
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  const footer = document.createElement('footer');
  const OSdescr = document.createElement('span');
  OSdescr.innerHTML = 'The keyboard was created in Windows';
  const languageSwitch = document.createElement('span');
  languageSwitch.innerHTML = 'Keyboard shortcut to switch language: SHIFT(left) + ALT(left)';
  footer.appendChild(OSdescr);
  footer.appendChild(languageSwitch);
  wrapper.appendChild(textArea);
  wrapper.appendChild(keyboard);
  wrapper.appendChild(footer);
  container.appendChild(wrapper);
  body.appendChild(container);
};

export default ContainerTemplateCreator;
