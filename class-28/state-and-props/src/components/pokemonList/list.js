import React from 'react';

// let's you define simple components as functions not necessarily classes
const List = (props) => {

  if (!Object.keys(props.pokemon).length) {

    return (
      <p>Please Give me pokemon</p>
    )

  } else {

    return (
      <div>
        <ul>
          {Object.keys(props.pokemon).map((pokemon, idx) => {
            return (
              <li key={idx}>
                <a href={props.pokemon[pokemon]}>{pokemon}</a>
              </li>
            )
          })}
        </ul>
      </div>
    )

  }
}

export default List;