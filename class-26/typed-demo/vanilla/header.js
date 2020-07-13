'use strict';

let headerState = {
  title: 'Word Form',
};

let header = document.getElementById('header-words');
// what should happen with the button
header.addEventListener('click', updateHeader);

function updateHeader(e) {
  e.preventDefault();
  headerState.title = state.words;
  renderHeader();
}

function renderHeader() {
  header.textContent = headerState.title;
}

renderHeader();