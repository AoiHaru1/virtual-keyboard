// function that creates main containers

const ContainerTemplateCreator = () => {
  const body = document.querySelector('body');
  const container = document.createElement('div');
  container.classList.add('container');
  const wrapper = document.createElement('div');
  wrapper.classList.add('wrapper');
  const textArea = document.createElement('textarea');
  textArea.cols = "100";
  textArea.rows = "15";
  textArea.autofocus = true;
  textArea.classList.add('text-input');
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  wrapper.appendChild(textArea);
  wrapper.appendChild(keyboard);
  container.appendChild(wrapper);
  body.appendChild(container);
};

export default ContainerTemplateCreator;
