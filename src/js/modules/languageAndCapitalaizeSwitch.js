const languageAndCapitalaizeSwitch = (e, listOfKeys, currentLang, capsState) => {
  if (e.code === 'CapsLock') {
    listOfKeys[28].classList.toggle('caps-active');
    listOfKeys.forEach(x => {
      if (currentLang === 'ru') {
        if (!capsState) {
          const item = x;
          item.innerHTML = x.dataset.ru_upper;
        } else {
          const item = x;
          item.innerHTML = x.dataset.ru_lower;
        }
      } else if (currentLang === 'en') {
        if (!capsState) {
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
    if (capsState && currentLang === 'en') {
      listOfKeys.forEach(x => {
        const item = x;
        item.innerHTML = x.dataset.en_upper;
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
        item.innerHTML = x.dataset.ru_upper;
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
