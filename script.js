const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'Moe', slot: 'second' },
  { id: 2, name: 'Larry', slot: 'second' },
  { id: 3, name: 'Curly', slot: 'first' },
  { id: 4, name: 'Lucy', slot: 'first' },
];

function createUser(user) {
  const whichSlot = document.querySelector(`#${user.slot}`);
  const userBtn = document.createElement('button');
  userBtn.innerHTML = user.name;
  userBtn.className = 'user';
  whichSlot.appendChild(userBtn);
}

function placeUsers() {
  for (let i = 0; i < users.length; i++) {
    createUser(users[i]);
  }
}

function toggleSelected(event) {
  for (let i = 0; i < users.length; i++) {
    if (event.target.innerHTML === users[i].name) {
      if (!users[i].selected) {
        users[i].selected = true;
        event.target.classList.add('selected');
      } else if (users[i].selected) {
        event.target.classList.remove('selected');
        users[i].selected = false;
      }
    }
  }
}

placeUsers();

// add event listeners to user elements

const userElems = Array.from(document.querySelectorAll('.user'));

userElems.forEach((userElem) => {
  userElem.addEventListener('click', (event) => {
    toggleSelected(event);
  });
});

// add event listeners for the 'move right' and 'move left' buttons

const moveRightBtn1 = document.getElementById('move-right-1');
const moveRightBtn2 = document.getElementById('move-right-2');
const moveLeftBtn2 = document.getElementById('move-left-2');
const moveLeftBtn3 = document.getElementById('move-left-3');

moveRightBtn1.addEventListener('click', () => {
  const firstSlot = document.querySelector('#first');
  const secondSlot = document.querySelector('#second');
  for (let i = 0; i < users.length; i++) {
    if (users[i].selected) {
      if (users[i].slot === 'first') {
        users[i].slot = 'second';
        const firstChildren = [...firstSlot.children];
        for (let j = 0; j < firstChildren.length; j++) {
          if ([...firstChildren[j].classList].includes('selected')) {
            firstSlot.removeChild(firstChildren[j]);
            secondSlot.appendChild(firstChildren[j]);
          }
        }
      }
    }
  }
});

moveRightBtn2.addEventListener('click', () => {
  const thirdSlot = document.querySelector('#third');
  const secondSlot = document.querySelector('#second');
  for (let i = 0; i < users.length; i++) {
    if (users[i].selected) {
      if (users[i].slot === 'second') {
        users[i].slot = 'third';
        const secondChildren = [...secondSlot.children];
        for (let j = 0; j < secondChildren.length; j++) {
          if ([...secondChildren[j].classList].includes('selected')) {
            secondSlot.removeChild(secondChildren[j]);
            thirdSlot.appendChild(secondChildren[j]);
          }
        }
      }
    }
  }
});

moveLeftBtn2.addEventListener('click', () => {
  const firstSlot = document.querySelector('#first');
  const secondSlot = document.querySelector('#second');
  for (let i = 0; i < users.length; i++) {
    if (users[i].slot === 'second' && users[i].selected) {
      users[i].slot = 'first';
      const secondChildren = [...secondSlot.children];
      for (let j = 0; j < secondChildren.length; j++) {
        if ([...secondChildren[j].classList].includes('selected')) {
          console.log('match');
          secondSlot.removeChild(secondChildren[j]);
          firstSlot.appendChild(secondChildren[j]);
        }
      }
    }
  }
});

moveLeftBtn3.addEventListener('click', () => {
  const thirdSlot = document.querySelector('#third');
  const secondSlot = document.querySelector('#second');
  for (let i = 0; i < users.length; i++) {
    if (users[i].slot === 'third' && users[i].selected) {
      users[i].slot = 'second';
      const thirdChildren = [...thirdSlot.children];
      for (let j = 0; j < thirdChildren.length; j++) {
        if ([...thirdChildren[j].classList].includes('selected')) {
          console.log('match');
          thirdSlot.removeChild(thirdChildren[j]);
          secondSlot.appendChild(thirdChildren[j]);
        }
      }
    }
  }
});
