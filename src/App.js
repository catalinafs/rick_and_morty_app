import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Header from "./components/Header";

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
      <Header/>
      <Layout>
        {state.map((personaje) => {
          const {id,name,status,species,image, gender, origin} = personaje
          console.log(origin)
          return (
            <div className="card">
              <div className="image">
              <img src={image} className='characterImage' alt='character image' loading="lazy" />
              </div>
              <div className="info">
              {/* <h4>{`ID: ${id}`}</h4> */}
              <h3>{name}</h3>
              <h3>{`Status: ${status}`}</h3>
              <h3>{`Species: ${species}`}</h3>
              <h3>{`Gender: ${gender}`}</h3>
              {/* <h3>{`Origin: ${origin.name}`}</h3> */}
              </div>
            </div>
          )
        })}
      </Layout>
    </div>
  );
}

export default App;