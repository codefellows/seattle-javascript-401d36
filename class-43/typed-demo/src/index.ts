import VendingMachine from './lib/vending-machine';
import app from './lib/app';

function addNumbers(a: number, b: number): number {
  return a + b;
}

// multi property variables need to be handled in a special way.

interface Greeting {
  text: string;
}

function logger(greeting: Greeting): void {
  console.log(greeting.text);
  return;
}

// console.log(addNumbers(2, 3));
// logger({ text: 'hello world' });

// const machine = new VendingMachine({ name: 'my sensor' }, { name: 'my inventory' });

app.start(3000);