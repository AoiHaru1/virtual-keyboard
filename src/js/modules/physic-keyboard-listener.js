const activeListener = (e, keyState, textArea) => {
  const textInput = textArea;
  textInput.focus();
  const code = e.code;
  const container = document.querySelector(`[data-event_code = ${code}]`);

  if (!container) {
    return;
  }

  if (e.ctrlKey) {
    container.classList.add('active');
    return;
  }

  if (e.altKey) {
    e.preventDefault();
  }

  if (keyState && container.innerHTML !== 'capslock') {
    container.classList.add('active');
  }

  if (container.dataset.is_uniq === 'false') {
    e.preventDefault();
    textInput.setRangeText(container.innerHTML, textInput.selectionStart, textInput.selectionEnd);
    textInput.setSelectionRange(textInput.selectionStart + 1, textInput.selectionStart + 1);
  }

  if (container.innerHTML === 'tab') {
    e.preventDefault();
    textInput.setRangeText('        ', textInput.selectionStart, textInput.selectionEnd);
    textInput.setSelectionRange(textInput.selectionStart + 8, textInput.selectionStart + 8);
  }
};

export default activeListener;
