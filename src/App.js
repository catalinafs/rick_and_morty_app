import React, { useEffect, useState } from "react";
import Layout from "./assets/components/Layout/Layout.jsx";
import Header from "./assets/components/Header/Header.jsx";
import Modal from "./assets/components/Modal/Modal.jsx";
import Rutas from "./assets/components/Rutas/Rutas.jsx";


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
          const {
            name,
            status,
            species,
            image, 
            gender, 
            origin
          } = personaje

          return (
            <div className="card">
              <div className="image">
              <img src={image} className='characterImage' alt='character image' loading="lazy" />
              </div>
              <div className="info">
              <h3 className="Name">{name}</h3>
              <h3>Status: <span>{status}</span></h3>
              <h3>Species: <span>{species}</span></h3>
              <h3>Gender: <span>{gender}</span></h3>
              </div>
            </div>
          )
        })}
      
      </Layout>
    </div>
  );
}


export default App;