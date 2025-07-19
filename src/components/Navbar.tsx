import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5 cursor-pointer">
        <li>
          <Link to="/hot-coffees">Hot coffees</Link>
        </li>
        <li>
          <Link to="/iced-coffees">Iced coffees</Link>
        </li>
      </ul>
    </nav>
  )
}