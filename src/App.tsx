import { CardList } from './UI components/Card/CardList.tsx';
import { Header } from './UI components/Header/Header.tsx';
import { Layout } from './UI components/Layout.tsx';

function App() {
  return (
    <Layout>
      <Header />
      <CardList />
    </Layout>
  );
}

export default App;
