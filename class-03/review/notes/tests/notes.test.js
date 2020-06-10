'use strict';

const Note = require('../lib/notes');

jest.spyOn(global.console, 'log');
jest.spyOn(global.console, 'error');

//assertions 
describe('Testing the notes module', () => {
  it('should show proof of life using console log function', () => {
    const testNote = new Note({action: 'add', payload: 'happy test'})
    // valid command and note data shows console log output
    expect(testNote.action).toBe('add');
    expect(testNote.payload).toBe('happy test');
  });
});

// TODO: no command entered gets nothing logged in console 
// check the jest docs
// expect().not