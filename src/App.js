import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";

function App() {
  const [state, setState]= useState([])

  console.log({state})

  const loginUser = true

  const url = 'https://rickandmortyapi.com/api/character'
  
  useEffect(() => {
    fetch(url)
    .then(answer => answer.json())
    .then(answerData => {
      setState(answerData.results)
    })
  }, [loginUser])
  
  return (
    <div className='App'>
      <Layout>
        {state.map((personaje) => {
          const {id,name,status,species,image} = personaje
          console.log(personaje.image)
          return (
            <div className="card">
              <h4>{`ID: ${id}`}</h4>
              <h2>{name}</h2>
              <img src={image} alt='character image' loading="lazy" />
              <h3>{status}</h3>
              <h2>{`Species: ${species}`}</h2>
            </div>
          )
        })}
      </Layout>
    </div>
  );
}

export default App;