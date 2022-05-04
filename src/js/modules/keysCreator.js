import setDataAttribute from "./dataAttributeSetter";

// implementaion of key container creation
class KeysCreator {
  constructor(parent, list, lang) {
    this.parent = parent;
    this.list = list;
    this.lang = lang;
  }

  keyContainerCreator(item) {
    const {
      ru, en, tagClass, uniq, eventCode
    } = item;
    const keyContainer = document.createElement('div');
    setDataAttribute(keyContainer, [ru, en, tagClass, uniq, eventCode]);
    return keyContainer;
  }

  render() {
    this.list.forEach(row => {
      const keyRow = document.createElement('div');
      keyRow.classList.add('key-row');
      row.forEach(item => {
        const content = this.keyContainerCreator(item);
        keyRow.appendChild(content);
        if (this.lang === 'ru') {
          content.innerHTML = content.dataset.ru_lower;
        } else {
          content.innerHTML = content.dataset.en_lower;
        }
      });
      this.parent.appendChild(keyRow);
    });
  }
}

export default KeysCreator;
