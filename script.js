const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'second' },
  { id: 3, name: 'curly', slot: 'third' },
  { id: 4, name: 'lucy', slot: 'third', selected: true },
];

const peopleElems = Array.from(document.querySelectorAll('.person'));
peopleElems.forEach((personElem) => {
  personElem.addEventListener('click', (event) => {
    for (let i = 0; i < users.length; i++) {
      console.log(event.target);
      if (event.target.firstChild.innerHTML === users[i].name) {
        users[i].selected = true;
      } else {
        users[i].selected = false;
      }
    }
  });
});
