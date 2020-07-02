const chat = require('./chat.js');
jest.spyOn(console, 'log');

const socket = {
  emit: () => {
    return {
      payload: 'some message',
    }
  }
}

describe('testing chat client', () => {
  it('should console.log a payload', () => {
    chat.handleMessage(socket, 'here is a message');
    expect(console.log).toHaveBeenCalled();
  });
});