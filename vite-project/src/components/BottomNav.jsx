import { Link, useLocation } from 'react-router-dom';

export default function BottomNav() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white shadow-inner p-2 flex justify-around text-sm">
      <Link
        to="/"
        className={`px-4 py-1 rounded ${isActive('/') ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
      >
        🏠 Home
      </Link>
      <Link
        to="/betslip"
        className={`px-4 py-1 rounded ${isActive('/betslip') ? 'bg-blue-600 text-white' : 'text-gray-700'}`}
      >
        🧾 Bet Slip
      </Link>
    </nav>
  );
}
