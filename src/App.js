import React, { useEffect, useState } from "react";
import Layout from "./assets/components/Layout/Layout.jsx";
import Header from "./assets/components/Header/Header.jsx";

function App() {
  const [state, setState]= useState([])

  const LoginUser = true;

  const url = 'https://rickandmortyapi.com/api/character'
  
  useEffect(() => {
    fetch(url)
    .then(answer => answer.json())
    .then(answerData => {
      setState(answerData.results)
    })
  }, [LoginUser])
  
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
              <h3>{name}</h3>
              <h3>{`Status: ${status}`}</h3>
              <h3>{`Species: ${species}`}</h3>
              <h3>{`Gender: ${gender}`}</h3>
              </div>
            </div>
          )
        })}
      </Layout>
      
    </div>
  );
}

export default App;