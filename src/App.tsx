import './App.css';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { Filter, Layout, Navbar, ListCard } from './components'

function App() {

  PokemonTCG.findCardByID('pl3-1')
    .then(card => {
      console.log(card)
    })

  return (
    <Layout>
      <Navbar />
      <Filter />
      <ListCard />
    </Layout>
  );
}

export default App;
