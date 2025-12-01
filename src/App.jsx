import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:1337/api/pokemons');
      const data = await response.json();
      console.log(data);
      setPokemonList(data.results);
      console.log("pokemonList", pokemonList);
    }
    getData();
  }, []); 

  return(
    <div className="container-app">
      <h1>
        Pokemon List
      </h1>
      <div className="pokemon-cards">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <h2>{pokemon.name}</h2>
            <img src={pokemon.sprite} alt={pokemon.name} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
