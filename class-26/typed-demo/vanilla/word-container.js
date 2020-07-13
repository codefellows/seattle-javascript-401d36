'use strict';

// components should have some notoin of state
let state = {};

let button = document.getElementById('add-words');
// what should happen with the button
button.addEventListener('click', function (event) {
  event.preventDefault();
  // state.words
  renderWords();
});

let input = document.getElementById('words-input');
input.addEventListener('change', function (event) {
  state.words = event.target.value;
  console.log(state);
});

function renderWords() {
  document.getElementById('words').textContent = state.words;
}

function init() {
  state.words = 'nothing yet';
  renderWords();
}

init();

