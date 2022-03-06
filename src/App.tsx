import './App.css';
import { Filter, Layout, Navbar, ListCard, Slide, Loading, Pagination } from './components'
import { InitContext } from './store';
import { useContext } from 'react';

function App() {
  const InitDataContext = useContext(InitContext)

  return (
    <Layout>
      {InitDataContext.loading && <Loading />}
      <Navbar />

      <Filter />
      <ListCard />
      <Slide />
      <Pagination />
    </Layout>
  );
}

export default App;
