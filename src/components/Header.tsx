import { Navbar } from './Navbar.tsx';

export function Header() {
  return(
    <div className="flex justify-between items-center px-3 py-5">
      <div>Coffee Crash</div>
      <Navbar />
    </div>
  )
}