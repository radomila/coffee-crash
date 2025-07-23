import { CardList } from './components/CardList.tsx';
import { Header } from './components/Header.tsx';

function App() {
  return (
    <div className="min-h-screen grid place-items-center bg-no-repeat bg-[url(./images/bg-cafe-sm.jpg)] md:bg-[url(./images/bg-cafe.jpg)] lg:bg-[url(./images/bg-cafe-lg.jpg)] bg-position-[center_top]">
      <div className="grid gap-10 bg-background-secondary px-[2rem] lg:px-[4rem] xl:px-[8rem] py-20 rounded-xl my-[5rem] md:my-[10rem] lg:my-[15rem] mx-3">
        <Header />
        <CardList />
      </div>
    </div>
  );
}

export default App;
