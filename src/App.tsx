import './App.css';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { Filter, Layout, Navbar, ListCard, Slide, Loading } from './components'
import { InitContext } from './store';
import { useContext } from 'react';

function App() {

  const InitDataContext = useContext(InitContext)

  // PokemonTCG.findCardByID('')
  //   .then(card => {
  //     console.log(card)
  //   })

  return (
    <Layout>
      {InitDataContext.loading && <Loading />}
      <Navbar />

      <Filter />
      <ListCard />
      <Slide />
    </Layout>
  );
}

export default App;
