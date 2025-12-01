import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [pokemonList, setPokemonList] = useState([]);

  //  useEffect(() => {
  //    const getData = async () => {
  //      const res = await fetch("http://localhost:1337/api/pokemons/")
  //      const data = await res.json()
  //      console.log('ressssssss', res)
  //      setPokemonList(data.data);
  //    }
  //    getData();
  //  }, [])

   const randomNumber = Math.floor(Math.random() * 151) + 1;
   console.log('randomNumber', randomNumber);

  return(
    <div className="container-app">
      <h1>
        random number: {randomNumber}
      </h1>
    </div>
  )
}

export default App
