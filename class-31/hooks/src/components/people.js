import React, { useState, useEffect } from 'react';

const People = (props) => {

  const [people, setPeople] = useState([]);
  const [name, changeName] = useState('');


  // runs at the end of a components life cycle, clean up.
  useEffect(() => {
    // we just need to return a function
    return () => console.log('component is unmounted');
  });

  // only one initial render
  useEffect(() => {
    console.log('This should execute only once');
  }, []);

  // everytime the component updates, run the following logic
  useEffect(() => {
    // setTimeout(() => {
    console.log('anything has changed');
    // }, 5000);/
  });

  // only when one or more state / prop variables have update
  useEffect(() => {
    console.log('people state has updated');
  }, [people]) // this array takes the state items to check for

  return (
    <div>
      <input value={name} onChange={(e) => changeName(e.target.value)} />
      <button onClick={(e) => setPeople(people.concat(name))} >Submit</button>
      {people.map((person, idx) => <p key={idx}>{person}</p>)}
    </div>
  )
}

export default People;