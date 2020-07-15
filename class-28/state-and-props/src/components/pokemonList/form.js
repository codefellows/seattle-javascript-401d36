import React from 'react';

class Form extends React.Component {

  handleSubmit = async (e) => {
    e.preventDefault();

    let data = await fetch('https://pokeapi.co/api/v2/pokemon');
    let json = await data.json();

    let count = json.count;

    let pokemon = json.results.reduce((list, pokemon) => {
      list[pokemon.name] = pokemon.url;
      return list;
    }, {});

    this.props.handler(count, pokemon);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>{this.props.prompt}</button>
      </form>
    )
  }
}

export default Form;