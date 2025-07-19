import { Outlet } from 'react-router-dom';
import { Header } from './Header.tsx';

export function Layout() {
  return (
    <div className="flex flex-col gap-2 w-full h-full">
      <Header />
      <Outlet />
    </div>
  )
}