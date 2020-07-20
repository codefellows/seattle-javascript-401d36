import React, { useState } from 'react';

const Counter = (props) => {

  // let number = 25;
  // const changeNumber = () => {
  //   console.log('something changed');
  //   number += 1;
  // }

  // useState returns a "getter" and a "setter", without any encapsulation regarding "this"
  const [number, changeNumber] = useState(props.number);
  const [name, changeName] = useState(props.name);

  // we have too much control for our getters and setters
  const [state, setState] = useState({ name: props.name, number: props.number }); // this will get reset
  // this will only exist within this function, duplicate code will referenece different state's
  // can't be used in a class component

  console.log(state);
  return (
    <div>
      <button onClick={() => {
        changeNumber(number + 1);
        setState({ number: number + 1 });
      }}>+</button>
      <p >{number}</p>
      <button onClick={() => changeNumber(number - 1)}>-</button>
    </div>
  )
}

export default Counter;