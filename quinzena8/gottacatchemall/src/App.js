import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PokeCard from './components/PokeCard';

const App = () => {
  const [pokeList, setPokelist] = useState([])
  const [pokeName, setPokeName] = useState("")

  useEffect(() => {axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      useState({ pokeList: response.data.results });
    })
    .catch(err => {
      console.log(err);
    });
  }, []);    
  };

  setPokeName = event => {
    useState({ pokeName: event.target.value });
  }

  return (
    <div className="App">
      <select onChange={this.changePokeName}>
        <option value={""}>Nenhum</option>
        {this.state.pokeList.map(pokemon => {
          return (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          );
        })}
      </select>
      {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
    </div>
  );

export default App;