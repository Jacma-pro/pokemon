import { use, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [pokemonList, setPokemonList] = useState([]);

  console.log("pokemonList", pokemonList);


  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:1337/api/pokemons');
      const data = await response.json();
      console.log("get initial data", data);
      setPokemonList(data.data);
    }
    getData();
  }, []); 

  const handleOnOrTwoTypes = (pokemon) => {
    if (pokemon.type2) {
      return (
        <p>Type 1: {pokemon.type1} | Type 2: {pokemon.type2}</p>
      )
    } else {
      return (
        <p>Type: {pokemon.type1}</p>
      )
    }
  }
    return(
      <div className="container-app">
        <h1>
          Pokemon List
        </h1>
      <div className="pokemon-cards">
        {pokemonList.map((pokemon, index) => (
          <div key={index} className="pokemon-card">
            <div className="top">
              <h2>{pokemon.name}</h2>
              <p>HP: {pokemon.hp}</p> 
              <img src={pokemon.sprite} alt={pokemon.name} />
            </div>
            <div className="bottom">
              {handleOnOrTwoTypes(pokemon)}
              <button
                onClick={() => new Audio(pokemon.cries).play()}>Hear Cries</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
