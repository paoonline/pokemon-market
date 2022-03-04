import React from 'react';
import './App.css';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { Layout } from './components'

function App() {

  PokemonTCG.findCardByID('pl3-1')
    .then(card => {
      console.log(card)
    })

  return (
    <Layout>

    </Layout>
  );
}

export default App;
