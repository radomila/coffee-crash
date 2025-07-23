import { Header } from './Header.tsx';
import { CardList } from './CardList.tsx';

export function MainContent() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Header />
      <CardList />
    </div>
  );
}
