const setDataAttribute = (container, listOfData) => {
  let uniqCheck = false;
  if (listOfData[3]) {
    uniqCheck = true;
  }
  container.setAttribute('data-ru_lower', `${listOfData[0][0]}`);
  container.setAttribute('data-ru_upper', `${listOfData[0][1]}`);
  container.setAttribute('data-en_lower', `${listOfData[1][0]}`);
  container.setAttribute('data-en_upper', `${listOfData[1][1]}`);
  container.setAttribute('data-event_code', `${listOfData[4]}`);
  container.setAttribute('data-is_uniq', `${uniqCheck}`);
  listOfData[2].split(' ').forEach(x => {
    container.classList.add(x);
  });
};

export default setDataAttribute;
