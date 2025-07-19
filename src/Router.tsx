import { Routes, Route } from "react-router-dom";
import { IcedCoffees } from './pages/IcedCoffees.tsx';
import { HotCoffees } from './pages/HotCoffees.tsx';
import { Home } from './pages/Home.tsx';
import { Layout } from './components/Layout.tsx';

export function Router() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="hot-coffees" element={<HotCoffees />} />
          <Route path="iced-coffees" element={<IcedCoffees />} />
        </Route>
      </Routes>
  );
}