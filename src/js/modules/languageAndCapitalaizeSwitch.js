const languageAndCapitalaizeSwitch = (e, listOfKeys, currentLang, capsState, itsMouse) => {
  if (e.code === 'CapsLock' || itsMouse) {
    listOfKeys[29].classList.toggle('caps-active');
    listOfKeys.forEach(x => {
      if (currentLang === 'ru' && !x.classList.contains('caps-inactive-ru')) {
        if (capsState) {
          const item = x;
          item.innerHTML = x.dataset.ru_upper;
        } else {
          const item = x;
          item.innerHTML = x.dataset.ru_lower;
        }
      } else if (currentLang === 'en' && !x.classList.contains('caps-inactive-en')) {
        if (capsState) {
          const item = x;
          item.innerHTML = x.dataset.en_upper;
        } else {
          const item = x;
          item.innerHTML = x.dataset.en_lower;
        }
      }
    });
  }

  if (e.shiftKey && e.altKey) {
    if (currentLang === 'en') {
      localStorage.setItem('lang', 'en');
    }
    if (currentLang === 'ru') {
      localStorage.setItem('lang', 'ru');
    }

    if (capsState && currentLang === 'en') {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.en_lower;
      });
      listOfKeys.forEach(x => {
        const item = x;
        if (!x.classList.contains('caps-inactive-en')) {
          item.innerHTML = x.dataset.en_upper;
        }
      });
    }
    if (!capsState && currentLang === 'en') {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.en_lower;
      });
    }
    if (capsState && currentLang === 'ru') {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.ru_lower;
      });
      listOfKeys.forEach(x => {
        const item = x;
        if (!x.classList.contains('caps-inactive-ru')) {
          item.innerHTML = x.dataset.ru_upper;
        }
      });
    }
    if (!capsState && currentLang === 'ru') {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.ru_lower;
      });
    }
  }
};

export default languageAndCapitalaizeSwitch;
