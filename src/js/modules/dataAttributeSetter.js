const setDataAttribute = (container, listOfData) => {
  // uniq key check
  let uniqCheck = false;
  if (listOfData[3]) {
    uniqCheck = true;
  }
  // add attributes to each key container
  container.setAttribute('data-ru_lower', `${listOfData[0][0]}`);
  container.setAttribute('data-ru_upper', `${listOfData[0][1]}`);
  container.setAttribute('data-en_lower', `${listOfData[1][0]}`);
  container.setAttribute('data-en_upper', `${listOfData[1][1]}`);
  container.setAttribute('data-event_code', `${listOfData[4]}`);
  container.setAttribute('data-is_uniq', `${uniqCheck}`);
  // add classes to each key container
  listOfData[2].split(' ').forEach(x => {
    container.classList.add(x);
  });
};

export default setDataAttribute;
