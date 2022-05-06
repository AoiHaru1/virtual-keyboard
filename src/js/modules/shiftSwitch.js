const shiftSwitch = (e, toggle, listOfKeys, currentLanguage, capsState, itsMouse) => {
  if (toggle) {
    if (e.shiftKey || itsMouse) {
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
  } else if (!toggle) {
    if (e.code === 'ShiftRight' || e.code === 'ShiftLeft' || itsMouse) {
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
  }
};

export default shiftSwitch;
