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
      if (event.target.tagName === 'P') {
        if (event.target.innerHTML === users[i].name && !users[i].selected) {
          users[i].selected = true;
          event.target.parentElement.classList.add('selected');
        } else if (
          event.target.innerHTML === users[i].name &&
          users[i].selected
        ) {
          users[i].selected = false;
          event.target.parentElement.classList.remove('selected');
        } else {
          users[i].selected = false;
        }
      } else {
        if (
          event.target.firstElementChild.innerHTML === users[i].name &&
          !users[i].selected
        ) {
          users[i].selected = true;
          event.target.classList.add('selected');
        } else if (
          event.target.firstElementChild.innerHTML === users[i].name &&
          users[i].selected
        ) {
          users[i].selected = false;
          event.target.classList.remove('selected');
        } else {
          users[i].selected = false;
        }
      }
    }
  });
});
