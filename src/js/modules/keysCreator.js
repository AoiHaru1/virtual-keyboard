import setDataAttribute from "./dataAttributeSetter";

// implementaion of key container creation
class KeysCreator {
  constructor(parent, list) {
    this.parent = parent;
    this.list = list;
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
        content.innerHTML = content.dataset.ru_lower;
      });
      this.parent.appendChild(keyRow);
    });
  }
}

export default KeysCreator;
