const slots = ['first', 'second', 'third'];

const users = [
  { id: 1, name: 'moe', slot: 'first' },
  { id: 2, name: 'larry', slot: 'first' },
  { id: 3, name: 'curly', slot: 'first' },
  { id: 4, name: 'lucy', slot: 'first', selected: true },
];

const moveLeftBtns = Array.from(
  document.getElementsByClassName('move-left highlight')
);
const moveRightBtns = Array.from(
  document.getElementsByClassName('move-right highlight')
);
let selectedPeople;

/* function for placement of users
  loop through users
  if user.slot equals certain number,
    addChild to that container div in the html

*/
function placeUsers() {
  for (let i = 0; i < users.length; i++) {
    if (users[i].slot === 'first') {
      const firstSlot = document.querySelector('#first');
      const userDiv = document.createElement('div');
      const userText = document.createElement('p');
      userDiv.appendChild(userText);
      userText.innerHTML = users[i].name;
      userDiv.className = 'user';
      firstSlot.appendChild(userDiv);
    } else if (users[i].slot === 'second') {
      const secondSlot = document.querySelector('#second');
      const userDiv = document.createElement('div');
      const userText = document.createElement('p');
      userDiv.appendChild(userText);
      userText.innerHTML = users[i].name;
      userDiv.className = 'user';
      secondSlot.appendChild(userDiv);
    } else if (users[i].slot === 'third') {
      const thirdSlot = document.querySelector('#third');
      const userDiv = document.createElement('div');
      const userText = document.createElement('p');
      userDiv.appendChild(userText);
      userText.innerHTML = users[i].name;
      userDiv.className = 'user';
      thirdSlot.appendChild(userDiv);
    }
  }
  console.log('users placed');
}
// function that toggles the user object's 'selected' value to true or false and toggles the corresponding userElem's className to 'selected'.
function toggleSelected(event) {
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
        event.target.classList.remove('selected');
        users[i].selected = false;
      } else {
        users[i].selected = false;
      }
    }
  }
}

// function that loads the game and makes use of helper functions
function loadGame() {
  placeUsers();
  console.log('game loaded');
}

loadGame();

// function that changes the user object's 'slot' value when the right button is clicked.
function moveSelectedUsersRight(users) {
  const firstSlot = document.querySelector('#first');
  const secondSlot = document.querySelector('#second');
  const thirdSlot = document.querySelector('#third');
  for (let i = 0; i < users.length; i++) {
    if (users[i].selected) {
      if (users[i].slot === 'first') {
        users[i].slot = 'second';
        const thirdChildren = [...firstSlot.children];
        for (let j = 0; j < thirdChildren.length; j++) {
          if ([...thirdChildren[j].classList].includes('selected')) {
            firstSlot.removeChild(thirdChildren[j]);
            secondSlot.appendChild(thirdChildren[j]);
          }
        }
      } else if (users[i].slot === 'second') {
        users[i].slot = 'third';
        const secondChildren = [...secondSlot.children];
        for (let j = 0; j < secondChildren.length; j++) {
          if ([...secondChildren[j].classList].includes('selected')) {
            console.log('match');
            secondSlot.removeChild(secondChildren[j]);
            thirdSlot.appendChild(secondChildren[j]);
          }
        }
      }
    }
  }
  console.log(users);
}

function moveSelectedUsersLeft(users) {
  const firstSlot = document.querySelector('#first');
  const secondSlot = document.querySelector('#second');
  const thirdSlot = document.querySelector('#third');

  for (let i = 0; i < users.length; i++) {
    if (users[i].selected) {
      if (users[i].slot === 'third') {
        users[i].slot = 'second';
        const thirdChildren = [...thirdSlot.children];
        for (let j = 0; j < thirdChildren.length; j++) {
          if ([...thirdChildren[j].classList].includes('selected')) {
            thirdSlot.removeChild(thirdChildren[j]);
            secondSlot.appendChild(thirdChildren[j]);
          }
        }
      } else if (users[i].slot === 'second') {
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
  }
}

function clearPreviousUsers() {
  const firstSlot = document.querySelector('#first');
  while (firstSlot.children.length) {
    firstSlot.removeChild(firstSlot.lastChild);
  }
  const secondSlot = document.querySelector('#second');
  while (secondSlot.children.length) {
    secondSlot.removeChild(secondSlot.lastChild);
  }
  const thirdSlot = document.querySelector('#third');
  while (thirdSlot.children.length) {
    thirdSlot.removeChild(thirdSlot.lastChild);
  }
}

const userElems = Array.from(document.querySelectorAll('.user'));

// add event listeners to userElems
userElems.forEach((userElem) => {
  userElem.addEventListener('click', (event) => {
    toggleSelected(event);
    selectedPeople = Array.from(document.querySelectorAll('.selected'));
    console.log(selectedPeople);
  });
});

moveLeftBtns.forEach((button) => {
  button.addEventListener('click', (event) => {
    moveSelectedUsersLeft(users);
  });
});

moveRightBtns.forEach((button) => {
  button.addEventListener('click', (event) => {
    moveSelectedUsersRight(users);
  });
});
