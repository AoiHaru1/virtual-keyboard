const activeListener = (e, keyState, textArea) => {
  const textInput = textArea;
  textInput.focus();
  const code = e.code;
  const container = document.querySelector(`[data-event_code = ${code}]`);

  if (!container) {
    return;
  }

  // e.shiftKey???
  if (e.ctrlKey || e.altKey) {
    container.classList.add('active');
    return;
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
