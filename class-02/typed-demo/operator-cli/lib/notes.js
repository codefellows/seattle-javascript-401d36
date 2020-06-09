'use strict';

function Note() { }

Note.prototype.execute = function (object) {
  if (object.action == 'add') {
    this.add(object.payload);
  }
}

Note.prototype.add = function (payload) {
  let note = {
    text: payload,
    id: Math.floor(Math.random() * 100),
  }
  console.log(note);
}

module.exports = Note;