import './App.css';
import { PokemonTCG } from 'pokemon-tcg-sdk-typescript'
import { Filter, Layout, Navbar, ListCard, Slide } from './components'
import { SlideProvider } from './store/SlideContext';

function App() {

  PokemonTCG.findCardByID('pl3-1')
    .then(card => {
      console.log(card)
    })

  return (
    <Layout>
      <SlideProvider>
        <Navbar />
        <Filter />
        <ListCard />
        <Slide />
      </SlideProvider>
    </Layout>
  );
}

export default App;
