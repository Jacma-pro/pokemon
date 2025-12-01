import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [pokemonList, setPokemonList] = useState([]);

   useEffect(() => {
     const getData = async () => {
       const res = await fetch("http://localhost:1337/api/pokemons/")
       const data = await res.json()
       console.log('ressssssss', res)
       setPokemonList(data.data);
     }
     getData();
   }, [])

  return(
    <div className="container-app">
      <ul>
        {pokemonList.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
