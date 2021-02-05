const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'Moe', slot: 'second' },
  { id: 2, name: 'Larry', slot: 'second' },
  { id: 3, name: 'Curly', slot: 'second' },
  { id: 4, name: 'Lucy', slot: 'second' },
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

function moveUsers(sourceSlotId, targetSlotId) {
  const sourceSlot = document.querySelector(`#${sourceSlotId}`);
  const targetSlot = document.querySelector(`#${targetSlotId}`);
  for (let i = 0; i < users.length; i++) {
    if (users[i].selected) {
      if (users[i].slot === sourceSlot.id) {
        users[i].slot = targetSlot.id;
        const sourceChildren = [...sourceSlot.children];
        for (let j = 0; j < sourceChildren.length; j++) {
          if ([...sourceChildren[j].classList].includes('selected')) {
            sourceSlot.removeChild(sourceChildren[j]);
            targetSlot.appendChild(sourceChildren[j]);
          }
        }
      }
    }
  }
}

// call placeUsers to initially place the users
placeUsers();

// add event listeners to user elements_____________________

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
  moveUsers('first', 'second');
});

moveRightBtn2.addEventListener('click', () => {
  moveUsers('second', 'third');
});

moveLeftBtn2.addEventListener('click', () => {
  moveUsers('second', 'first');
});

moveLeftBtn3.addEventListener('click', () => {
  moveUsers('third', 'second');
});
