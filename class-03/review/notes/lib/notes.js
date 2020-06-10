'use strict';

// David; another es6 class
class Note {
  constructor(obj) {
    this.action = obj.action,
      this.payload = obj.payload,
      this.id = Math.floor(Math.random() * 100) // place holder
  }

  // when are we using this?
  execute(action) {
    const commands = ['a', 'd', 'l'];
    if (commands.includes(action)) {
      this.add(obj);
    }
  }

  add(obj) {
    const note = new Note(obj);
    console.log(note);
  }
}

module.exports = Note;

// Paul helped me get this functioning working better and actually doing its job.