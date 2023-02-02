import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
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
        {/* <Header loginUser={loginUser} /> */}     
        {/* <Footer /> */}
        {state.map((personaje) => {
          const {id,name,status} = personaje
          return (
            <div>
              <h2>{id}</h2>
              <h2>{name}</h2>
              <h2>{status}</h2>
            </div>
          )
        })}
      </Layout>
    </div>
  );
}

export default App;